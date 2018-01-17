var fs = require('fs');
var log = require(__base + 'util/log.js');
var shared = require(__base + 'util/shared');
var CreatureLevelStatTable = require(__base + 'data/creature/creature_level_stat_table');
var CreatureStarStatTable = require(__base + 'data/creature/creature_star_grade_stat_table');
var ItemTable = require(__base + 'data/item/item_table');
var EquipItemTable = require(__base + 'data/equip/equip_item_table');
var EquipUpgradeStatTable = require(__base + 'data/equip/equip_upgrade_stat_table');
var EquipItemStarTable = require(__base + 'data/equip/equip_item_star_table');
var constantTable = require(__base + 'data/constant/constant_table');

module.exports = new function () {
    this.GetHeroStat = function (heroInfo, statType) {
        // 먼저 영웅의 레벨에 해당하는 스탯을 구한다.
        var values = this.GetHeroStats(heroInfo, [statType]);
        var value = values ? values[statType] : 0;
        return value ? Number(value) : 0;
    }
    
    this.GetHeroStats = function (heroInfo, statTypes) {
        var values = {};
        
        var heroIndex = heroInfo.HeroIndex;
        var star = heroInfo.Star;
        var level = heroInfo.Level;

        // 먼저 영웅의 스탯을 구한다.
        var levelStatData = CreatureLevelStatTable.GetStatData(heroIndex, level);
        if (levelStatData == null) {
            log.error('CreatureLevelStat not exist : heroIndex=' + heroIndex + ' level=' + level);
            return null;
        }
        
        // 레벨, 스타에 따른 스탯보정을 한다.
        var starStatData = CreatureStarStatTable.GetStatData(heroIndex, star);
        if (starStatData == null) {
            log.error('starStatData is null : heroIndex=' + heroIndex + ' star=' + star);
            return null;
        }
        var levelStatFactor = starStatData['LevelStatFactor'];
        
        for (var typeIndex = 0; typeIndex < statTypes.length; typeIndex++) {            
            var statType = statTypes[typeIndex];
            var value = (levelStatData && levelStatData[statType]) ? Number(levelStatData[statType]) : 0;
            
            if (starStatData) {
                // 레벨에 해당하는 스탯에 별등급에 해당하는 상수를 곱한다.
                if (value > 0 && levelStatFactor) {
                    value = Math.floor(value * Number(levelStatFactor) / 1000);
                }
                
                // (별, 등급) 에 해당하는 값이 있다면 더한다.
                if (starStatData[statType]) {
                    value = Math.floor(value + Number(starStatData[statType]));
                }
            }

            values[statType] = value;
        }

        return values;
    }
    
    // 장비아이템에 부여된 스탯을 얻는다.
    this.GetEquipItemStat = function (equipItemData, equipUpgradeStatData, equipStarData, statType) {
        var values = this.GetEquipItemStats(equipItemData, equipUpgradeStatData, equipStarData, [statType]);
        var value = values ? values[statType] : 0;
        return value ? Number(value) : 0;
    }
    
    // 장비아이템에 부여된 스탯을 얻는다.
    this.GetEquipItemStats = function (equipItemData, equipUpgradeStatData, equipStarData, statTypes) {
        if (!equipItemData) {
            return null;
        }
        
        var values = {};
        for (var typeIndex = 0; typeIndex < statTypes.length; typeIndex++) {
            var statType = statTypes[typeIndex];
            var value = 0;                     
            if (equipItemData[statType]) {                
                // 장비의 기본스탯을 얻는다.
                value = Math.floor(Number(equipItemData[statType]));
                
                var starFactor = 0;
                var upgradeFactor = 0;

                if (equipStarData) {
                    starFactor = equipStarData.StatFactor ? Number(equipStarData.StatFactor) : 0;
                }

                // 강화배율을 적용한다.
                if (equipUpgradeStatData && equipUpgradeStatData[statType]) {
                    upgradeFactor = Number(equipUpgradeStatData[statType]);
                }

                value = Math.floor(value * upgradeFactor * starFactor / 1000 / 1000);
            }
            values[statType] = value;
        }        
        return values;
    }
    
    this.FightingPowerStats = [
        'PhysicalAttack', 'MagicalAttack',
        'PhysicalCriticalChance', 'MagicalCriticalChance',
        'PhysicalCriticalPower', 'MagicalCriticalPower',
        'PhysicalPiercePower', 'MagicalPiercePower',        
        'AttackSpeed', 'HealPower', 'RecoverPower', 'HpStealPower', 'MaxHp',
        'PhysicalDefense', 'PhysicalDodgeChance', 'PhysicalBlockChance', 'PhysicalBlockPower', 'PhysicalToughness', 'PhysicalWeakness',
        'MagicalDefense', 'MagicalDodgeChance', 'MagicalBlockChance', 'MagicalBlockPower', 'MagicalToughness', 'MagicalWeakness',
    ];
    
    this.statCalculatorCode = null;
    this.statCalculatorCodeLoaded = false;
    this.statCalculatorCodePath = __base + '../Shared/Shared/Battle/Stat/StatCalculator.cs';
        
    // 전투력 계산
    this.GetCachedAccountFightingPower = function (accountInfo) {
        var totalFightingPower = 0;
        
        for (var heroIndex in accountInfo.HeroInfos) {
            var heroInfo = accountInfo.HeroInfos[heroIndex];
            if (!heroInfo) {
                continue;
            }
            
            var heroFightingPower = this.GetCachedHeroFightingPower(heroInfo);
            if (heroFightingPower <= 0) {
                // 잘못된 스탯의 영웅이 있다.
                return 0;
            }
            
            totalFightingPower += heroFightingPower;
        }
        
        return totalFightingPower;
    }


    // 해당 영웅의 전투력을 얻는다.
    // (heroInfo 에 EquipItemInfo1 등의 장비정보가 포함된 경우)
    this.GetCachedHeroFightingPower = function (heroInfo) {
        var equipItemInfos = [];
        for (var i = 1; i <= 5; i++) {
            var equipItemInfo = heroInfo['EquipItemInfo' + i];
            if (equipItemInfo) {
                equipItemInfos.push(equipItemInfo);
            }
        }
        
        return this.GetHeroFightingPower(heroInfo, equipItemInfos);
    }

    this.MaxLevelForFp = 200;
    this.levelFpRatioM = null;
    this.InitLevelFpRatioM = function () {
        if (this.levelFpRatioM != null) {
            return;
        }

        var att = constantTable.GetInt('LevelFpAttenuationFactor');
        this.levelFpRatioM = [];
        this.levelFpRatioM[0] = 1000;
        for (var level = 1; level <= this.MaxLevelForFp; level++) {
            this.levelFpRatioM[level] = Math.floor(Number(this.levelFpRatioM[level - 1] * att) / 1000);
        }
    }
    
    // 해당 영웅의 전투력을 얻는다.
    this.GetHeroFightingPower = function (heroInfo, equipItemInfos) {
        var self = this;
        var totalStatValues = this.GetHeroStats(heroInfo, this.FightingPowerStats);
        if (totalStatValues == null) {
            return 0;
        }
        
        // 장비스탯을 더한다.
        if (equipItemInfos) {
            for (var i = 0; i < equipItemInfos.length; i++) {
                var equipItemInfo = equipItemInfos[i];
                if (!equipItemInfo) {
                    continue;
                }
                
                var itemIndex = equipItemInfo.ItemIndex;
                var itemData = ItemTable.GetItemData(itemIndex);
                if (!itemData) {
                    continue;
                }
                
                var equipItemData = EquipItemTable.GetEquipItemData(itemData.Code);
                if (!equipItemData) {
                    continue;
                }
                
                var equipStarData = EquipItemStarTable.GetData(equipItemInfo.Star);
                if (!equipStarData) {
                    continue;
                }
                
                var equipUpgradeStatData = EquipUpgradeStatTable.GetUpgradeStatData(itemData.Grade, equipItemInfo.Level);
                var equipStatValues = this.GetEquipItemStats(equipItemData, equipUpgradeStatData, equipStarData, this.FightingPowerStats);
                if (!equipStatValues) {
                    continue;
                }

                for (var statIndex = 0; statIndex < this.FightingPowerStats.length; statIndex++) {
                    var statType = this.FightingPowerStats[statIndex];
                    totalStatValues[statType] += equipStatValues[statType];
                }
            }
        }
        
        if (this.statCalculatorCodeLoaded == false) {
            this.statCalculatorCodeLoaded = true;

            var fullCode = fs.readFileSync(this.statCalculatorCodePath).toString();
            var keywordBegin = '__SHARED_FIGHTING_POWER_CALCULATION__';
            var keywordEnd = '#endregion';
            var calculatePos = fullCode.indexOf(keywordBegin);
            if (calculatePos >= 0) {
                var endPos = fullCode.indexOf(keywordEnd, calculatePos);
                this.statCalculatorCode = fullCode.substring(calculatePos + keywordBegin.length, endPos);
            }
        }
        
        if (this.statCalculatorCode == null) {
            log.error('statCalculatorCode is null : ' + this.statCalculatorCodePath);
            return 0;
        }
        
        var max = Math.max;
        var pow = Math.pow;
        var floor = Math.floor;
        var sqrt = Math.sqrt;
        var stat = function (statType) {
            if (!totalStatValues) {
                log.error('totalStatValues is null');
                return 0;
            }
            if (!(statType in totalStatValues)) {
                log.error('' + statType + ' is undefined in totalStatValues');
                return 0;
            }            
            return Number(totalStatValues[statType]);
        }
        var StatType = shared.StatType;
        var description = __server.standalone ? '' : null;
        var level = heroInfo.Level ? Number(heroInfo.Level) : 0;
        var levelFpRatioFunc = function (level) {
            self.InitLevelFpRatioM();
            if (level < self.levelFpRatioM.length) {
                return self.levelFpRatioM[level];
            }
            log.error('LevelFpRatio not exist : level=' + level);
            return 0;
        };

        eval(this.statCalculatorCode);
        return fightingPower;
    }
}