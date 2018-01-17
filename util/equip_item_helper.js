// equip_item_helper.js
// 장비 아이템 공통 처리 부분
var ItemTable = require(__base + 'data/item/item_table');
var EquipItemTable = require(__base + 'data/equip/equip_item_table');
var EquipItemGradeTable = require(__base + 'data/equip/equip_item_grade_table');
var EquipOptionGroupTable = require(__base + 'data/equip/equip_option_group_table');
var EquipOptionTable = require(__base + 'data/equip/equip_option_table');
var constantTable = require(__base + 'data/constant/constant_table');
var randomHelper = require(__base + 'util/random_helper');
var log = require(__base + 'util/log');

// 고정, 랜덤 옵션 전부 통틀어서 얻어온다.
function GetEquipOptions(equipItemIndex)
{
    var equip_option_array = [];

    var itemData = ItemTable.GetItemData(equipItemIndex);
    if (!itemData) {
        log.error('Item data not found : itemIndex=' + equipItemIndex);
        return equip_option_array;
    }
    
    var equipItemData = EquipItemTable.GetEquipItemData(itemData.Code);
    if (!equipItemData) {
        log.error('EquipItem data not found : itemIndex=' + equipItemIndex + ' code=' + itemData.Code);
        return equip_option_array;
    }
    
    // 등급에 따른 옵션개수를 계산.
    // 개수만큼 옵션을 생성하자.
    var itemGrade = itemData.Grade;
    var optionCount = EquipItemGradeTable.GetEquipItemOptionCount(itemGrade);    
    for (var optionSlotIndex = 1; optionSlotIndex <= optionCount; optionSlotIndex++) {
        var optionData = GetRandomEquipOptionData(equipItemData);
        if (optionData == null) {
            log.error('Failed to get random option : code=' + equipItemData.EquipCode + ' slotindex=' + optionSlotIndex);
            break;
        }
        
        var optionIndex = optionData.Index;
        var optionStep = 0;
        var maxOptionStep = optionData.OptionValueStep;
        if (maxOptionStep && Number(maxOptionStep) > 0) {
            optionStep = randomHelper.GetRandom(0, Number(maxOptionStep) + 1);
        }
        
        equip_option_array.push({ 'OptionSlotIndex' : optionSlotIndex, 'OptionIndex' : optionIndex, 'OptionStep' : optionStep });
    }
    
    return equip_option_array;
}

function GetRandomEquipOptionData(equipItemData) {
    // 정해진 풀을 사용한다.
    // 비어있다면 전체 옵션풀에서 랜덤하게 선택하게된다.
    var optionIndices = equipItemData.OptionGroupIndex? EquipOptionGroupTable.GetOptionIndices(equipItemData.OptionGroupIndex) : [];
    if (equipItemData.OptionIndex && equipItemData.OptionIndex.length > 0) {
        optionIndices = optionIndices.concat(equipItemData.OptionIndex);
    }
    
    // 옵션풀에서 옵션을 하나 고른다.
    // 옵션풀이 없다면 전체옵션을 대상으로한다.
    var optionData = EquipOptionTable.GetRandomOption(optionIndices);
    return optionData;
}

function GetEquipRuneSlot(equipItemIndex)
{
    var itemData = ItemTable.GetItemData(equipItemIndex);
    if (!itemData) {
        log.error('Item data not found : itemIndex=' + equipItemIndex);
        return;
    }
    
    var equipItemData = EquipItemTable.GetEquipItemData(itemData.Code);
    if (!equipItemData) {
        log.error('EquipItem data not found : itemIndex=' + equipItemIndex + ' code=' + itemData.Code);
        return;
    }
    
    var minRuneCount = equipItemData.MinRuneCount ? Number(equipItemData.MinRuneCount) : 0;
    var maxRuneCount = equipItemData.MaxRuneCount ? Number(equipItemData.MaxRuneCount) : 0;
    var runeSlotCount = randomHelper.GetRandom(minRuneCount, maxRuneCount + 1);
    return runeSlotCount;
}

// 영웅의 장비잠금 슬롯번호를 얻는다.
// 1,2,..
function GetEquipOpenSlotIndex(partIndex) {
    if (!partIndex) {
        return 0;
    }
    
    try {
        partIndex = Number(partIndex);

        // 언락가능한 슬롯들을 구한다.
        var lockedEquipSlotIndices = constantTable.GetConstantData('LockedEquipSlotIndices') ? JSON.parse(constantTable.GetConstantData('LockedEquipSlotIndices')) : [];
        if (lockedEquipSlotIndices == null || lockedEquipSlotIndices.indexOf(partIndex) == -1) {
            return 0;
        }
        
        // 이미 언락되어있는지 확인한다.
        var firstLockedSlotIndex = Number(lockedEquipSlotIndices[0]);
        var openSlotIndex = partIndex - firstLockedSlotIndex + 1;
        if (openSlotIndex <= 0) {
            return 0;
        }
        
        return openSlotIndex;
    }
    catch (e) {
        log.error(e.Stack);
    }
    return 0;
}

module.exports.GetEquipOptions = GetEquipOptions;
module.exports.GetRandomEquipOptionData = GetRandomEquipOptionData;
module.exports.GetEquipRuneSlot = GetEquipRuneSlot;
module.exports.GetEquipOpenSlotIndex = GetEquipOpenSlotIndex;
