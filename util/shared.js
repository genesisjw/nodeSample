AbandonMultiplayReward = {};
AcceptJoinRequest = {};
ApplyForMultiplayReward = {};
ApplyGuildSettingChange = {};
AwakenEquip = {};
B2G_GetHeroInfo = {};
B2G_SetAbuser = {};
B2G_SetCampaignResult = {};
B2G_SetMatchResult = {};
B2M_GetMatchInfo = {};
B2M_Ping = {};
B2M_SaveReplay = {};
BaseCreatureActionRes = {};
BattleEndNot = {};
BattleEnterRes = {};
BattleLoginRes = {};
BattleStartRes = {};
BeginCampaign = {};
BreakEquip = {};
BuyCashShopItem = {};
BuyHero = {};
BuyPayShopItem = {};
BuyShopItem = {};
BuyStamina = {};
CancelMatch = {};
CancelRequestJoinGuild = {};
ChangeAvatarHero = {};
ChangeNick = {};
Cheat = {};
CheckConsume = {};
CheckGuildName = {};
CheckNewMail = {};
CheckPurchase = {};
CompareDbSchema = {};
CompleteScenarioQuest = {};
CompleteTutorial = {};
CreateGuild = {};
DelegateMaster = {};
DestroyGuild = {};
DumpDbSchema = {};
DumpUser = {};
EndCampaign = {};
EnhanceHero = {};
EnterLobby = {};
ExecEquipGacha = {};
ExecIOSPayment = {};
ExtendEquip = {};
ExtendHeroSkill = {};
G2G_DropUser = {};
G2G_RejectFriend = {};
G2M_SyncWaiter = {};
GetAchievements = {};
GetAttendanceReward = {};
GetAwakeMaterialChallenge = {};
GetCertificate = {};
GetDeveloperPayload = {};
GetDOWDungeonInfo = {};
GetFreeEquipGachaInfo = {};
GetGlobalMailList = {};
GetGuildAllMercenaries = {};
GetGuildBasicInfo = {};
GetGuildList = {};
GetJoinRequestedGuilds = {};
GetJoinRequestPlayers = {};
GetKeyDecoder = {};
GetLoginId = {};
GetMailList = {};
GetMailListByPage = {};
GetMatchRank = {};
GetMatchRanker = {};
GetMatchResult = {};
GetMultiplayReward = {};
GetPayShopItems = {};
GetReplay = {};
GetReplayList = {};
GetSeasonInfo = {};
GetSelectedReward = {};
GetShopList = {};
GetStamina = {};
GetStoreItemList = {};
GetTowerHeroInfo = {};
GetTowerNpcInfo = {};
GMT2G_Complete_Billing = {};
InitDeviceId = {};
InspectUser = {};
KickGuildMember = {};
LearnHeroSkill = {};
LinkAccount = {};
Login = {};
M2G_ReloadPlayerBattle = {};
NMessage = {};
NMessage.NProtocol = {};
NUtil = {};
NWorldMap = {};
NWorldMap.NEventSubData = {};
P2G_BuyCashShopItem = {};
P2G_GetCashShopItems = {};
Ping = {};
PingRes = {};
PurifyHero = {};
QueryMarketUrl = {};
QueryNick = {};
QuerySession = {};
ReceiveAllMail = {};
ReceiveCompletedReward = {};
ReceiveMail = {};
RechargeUndergroundPrisonKey = {};
RegisterDeviceToken = {};
RegisterMatch = {};
RegisterMercenary = {};
RejectFriend = {};
RejectJoinRequest = {};
RequestFriend = {};
RequestJoinGuild = {};
RequestShopList = {};
ResetTower = {};
RewardAchievement = {};
RewardClearChapter = {};
RewardWantedQuest = {};
SaveIAPurchaseInfo = {};
SaveReplay = {};
SearchFriend = {};
SearchGuild = {};
SearchUser = {};
SellEquip = {};
SellItem = {};
SetEquip = {};
SetGuildAdminRank = {};
SetOfflineMatchResult = {};
SetRune = {};
SignOut = {};
UnlockEquip = {};
UnregisterMercenary = {};
UnsetEquip = {};
UnsetRune = {};
UpgradeEquip = {};
UpgradeEquipOption = {};
UpgradeHeroSkill = {};
UpgradeHeroStar = {};
UseBoosterItem = {};
UseCoupon = {};
UseHeroSelectItem = {};
UsePackageItem = {};
UsePotionItem = {};
UseRecipeItem = {};
UseSkillRes = {};
VisitDungeon = {};
WaitMatch = {};
WithdrawGuild = {};
EPurchaseStatus = {
    None : 'None',
    DeveloperPayloadSuccess : 'DeveloperPayloadSuccess',
    RequestedPurchase : 'RequestedPurchase',
    RecvPurchaseSuccess : 'RecvPurchaseSuccess',
    RecvPurchaseFail : 'RecvPurchaseFail',
    CheckPurchaseSuccess : 'CheckPurchaseSuccess',
    CheckPurchaseFail : 'CheckPurchaseFail',
    RequestedConsume : 'RequestedConsume',
    RecvConsumeSuccess : 'RecvConsumeSuccess',
    RecvConsumeFail : 'RecvConsumeFail',
    CheckConsumeSuccess : 'CheckConsumeSuccess',
    VerificationFailed : 'VerificationFailed',
    CheckConsumeFailed : 'CheckConsumeFailed',
    PaymentSuccess : 'PaymentSuccess',
    PaymentFail : 'PaymentFail',
    VerificationError : 'VerificationError'
};
EPurchaseStatusValue = {
    None : 0,
    DeveloperPayloadSuccess : 1,
    RequestedPurchase : 2,
    RecvPurchaseSuccess : 3,
    RecvPurchaseFail : 4,
    CheckPurchaseSuccess : 5,
    CheckPurchaseFail : 6,
    RequestedConsume : 7,
    RecvConsumeSuccess : 8,
    RecvConsumeFail : 9,
    CheckConsumeSuccess : 10,
    VerificationFailed : 11,
    CheckConsumeFailed : 12,
    PaymentSuccess : 13,
    PaymentFail : 14,
    VerificationError : 15
};

EPurchasePlatform = {
    AOS : 'AOS',
    IOS : 'IOS'
};
EPurchasePlatformValue = {
    AOS : 0,
    IOS : 1
};

PayShopType = {
    None : 'None',
    Gold : 'Gold',
    Stamina : 'Stamina',
    AwakeChallenge : 'AwakeChallenge',
    Booster : 'Booster',
    Hero : 'Hero',
    Cash : 'Cash',
    Package : 'Package',
    Limited : 'Limited',
    Equip : 'Equip',
    Mileage : 'Mileage'
};
PayShopTypeValue = {
    None : 0,
    Gold : 1,
    Stamina : 2,
    AwakeChallenge : 3,
    Booster : 4,
    Hero : 5,
    Cash : 6,
    Package : 7,
    Limited : 8,
    Equip : 9,
    Mileage : 10
};

StoreShopItemType = {
    None : 'None',
    Item : 'Item',
    Gold : 'Gold',
    Gem : 'Gem',
    Mileage : 'Mileage'
};
StoreShopItemTypeValue = {
    None : 0,
    Item : 1,
    Gold : 2,
    Gem : 3,
    Mileage : 4
};

AchievementType = {
    General : 'General',
    Daily : 'Daily',
    DailyEvent : 'DailyEvent',
    Hero : 'Hero',
    Weekly : 'Weekly'
};
AchievementTypeValue = {
    General : 0,
    Daily : 1,
    DailyEvent : 2,
    Hero : 3,
    Weekly : 4
};

AchievementReqType = {
    None : 'None',
    LoginOrConnected : 'LoginOrConnected',
    LoginOrConnectedTime : 'LoginOrConnectedTime',
    HeroIndex : 'HeroIndex',
    ChapterClear : 'ChapterClear',
    MatchFirstChallengeLeague : 'MatchFirstChallengeLeague',
    MatchVictory : 'MatchVictory',
    MatchDefeat : 'MatchDefeat',
    MatchGrade : 'MatchGrade',
    GetItemType : 'GetItemType',
    FirstGetItem : 'FirstGetItem',
    EquipLevelUp : 'EquipLevelUp',
    GetGold : 'GetGold',
    BattleRewardGold : 'BattleRewardGold',
    ConsumeShopGold : 'ConsumeShopGold',
    ConsumeGold : 'ConsumeGold',
    ExecEquipLevelUp : 'ExecEquipLevelUp',
    GuildJoin : 'GuildJoin',
    GuildCreate : 'GuildCreate',
    UseGuildMercenary : 'UseGuildMercenary',
    EmployGuildMercenary : 'EmployGuildMercenary',
    KillMonster : 'KillMonster',
    GetEquipArtifact : 'GetEquipArtifact',
    HeroCountToEquipGrade : 'HeroCountToEquipGrade',
    ClearScenario : 'ClearScenario',
    FirstClearUndergroundPrison : 'FirstClearUndergroundPrison',
    ClearUndergroundPrison : 'ClearUndergroundPrison',
    TotalHeroStar : 'TotalHeroStar',
    TotalHero : 'TotalHero',
    CompleteExcavate : 'CompleteExcavate',
    UndergroundPrisonFirstClear : 'UndergroundPrisonFirstClear',
    ClearDungeon : 'ClearDungeon',
    JoinMatch : 'JoinMatch',
    UndergroundPrisonClear : 'UndergroundPrisonClear',
    Stamina : 'Stamina',
    ClearAllDailyQuest : 'ClearAllDailyQuest',
    LinkAccount : 'LinkAccount',
    BuyShopItem : 'BuyShopItem',
    JoinTower : 'JoinTower',
    ClearAllWeeklyQuest : 'ClearAllWeeklyQuest',
    CompleteDailyQuest : 'CompleteDailyQuest',
    UpgradeHeroSkill : 'UpgradeHeroSkill',
    BattleRewardEquip : 'BattleRewardEquip',
    AllClearUndergroundPrison : 'AllClearUndergroundPrison',
    ExecEquipGacha : 'ExecEquipGacha'
};
AchievementReqTypeValue = {
    None : 0,
    LoginOrConnected : 1,
    LoginOrConnectedTime : 2,
    HeroIndex : 3,
    ChapterClear : 4,
    MatchFirstChallengeLeague : 5,
    MatchVictory : 6,
    MatchDefeat : 7,
    MatchGrade : 8,
    GetItemType : 9,
    FirstGetItem : 10,
    EquipLevelUp : 11,
    GetGold : 12,
    BattleRewardGold : 13,
    ConsumeShopGold : 14,
    ConsumeGold : 15,
    ExecEquipLevelUp : 16,
    GuildJoin : 17,
    GuildCreate : 18,
    UseGuildMercenary : 19,
    EmployGuildMercenary : 20,
    KillMonster : 21,
    GetEquipArtifact : 22,
    HeroCountToEquipGrade : 23,
    ClearScenario : 24,
    FirstClearUndergroundPrison : 25,
    ClearUndergroundPrison : 26,
    TotalHeroStar : 27,
    TotalHero : 28,
    CompleteExcavate : 29,
    UndergroundPrisonFirstClear : 30,
    ClearDungeon : 31,
    JoinMatch : 32,
    UndergroundPrisonClear : 33,
    Stamina : 34,
    ClearAllDailyQuest : 35,
    LinkAccount : 36,
    BuyShopItem : 37,
    JoinTower : 38,
    ClearAllWeeklyQuest : 39,
    CompleteDailyQuest : 40,
    UpgradeHeroSkill : 41,
    BattleRewardEquip : 42,
    AllClearUndergroundPrison : 43,
    ExecEquipGacha : 44
};

AchievementReqSubType = {
    None : 'None',
    Level : 'Level',
    Star : 'Star',
    Grade : 'Grade',
    MasterSkillExtendSlot : 'MasterSkillExtendSlot',
    AllMasterSkillExtend : 'AllMasterSkillExtend',
    ExcavateCount : 'ExcavateCount',
    EmployCount : 'EmployCount',
    JoinMember : 'JoinMember',
    Count : 'Count',
    EquipCount : 'EquipCount',
    StartHour : 'StartHour',
    EndHour : 'EndHour'
};
AchievementReqSubTypeValue = {
    None : 0,
    Level : 1,
    Star : 2,
    Grade : 3,
    MasterSkillExtendSlot : 4,
    AllMasterSkillExtend : 5,
    ExcavateCount : 6,
    EmployCount : 7,
    JoinMember : 8,
    Count : 9,
    EquipCount : 10,
    StartHour : 11,
    EndHour : 12
};

AchievementSubType = {
    None : 'None',
    Growth : 'Growth',
    Equipment : 'Equipment',
    Skill : 'Skill',
    Excavation : 'Excavation',
    GuildMercenary : 'GuildMercenary',
    Match : 'Match',
    Goods : 'Goods',
    Item : 'Item',
    Contents : 'Contents',
    Account : 'Account',
    Guild : 'Guild',
    GamePlay : 'GamePlay',
    Scenario : 'Scenario',
    Prison : 'Prison'
};
AchievementSubTypeValue = {
    None : 0,
    Growth : 1,
    Equipment : 2,
    Skill : 3,
    Excavation : 4,
    GuildMercenary : 5,
    Match : 6,
    Goods : 7,
    Item : 8,
    Contents : 9,
    Account : 10,
    Guild : 11,
    GamePlay : 12,
    Scenario : 13,
    Prison : 14
};

AchievementRewardType = {
    None : 'None',
    Gold : 'Gold',
    Gem : 'Gem',
    StaminaTeamLevel : 'StaminaTeamLevel',
    GoldTeamLevel : 'GoldTeamLevel',
    Item : 'Item',
    TeamExp : 'TeamExp'
};
AchievementRewardTypeValue = {
    None : 0,
    Gold : 1,
    Gem : 2,
    StaminaTeamLevel : 3,
    GoldTeamLevel : 4,
    Item : 5,
    TeamExp : 6
};

AchievementCheckType = {
    None : 'None',
    Condition : 'Condition',
    MinCondition : 'MinCondition'
};
AchievementCheckTypeValue = {
    None : 0,
    Condition : 1,
    MinCondition : 2
};

EquipGachaType = {
    Normal : 'Normal',
    High : 'High'
};
EquipGachaTypeValue = {
    Normal : 0,
    High : 1
};

DungeonDifficultyType = {
    Easy : 'Easy',
    Normal : 'Normal',
    Hard : 'Hard'
};
DungeonDifficultyTypeValue = {
    Easy : 0,
    Normal : 1,
    Hard : 2
};

ChapterType = {
    None : 'None',
    City : 'City',
    WorldMap : 'WorldMap',
    Trial : 'Trial',
    DOW : 'DOW',
    Pit : 'Pit',
    Tower : 'Tower'
};
ChapterTypeValue = {
    None : 0,
    City : 1,
    WorldMap : 2,
    Trial : 3,
    DOW : 4,
    Pit : 5,
    Tower : 6
};

CreatureOpenType = {
    None : 'None',
    RecruitOnly : 'RecruitOnly',
    CommingSoon : 'CommingSoon',
    Opened : 'Opened',
    Scenario : 'Scenario',
    MileageOnly : 'MileageOnly',
    ChapterReward : 'ChapterReward'
};
CreatureOpenTypeValue = {
    None : 0,
    RecruitOnly : 1,
    CommingSoon : 2,
    Opened : 3,
    Scenario : 4,
    MileageOnly : 5,
    ChapterReward : 6
};

CreatureOpenStatusType = {
    Normal : 'Normal',
    New : 'New'
};
CreatureOpenStatusTypeValue = {
    Normal : 0,
    New : 1
};

CreatureRaceType = {
    None : 'None',
    Hero : 'Hero',
    Darkness : 'Darkness',
    Fairy : 'Fairy',
    NPC : 'NPC',
    Goblin : 'Goblin',
    Orc : 'Orc',
    Slime : 'Slime',
    Golem : 'Golem',
    Spider : 'Spider',
    GiantWorm : 'GiantWorm',
    Skeleton : 'Skeleton',
    Boar : 'Boar',
    Ent : 'Ent',
    Dryad : 'Dryad',
    Harpy : 'Harpy',
    DarkElf : 'DarkElf',
    LivingWeapon : 'LivingWeapon',
    Muhroom : 'Muhroom',
    Wasp : 'Wasp',
    Nepenthes : 'Nepenthes',
    Tortoise : 'Tortoise',
    Mimic : 'Mimic',
    Wolf : 'Wolf',
    HornedBear : 'HornedBear',
    Barricade : 'Barricade',
    Boss : 'Boss',
    LaughingMask : 'LaughingMask',
    Gnoll : 'Gnoll',
    Beast : 'Beast',
    Pet : 'Pet',
    End : 'End'
};
CreatureRaceTypeValue = {
    None : 0,
    Hero : 1,
    Darkness : 2,
    Fairy : 3,
    NPC : 4,
    Goblin : 5,
    Orc : 6,
    Slime : 7,
    Golem : 8,
    Spider : 9,
    GiantWorm : 10,
    Skeleton : 11,
    Boar : 12,
    Ent : 13,
    Dryad : 14,
    Harpy : 15,
    DarkElf : 16,
    LivingWeapon : 17,
    Muhroom : 18,
    Wasp : 19,
    Nepenthes : 20,
    Tortoise : 21,
    Mimic : 22,
    Wolf : 23,
    HornedBear : 24,
    Barricade : 25,
    Boss : 26,
    LaughingMask : 27,
    Gnoll : 28,
    Beast : 29,
    Pet : 30,
    End : 31
};

ScenarioQuestActionType = {
    None : 'None',
    AddHero : 'AddHero',
    UpgradeHeroStar : 'UpgradeHeroStar',
    UpgradeHeroLevel : 'UpgradeHeroLevel',
    UpgradeHeroSkill : 'UpgradeHeroSkill',
    ClearDungeon : 'ClearDungeon',
    AddEquip : 'AddEquip',
    RemoveEquip : 'RemoveEquip',
    WearEquip : 'WearEquip',
    UndressEquip : 'UndressEquip',
    BreakEquip : 'BreakEquip',
    UpgradeEquipLevel : 'UpgradeEquipLevel',
    UpgradeEquipStar : 'UpgradeEquipStar',
    UpgradeEquipOption : 'UpgradeEquipOption',
    EquipRune : 'EquipRune',
    ExecEquipGacha : 'ExecEquipGacha',
    UseItem : 'UseItem',
    SetItem : 'SetItem',
    DungeonCleared : 'DungeonCleared',
    HeroCountOfLevel : 'HeroCountOfLevel',
    HeroCountOfStar : 'HeroCountOfStar',
    HeroEquipCountOfGrade : 'HeroEquipCountOfGrade',
    EquipCountOfLevel : 'EquipCountOfLevel',
    EquipCountOfStar : 'EquipCountOfStar',
    SkillCountOfLevel : 'SkillCountOfLevel',
    SkillLevelOfHero : 'SkillLevelOfHero'
};
ScenarioQuestActionTypeValue = {
    None : 0,
    AddHero : 1,
    UpgradeHeroStar : 2,
    UpgradeHeroLevel : 3,
    UpgradeHeroSkill : 4,
    ClearDungeon : 5,
    AddEquip : 6,
    RemoveEquip : 7,
    WearEquip : 8,
    UndressEquip : 9,
    BreakEquip : 10,
    UpgradeEquipLevel : 11,
    UpgradeEquipStar : 12,
    UpgradeEquipOption : 13,
    EquipRune : 14,
    ExecEquipGacha : 15,
    UseItem : 16,
    SetItem : 17,
    DungeonCleared : 18,
    HeroCountOfLevel : 19,
    HeroCountOfStar : 20,
    HeroEquipCountOfGrade : 21,
    EquipCountOfLevel : 22,
    EquipCountOfStar : 23,
    SkillCountOfLevel : 24,
    SkillLevelOfHero : 25
};

AttackAttrType = {
    None : 'None',
    Swing : 'Swing',
    Strike : 'Strike',
    Pierce : 'Pierce',
    Explode : 'Explode',
    Fire : 'Fire',
    Water : 'Water',
    Nature : 'Nature',
    Light : 'Light',
    Darkness : 'Darkness'
};
AttackAttrTypeValue = {
    None : 0,
    Swing : 1,
    Strike : 2,
    Pierce : 3,
    Explode : 4,
    Fire : 5,
    Water : 6,
    Nature : 7,
    Light : 8,
    Darkness : 9
};

EventTriggerCategory = {
    MainScenario : 'MainScenario',
    SubScenario : 'SubScenario',
    Tutorial : 'Tutorial'
};
EventTriggerCategoryValue = {
    MainScenario : 0,
    SubScenario : 1,
    Tutorial : 2
};

RewardType = {
    None : 'None',
    Item : 'Item',
    Gold : 'Gold',
    Gem : 'Gem',
    PvpCoin : 'PvpCoin',
    UndergroundPrisonKey : 'UndergroundPrisonKey',
    UndergroundLabyrinthKey : 'UndergroundLabyrinthKey'
};
RewardTypeValue = {
    None : 0,
    Item : 1,
    Gold : 2,
    Gem : 3,
    PvpCoin : 4,
    UndergroundPrisonKey : 5,
    UndergroundLabyrinthKey : 6
};

CreatureTagType = {
    None : 'None',
    Warrior : 'Warrior',
    Archer : 'Archer',
    Knight : 'Knight',
    Wizard : 'Wizard',
    Priest : 'Priest',
    Assassin : 'Assassin',
    Mechanic : 'Mechanic',
    End : 'End'
};
CreatureTagTypeValue = {
    None : 0,
    Warrior : 1,
    Archer : 2,
    Knight : 3,
    Wizard : 4,
    Priest : 5,
    Assassin : 6,
    Mechanic : 7,
    End : 8
};

CreatureTransformType = {
    StaticPosition : 'StaticPosition'
};
CreatureTransformTypeValue = {
    StaticPosition : 1
};

ItemActionType = {
    None : 'None',
    RecoverStamina : 'RecoverStamina',
    GetHeroExp : 'GetHeroExp'
};
ItemActionTypeValue = {
    None : 0,
    RecoverStamina : 1,
    GetHeroExp : 2
};

ShopCostType = {
    None : 'None',
    Gold : 'Gold',
    Gem : 'Gem',
    PvpCoin : 'PvpCoin',
    GuildPoint : 'GuildPoint',
    RoyalPoint : 'RoyalPoint',
    Mileage : 'Mileage'
};
ShopCostTypeValue = {
    None : 0,
    Gold : 1,
    Gem : 2,
    PvpCoin : 3,
    GuildPoint : 4,
    RoyalPoint : 5,
    Mileage : 6
};

TowerType = {
    Tower : 'Tower',
    Pit : 'Pit',
    Labyrinth : 'Labyrinth'
};
TowerTypeValue = {
    Tower : 0,
    Pit : 1,
    Labyrinth : 2
};

TutorialRewardActionType = {
    None : 'None',
    SetHeroEquip : 'SetHeroEquip',
    SetHeroStar : 'SetHeroStar',
    AddHeroExp : 'AddHeroExp',
    UpgradeHeroEquip : 'UpgradeHeroEquip',
    SetHeroSkillLevel : 'SetHeroSkillLevel',
    SetHeroSkillExtend : 'SetHeroSkillExtend',
    DecFreeEquipGachaCount : 'DecFreeEquipGachaCount',
    EquipRune : 'EquipRune'
};
TutorialRewardActionTypeValue = {
    None : 0,
    SetHeroEquip : 1,
    SetHeroStar : 2,
    AddHeroExp : 3,
    UpgradeHeroEquip : 4,
    SetHeroSkillLevel : 5,
    SetHeroSkillExtend : 6,
    DecFreeEquipGachaCount : 7,
    EquipRune : 8
};

LoginMethodType = {
    None : 'None',
    Guest : 'Guest',
    Facebook : 'Facebook',
    GooglePlus : 'GooglePlus',
    GameCenter : 'GameCenter'
};
LoginMethodTypeValue = {
    None : 0,
    Guest : 1,
    Facebook : 2,
    GooglePlus : 3,
    GameCenter : 4
};

ReplayType = {
    Arena : 'Arena',
    Plunder : 'Plunder'
};
ReplayTypeValue = {
    Arena : 0,
    Plunder : 1
};

NodeFunctionType = {
    None : 'None',
    Battle : 'Battle',
    EntryMenu : 'EntryMenu',
    MoveChapter : 'MoveChapter',
    City : 'City',
    Temple : 'Temple',
    Portal : 'Portal',
    Excavation : 'Excavation',
    EventTrigger : 'EventTrigger',
    NPC : 'NPC'
};
NodeFunctionTypeValue = {
    None : 0,
    Battle : 1,
    EntryMenu : 2,
    MoveChapter : 3,
    City : 4,
    Temple : 5,
    Portal : 6,
    Excavation : 7,
    EventTrigger : 8,
    NPC : 9
};

ItemType = {
    None : 'None',
    Equip : 'Equip',
    Rune : 'Rune',
    Recipe : 'Recipe',
    SoulStone : 'SoulStone',
    UpgradeBook : 'UpgradeBook',
    AwakeMaterial : 'AwakeMaterial',
    AwakeChallenge : 'AwakeChallenge',
    Booster : 'Booster',
    __UNUSED__1 : '__UNUSED__1',
    __UNUSED__2 : '__UNUSED__2',
    Potion : 'Potion',
    Consumables : 'Consumables',
    Material : 'Material',
    Etc : 'Etc',
    Hero : 'Hero',
    Package : 'Package',
    HeroSelect : 'HeroSelect',
    HeroEnhanceMaterial : 'HeroEnhanceMaterial',
    FreeEquipGacha : 'FreeEquipGacha'
};
ItemTypeValue = {
    None : 0,
    Equip : 1,
    Rune : 2,
    Recipe : 3,
    SoulStone : 4,
    UpgradeBook : 5,
    AwakeMaterial : 6,
    AwakeChallenge : 7,
    Booster : 8,
    __UNUSED__1 : 9,
    __UNUSED__2 : 10,
    Potion : 11,
    Consumables : 12,
    Material : 13,
    Etc : 14,
    Hero : 15,
    Package : 16,
    HeroSelect : 17,
    HeroEnhanceMaterial : 18,
    FreeEquipGacha : 19
};

EquipPartType = {
    None : 'None',
    Weapon : 'Weapon',
    Armor : 'Armor',
    Accessory : 'Accessory',
    SecondGear : 'SecondGear'
};
EquipPartTypeValue = {
    None : 0,
    Weapon : 1,
    Armor : 2,
    Accessory : 3,
    SecondGear : 4
};

StatType = {
    None : 'None',
    PhysicalAttack : 'PhysicalAttack',
    PhysicalDefense : 'PhysicalDefense',
    PhysicalCriticalChance : 'PhysicalCriticalChance',
    PhysicalCriticalPower : 'PhysicalCriticalPower',
    PhysicalCriticalWeakness : 'PhysicalCriticalWeakness',
    PhysicalDodgeChance : 'PhysicalDodgeChance',
    PhysicalBlockChance : 'PhysicalBlockChance',
    PhysicalBlockPower : 'PhysicalBlockPower',
    PhysicalHitChance : 'PhysicalHitChance',
    PhysicalPiercePower : 'PhysicalPiercePower',
    PhysicalToughness : 'PhysicalToughness',
    PhysicalWeakness : 'PhysicalWeakness',
    MagicalAttack : 'MagicalAttack',
    MagicalDefense : 'MagicalDefense',
    MagicalCriticalChance : 'MagicalCriticalChance',
    MagicalCriticalPower : 'MagicalCriticalPower',
    MagicalCriticalWeakness : 'MagicalCriticalWeakness',
    MagicalDodgeChance : 'MagicalDodgeChance',
    MagicalBlockChance : 'MagicalBlockChance',
    MagicalBlockPower : 'MagicalBlockPower',
    MagicalHitChance : 'MagicalHitChance',
    MagicalPiercePower : 'MagicalPiercePower',
    MagicalToughness : 'MagicalToughness',
    MagicalWeakness : 'MagicalWeakness',
    HealPower : 'HealPower',
    RecoverPower : 'RecoverPower',
    AntiCcChance : 'AntiCcChance',
    AntiDebuffChance : 'AntiDebuffChance',
    DebuffTime : 'DebuffTime',
    CcTime : 'CcTime',
    Cooltime : 'Cooltime',
    MaxHp : 'MaxHp',
    HpStealPower : 'HpStealPower',
    HpOnDamage : 'HpOnDamage',
    HpOnAttack : 'HpOnAttack',
    HpOnKill : 'HpOnKill',
    HpOnWave : 'HpOnWave',
    HpOnTime : 'HpOnTime',
    HpRatioOnDamage : 'HpRatioOnDamage',
    HpRatioOnAttack : 'HpRatioOnAttack',
    HpRatioOnKill : 'HpRatioOnKill',
    HpRatioOnWave : 'HpRatioOnWave',
    HpRatioOnTime : 'HpRatioOnTime',
    MaxMp : 'MaxMp',
    MpOnDamage : 'MpOnDamage',
    MpOnAttack : 'MpOnAttack',
    MpOnKill : 'MpOnKill',
    MpOnWave : 'MpOnWave',
    MpOnTime : 'MpOnTime',
    AttackSpeed : 'AttackSpeed',
    MoveSpeedMms : 'MoveSpeedMms',
    SkillPower : 'SkillPower',
    SkillWeakness : 'SkillWeakness',
    ComboPower : 'ComboPower',
    CriticalHealToShield : 'CriticalHealToShield'
};
StatTypeValue = {
    None : 0,
    PhysicalAttack : 1,
    PhysicalDefense : 2,
    PhysicalCriticalChance : 3,
    PhysicalCriticalPower : 4,
    PhysicalCriticalWeakness : 5,
    PhysicalDodgeChance : 6,
    PhysicalBlockChance : 7,
    PhysicalBlockPower : 8,
    PhysicalHitChance : 9,
    PhysicalPiercePower : 10,
    PhysicalToughness : 11,
    PhysicalWeakness : 12,
    MagicalAttack : 13,
    MagicalDefense : 14,
    MagicalCriticalChance : 15,
    MagicalCriticalPower : 16,
    MagicalCriticalWeakness : 17,
    MagicalDodgeChance : 18,
    MagicalBlockChance : 19,
    MagicalBlockPower : 20,
    MagicalHitChance : 21,
    MagicalPiercePower : 22,
    MagicalToughness : 23,
    MagicalWeakness : 24,
    HealPower : 25,
    RecoverPower : 26,
    AntiCcChance : 27,
    AntiDebuffChance : 28,
    DebuffTime : 29,
    CcTime : 30,
    Cooltime : 31,
    MaxHp : 32,
    HpStealPower : 33,
    HpOnDamage : 34,
    HpOnAttack : 35,
    HpOnKill : 36,
    HpOnWave : 37,
    HpOnTime : 38,
    HpRatioOnDamage : 39,
    HpRatioOnAttack : 40,
    HpRatioOnKill : 41,
    HpRatioOnWave : 42,
    HpRatioOnTime : 43,
    MaxMp : 44,
    MpOnDamage : 45,
    MpOnAttack : 46,
    MpOnKill : 47,
    MpOnWave : 48,
    MpOnTime : 49,
    AttackSpeed : 50,
    MoveSpeedMms : 51,
    SkillPower : 52,
    SkillWeakness : 53,
    ComboPower : 54,
    CriticalHealToShield : 55
};

StaminaType = {
    None : 'None',
    Chicken : 'Chicken',
    Sword : 'Sword',
    Gold : 'Gold',
    Gem : 'Gem',
    UndergroundPrisonKey : 'UndergroundPrisonKey',
    UndergroundLabyrinthKey : 'UndergroundLabyrinthKey',
    Mileage : 'Mileage'
};
StaminaTypeValue = {
    None : 0,
    Chicken : 1,
    Sword : 2,
    Gold : 3,
    Gem : 4,
    UndergroundPrisonKey : 5,
    UndergroundLabyrinthKey : 6,
    Mileage : 7
};

NWorldMap.EventTriggerType = {
    None : 'None',
    EndCampaign : 'EndCampaign',
    Excavation : 'Excavation',
    AcceptQuest : 'AcceptQuest'
};
NWorldMap.EventTriggerTypeValue = {
    None : 0,
    EndCampaign : 1,
    Excavation : 2,
    AcceptQuest : 3
};

NWorldMap.EventType = {
    None : 'None',
    FieldBoss : 'FieldBoss',
    GoblinShop : 'GoblinShop',
    QuestDungeon : 'QuestDungeon',
    GuerrillaDungeon : 'GuerrillaDungeon',
    EventDungeon : 'EventDungeon',
    StageBuff : 'StageBuff',
    TreasureBox : 'TreasureBox',
    MapCoin : 'MapCoin',
    Excavation : 'Excavation'
};
NWorldMap.EventTypeValue = {
    None : 0,
    FieldBoss : 1,
    GoblinShop : 2,
    QuestDungeon : 3,
    GuerrillaDungeon : 4,
    EventDungeon : 5,
    StageBuff : 6,
    TreasureBox : 7,
    MapCoin : 8,
    Excavation : 9
};

TeamType = {
    Left : 'Left',
    Right : 'Right'
};
TeamTypeValue = {
    Left : 0,
    Right : 1
};

EventBonusType = {
    None : 'None',
    BonusExp : 'BonusExp',
    BonusItem : 'BonusItem',
    BonusGold : 'BonusGold'
};
EventBonusTypeValue = {
    None : 0,
    BonusExp : 1,
    BonusItem : 2,
    BonusGold : 3
};

NMessage.LoginResType = {
    Success : 'Success',
    Fail : 'Fail'
};
NMessage.LoginResTypeValue = {
    Success : 0,
    Fail : 1
};

NMessage.ChangeGuildResType = {
    Success : 'Success',
    Fail : 'Fail',
    NotLogined : 'NotLogined',
    NotChanged : 'NotChanged'
};
NMessage.ChangeGuildResTypeValue = {
    Success : 0,
    Fail : 1,
    NotLogined : 2,
    NotChanged : 3
};

NMessage.ChangeFriendResType = {
    Success : 'Success',
    Fail : 'Fail',
    NotLogined : 'NotLogined'
};
NMessage.ChangeFriendResTypeValue = {
    Success : 0,
    Fail : 1,
    NotLogined : 2
};

MessageGroupType = {
    None : 'None',
    World : 'World',
    Channel : 'Channel',
    Guild : 'Guild',
    Friend : 'Friend'
};
MessageGroupTypeValue = {
    None : 0,
    World : 1,
    Channel : 2,
    Guild : 3,
    Friend : 4
};

NMessage.MessageResType = {
    Success : 'Success',
    Fail : 'Fail',
    NotLogined : 'NotLogined'
};
NMessage.MessageResTypeValue = {
    Success : 0,
    Fail : 1,
    NotLogined : 2
};

NMessage.ClearMessageResType = {
    Success : 'Success',
    Fail : 'Fail',
    NotLogined : 'NotLogined'
};
NMessage.ClearMessageResTypeValue = {
    Success : 0,
    Fail : 1,
    NotLogined : 2
};

NMessage.PingResType = {
    Success : 'Success',
    Fail : 'Fail',
    NotLogined : 'NotLogined'
};
NMessage.PingResTypeValue = {
    Success : 0,
    Fail : 1,
    NotLogined : 2
};

B2G_SetAbuser.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
B2G_SetAbuser.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

BaseResultType = {
    Fail : 'Fail',
    Success : 'Success',
    Timeout : 'Timeout',
    SessionError : 'SessionError',
    SequenceError : 'SequenceError',
    AccountError : 'AccountError',
    Unhandled : 'Unhandled',
    Exception : 'Exception',
    HttpError : 'HttpError',
    InternalError : 'InternalError',
    ParsingError : 'ParsingError',
    EmptyHost : 'EmptyHost',
    Disabled : 'Disabled',
    Offline : 'Offline'
};
BaseResultTypeValue = {
    Fail : 0,
    Success : 1,
    Timeout : 2,
    SessionError : 3,
    SequenceError : 4,
    AccountError : 5,
    Unhandled : 6,
    Exception : 7,
    HttpError : 8,
    InternalError : 9,
    ParsingError : 10,
    EmptyHost : 11,
    Disabled : 12,
    Offline : 13
};

B2G_GetHeroInfo.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
B2G_GetHeroInfo.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

GMT2G_Complete_Billing.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    PlayerLogined : 'PlayerLogined',
    DBError_GetIAPInfo : 'DBError_GetIAPInfo',
    DBError_InsertTransactionId : 'DBError_InsertTransactionId',
    DBError_GetTransactionId : 'DBError_GetTransactionId',
    DBError_GetFirstPurchaseInfo : 'DBError_GetFirstPurchaseInfo',
    DBError_InsertFirstPurchaseInfo : 'DBError_InsertFirstPurchaseInfo',
    DBError_UpdateFirstPurchaseInfo : 'DBError_UpdateFirstPurchaseInfo',
    DBError_GetPurchaseTimeDurationInfo : 'DBError_GetPurchaseTimeDurationInfo',
    DBError_InsertPurchaseTimeDurationInfo : 'DBError_InsertPurchaseTimeDurationInfo',
    DBError_UpdatePurchaseTimeDurationInfo : 'DBError_UpdatePurchaseTimeDurationInfo',
    DBError_UpdateIAPInfo : 'DBError_UpdateIAPInfo',
    IAPInfoNotFound : 'IAPInfoNotFound',
    VerifyReceiptError : 'VerifyReceiptError',
    NotConsumedYet : 'NotConsumedYet',
    WrongReceipt : 'WrongReceipt',
    ShopItemNotFound : 'ShopItemNotFound',
    InvalidPackageItem : 'InvalidPackageItem',
    ExceededPurchasableCount : 'ExceededPurchasableCount',
    NotMonthlyEnded : 'NotMonthlyEnded',
    InsufficientIAPInfo : 'InsufficientIAPInfo',
    AlreadyCompletedIAPInfo : 'AlreadyCompletedIAPInfo'
};
GMT2G_Complete_Billing.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    PlayerLogined : 2,
    DBError_GetIAPInfo : 3,
    DBError_InsertTransactionId : 4,
    DBError_GetTransactionId : 5,
    DBError_GetFirstPurchaseInfo : 6,
    DBError_InsertFirstPurchaseInfo : 7,
    DBError_UpdateFirstPurchaseInfo : 8,
    DBError_GetPurchaseTimeDurationInfo : 9,
    DBError_InsertPurchaseTimeDurationInfo : 10,
    DBError_UpdatePurchaseTimeDurationInfo : 11,
    DBError_UpdateIAPInfo : 12,
    IAPInfoNotFound : 13,
    VerifyReceiptError : 14,
    NotConsumedYet : 15,
    WrongReceipt : 16,
    ShopItemNotFound : 17,
    InvalidPackageItem : 18,
    ExceededPurchasableCount : 19,
    NotMonthlyEnded : 20,
    InsufficientIAPInfo : 21,
    AlreadyCompletedIAPInfo : 22
};

M2G_ReloadPlayerBattle.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
M2G_ReloadPlayerBattle.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

P2G_BuyCashShopItem.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    InvalidAccountId : 'InvalidAccountId',
    InvalidShopIndex : 'InvalidShopIndex',
    ShopDataNotFound : 'ShopDataNotFound',
    NoShopItemData : 'NoShopItemData',
    NotMonthlyEnded : 'NotMonthlyEnded',
    ExceededPurchasableCount : 'ExceededPurchasableCount',
    Retry : 'Retry',
    InvalidLocalPrice : 'InvalidLocalPrice',
    OnTransaction : 'OnTransaction'
};
P2G_BuyCashShopItem.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    InvalidAccountId : 2,
    InvalidShopIndex : 3,
    ShopDataNotFound : 4,
    NoShopItemData : 5,
    NotMonthlyEnded : 6,
    ExceededPurchasableCount : 7,
    Retry : 8,
    InvalidLocalPrice : 9,
    OnTransaction : 10
};

P2G_GetCashShopItems.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    InvalidAccountId : 'InvalidAccountId',
    NoShopData : 'NoShopData',
    NoShopItemData : 'NoShopItemData',
    Retry : 'Retry'
};
P2G_GetCashShopItems.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    InvalidAccountId : 2,
    NoShopData : 3,
    NoShopItemData : 4,
    Retry : 5
};

B2G_SetCampaignResult.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
B2G_SetCampaignResult.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

B2M_GetMatchInfo.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    MatchNotFound : 'MatchNotFound'
};
B2M_GetMatchInfo.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    MatchNotFound : 2
};

BattleType = {
    None : 'None',
    Campaign : 'Campaign',
    CustomCampaign : 'CustomCampaign',
    Trial : 'Trial',
    Arena : 'Arena',
    Tower : 'Tower',
    Pit : 'Pit',
    Labyrinth : 'Labyrinth',
    Event : 'Event',
    Party : 'Party',
    Boss : 'Boss',
    Prison : 'Prison'
};
BattleTypeValue = {
    None : 0,
    Campaign : 1,
    CustomCampaign : 2,
    Trial : 3,
    Arena : 4,
    Tower : 5,
    Pit : 6,
    Labyrinth : 7,
    Event : 8,
    Party : 9,
    Boss : 10,
    Prison : 11
};

B2M_Ping.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
B2M_Ping.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

B2G_SetMatchResult.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
B2G_SetMatchResult.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

BattleLoginRes.ResultType = {
    Success : 'Success',
    Fail : 'Fail',
    NotRunning : 'NotRunning',
    NotJoinable : 'NotJoinable',
    Progressing : 'Progressing',
    InternalFail : 'InternalFail',
    InternalResponseError : 'InternalResponseError',
    NotImplemented : 'NotImplemented',
    MasterNotFound : 'MasterNotFound',
    MissingPartyInfo : 'MissingPartyInfo',
    MatchNotFound : 'MatchNotFound',
    Canceled : 'Canceled'
};
BattleLoginRes.ResultTypeValue = {
    Success : 0,
    Fail : 1,
    NotRunning : 2,
    NotJoinable : 3,
    Progressing : 4,
    InternalFail : 5,
    InternalResponseError : 6,
    NotImplemented : 7,
    MasterNotFound : 8,
    MissingPartyInfo : 9,
    MatchNotFound : 10,
    Canceled : 11
};

BattleEnterRes.ResultType = {
    Success : 'Success',
    Fail : 'Fail',
    ClientNotFound : 'ClientNotFound'
};
BattleEnterRes.ResultTypeValue = {
    Success : 0,
    Fail : 1,
    ClientNotFound : 2
};

BattleStartRes.ResultType = {
    Success : 'Success',
    Fail : 'Fail',
    ClientNotFound : 'ClientNotFound'
};
BattleStartRes.ResultTypeValue = {
    Success : 0,
    Fail : 1,
    ClientNotFound : 2
};

BattleEndNot.ReasonType = {
    Ended : 'Ended',
    NotStarted : 'NotStarted',
    ServerError : 'ServerError',
    AllLogOff : 'AllLogOff',
    StartError : 'StartError'
};
BattleEndNot.ReasonTypeValue = {
    Ended : 0,
    NotStarted : 1,
    ServerError : 2,
    AllLogOff : 3,
    StartError : 4
};

BaseCreatureActionRes.ResultType = {
    Success : 'Success',
    Fail : 'Fail',
    ClientNotFound : 'ClientNotFound',
    BattleInstanceNotFound : 'BattleInstanceNotFound',
    CreatureNotFound : 'CreatureNotFound',
    InvalidBattlePlayer : 'InvalidBattlePlayer'
};
BaseCreatureActionRes.ResultTypeValue = {
    Success : 0,
    Fail : 1,
    ClientNotFound : 2,
    BattleInstanceNotFound : 3,
    CreatureNotFound : 4,
    InvalidBattlePlayer : 5
};

UseSkillRes.ResultType = {
    Success : 'Success',
    Fail : 'Fail',
    ClientNotFound : 'ClientNotFound',
    BattleInstanceNotFound : 'BattleInstanceNotFound',
    CreatureNotFound : 'CreatureNotFound',
    SkillDataNotFound : 'SkillDataNotFound',
    CannotUseSkill : 'CannotUseSkill',
    InvalidBattlePlayer : 'InvalidBattlePlayer'
};
UseSkillRes.ResultTypeValue = {
    Success : 0,
    Fail : 1,
    ClientNotFound : 2,
    BattleInstanceNotFound : 3,
    CreatureNotFound : 4,
    SkillDataNotFound : 5,
    CannotUseSkill : 6,
    InvalidBattlePlayer : 7
};

PingRes.ResultType = {
    Success : 'Success',
    Fail : 'Fail',
    ClientNotFound : 'ClientNotFound',
    BattleInstanceNotFound : 'BattleInstanceNotFound'
};
PingRes.ResultTypeValue = {
    Success : 0,
    Fail : 1,
    ClientNotFound : 2,
    BattleInstanceNotFound : 3
};

G2G_RejectFriend.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
G2G_RejectFriend.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

G2G_DropUser.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
G2G_DropUser.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

G2M_SyncWaiter.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
G2M_SyncWaiter.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

GetAchievements.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
GetAchievements.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

RewardAchievement.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    AchievementNotCleared : 'AchievementNotCleared',
    InvalidStep : 'InvalidStep',
    RewardTimeEnded : 'RewardTimeEnded',
    InvalidRewardData : 'InvalidRewardData'
};
RewardAchievement.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    AchievementNotCleared : 2,
    InvalidStep : 3,
    RewardTimeEnded : 4,
    InvalidRewardData : 5
};

Cheat.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NoPrivilege : 'NoPrivilege'
};
Cheat.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NoPrivilege : 2
};

CompareDbSchema.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NotAllowed : 'NotAllowed'
};
CompareDbSchema.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NotAllowed : 2
};

DumpDbSchema.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NotAllowed : 'NotAllowed',
    NoAccountId : 'NoAccountId',
    NotFound : 'NotFound'
};
DumpDbSchema.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NotAllowed : 2,
    NoAccountId : 3,
    NotFound : 4
};

GetAttendanceReward.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
GetAttendanceReward.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

AbandonMultiplayReward.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    InvalidHost : 'InvalidHost',
    MasterNotFound : 'MasterNotFound',
    MultiplayInfoNotFound : 'MultiplayInfoNotFound',
    WrongMember : 'WrongMember',
    AlreadyRewardCalculated : 'AlreadyRewardCalculated'
};
AbandonMultiplayReward.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    InvalidHost : 2,
    MasterNotFound : 3,
    MultiplayInfoNotFound : 4,
    WrongMember : 5,
    AlreadyRewardCalculated : 6
};

RewardClearChapter.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NotYetCleared : 'NotYetCleared',
    InvalidChapterIndex : 'InvalidChapterIndex',
    InvalidDungeonDifficulty : 'InvalidDungeonDifficulty',
    WrongDungeonDifficulty : 'WrongDungeonDifficulty'
};
RewardClearChapter.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NotYetCleared : 2,
    InvalidChapterIndex : 3,
    InvalidDungeonDifficulty : 4,
    WrongDungeonDifficulty : 5
};

GetTowerNpcInfo.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
GetTowerNpcInfo.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

GetTowerHeroInfo.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
GetTowerHeroInfo.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

ResetTower.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    TowerDataNotFound : 'TowerDataNotFound',
    TowerNotPlayed : 'TowerNotPlayed',
    PlayerTowerNotFound : 'PlayerTowerNotFound',
    CannotResetMore : 'CannotResetMore',
    NotEnoughCost : 'NotEnoughCost'
};
ResetTower.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    TowerDataNotFound : 2,
    TowerNotPlayed : 3,
    PlayerTowerNotFound : 4,
    CannotResetMore : 5,
    NotEnoughCost : 6
};

SaveIAPurchaseInfo.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
SaveIAPurchaseInfo.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

GetFreeEquipGachaInfo.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
GetFreeEquipGachaInfo.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

ExecEquipGacha.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    GachaDataNotFound : 'GachaDataNotFound',
    NotEnoughGold : 'NotEnoughGold',
    NotEnoughGem : 'NotEnoughGem',
    InvalidItemCode : 'InvalidItemCode',
    InvalidEquipStarRate : 'InvalidEquipStarRate',
    InvalidGachaRequest : 'InvalidGachaRequest',
    EquipItemFull : 'EquipItemFull',
    InvalidItemIndex : 'InvalidItemIndex',
    InvalidItemType : 'InvalidItemType',
    ItemNotOwned : 'ItemNotOwned'
};
ExecEquipGacha.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    GachaDataNotFound : 2,
    NotEnoughGold : 3,
    NotEnoughGem : 4,
    InvalidItemCode : 5,
    InvalidEquipStarRate : 6,
    InvalidGachaRequest : 7,
    EquipItemFull : 8,
    InvalidItemIndex : 9,
    InvalidItemType : 10,
    ItemNotOwned : 11
};

UpgradeEquipOption.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    EquipNotOwned : 'EquipNotOwned',
    ItemDataNotFound : 'ItemDataNotFound',
    EquipDataNotFound : 'EquipDataNotFound',
    UpgradeDataNotFound : 'UpgradeDataNotFound',
    MaterialItemIndexMismatch : 'MaterialItemIndexMismatch',
    MaterialItemCountMismatch : 'MaterialItemCountMismatch',
    NotEnoughMaterialItem : 'NotEnoughMaterialItem',
    InvalidReqGold : 'InvalidReqGold',
    NotEnoughGold : 'NotEnoughGold',
    NoUpgradableOptionSlot : 'NoUpgradableOptionSlot'
};
UpgradeEquipOption.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    EquipNotOwned : 2,
    ItemDataNotFound : 3,
    EquipDataNotFound : 4,
    UpgradeDataNotFound : 5,
    MaterialItemIndexMismatch : 6,
    MaterialItemCountMismatch : 7,
    NotEnoughMaterialItem : 8,
    InvalidReqGold : 9,
    NotEnoughGold : 10,
    NoUpgradableOptionSlot : 11
};

ExtendEquip.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    ReqGemError : 'ReqGemError',
    NotEnoughGem : 'NotEnoughGem'
};
ExtendEquip.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    ReqGemError : 2,
    NotEnoughGem : 3
};

EnhanceHero.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NoHero : 'NoHero',
    CreatureDataNotFound : 'CreatureDataNotFound',
    NotMaxHeroStar : 'NotMaxHeroStar',
    EnhanceItemIndexError : 'EnhanceItemIndexError',
    NotEnoughEnhanceItem : 'NotEnoughEnhanceItem',
    CannotEnhanceMore : 'CannotEnhanceMore',
    AwakeChallengeDataError : 'AwakeChallengeDataError',
    AwakeItemDataError : 'AwakeItemDataError',
    NotEnoughAwakeItem : 'NotEnoughAwakeItem'
};
EnhanceHero.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NoHero : 2,
    CreatureDataNotFound : 3,
    NotMaxHeroStar : 4,
    EnhanceItemIndexError : 5,
    NotEnoughEnhanceItem : 6,
    CannotEnhanceMore : 7,
    AwakeChallengeDataError : 8,
    AwakeItemDataError : 9,
    NotEnoughAwakeItem : 10
};

UsePackageItem.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    ItemNotOwned : 'ItemNotOwned',
    InvalidItemCount : 'InvalidItemCount',
    ItemDataNotFound : 'ItemDataNotFound',
    ItemTypeMismatch : 'ItemTypeMismatch',
    PackageDataNotFound : 'PackageDataNotFound'
};
UsePackageItem.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    ItemNotOwned : 2,
    InvalidItemCount : 3,
    ItemDataNotFound : 4,
    ItemTypeMismatch : 5,
    PackageDataNotFound : 6
};

UseBoosterItem.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    ItemNotOwned : 'ItemNotOwned',
    ItemDataNotFound : 'ItemDataNotFound',
    ItemTypeMismatch : 'ItemTypeMismatch',
    SameBoosterApplied : 'SameBoosterApplied'
};
UseBoosterItem.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    ItemNotOwned : 2,
    ItemDataNotFound : 3,
    ItemTypeMismatch : 4,
    SameBoosterApplied : 5
};

UseHeroSelectItem.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    ItemNotOwned : 'ItemNotOwned',
    ItemDataNotFound : 'ItemDataNotFound',
    ItemTypeMismatch : 'ItemTypeMismatch',
    HeroSelectDataNotFound : 'HeroSelectDataNotFound',
    HeroNotSelectable : 'HeroNotSelectable',
    HeroFragmentDataError : 'HeroFragmentDataError',
    HeroDataNotFound : 'HeroDataNotFound',
    AwakeChallengeDataError : 'AwakeChallengeDataError',
    AwakeItemDataError : 'AwakeItemDataError'
};
UseHeroSelectItem.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    ItemNotOwned : 2,
    ItemDataNotFound : 3,
    ItemTypeMismatch : 4,
    HeroSelectDataNotFound : 5,
    HeroNotSelectable : 6,
    HeroFragmentDataError : 7,
    HeroDataNotFound : 8,
    AwakeChallengeDataError : 9,
    AwakeItemDataError : 10
};

EnterLobby.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
EnterLobby.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

VisitDungeon.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    ChapterNotFound : 'ChapterNotFound',
    DungeonNotFound : 'DungeonNotFound',
    AlreadyVisited : 'AlreadyVisited',
    CannotVisitDungeon : 'CannotVisitDungeon'
};
VisitDungeon.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    ChapterNotFound : 2,
    DungeonNotFound : 3,
    AlreadyVisited : 4,
    CannotVisitDungeon : 5
};

GetMultiplayReward.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    InvalidHost : 'InvalidHost',
    MasterNotFound : 'MasterNotFound',
    MultiplayInfoNotFound : 'MultiplayInfoNotFound',
    WrongMember : 'WrongMember',
    NotCalculated : 'NotCalculated',
    AlreadyRewarded : 'AlreadyRewarded'
};
GetMultiplayReward.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    InvalidHost : 2,
    MasterNotFound : 3,
    MultiplayInfoNotFound : 4,
    WrongMember : 5,
    NotCalculated : 6,
    AlreadyRewarded : 7
};

ApplyForMultiplayReward.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    InvalidHost : 'InvalidHost',
    MasterNotFound : 'MasterNotFound',
    MultiplayInfoNotFound : 'MultiplayInfoNotFound',
    WrongMember : 'WrongMember',
    AlreadyRewardCalculated : 'AlreadyRewardCalculated'
};
ApplyForMultiplayReward.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    InvalidHost : 2,
    MasterNotFound : 3,
    MultiplayInfoNotFound : 4,
    WrongMember : 5,
    AlreadyRewardCalculated : 6
};

GetSelectedReward.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
GetSelectedReward.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

GetKeyDecoder.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
GetKeyDecoder.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

RechargeUndergroundPrisonKey.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NotEnoughGem : 'NotEnoughGem',
    MaxUndergroundPrisonKey : 'MaxUndergroundPrisonKey'
};
RechargeUndergroundPrisonKey.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NotEnoughGem : 2,
    MaxUndergroundPrisonKey : 3
};

GetDOWDungeonInfo.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
GetDOWDungeonInfo.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

AwakenEquip.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    EquipNotOwned : 'EquipNotOwned',
    EquipDataNotFound : 'EquipDataNotFound',
    StatDataNotFound : 'StatDataNotFound',
    EquipGradeDataNotFound : 'EquipGradeDataNotFound',
    CannotAwakenYet : 'CannotAwakenYet',
    CannotAwakenMore : 'CannotAwakenMore',
    EmptyMaterialEquipItem : 'EmptyMaterialEquipItem',
    MaterialEquipItemPriceError : 'MaterialEquipItemPriceError',
    NotEnoughGold : 'NotEnoughGold',
    NotOwnedMaterialEquipItem : 'NotOwnedMaterialEquipItem',
    InvalidMaterialEquipItem : 'InvalidMaterialEquipItem',
    NoUpgradableMaterialEquipItem : 'NoUpgradableMaterialEquipItem'
};
AwakenEquip.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    EquipNotOwned : 2,
    EquipDataNotFound : 3,
    StatDataNotFound : 4,
    EquipGradeDataNotFound : 5,
    CannotAwakenYet : 6,
    CannotAwakenMore : 7,
    EmptyMaterialEquipItem : 8,
    MaterialEquipItemPriceError : 9,
    NotEnoughGold : 10,
    NotOwnedMaterialEquipItem : 11,
    InvalidMaterialEquipItem : 12,
    NoUpgradableMaterialEquipItem : 13
};

BreakEquip.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    EquipNotOwned : 'EquipNotOwned',
    EquipDataNotFound : 'EquipDataNotFound',
    Equipped : 'Equipped'
};
BreakEquip.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    EquipNotOwned : 2,
    EquipDataNotFound : 3,
    Equipped : 4
};

UnsetRune.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    EquipNotOwned : 'EquipNotOwned',
    NoEquippedRune : 'NoEquippedRune',
    PreservePriceError : 'PreservePriceError',
    NotEnoughGold : 'NotEnoughGold'
};
UnsetRune.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    EquipNotOwned : 2,
    NoEquippedRune : 3,
    PreservePriceError : 4,
    NotEnoughGold : 5
};

SetRune.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    EquipNotOwned : 'EquipNotOwned',
    RuneItemNotOwned : 'RuneItemNotOwned',
    AleadyOccupied : 'AleadyOccupied',
    EquipItemDataNotFound : 'EquipItemDataNotFound',
    EquipDataNotFound : 'EquipDataNotFound',
    RuneItemDataNotFound : 'RuneItemDataNotFound',
    RuneDataNotFound : 'RuneDataNotFound',
    PartTypeError : 'PartTypeError'
};
SetRune.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    EquipNotOwned : 2,
    RuneItemNotOwned : 3,
    AleadyOccupied : 4,
    EquipItemDataNotFound : 5,
    EquipDataNotFound : 6,
    RuneItemDataNotFound : 7,
    RuneDataNotFound : 8,
    PartTypeError : 9
};

UnsetEquip.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    HeroNotFound : 'HeroNotFound',
    EquipItemNotFound : 'EquipItemNotFound',
    UnequipFailed : 'UnequipFailed',
    RemoveFailed : 'RemoveFailed',
    NotEnoughGem : 'NotEnoughGem'
};
UnsetEquip.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    HeroNotFound : 2,
    EquipItemNotFound : 3,
    UnequipFailed : 4,
    RemoveFailed : 5,
    NotEnoughGem : 6
};

UnlockEquip.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NoHero : 'NoHero',
    HeroDataNotFound : 'HeroDataNotFound',
    InvalidHeroPartIndex : 'InvalidHeroPartIndex',
    AlreadyUnlocked : 'AlreadyUnlocked',
    NotEnoughGold : 'NotEnoughGold',
    UnlockFailed : 'UnlockFailed'
};
UnlockEquip.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NoHero : 2,
    HeroDataNotFound : 3,
    InvalidHeroPartIndex : 4,
    AlreadyUnlocked : 5,
    NotEnoughGold : 6,
    UnlockFailed : 7
};

SellEquip.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    EquipNotOwned : 'EquipNotOwned',
    EquipDataNotFound : 'EquipDataNotFound',
    Equipped : 'Equipped',
    NotForSale : 'NotForSale'
};
SellEquip.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    EquipNotOwned : 2,
    EquipDataNotFound : 3,
    Equipped : 4,
    NotForSale : 5
};

SearchFriend.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    FriendNotFound : 'FriendNotFound',
    CannotSearchMyself : 'CannotSearchMyself'
};
SearchFriend.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    FriendNotFound : 2,
    CannotSearchMyself : 3
};

RejectFriend.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    FriendNotFound : 'FriendNotFound'
};
RejectFriend.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    FriendNotFound : 2
};

RequestFriend.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    FriendNotFound : 'FriendNotFound',
    RequestMyself : 'RequestMyself',
    MyFriendFull : 'MyFriendFull',
    TargetFriendFull : 'TargetFriendFull',
    TargetFriendWaitFull : 'TargetFriendWaitFull'
};
RequestFriend.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    FriendNotFound : 2,
    RequestMyself : 3,
    MyFriendFull : 4,
    TargetFriendFull : 5,
    TargetFriendWaitFull : 6
};

GetGuildAllMercenaries.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NoMercenaries : 'NoMercenaries'
};
GetGuildAllMercenaries.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NoMercenaries : 2
};

CancelRequestJoinGuild.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    GuildJoinNotRequested : 'GuildJoinNotRequested'
};
CancelRequestJoinGuild.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    GuildJoinNotRequested : 2
};

GetJoinRequestedGuilds.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
GetJoinRequestedGuilds.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

CheckGuildName.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NameDuplicated : 'NameDuplicated'
};
CheckGuildName.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NameDuplicated : 2
};

WithdrawGuild.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    InvalidRank : 'InvalidRank'
};
WithdrawGuild.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    InvalidRank : 2
};

RequestJoinGuild.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NoGuild : 'NoGuild',
    MaxMember : 'MaxMember',
    MaxJoinRequest : 'MaxJoinRequest',
    GuildMaxJoinRequest : 'GuildMaxJoinRequest',
    AlreadyJoinRequested : 'AlreadyJoinRequested',
    InvalidGuildLevel : 'InvalidGuildLevel',
    AlreadyJoined : 'AlreadyJoined'
};
RequestJoinGuild.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NoGuild : 2,
    MaxMember : 3,
    MaxJoinRequest : 4,
    GuildMaxJoinRequest : 5,
    AlreadyJoinRequested : 6,
    InvalidGuildLevel : 7,
    AlreadyJoined : 8
};

RejectJoinRequest.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    GuildJoinNotRequested : 'GuildJoinNotRequested'
};
RejectJoinRequest.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    GuildJoinNotRequested : 2
};

GetGuildBasicInfo.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NoGuild : 'NoGuild'
};
GetGuildBasicInfo.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NoGuild : 2
};

ApplyGuildSettingChange.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    InvalidRank : 'InvalidRank'
};
ApplyGuildSettingChange.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    InvalidRank : 2
};

AcceptJoinRequest.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    MaxMember : 'MaxMember',
    AlreadyJoined : 'AlreadyJoined',
    InvalidGuildLevel : 'InvalidGuildLevel'
};
AcceptJoinRequest.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    MaxMember : 2,
    AlreadyJoined : 3,
    InvalidGuildLevel : 4
};

DelegateMaster.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    InvalidRank : 'InvalidRank'
};
DelegateMaster.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    InvalidRank : 2
};

DestroyGuild.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    InvalidRank : 'InvalidRank',
    GuildMemberExist : 'GuildMemberExist'
};
DestroyGuild.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    InvalidRank : 2,
    GuildMemberExist : 3
};

CreateGuild.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    AlreadyJoined : 'AlreadyJoined',
    NotEnoughGold : 'NotEnoughGold',
    NotEnoughTeamLevel : 'NotEnoughTeamLevel',
    NameDuplicated : 'NameDuplicated'
};
CreateGuild.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    AlreadyJoined : 2,
    NotEnoughGold : 3,
    NotEnoughTeamLevel : 4,
    NameDuplicated : 5
};

GetGuildList.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
GetGuildList.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

GetJoinRequestPlayers.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    InvalidRank : 'InvalidRank'
};
GetJoinRequestPlayers.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    InvalidRank : 2
};

SearchGuild.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NoGuild : 'NoGuild'
};
SearchGuild.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NoGuild : 2
};

SetGuildAdminRank.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    InvalidRank : 'InvalidRank'
};
SetGuildAdminRank.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    InvalidRank : 2
};

UnregisterMercenary.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NotRegisteredMercenary : 'NotRegisteredMercenary',
    MinRegisterTimeNotElapsed : 'MinRegisterTimeNotElapsed'
};
UnregisterMercenary.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NotRegisteredMercenary : 2,
    MinRegisterTimeNotElapsed : 3
};

RegisterMercenary.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    AlreadyRegisteredMercenary : 'AlreadyRegisteredMercenary',
    MaxMercenary : 'MaxMercenary'
};
RegisterMercenary.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    AlreadyRegisteredMercenary : 2,
    MaxMercenary : 3
};

KickGuildMember.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    InvailidRank : 'InvailidRank'
};
KickGuildMember.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    InvailidRank : 2
};

LearnHeroSkill.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NoHero : 'NoHero',
    SkillNotFound : 'SkillNotFound',
    SkillAlreadyLearned : 'SkillAlreadyLearned',
    NotEnoughItem : 'NotEnoughItem',
    BookItemDataNotFound : 'BookItemDataNotFound'
};
LearnHeroSkill.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NoHero : 2,
    SkillNotFound : 3,
    SkillAlreadyLearned : 4,
    NotEnoughItem : 5,
    BookItemDataNotFound : 6
};

ExtendHeroSkill.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NoHero : 'NoHero',
    SkillNotFound : 'SkillNotFound',
    SkillNotLearned : 'SkillNotLearned',
    InvalidSkillExtend : 'InvalidSkillExtend',
    NotEnoughItem : 'NotEnoughItem',
    BookItemDataNotFound : 'BookItemDataNotFound'
};
ExtendHeroSkill.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NoHero : 2,
    SkillNotFound : 3,
    SkillNotLearned : 4,
    InvalidSkillExtend : 5,
    NotEnoughItem : 6,
    BookItemDataNotFound : 7
};

PurifyHero.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NoHero : 'NoHero',
    MaxPurified : 'MaxPurified',
    MaxHeroStar : 'MaxHeroStar',
    NoAwakeMaterial : 'NoAwakeMaterial',
    PurifyDataNotFound : 'PurifyDataNotFound',
    InvalidPurifyData : 'InvalidPurifyData',
    NotEnoughGold : 'NotEnoughGold'
};
PurifyHero.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NoHero : 2,
    MaxPurified : 3,
    MaxHeroStar : 4,
    NoAwakeMaterial : 5,
    PurifyDataNotFound : 6,
    InvalidPurifyData : 7,
    NotEnoughGold : 8
};

UseRecipeItem.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    ItemNotOwned : 'ItemNotOwned',
    ItemDataNotFound : 'ItemDataNotFound',
    ItemTypeMismatch : 'ItemTypeMismatch',
    RecipeDataNotFound : 'RecipeDataNotFound',
    ResultItemDataNotFound : 'ResultItemDataNotFound',
    ResultEquipItemDataNotFound : 'ResultEquipItemDataNotFound',
    EquipItemFull : 'EquipItemFull',
    MaterialDataNotFound : 'MaterialDataNotFound',
    NotEnoughMaterial : 'NotEnoughMaterial',
    NotEnoughGold : 'NotEnoughGold'
};
UseRecipeItem.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    ItemNotOwned : 2,
    ItemDataNotFound : 3,
    ItemTypeMismatch : 4,
    RecipeDataNotFound : 5,
    ResultItemDataNotFound : 6,
    ResultEquipItemDataNotFound : 7,
    EquipItemFull : 8,
    MaterialDataNotFound : 9,
    NotEnoughMaterial : 10,
    NotEnoughGold : 11
};

UsePotionItem.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    ItemNotOwned : 'ItemNotOwned',
    ItemDataNotFound : 'ItemDataNotFound',
    ItemTypeMismatch : 'ItemTypeMismatch',
    PotionDataNotFound : 'PotionDataNotFound',
    InvalidAction : 'InvalidAction',
    InvalidItemCount : 'InvalidItemCount',
    InvalidHeroIndex : 'InvalidHeroIndex',
    InvalidHeroExp : 'InvalidHeroExp',
    HeroNotOwned : 'HeroNotOwned',
    MaxHeroLevel : 'MaxHeroLevel'
};
UsePotionItem.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    ItemNotOwned : 2,
    ItemDataNotFound : 3,
    ItemTypeMismatch : 4,
    PotionDataNotFound : 5,
    InvalidAction : 6,
    InvalidItemCount : 7,
    InvalidHeroIndex : 8,
    InvalidHeroExp : 9,
    HeroNotOwned : 10,
    MaxHeroLevel : 11
};

CheckNewMail.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
CheckNewMail.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

GetGlobalMailList.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
GetGlobalMailList.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

GetMailListByPage.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
GetMailListByPage.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

ReceiveAllMail.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
ReceiveAllMail.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

ReceiveMail.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
ReceiveMail.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

GetMailList.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    MailNotFound : 'MailNotFound'
};
GetMailList.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    MailNotFound : 2
};

GetSeasonInfo.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
GetSeasonInfo.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

MatchTierType = {
    Bronze : 'Bronze',
    Silver : 'Silver',
    Gold : 'Gold',
    Platinum : 'Platinum',
    Diamond : 'Diamond',
    Master : 'Master',
    Challenger : 'Challenger'
};
MatchTierTypeValue = {
    Bronze : 0,
    Silver : 1,
    Gold : 2,
    Platinum : 3,
    Diamond : 4,
    Master : 5,
    Challenger : 6
};

GetMatchRank.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    MatchResultNotFound : 'MatchResultNotFound',
    MatchUidMismatch : 'MatchUidMismatch'
};
GetMatchRank.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    MatchResultNotFound : 2,
    MatchUidMismatch : 3
};

GetMatchRanker.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    MatchResultNotFound : 'MatchResultNotFound',
    MatchUidMismatch : 'MatchUidMismatch'
};
GetMatchRanker.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    MatchResultNotFound : 2,
    MatchUidMismatch : 3
};

GetMatchResult.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    MatchResultNotFound : 'MatchResultNotFound',
    MatchUidMismatch : 'MatchUidMismatch'
};
GetMatchResult.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    MatchResultNotFound : 2,
    MatchUidMismatch : 3
};

SetOfflineMatchResult.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    MatchingDisabled : 'MatchingDisabled',
    MatchingAborted : 'MatchingAborted',
    MatchUserNotFound : 'MatchUserNotFound',
    MatchPlayerNotFound : 'MatchPlayerNotFound',
    NpcInfoNotFound : 'NpcInfoNotFound',
    MissingBattleLog : 'MissingBattleLog'
};
SetOfflineMatchResult.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    MatchingDisabled : 2,
    MatchingAborted : 3,
    MatchUserNotFound : 4,
    MatchPlayerNotFound : 5,
    NpcInfoNotFound : 6,
    MissingBattleLog : 7
};

UseCoupon.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    MissingCouponCode : 'MissingCouponCode',
    MissingCountryCode : 'MissingCountryCode',
    Progressing : 'Progressing',
    CouponNotFound : 'CouponNotFound',
    AlreadyReceived : 'AlreadyReceived',
    CountryCodeMismatch : 'CountryCodeMismatch',
    CouponExpired : 'CouponExpired',
    PromotionNotFound : 'PromotionNotFound',
    AlreadyUsedPromotion : 'AlreadyUsedPromotion'
};
UseCoupon.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    MissingCouponCode : 2,
    MissingCountryCode : 3,
    Progressing : 4,
    CouponNotFound : 5,
    AlreadyReceived : 6,
    CountryCodeMismatch : 7,
    CouponExpired : 8,
    PromotionNotFound : 9,
    AlreadyUsedPromotion : 10
};

GetReplay.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
GetReplay.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

SaveReplay.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    TypeError : 'TypeError',
    InfoError : 'InfoError',
    AccountIdsError : 'AccountIdsError'
};
SaveReplay.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    TypeError : 2,
    InfoError : 3,
    AccountIdsError : 4
};

GetReplayList.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
GetReplayList.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

CompleteScenarioQuest.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    ScenarioQuestDataNotFound : 'ScenarioQuestDataNotFound',
    NotEnoughProgress : 'NotEnoughProgress'
};
CompleteScenarioQuest.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    ScenarioQuestDataNotFound : 2,
    NotEnoughProgress : 3
};

BuyCashShopItem.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    ShopDataNotFound : 'ShopDataNotFound',
    InvalidShopData : 'InvalidShopData',
    ShopItemDataNotFound : 'ShopItemDataNotFound',
    InvalidCost : 'InvalidCost',
    NotMonthlyEnded : 'NotMonthlyEnded',
    NotGuildMember : 'NotGuildMember'
};
BuyCashShopItem.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    ShopDataNotFound : 2,
    InvalidShopData : 3,
    ShopItemDataNotFound : 4,
    InvalidCost : 5,
    NotMonthlyEnded : 6,
    NotGuildMember : 7
};

BuyHero.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    HeroAlreadyExist : 'HeroAlreadyExist',
    NotEnoughGem : 'NotEnoughGem',
    InvalidItemIndex : 'InvalidItemIndex',
    InvalidItemData : 'InvalidItemData',
    InvalidPrice : 'InvalidPrice'
};
BuyHero.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    HeroAlreadyExist : 2,
    NotEnoughGem : 3,
    InvalidItemIndex : 4,
    InvalidItemData : 5,
    InvalidPrice : 6
};

BuyPayShopItem.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    ShopItemDataNotFound : 'ShopItemDataNotFound',
    ItemDataNotFound : 'ItemDataNotFound',
    NotEnoughGem : 'NotEnoughGem',
    AlreadyPurchased : 'AlreadyPurchased',
    NotEnoughMileage : 'NotEnoughMileage',
    ExceededMonthyPurchasableCount : 'ExceededMonthyPurchasableCount',
    InvalidPayShopType : 'InvalidPayShopType',
    InvalidShopItemData : 'InvalidShopItemData'
};
BuyPayShopItem.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    ShopItemDataNotFound : 2,
    ItemDataNotFound : 3,
    NotEnoughGem : 4,
    AlreadyPurchased : 5,
    NotEnoughMileage : 6,
    ExceededMonthyPurchasableCount : 7,
    InvalidPayShopType : 8,
    InvalidShopItemData : 9
};

GetPayShopItems.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
GetPayShopItems.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

GetStoreItemList.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    MissingLanguage : 'MissingLanguage'
};
GetStoreItemList.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    MissingLanguage : 2
};

GetAwakeMaterialChallenge.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NotOpenedClassDungeon : 'NotOpenedClassDungeon',
    NoHero : 'NoHero',
    MaxHeroStar : 'MaxHeroStar',
    AlreadyGetChallenge : 'AlreadyGetChallenge',
    AlreadyHaveMaterial : 'AlreadyHaveMaterial',
    InvalidHeroClass : 'InvalidHeroClass',
    NotEnoughItem : 'NotEnoughItem'
};
GetAwakeMaterialChallenge.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NotOpenedClassDungeon : 2,
    NoHero : 3,
    MaxHeroStar : 4,
    AlreadyGetChallenge : 5,
    AlreadyHaveMaterial : 6,
    InvalidHeroClass : 7,
    NotEnoughItem : 8
};

CompleteTutorial.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    TutorialDataNotFound : 'TutorialDataNotFound',
    AlreadyCompleted : 'AlreadyCompleted'
};
CompleteTutorial.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    TutorialDataNotFound : 2,
    AlreadyCompleted : 3
};

BuyStamina.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NotEnoughGem : 'NotEnoughGem'
};
BuyStamina.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NotEnoughGem : 2
};

GetCertificate.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
GetCertificate.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

DumpUser.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NotAllowed : 'NotAllowed',
    NoAccountId : 'NoAccountId',
    NotFound : 'NotFound'
};
DumpUser.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NotAllowed : 2,
    NoAccountId : 3,
    NotFound : 4
};

GetStamina.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
GetStamina.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

GetLoginId.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NotAllowed : 'NotAllowed',
    NoAccountId : 'NoAccountId',
    NotFound : 'NotFound',
    SignedOut : 'SignedOut'
};
GetLoginId.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NotAllowed : 2,
    NoAccountId : 3,
    NotFound : 4,
    SignedOut : 5
};

LinkAccount.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NotImplementedMethod : 'NotImplementedMethod',
    CannotLinkGuest : 'CannotLinkGuest',
    AlreadyLinkedId : 'AlreadyLinkedId'
};
LinkAccount.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NotImplementedMethod : 2,
    CannotLinkGuest : 3,
    AlreadyLinkedId : 4
};

InitDeviceId.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
InitDeviceId.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

QuerySession.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
QuerySession.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

RegisterDeviceToken.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
RegisterDeviceToken.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

QueryMarketUrl.MarketType = {
    Android : 'Android',
    IOS : 'IOS'
};
QueryMarketUrl.MarketTypeValue = {
    Android : 0,
    IOS : 1
};

QueryMarketUrl.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
QueryMarketUrl.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

SignOut.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
SignOut.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

QueryNick.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    EmptyNick : 'EmptyNick',
    InvalidNick : 'InvalidNick',
    AlreadyExist : 'AlreadyExist',
    TooShortNick : 'TooShortNick',
    TooLongNick : 'TooLongNick',
    CensoredWord : 'CensoredWord'
};
QueryNick.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    EmptyNick : 2,
    InvalidNick : 3,
    AlreadyExist : 4,
    TooShortNick : 5,
    TooLongNick : 6,
    CensoredWord : 7
};

ChangeAvatarHero.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    InvalidHeroIndex : 'InvalidHeroIndex'
};
ChangeAvatarHero.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    InvalidHeroIndex : 2
};

InspectUser.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NoTargetAccountId : 'NoTargetAccountId'
};
InspectUser.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NoTargetAccountId : 2
};

SearchUser.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
SearchUser.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

UpgradeEquip.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    EquipNotOwned : 'EquipNotOwned',
    EquipDataNotFound : 'EquipDataNotFound',
    StatDataNotFound : 'StatDataNotFound',
    CannotUpgradeMore : 'CannotUpgradeMore',
    EmptyMaterialEquipItem : 'EmptyMaterialEquipItem',
    MaterialEquipItemPriceError : 'MaterialEquipItemPriceError',
    NotEnoughGold : 'NotEnoughGold',
    NotOwnedMaterialEquipItem : 'NotOwnedMaterialEquipItem',
    InvalidMaterialItem : 'InvalidMaterialItem',
    InvalidMaterialEquipItem : 'InvalidMaterialEquipItem',
    NoUpgradableMaterialEquipItem : 'NoUpgradableMaterialEquipItem',
    InvalidReqItemExpData : 'InvalidReqItemExpData'
};
UpgradeEquip.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    EquipNotOwned : 2,
    EquipDataNotFound : 3,
    StatDataNotFound : 4,
    CannotUpgradeMore : 5,
    EmptyMaterialEquipItem : 6,
    MaterialEquipItemPriceError : 7,
    NotEnoughGold : 8,
    NotOwnedMaterialEquipItem : 9,
    InvalidMaterialItem : 10,
    InvalidMaterialEquipItem : 11,
    NoUpgradableMaterialEquipItem : 12,
    InvalidReqItemExpData : 13
};

CancelMatch.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
CancelMatch.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

WaitMatch.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    WaitMore : 'WaitMore',
    WaiterNotFound : 'WaiterNotFound',
    MatchingDisabled : 'MatchingDisabled',
    NotEnoughSword : 'NotEnoughSword'
};
WaitMatch.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    WaitMore : 2,
    WaiterNotFound : 3,
    MatchingDisabled : 4,
    NotEnoughSword : 5
};

RegisterMatch.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    MatchingDisabled : 'MatchingDisabled',
    NotEnoughSword : 'NotEnoughSword'
};
RegisterMatch.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    MatchingDisabled : 2,
    NotEnoughSword : 3
};

CheckConsume.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NotSameDeveloperPayload : 'NotSameDeveloperPayload',
    NotSameProductId : 'NotSameProductId',
    WrongPurchaseStatus : 'WrongPurchaseStatus',
    VerificationFailed : 'VerificationFailed',
    InvalidConsumptionState : 'InvalidConsumptionState',
    NoShopData : 'NoShopData',
    ShopItemDataNotFound : 'ShopItemDataNotFound',
    PurchaseInfoNotFound : 'PurchaseInfoNotFound'
};
CheckConsume.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NotSameDeveloperPayload : 2,
    NotSameProductId : 3,
    WrongPurchaseStatus : 4,
    VerificationFailed : 5,
    InvalidConsumptionState : 6,
    NoShopData : 7,
    ShopItemDataNotFound : 8,
    PurchaseInfoNotFound : 9
};

CheckPurchase.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NotSameDeveloperPayload : 'NotSameDeveloperPayload',
    NotSameProductId : 'NotSameProductId',
    WrongPurchaseStatus : 'WrongPurchaseStatus',
    PurchaseInfoNotFound : 'PurchaseInfoNotFound'
};
CheckPurchase.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NotSameDeveloperPayload : 2,
    NotSameProductId : 3,
    WrongPurchaseStatus : 4,
    PurchaseInfoNotFound : 5
};

ExecIOSPayment.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    VerifyFailed : 'VerifyFailed',
    NoShopData : 'NoShopData',
    ShopItemDataNotFound : 'ShopItemDataNotFound',
    PurchaseInfoNotFound : 'PurchaseInfoNotFound'
};
ExecIOSPayment.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    VerifyFailed : 2,
    NoShopData : 3,
    ShopItemDataNotFound : 4,
    PurchaseInfoNotFound : 5
};

GetDeveloperPayload.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NoShopData : 'NoShopData',
    ShopItemDataNotFound : 'ShopItemDataNotFound',
    NotMonthlyEnded : 'NotMonthlyEnded',
    ExceededMonthyPurchasableCount : 'ExceededMonthyPurchasableCount',
    BuyDisabled : 'BuyDisabled',
    NeedCompleteInAppPurchase : 'NeedCompleteInAppPurchase'
};
GetDeveloperPayload.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NoShopData : 2,
    ShopItemDataNotFound : 3,
    NotMonthlyEnded : 4,
    ExceededMonthyPurchasableCount : 5,
    BuyDisabled : 6,
    NeedCompleteInAppPurchase : 7
};

SellItem.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NoItemData : 'NoItemData',
    NoSellCount : 'NoSellCount',
    NotOwned : 'NotOwned',
    InvalidItemCount : 'InvalidItemCount'
};
SellItem.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NoItemData : 2,
    NoSellCount : 3,
    NotOwned : 4,
    InvalidItemCount : 5
};

BuyShopItem.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    ShopDataNotFound : 'ShopDataNotFound',
    ShopItemDataNotFound : 'ShopItemDataNotFound',
    ItemDataNotFound : 'ItemDataNotFound',
    PlayerShopItemNotFound : 'PlayerShopItemNotFound',
    SoldOut : 'SoldOut',
    NotEnoughGold : 'NotEnoughGold',
    NotEnoughGem : 'NotEnoughGem',
    NotEnoughPvpCoin : 'NotEnoughPvpCoin',
    NotEnoughGuildPoint : 'NotEnoughGuildPoint',
    InvalidCost : 'InvalidCost',
    NotGuildMember : 'NotGuildMember',
    InvalidShopItemListIndex : 'InvalidShopItemListIndex',
    InvalidItemType : 'InvalidItemType',
    NotEnoughRoyalPoint : 'NotEnoughRoyalPoint',
    ShopRestockInfoNotFound : 'ShopRestockInfoNotFound',
    EquipItemFull : 'EquipItemFull'
};
BuyShopItem.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    ShopDataNotFound : 2,
    ShopItemDataNotFound : 3,
    ItemDataNotFound : 4,
    PlayerShopItemNotFound : 5,
    SoldOut : 6,
    NotEnoughGold : 7,
    NotEnoughGem : 8,
    NotEnoughPvpCoin : 9,
    NotEnoughGuildPoint : 10,
    InvalidCost : 11,
    NotGuildMember : 12,
    InvalidShopItemListIndex : 13,
    InvalidItemType : 14,
    NotEnoughRoyalPoint : 15,
    ShopRestockInfoNotFound : 16,
    EquipItemFull : 17
};

RequestShopList.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NotEnoughGem : 'NotEnoughGem',
    NoShopData : 'NoShopData'
};
RequestShopList.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NotEnoughGem : 2,
    NoShopData : 3
};

GetShopList.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NoShopData : 'NoShopData',
    NoShopItemInfo : 'NoShopItemInfo',
    NoShopItemData : 'NoShopItemData'
};
GetShopList.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NoShopData : 2,
    NoShopItemInfo : 3,
    NoShopItemData : 4
};

BeginCampaign.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    EquipItemFull : 'EquipItemFull',
    ChapterNotFound : 'ChapterNotFound',
    DungeonNotFound : 'DungeonNotFound',
    LinkedDungeonNotFound : 'LinkedDungeonNotFound',
    AlreadyCompleted : 'AlreadyCompleted',
    DungeonTypeError : 'DungeonTypeError',
    CannotVisitDungeon : 'CannotVisitDungeon',
    EmptyHeroIndices : 'EmptyHeroIndices',
    CannotPlayDungeon : 'CannotPlayDungeon',
    NotEnoughStamina : 'NotEnoughStamina',
    NotEnoughGem : 'NotEnoughGem',
    NotEnoughChallengeChance : 'NotEnoughChallengeChance',
    NotEnoughDungeonKey : 'NotEnoughDungeonKey',
    InvalidTrialHero : 'InvalidTrialHero',
    InvalidDiff : 'InvalidDiff',
    NotOpenedDungeon : 'NotOpenedDungeon',
    WorldMapEventNotFound : 'WorldMapEventNotFound',
    EventDungeonIndexMismatch : 'EventDungeonIndexMismatch',
    NotEnoughMultiplayMembers : 'NotEnoughMultiplayMembers',
    MaxDailyCount : 'MaxDailyCount',
    CheckingIntegrity : 'CheckingIntegrity',
    BattleServerNotFound : 'BattleServerNotFound',
    TowerDataNotFound : 'TowerDataNotFound',
    TowerFloorDataNotFound : 'TowerFloorDataNotFound',
    CannotEnterTowerFloor : 'CannotEnterTowerFloor',
    TowerChapterMismatch : 'TowerChapterMismatch',
    TowerDungeonMismatch : 'TowerDungeonMismatch',
    TowerTeamLevelLimit : 'TowerTeamLevelLimit',
    TowerReqDungeonNotCompleted : 'TowerReqDungeonNotCompleted',
    NotEnoughTowerCost : 'NotEnoughTowerCost',
    TowerNpcNotFound : 'TowerNpcNotFound',
    TowerNpcSlotNotFound : 'TowerNpcSlotNotFound',
    TowerNpcInfoNotFound : 'TowerNpcInfoNotFound',
    DiedHeroCache : 'DiedHeroCache',
    WrongTowerRewardNo : 'WrongTowerRewardNo',
    WrongDifficulty : 'WrongDifficulty',
    NotEnoughPlayKey : 'NotEnoughPlayKey'
};
BeginCampaign.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    EquipItemFull : 2,
    ChapterNotFound : 3,
    DungeonNotFound : 4,
    LinkedDungeonNotFound : 5,
    AlreadyCompleted : 6,
    DungeonTypeError : 7,
    CannotVisitDungeon : 8,
    EmptyHeroIndices : 9,
    CannotPlayDungeon : 10,
    NotEnoughStamina : 11,
    NotEnoughGem : 12,
    NotEnoughChallengeChance : 13,
    NotEnoughDungeonKey : 14,
    InvalidTrialHero : 15,
    InvalidDiff : 16,
    NotOpenedDungeon : 17,
    WorldMapEventNotFound : 18,
    EventDungeonIndexMismatch : 19,
    NotEnoughMultiplayMembers : 20,
    MaxDailyCount : 21,
    CheckingIntegrity : 22,
    BattleServerNotFound : 23,
    TowerDataNotFound : 24,
    TowerFloorDataNotFound : 25,
    CannotEnterTowerFloor : 26,
    TowerChapterMismatch : 27,
    TowerDungeonMismatch : 28,
    TowerTeamLevelLimit : 29,
    TowerReqDungeonNotCompleted : 30,
    NotEnoughTowerCost : 31,
    TowerNpcNotFound : 32,
    TowerNpcSlotNotFound : 33,
    TowerNpcInfoNotFound : 34,
    DiedHeroCache : 35,
    WrongTowerRewardNo : 36,
    WrongDifficulty : 37,
    NotEnoughPlayKey : 38
};

SetEquip.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NoHero : 'NoHero',
    HeroDataNotFound : 'HeroDataNotFound',
    EquipNotOwned : 'EquipNotOwned',
    AlreadyOtherHeroEquipped : 'AlreadyOtherHeroEquipped',
    ItemDataNotFound : 'ItemDataNotFound',
    EquipItemDataNotFound : 'EquipItemDataNotFound',
    EquipTagError : 'EquipTagError',
    EquipCreatureError : 'EquipCreatureError',
    TooLowGrade : 'TooLowGrade',
    TooLowLevel : 'TooLowLevel',
    LockedPartIndex : 'LockedPartIndex',
    EquipPartError : 'EquipPartError',
    RemoveFailed : 'RemoveFailed',
    NotEnoughGem : 'NotEnoughGem',
    UnequipOldFailed : 'UnequipOldFailed',
    EquipFailed : 'EquipFailed'
};
SetEquip.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NoHero : 2,
    HeroDataNotFound : 3,
    EquipNotOwned : 4,
    AlreadyOtherHeroEquipped : 5,
    ItemDataNotFound : 6,
    EquipItemDataNotFound : 7,
    EquipTagError : 8,
    EquipCreatureError : 9,
    TooLowGrade : 10,
    TooLowLevel : 11,
    LockedPartIndex : 12,
    EquipPartError : 13,
    RemoveFailed : 14,
    NotEnoughGem : 15,
    UnequipOldFailed : 16,
    EquipFailed : 17
};

Ping.ResultType = {
    Fail : 'Fail',
    Success : 'Success'
};
Ping.ResultTypeValue = {
    Fail : 0,
    Success : 1
};

UpgradeHeroSkill.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    NoHero : 'NoHero',
    SkillLevelNotFound : 'SkillLevelNotFound',
    SkillPriceNotFound : 'SkillPriceNotFound',
    CannotUpgradeMore : 'CannotUpgradeMore',
    TeamLevelLimit : 'TeamLevelLimit',
    SkillNotFound : 'SkillNotFound',
    ReqGoldError : 'ReqGoldError',
    NotEnoughGold : 'NotEnoughGold',
    GradeDataNotFound : 'GradeDataNotFound',
    CreatureDataNotFound : 'CreatureDataNotFound',
    UpgradeBookDataNotFound : 'UpgradeBookDataNotFound',
    NotEnoughItem : 'NotEnoughItem'
};
UpgradeHeroSkill.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    NoHero : 2,
    SkillLevelNotFound : 3,
    SkillPriceNotFound : 4,
    CannotUpgradeMore : 5,
    TeamLevelLimit : 6,
    SkillNotFound : 7,
    ReqGoldError : 8,
    NotEnoughGold : 9,
    GradeDataNotFound : 10,
    CreatureDataNotFound : 11,
    UpgradeBookDataNotFound : 12,
    NotEnoughItem : 13
};

UpgradeHeroStar.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    StarDataNotFound : 'StarDataNotFound',
    CannotUpgradeMore : 'CannotUpgradeMore',
    NotEnoughStone : 'NotEnoughStone',
    NotEnoughGold : 'NotEnoughGold'
};
UpgradeHeroStar.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    StarDataNotFound : 2,
    CannotUpgradeMore : 3,
    NotEnoughStone : 4,
    NotEnoughGold : 5
};

EndCampaign.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    ChapterNotFound : 'ChapterNotFound',
    DungeonNotFound : 'DungeonNotFound',
    UserCampaignInfoNotFound : 'UserCampaignInfoNotFound',
    WrongChapterIndex : 'WrongChapterIndex',
    WrongDungeonIndex : 'WrongDungeonIndex',
    NotEnoughStamina : 'NotEnoughStamina',
    InvalidStar : 'InvalidStar',
    DifficultyMismatch : 'DifficultyMismatch',
    MissingBattleType : 'MissingBattleType',
    MissingBattleLog : 'MissingBattleLog',
    MissingCreatureInfo : 'MissingCreatureInfo',
    RequestIntegrityCheckError : 'RequestIntegrityCheckError',
    MissingTowerCreatureInfo : 'MissingTowerCreatureInfo',
    ParsingTowerCreatureInfoError : 'ParsingTowerCreatureInfoError',
    EmptyTowerEnterHeroes : 'EmptyTowerEnterHeroes',
    HeroNotFound : 'HeroNotFound'
};
EndCampaign.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    ChapterNotFound : 2,
    DungeonNotFound : 3,
    UserCampaignInfoNotFound : 4,
    WrongChapterIndex : 5,
    WrongDungeonIndex : 6,
    NotEnoughStamina : 7,
    InvalidStar : 8,
    DifficultyMismatch : 9,
    MissingBattleType : 10,
    MissingBattleLog : 11,
    MissingCreatureInfo : 12,
    RequestIntegrityCheckError : 13,
    MissingTowerCreatureInfo : 14,
    ParsingTowerCreatureInfoError : 15,
    EmptyTowerEnterHeroes : 16,
    HeroNotFound : 17
};

Login.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    VersionError : 'VersionError',
    Retry : 'Retry',
    NotImplementedMethod : 'NotImplementedMethod',
    ServerClosing : 'ServerClosing',
    NotEncrypted : 'NotEncrypted',
    SaltError : 'SaltError',
    NoSecureKey : 'NoSecureKey',
    SaltNotDecrypted : 'SaltNotDecrypted',
    KeyNotDecrypted : 'KeyNotDecrypted',
    SaltMismatch : 'SaltMismatch',
    LoginIdNotDecrypted : 'LoginIdNotDecrypted',
    DecryptFail : 'DecryptFail',
    Blocked : 'Blocked'
};
Login.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    VersionError : 2,
    Retry : 3,
    NotImplementedMethod : 4,
    ServerClosing : 5,
    NotEncrypted : 6,
    SaltError : 7,
    NoSecureKey : 8,
    SaltNotDecrypted : 9,
    KeyNotDecrypted : 10,
    SaltMismatch : 11,
    LoginIdNotDecrypted : 12,
    DecryptFail : 13,
    Blocked : 14
};

RewardWantedQuest.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    InvalidQuestIndex : 'InvalidQuestIndex',
    QuestInfoNotFound : 'QuestInfoNotFound',
    QuestNotCleared : 'QuestNotCleared'
};
RewardWantedQuest.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    InvalidQuestIndex : 2,
    QuestInfoNotFound : 3,
    QuestNotCleared : 4
};

ReceiveCompletedReward.ResultType = {
    Fail : 'Fail',
    Success : 'Success',
    WorldMapEventNotFound : 'WorldMapEventNotFound',
    ChapterNotFound : 'ChapterNotFound',
    DungeonNotFound : 'DungeonNotFound',
    CannotVisitDungeon : 'CannotVisitDungeon',
    NotCompleted : 'NotCompleted'
};
ReceiveCompletedReward.ResultTypeValue = {
    Fail : 0,
    Success : 1,
    WorldMapEventNotFound : 2,
    ChapterNotFound : 3,
    DungeonNotFound : 4,
    CannotVisitDungeon : 5,
    NotCompleted : 6
};

CachedUserInfo = function () {
    this.AccountId = 0;
    this.TeamLevel = 0;
    this.Nick = '';
    this.VIPLevel = 0;
    this.AvatarHeroIndex = 0;
    this.LastLoginTime = '';
    this.LastLogoutTime = '';
    this.TierIndex = 0;
    this.IsOnline = false;
};

CachedUserInfoKey = {
    AccountId : 'AccountId',
    TeamLevel : 'TeamLevel',
    Nick : 'Nick',
    VIPLevel : 'VIPLevel',
    AvatarHeroIndex : 'AvatarHeroIndex',
    LastLoginTime : 'LastLoginTime',
    LastLogoutTime : 'LastLogoutTime',
    TierIndex : 'TierIndex',
    IsOnline : 'IsOnline'
};

FriendUserInfo = function () {
    this.InvitedTime = '';
    this.AccountId = 0;
    this.TeamLevel = 0;
    this.Nick = '';
    this.VIPLevel = 0;
    this.AvatarHeroIndex = 0;
    this.LastLoginTime = '';
    this.LastLogoutTime = '';
    this.TierIndex = 0;
    this.IsOnline = false;
};

FriendUserInfoKey = {
    InvitedTime : 'InvitedTime',
    AccountId : 'AccountId',
    TeamLevel : 'TeamLevel',
    Nick : 'Nick',
    VIPLevel : 'VIPLevel',
    AvatarHeroIndex : 'AvatarHeroIndex',
    LastLoginTime : 'LastLoginTime',
    LastLogoutTime : 'LastLogoutTime',
    TierIndex : 'TierIndex',
    IsOnline : 'IsOnline'
};

HeroInfo = function () {
    //this.CreatureData = new CreatureData();
    this.HeroIndex = 0;
    this.Level = 0;
    this.Exp = 0;
    this.Star = 0;
    this.CreatedTime = '';
    this.SkillLevel1 = 0;
    this.SkillLevel2 = 0;
    this.SkillLevel3 = 0;
    this.SkillLevel4 = 0;
    this.SkillLevel5 = 0;
    this.EquipItemSlotIndex1 = 0;
    this.EquipItemSlotIndex2 = 0;
    this.EquipItemSlotIndex3 = 0;
    this.EquipItemSlotIndex4 = 0;
    this.EquipItemSlotIndex5 = 0;
    this.EquipItemSlotOpen1 = 0;
    this.EquipItemSlotOpen2 = 0;
    this.SkillExtend1 = 0;
    this.SkillExtend2 = 0;
    this.SkillExtend3 = 0;
    this.SkillExtend4 = 0;
    this.SkillExtend5 = 0;
    this.EnterDungeon = 0;
    this.Purified = 0;
    this.Enhanced = 0;
};

HeroInfoKey = {
    CreatureData : 'CreatureData',
    HeroIndex : 'HeroIndex',
    Level : 'Level',
    Exp : 'Exp',
    Star : 'Star',
    CreatedTime : 'CreatedTime',
    SkillLevel1 : 'SkillLevel1',
    SkillLevel2 : 'SkillLevel2',
    SkillLevel3 : 'SkillLevel3',
    SkillLevel4 : 'SkillLevel4',
    SkillLevel5 : 'SkillLevel5',
    EquipItemSlotIndex1 : 'EquipItemSlotIndex1',
    EquipItemSlotIndex2 : 'EquipItemSlotIndex2',
    EquipItemSlotIndex3 : 'EquipItemSlotIndex3',
    EquipItemSlotIndex4 : 'EquipItemSlotIndex4',
    EquipItemSlotIndex5 : 'EquipItemSlotIndex5',
    EquipItemSlotOpen1 : 'EquipItemSlotOpen1',
    EquipItemSlotOpen2 : 'EquipItemSlotOpen2',
    SkillExtend1 : 'SkillExtend1',
    SkillExtend2 : 'SkillExtend2',
    SkillExtend3 : 'SkillExtend3',
    SkillExtend4 : 'SkillExtend4',
    SkillExtend5 : 'SkillExtend5',
    EnterDungeon : 'EnterDungeon',
    Purified : 'Purified',
    Enhanced : 'Enhanced'
};

CachedHeroInfo = function () {
    //this.EquipItemInfo1 = new EquipItemInfo();
    //this.EquipItemInfo2 = new EquipItemInfo();
    //this.EquipItemInfo3 = new EquipItemInfo();
    //this.EquipItemInfo4 = new EquipItemInfo();
    //this.EquipItemInfo5 = new EquipItemInfo();
    this.HeroIndex = 0;
    this.Level = 0;
    this.Exp = 0;
    this.Star = 0;
    this.CreatedTime = '';
    this.SkillLevel1 = 0;
    this.SkillLevel2 = 0;
    this.SkillLevel3 = 0;
    this.SkillLevel4 = 0;
    this.SkillLevel5 = 0;
    this.EquipItemSlotIndex1 = 0;
    this.EquipItemSlotIndex2 = 0;
    this.EquipItemSlotIndex3 = 0;
    this.EquipItemSlotIndex4 = 0;
    this.EquipItemSlotIndex5 = 0;
    this.EquipItemSlotOpen1 = 0;
    this.EquipItemSlotOpen2 = 0;
    this.SkillExtend1 = 0;
    this.SkillExtend2 = 0;
    this.SkillExtend3 = 0;
    this.SkillExtend4 = 0;
    this.SkillExtend5 = 0;
    this.EnterDungeon = 0;
    this.Purified = 0;
    this.Enhanced = 0;
    //this.CreatureData = new CreatureData();
};

CachedHeroInfoKey = {
    EquipItemInfo1 : 'EquipItemInfo1',
    EquipItemInfo2 : 'EquipItemInfo2',
    EquipItemInfo3 : 'EquipItemInfo3',
    EquipItemInfo4 : 'EquipItemInfo4',
    EquipItemInfo5 : 'EquipItemInfo5',
    HeroIndex : 'HeroIndex',
    Level : 'Level',
    Exp : 'Exp',
    Star : 'Star',
    CreatedTime : 'CreatedTime',
    SkillLevel1 : 'SkillLevel1',
    SkillLevel2 : 'SkillLevel2',
    SkillLevel3 : 'SkillLevel3',
    SkillLevel4 : 'SkillLevel4',
    SkillLevel5 : 'SkillLevel5',
    EquipItemSlotIndex1 : 'EquipItemSlotIndex1',
    EquipItemSlotIndex2 : 'EquipItemSlotIndex2',
    EquipItemSlotIndex3 : 'EquipItemSlotIndex3',
    EquipItemSlotIndex4 : 'EquipItemSlotIndex4',
    EquipItemSlotIndex5 : 'EquipItemSlotIndex5',
    EquipItemSlotOpen1 : 'EquipItemSlotOpen1',
    EquipItemSlotOpen2 : 'EquipItemSlotOpen2',
    SkillExtend1 : 'SkillExtend1',
    SkillExtend2 : 'SkillExtend2',
    SkillExtend3 : 'SkillExtend3',
    SkillExtend4 : 'SkillExtend4',
    SkillExtend5 : 'SkillExtend5',
    EnterDungeon : 'EnterDungeon',
    Purified : 'Purified',
    Enhanced : 'Enhanced',
    CreatureData : 'CreatureData'
};

ChapterRewardInfo = function () {
    this.ChapterIndex = 0;
    this.LastRewardDiff = 0;
};

ChapterRewardInfoKey = {
    ChapterIndex : 'ChapterIndex',
    LastRewardDiff : 'LastRewardDiff'
};

DOWDungeonInfo = function () {
    this.DungeonIndex = 0;
    this.Diff = 0;
    this.StartTime = '';
    this.EndTime = '';
};

DOWDungeonInfoKey = {
    DungeonIndex : 'DungeonIndex',
    Diff : 'Diff',
    StartTime : 'StartTime',
    EndTime : 'EndTime'
};

AttendanceInfo = function () {
    this.AttendanceIndex = 0;
    this.CompletedDay = 0;
    this.CompletedTime = '';
};

AttendanceInfoKey = {
    AttendanceIndex : 'AttendanceIndex',
    CompletedDay : 'CompletedDay',
    CompletedTime : 'CompletedTime'
};

FreeEquipGachaInfo = function () {
    this.GachaIndex = 0;
    this.LastGachaTime = '';
    this.LastGachaResetTime = '';
    this.RemainDayGachaChance = 0;
};

FreeEquipGachaInfoKey = {
    GachaIndex : 'GachaIndex',
    LastGachaTime : 'LastGachaTime',
    LastGachaResetTime : 'LastGachaResetTime',
    RemainDayGachaChance : 'RemainDayGachaChance'
};

ScenarioQuestInfo = function () {
    this.Index = 0;
    this.Progress = 0;
};

ScenarioQuestInfoKey = {
    Index : 'Index',
    Progress : 'Progress'
};

TowerInfo = function () {
    this.TowerIndex = 0;
    this.CompletedFloor = 0;
    this.CompletedTime = '';
    this.ResetCount = 0;
    this.ResetTime = '';
};

TowerInfoKey = {
    TowerIndex : 'TowerIndex',
    CompletedFloor : 'CompletedFloor',
    CompletedTime : 'CompletedTime',
    ResetCount : 'ResetCount',
    ResetTime : 'ResetTime'
};

MailItemInfo = function () {
    this.ItemIndex = 0;
    this.ItemCount = 0;
};

MailItemInfoKey = {
    ItemIndex : 'ItemIndex',
    ItemCount : 'ItemCount'
};

MailEquipItemInfo = function () {
    this.ItemIndex = 0;
    this.Star = 0;
    this.Level = 0;
    this.OptionIndex1 = 0;
    this.OptionIndex2 = 0;
    this.OptionIndex3 = 0;
    this.OptionIndex4 = 0;
    this.OptionIndex5 = 0;
};

MailEquipItemInfoKey = {
    ItemIndex : 'ItemIndex',
    Star : 'Star',
    Level : 'Level',
    OptionIndex1 : 'OptionIndex1',
    OptionIndex2 : 'OptionIndex2',
    OptionIndex3 : 'OptionIndex3',
    OptionIndex4 : 'OptionIndex4',
    OptionIndex5 : 'OptionIndex5'
};

MailInfo = function () {
    this.MailIndex = 0;
    this.SenderId = 0;
    this.SenderName = '';
    this.ReceiverId = 0;
    this.Title = '';
    this.Content = '';
    this.SendGold = 0;
    this.SendGem = 0;
    this.PvpCoin = 0;
    this.Mileage = 0;
    //this.ItemInfos = Array();
    //this.EquipItemInfos = Array();
    this.ReadTime = '';
    this.ExpireTime = '';
};

MailInfoKey = {
    MailIndex : 'MailIndex',
    SenderId : 'SenderId',
    SenderName : 'SenderName',
    ReceiverId : 'ReceiverId',
    Title : 'Title',
    Content : 'Content',
    SendGold : 'SendGold',
    SendGem : 'SendGem',
    PvpCoin : 'PvpCoin',
    Mileage : 'Mileage',
    ReadTime : 'ReadTime',
    ExpireTime : 'ExpireTime'
};

FriendInfo = function () {
    this.FriendId = 0;
    this.InvitedTime = '';
};

FriendInfoKey = {
    FriendId : 'FriendId',
    InvitedTime : 'InvitedTime'
};

AchievementInfo = function () {
    this.AchievementIndex = 0;
    this.LastStep = 0;
    this.Achievement = 0;
    this.ClearTeamLevel = 0;
};

AchievementInfoKey = {
    AchievementIndex : 'AchievementIndex',
    LastStep : 'LastStep',
    Achievement : 'Achievement',
    ClearTeamLevel : 'ClearTeamLevel'
};

WantedQuestInfo = function () {
    this.Index = 0;
    this.Cleared = 0;
    this.EndTime = '';
};

WantedQuestInfoKey = {
    Index : 'Index',
    Cleared : 'Cleared',
    EndTime : 'EndTime'
};

PlayerItemTimeDurationInfo = function () {
    this.ItemIndex = 0;
    this.StartTime = '';
};

PlayerItemTimeDurationInfoKey = {
    ItemIndex : 'ItemIndex',
    StartTime : 'StartTime'
};

PlayerFirstPurchaseInfo = function () {
    this.ShopIndex = 0;
    this.Index = 0;
    this.PurchasedTime = '';
    this.Count = 0;
};

PlayerFirstPurchaseInfoKey = {
    ShopIndex : 'ShopIndex',
    Index : 'Index',
    PurchasedTime : 'PurchasedTime',
    Count : 'Count'
};

PlayerInAppPurchaseInfo = function () {
    this.Uid = '';
    this.Platform = '';
    this.CreatedTime = '';
    this.PurchaseStatus = '';
    this.ProductId = '';
    this.DeveloperPayload = '';
    this.OrderId = '';
    this.PurchaseToken = '';
    this.CurrencyCode = '';
    this.Price = 0;
};

PlayerInAppPurchaseInfoKey = {
    Uid : 'Uid',
    Platform : 'Platform',
    CreatedTime : 'CreatedTime',
    PurchaseStatus : 'PurchaseStatus',
    ProductId : 'ProductId',
    DeveloperPayload : 'DeveloperPayload',
    OrderId : 'OrderId',
    PurchaseToken : 'PurchaseToken',
    CurrencyCode : 'CurrencyCode',
    Price : 'Price'
};

EquipItemInfo = function () {
    this.SlotIndex = 0;
    this.ItemIndex = 0;
    this.Star = 0;
    this.Level = 0;
    this.Exp = 0;
    this.OptionIndex1 = 0;
    this.OptionStep1 = 0;
    this.OptionIndex2 = 0;
    this.OptionStep2 = 0;
    this.OptionIndex3 = 0;
    this.OptionStep3 = 0;
    this.OptionIndex4 = 0;
    this.OptionStep4 = 0;
    this.OptionIndex5 = 0;
    this.OptionStep5 = 0;
    this.RuneSlotCount = 0;
    this.RuneItemIndex1 = 0;
    this.RuneItemIndex2 = 0;
    this.RuneItemIndex3 = 0;
    this.CreatedTime = '';
    this.UpgradeStarFailBonus = 0;
};

EquipItemInfoKey = {
    SlotIndex : 'SlotIndex',
    ItemIndex : 'ItemIndex',
    Star : 'Star',
    Level : 'Level',
    Exp : 'Exp',
    OptionIndex1 : 'OptionIndex1',
    OptionStep1 : 'OptionStep1',
    OptionIndex2 : 'OptionIndex2',
    OptionStep2 : 'OptionStep2',
    OptionIndex3 : 'OptionIndex3',
    OptionStep3 : 'OptionStep3',
    OptionIndex4 : 'OptionIndex4',
    OptionStep4 : 'OptionStep4',
    OptionIndex5 : 'OptionIndex5',
    OptionStep5 : 'OptionStep5',
    RuneSlotCount : 'RuneSlotCount',
    RuneItemIndex1 : 'RuneItemIndex1',
    RuneItemIndex2 : 'RuneItemIndex2',
    RuneItemIndex3 : 'RuneItemIndex3',
    CreatedTime : 'CreatedTime',
    UpgradeStarFailBonus : 'UpgradeStarFailBonus'
};

PlayerPurchaseTimeDurationInfo = function () {
    this.ShopIndex = 0;
    this.Index = 0;
    this.StartTime = '';
    this.EndTime = '';
    this.PurchasedCount = 0;
    this.MailSentTime = '';
};

PlayerPurchaseTimeDurationInfoKey = {
    ShopIndex : 'ShopIndex',
    Index : 'Index',
    StartTime : 'StartTime',
    EndTime : 'EndTime',
    PurchasedCount : 'PurchasedCount',
    MailSentTime : 'MailSentTime'
};

ShopRestockTimeInfo = function () {
    this.ShopIndex = 0;
    this.ShopItemListIndex = 0;
    this.RestockTime = '';
    this.RestockCount = 0;
    this.RestockCountResetTime = '';
};

ShopRestockTimeInfoKey = {
    ShopIndex : 'ShopIndex',
    ShopItemListIndex : 'ShopItemListIndex',
    RestockTime : 'RestockTime',
    RestockCount : 'RestockCount',
    RestockCountResetTime : 'RestockCountResetTime'
};

ShopItemInfo = function () {
    this.ShopIndex = 0;
    this.ListNo = 0;
    this.Sold = 0;
};

ShopItemInfoKey = {
    ShopIndex : 'ShopIndex',
    ListNo : 'ListNo',
    Sold : 'Sold'
};

ShopListItemInfo = function () {
    this.ShopIndex = 0;
    this.ListNo = 0;
    this.ItemCode = '';
    this.Count = 0;
    this.Sold = 0;
    this.Star = 0;
};

ShopListItemInfoKey = {
    ShopIndex : 'ShopIndex',
    ListNo : 'ListNo',
    ItemCode : 'ItemCode',
    Count : 'Count',
    Sold : 'Sold',
    Star : 'Star'
};

PayShopItemInfo = function () {
    this.ShopType = PayShopType.None;
    this.Index = 0;
    this.TextCode1 = '';
    this.TextCode2 = '';
    this.TextCode3 = '';
    this.New = 0;
    this.Recommend = 0;
    this.Hit = 0;
    this.BuyGem = 0;
    this.BuyMileage = 0;
    this.GachaIndex = 0;
    //this.UseItemCode = Array();
    //this.Count = Array();
    this.Mileage = 0;
};

PayShopItemInfoKey = {
    Index : 'Index',
    TextCode1 : 'TextCode1',
    TextCode2 : 'TextCode2',
    TextCode3 : 'TextCode3',
    New : 'New',
    Recommend : 'Recommend',
    Hit : 'Hit',
    BuyGem : 'BuyGem',
    BuyMileage : 'BuyMileage',
    GachaIndex : 'GachaIndex',
    Mileage : 'Mileage'
};

CashShopItemInfo = function () {
    this.GoogleId = '';
    this.GoogleId2 = '';
    this.AppleId = '';
    this.AppleId2 = '';
    this.PriceKRW = 0;
    this.PriceUSD = 0;
    this.PriceTHB = 0;
    this.Monthly = 0;
    this.PrePurchased = 0;
    this.PurchasableCount = 0;
    this.FirstPurchase = 0;
    this.FirstGem = 0;
    this.Gem = 0;
    this.BonusGem = 0;
    this.DailyGem = 0;
    this.ShopType = PayShopType.None;
    this.Index = 0;
    this.TextCode1 = '';
    this.TextCode2 = '';
    this.TextCode3 = '';
    this.New = 0;
    this.Recommend = 0;
    this.Hit = 0;
    this.BuyGem = 0;
    this.BuyMileage = 0;
    this.GachaIndex = 0;
    //this.UseItemCode = Array();
    //this.Count = Array();
    this.Mileage = 0;
};

CashShopItemInfoKey = {
    GoogleId : 'GoogleId',
    GoogleId2 : 'GoogleId2',
    AppleId : 'AppleId',
    AppleId2 : 'AppleId2',
    PriceKRW : 'PriceKRW',
    PriceUSD : 'PriceUSD',
    PriceTHB : 'PriceTHB',
    Monthly : 'Monthly',
    PrePurchased : 'PrePurchased',
    PurchasableCount : 'PurchasableCount',
    FirstPurchase : 'FirstPurchase',
    FirstGem : 'FirstGem',
    Gem : 'Gem',
    BonusGem : 'BonusGem',
    DailyGem : 'DailyGem',
    Index : 'Index',
    TextCode1 : 'TextCode1',
    TextCode2 : 'TextCode2',
    TextCode3 : 'TextCode3',
    New : 'New',
    Recommend : 'Recommend',
    Hit : 'Hit',
    BuyGem : 'BuyGem',
    BuyMileage : 'BuyMileage',
    GachaIndex : 'GachaIndex',
    Mileage : 'Mileage'
};

StoreShopItemContent = function () {
    this.No = 0;
    this.Type = StoreShopItemType.None;
    this.Value = 0;
    this.Count = 0;
    this.Star = 0;
};

StoreShopItemContentKey = {
    No : 'No',
    Value : 'Value',
    Count : 'Count',
    Star : 'Star'
};

PackageShopItemInfo = function () {
    this.GoogleId = '';
    this.GoogleId2 = '';
    this.AppleId = '';
    this.AppleId2 = '';
    this.PurchasableCount = 0;
    this.MonthlyPurchasableCount = 0;
    this.Description = '';
    this.ReqGem = 0;
    this.Durational = 0;
    this.BeginTime = '';
    this.EndTime = '';
    this.DiscountPercentage = 0;
    this.Name = '';
    this.LocalPriceUnit = '';
    this.LocalPrice = '';
    this.ImageUrl = '';
    this.Image2Url = '';
    //this.Contents = Array();
    this.ShopType = PayShopType.None;
    this.Index = 0;
    this.TextCode1 = '';
    this.TextCode2 = '';
    this.TextCode3 = '';
    this.New = 0;
    this.Recommend = 0;
    this.Hit = 0;
    this.BuyGem = 0;
    this.BuyMileage = 0;
    this.GachaIndex = 0;
    //this.UseItemCode = Array();
    //this.Count = Array();
    this.Mileage = 0;
};

PackageShopItemInfoKey = {
    GoogleId : 'GoogleId',
    GoogleId2 : 'GoogleId2',
    AppleId : 'AppleId',
    AppleId2 : 'AppleId2',
    PurchasableCount : 'PurchasableCount',
    MonthlyPurchasableCount : 'MonthlyPurchasableCount',
    Description : 'Description',
    ReqGem : 'ReqGem',
    Durational : 'Durational',
    BeginTime : 'BeginTime',
    EndTime : 'EndTime',
    DiscountPercentage : 'DiscountPercentage',
    Name : 'Name',
    LocalPriceUnit : 'LocalPriceUnit',
    LocalPrice : 'LocalPrice',
    ImageUrl : 'ImageUrl',
    Image2Url : 'Image2Url',
    Index : 'Index',
    TextCode1 : 'TextCode1',
    TextCode2 : 'TextCode2',
    TextCode3 : 'TextCode3',
    New : 'New',
    Recommend : 'Recommend',
    Hit : 'Hit',
    BuyGem : 'BuyGem',
    BuyMileage : 'BuyMileage',
    GachaIndex : 'GachaIndex',
    Mileage : 'Mileage'
};

PayShopItemEventInfo = function () {
    this.Id = 0;
    this.ShopIndex = 0;
    this.Index = 0;
    this.DiscountPercentage = 0;
    this.Bonus = 0;
    this.BeginTime = '';
    this.EndTime = '';
};

PayShopItemEventInfoKey = {
    Id : 'Id',
    ShopIndex : 'ShopIndex',
    Index : 'Index',
    DiscountPercentage : 'DiscountPercentage',
    Bonus : 'Bonus',
    BeginTime : 'BeginTime',
    EndTime : 'EndTime'
};

PayShopImageUrlInfo = function () {
    this.Index = 0;
    this.ImageUrl = '';
    this.Image2Url = '';
};

PayShopImageUrlInfoKey = {
    Index : 'Index',
    ImageUrl : 'ImageUrl',
    Image2Url : 'Image2Url'
};

ReqItemInfo = function () {
    this.Code = '';
    this.Count = 0;
};

ReqItemInfoKey = {
    Code : 'Code',
    Count : 'Count'
};

CachedAccountInfo = function () {
    //this.UserInfo = new CachedUserInfo();
    //this.HeroInfos = new System.Collections.Generic.Dictionary`2[System.Int32,CachedHeroInfo]();
};

CachedAccountInfoKey = {
    UserInfo : 'UserInfo',
    HeroInfos : 'HeroInfos'
};

PlayerMiscInfo = function () {
    this.InventoryExtend = 0;
    this.DailyQuestResetTime = '';
    this.WeeklyQuestResetTime = '';
    this.DOWResetTime = '';
    this.UTCOffsetHour = 0;
    this.HeroShopSlotExtend = 0;
    this.HeroShopItemListIndex = 0;
    this.LastGlobalMailIndex = 0;
    this.QuestDailyRepeatResetTime = '';
    this.ScenarioQuestIndex = 0;
    this.ScenarioQuestProgress = 0;
};

PlayerMiscInfoKey = {
    InventoryExtend : 'InventoryExtend',
    DailyQuestResetTime : 'DailyQuestResetTime',
    WeeklyQuestResetTime : 'WeeklyQuestResetTime',
    DOWResetTime : 'DOWResetTime',
    UTCOffsetHour : 'UTCOffsetHour',
    HeroShopSlotExtend : 'HeroShopSlotExtend',
    HeroShopItemListIndex : 'HeroShopItemListIndex',
    LastGlobalMailIndex : 'LastGlobalMailIndex',
    QuestDailyRepeatResetTime : 'QuestDailyRepeatResetTime',
    ScenarioQuestIndex : 'ScenarioQuestIndex',
    ScenarioQuestProgress : 'ScenarioQuestProgress'
};

PlayerBattleInfo = function () {
    this.MatchScore = 0;
    this.SeasonWin = 0;
    this.SeasonLose = 0;
    this.SuccessiveWin = 0;
    this.SuccessiveLose = 0;
    this.TierIndex = 0;
    this.LastMatchTime = '';
};

PlayerBattleInfoKey = {
    MatchScore : 'MatchScore',
    SeasonWin : 'SeasonWin',
    SeasonLose : 'SeasonLose',
    SuccessiveWin : 'SuccessiveWin',
    SuccessiveLose : 'SuccessiveLose',
    TierIndex : 'TierIndex',
    LastMatchTime : 'LastMatchTime'
};

WorldMapEventTimeInfo = function () {
    this.EventIndex = 0;
    this.LastCoolCheckTime = '';
    this.ReqDungeonCount = 0;
};

WorldMapEventTimeInfoKey = {
    EventIndex : 'EventIndex',
    LastCoolCheckTime : 'LastCoolCheckTime',
    ReqDungeonCount : 'ReqDungeonCount'
};

WorldMapEventInfo = function () {
    this.EventIndex = 0;
    this.ChapterIndex = 0;
    this.DungeonIndex = 0;
    this.EventType = NWorldMap.EventType.None;
    this.SerializedSubData = '';
    this.RewardItems = '';
    this.RewardGold = 0;
    this.RewardGem = 0;
    this.OccuredTime = '';
    this.Duration = 0;
    this.Completed = false;
    this.NoExpire = false;
    this.NoExpireOnComplete = false;
    this.ProgressCount = 0;
    this.RequireCount = 0;
};

WorldMapEventInfoKey = {
    EventIndex : 'EventIndex',
    ChapterIndex : 'ChapterIndex',
    DungeonIndex : 'DungeonIndex',
    SerializedSubData : 'SerializedSubData',
    RewardItems : 'RewardItems',
    RewardGold : 'RewardGold',
    RewardGem : 'RewardGem',
    OccuredTime : 'OccuredTime',
    Duration : 'Duration',
    Completed : 'Completed',
    NoExpire : 'NoExpire',
    NoExpireOnComplete : 'NoExpireOnComplete',
    ProgressCount : 'ProgressCount',
    RequireCount : 'RequireCount'
};

TutorialInfo = function () {
    this.TutorialIndex = 0;
    this.CompletedTime = '';
};

TutorialInfoKey = {
    TutorialIndex : 'TutorialIndex',
    CompletedTime : 'CompletedTime'
};

UserTimeInfo = function () {
    this.LastLoginTime = '';
    this.LastLogoutTime = '';
};

UserTimeInfoKey = {
    LastLoginTime : 'LastLoginTime',
    LastLogoutTime : 'LastLogoutTime'
};

CurrencyResultInfo = function () {
    this.CurrencyType = RewardType.None;
    this.ResultString = '';
};

CurrencyResultInfoKey = {
    ResultString : 'ResultString'
};

HeroAddResultInfo = function () {
    //this.HeroInfo = new HeroInfo();
    //this.TeamExpResult = new ExpResultInfo();
    //this.StaminaResult = new StaminaResultInfo();
};

HeroAddResultInfoKey = {
    HeroInfo : 'HeroInfo',
    TeamExpResult : 'TeamExpResult',
    StaminaResult : 'StaminaResult'
};

RoyalPointResultInfo = function () {
    this.AddValue = 0;
    this.NewValue = 0;
};

RoyalPointResultInfoKey = {
    AddValue : 'AddValue',
    NewValue : 'NewValue'
};

HeroPurifyResultInfo = function () {
    this.HeroIndex = 0;
    this.AddValue = 0;
    this.NewValue = 0;
};

HeroPurifyResultInfoKey = {
    HeroIndex : 'HeroIndex',
    AddValue : 'AddValue',
    NewValue : 'NewValue'
};

RewardResultInfo = function () {
    //this.GoldResult = new GoldResultInfo();
    //this.GemResult = new GemResultInfo();
    //this.ItemResults = Array();
    //this.EquipItemResults = Array();
    //this.HeroInfos = Array();
    //this.ExpResultInfos = Array();
    //this.StaminaResultInfos = Array();
    //this.EquipItemBoostInfos = Array();
};

RewardResultInfoKey = {
    GoldResult : 'GoldResult',
    GemResult : 'GemResult'
};

EquipItemBoostInfo = function () {
    this.SlotIndex = 0;
    this.BoostPercent = 0;
};

EquipItemBoostInfoKey = {
    SlotIndex : 'SlotIndex',
    BoostPercent : 'BoostPercent'
};

PvpCoinResultInfo = function () {
    this.AddValue = 0;
    this.NewValue = 0;
};

PvpCoinResultInfoKey = {
    AddValue : 'AddValue',
    NewValue : 'NewValue'
};

GuildPointResultInfo = function () {
    this.AddValue = 0;
    this.NewValue = 0;
};

GuildPointResultInfoKey = {
    AddValue : 'AddValue',
    NewValue : 'NewValue'
};

QuickCompleteCollectResultInfo = function () {
    this.AddValue = 0;
    this.NewValue = 0;
};

QuickCompleteCollectResultInfoKey = {
    AddValue : 'AddValue',
    NewValue : 'NewValue'
};

PlunderSearchResultInfo = function () {
    this.AddValue = 0;
    this.NewValue = 0;
};

PlunderSearchResultInfoKey = {
    AddValue : 'AddValue',
    NewValue : 'NewValue'
};

MileageResultInfo = function () {
    this.AddValue = 0;
    this.NewValue = 0;
};

MileageResultInfoKey = {
    AddValue : 'AddValue',
    NewValue : 'NewValue'
};

UndergroundLabyrinthKeyResultInfo = function () {
    this.AddValue = 0;
    this.NewValue = 0;
    this.UndergroundLabyrinthKeyRechargeTime = '';
};

UndergroundLabyrinthKeyResultInfoKey = {
    AddValue : 'AddValue',
    NewValue : 'NewValue',
    UndergroundLabyrinthKeyRechargeTime : 'UndergroundLabyrinthKeyRechargeTime'
};

UndergroundPrisonKeyResultInfo = function () {
    this.AddValue = 0;
    this.NewValue = 0;
    this.UndergroundPrisonKeyRechargeTime = '';
};

UndergroundPrisonKeyResultInfoKey = {
    AddValue : 'AddValue',
    NewValue : 'NewValue',
    UndergroundPrisonKeyRechargeTime : 'UndergroundPrisonKeyRechargeTime'
};

SwordResultInfo = function () {
    this.AddValue = 0;
    this.NewValue = 0;
    this.SwordRechargeTime = '';
};

SwordResultInfoKey = {
    AddValue : 'AddValue',
    NewValue : 'NewValue',
    SwordRechargeTime : 'SwordRechargeTime'
};

BattleVersionInfo = function () {
    this.Checksum = '';
    this.Length = 0;
    this.Count = 0;
};

BattleVersionInfoKey = {
    Checksum : 'Checksum',
    Length : 'Length',
    Count : 'Count'
};

ResultCreatureInfo = function () {
    this.Index = 0;
    this.Key = '';
    this.Hp = 0;
    this.Mp = 0;
    this.TeamId = 0;
    this.MaxHp = 0;
    this.MaxMp = 0;
};

ResultCreatureInfoKey = {
    Index : 'Index',
    Key : 'Key',
    Hp : 'Hp',
    Mp : 'Mp',
    TeamId : 'TeamId',
    MaxHp : 'MaxHp',
    MaxMp : 'MaxMp'
};

MatchRankerInfo = function () {
    this.Rank = 0;
    this.MatchScore = 0;
    //this.UserInfo = new CachedUserInfo();
};

MatchRankerInfoKey = {
    Rank : 'Rank',
    MatchScore : 'MatchScore',
    UserInfo : 'UserInfo'
};

MatchResultInfo = function () {
    this.MatchUid = 0;
    this.Win = false;
    this.Canceled = false;
    this.GainedMatchScore = 0;
    this.NewMatchScore = 0;
    this.NewTierIndex = 0;
    this.NewTierRank = 0;
    this.NewTotalRank = 0;
    this.PrevTierIndex = 0;
    this.PrevTotalRank = 0;
    //this.HeroExpResults = Array();
    //this.SwordResult = new SwordResultInfo();
};

MatchResultInfoKey = {
    MatchUid : 'MatchUid',
    Win : 'Win',
    Canceled : 'Canceled',
    GainedMatchScore : 'GainedMatchScore',
    NewMatchScore : 'NewMatchScore',
    NewTierIndex : 'NewTierIndex',
    NewTierRank : 'NewTierRank',
    NewTotalRank : 'NewTotalRank',
    PrevTierIndex : 'PrevTierIndex',
    PrevTotalRank : 'PrevTotalRank',
    SwordResult : 'SwordResult'
};

MatchInfo = function () {
    this.Uid = 0;
    this.SeasonIndex = 0;
    //this.AccountInfos = Array();
    this.BattleServerAddress = '';
    this.BattleServerPort = 0;
    this.ChapterIndex = 0;
    this.DungeonIndex = 0;
};

MatchInfoKey = {
    Uid : 'Uid',
    SeasonIndex : 'SeasonIndex',
    BattleServerAddress : 'BattleServerAddress',
    BattleServerPort : 'BattleServerPort',
    ChapterIndex : 'ChapterIndex',
    DungeonIndex : 'DungeonIndex'
};

MatchedAccountInfo = function () {
    this.Host = '';
    this.IsNpc = false;
    this.TeamType = TeamType.Left;
    this.Mmr = 0;
    this.FightingPower = 0;
    this.Rank = 0;
    this.LeaderHeroIndex = 0;
    //this.BattleInfo = new PlayerBattleInfo();
    this.AvgFightingPower = 0;
    this.AccountId = 0;
    this.Nick = '';
    //this.UserInfo = new CachedUserInfo();
    //this.HeroInfos = new System.Collections.Generic.Dictionary`2[System.Int32,CachedHeroInfo]();
};

MatchedAccountInfoKey = {
    Host : 'Host',
    IsNpc : 'IsNpc',
    Mmr : 'Mmr',
    FightingPower : 'FightingPower',
    Rank : 'Rank',
    LeaderHeroIndex : 'LeaderHeroIndex',
    BattleInfo : 'BattleInfo',
    AvgFightingPower : 'AvgFightingPower',
    AccountId : 'AccountId',
    Nick : 'Nick',
    UserInfo : 'UserInfo',
    HeroInfos : 'HeroInfos'
};

ChapterDungeonInfo = function () {
    this.ChapterIndex = 0;
    this.DungeonIndex = 0;
    this.MaxStar = 0;
    this.FirstRewardedDiff = 0;
    this.VisitedTime = '';
    this.CompletedTime = '';
    this.DailyCompletedCount = 0;
};

ChapterDungeonInfoKey = {
    ChapterIndex : 'ChapterIndex',
    DungeonIndex : 'DungeonIndex',
    MaxStar : 'MaxStar',
    FirstRewardedDiff : 'FirstRewardedDiff',
    VisitedTime : 'VisitedTime',
    CompletedTime : 'CompletedTime',
    DailyCompletedCount : 'DailyCompletedCount'
};

ItemInfo = function () {
    this.ItemIndex = 0;
    this.Count = 0;
    this.CreatedTime = '';
};

ItemInfoKey = {
    ItemIndex : 'ItemIndex',
    Count : 'Count',
    CreatedTime : 'CreatedTime'
};

ExpResultInfo = function () {
    this.AddValue = 0;
    this.NewValue = 0;
    this.OldLevel = 0;
    this.NewLevel = 0;
    this.OldValue = 0;
};

ExpResultInfoKey = {
    AddValue : 'AddValue',
    NewValue : 'NewValue',
    OldLevel : 'OldLevel',
    NewLevel : 'NewLevel',
    OldValue : 'OldValue'
};

GemResultInfo = function () {
    this.AddValue = 0;
    this.FirstDiffClear = 0;
    this.NewSysGem = 0;
    this.NewPayGem = 0;
    this.Sequence = 0;
};

GemResultInfoKey = {
    AddValue : 'AddValue',
    FirstDiffClear : 'FirstDiffClear',
    NewSysGem : 'NewSysGem',
    NewPayGem : 'NewPayGem',
    Sequence : 'Sequence'
};

StaminaResultInfo = function () {
    this.AddValue = 0;
    this.NewValue = 0;
    this.StaminaRechargeTime = '';
};

StaminaResultInfoKey = {
    AddValue : 'AddValue',
    NewValue : 'NewValue',
    StaminaRechargeTime : 'StaminaRechargeTime'
};

GoldResultInfo = function () {
    this.AddValue = 0;
    this.AddBoosterValue = 0;
    this.NewValue = 0;
    this.Sequence = 0;
};

GoldResultInfoKey = {
    AddValue : 'AddValue',
    AddBoosterValue : 'AddBoosterValue',
    NewValue : 'NewValue',
    Sequence : 'Sequence'
};

ItemResultInfo = function () {
    this.ItemIndex = 0;
    this.AddCount = 0;
    this.NewCount = 0;
    this.AddBoosterCount = 0;
};

ItemResultInfoKey = {
    ItemIndex : 'ItemIndex',
    AddCount : 'AddCount',
    NewCount : 'NewCount',
    AddBoosterCount : 'AddBoosterCount'
};

RewardItemInfo = function () {
    this.Code = '';
    this.Count = 0;
    this.Star = 0;
};

RewardItemInfoKey = {
    Code : 'Code',
    Count : 'Count',
    Star : 'Star'
};

HeroExpResultInfo = function () {
    this.HeroIndex = 0;
    this.AddValue = 0;
    this.AddBoosterValue = 0;
    this.AddTeamLevelValue = 0;
    this.NewValue = 0;
    this.OldLevel = 0;
    this.NewLevel = 0;
};

HeroExpResultInfoKey = {
    HeroIndex : 'HeroIndex',
    AddValue : 'AddValue',
    AddBoosterValue : 'AddBoosterValue',
    AddTeamLevelValue : 'AddTeamLevelValue',
    NewValue : 'NewValue',
    OldLevel : 'OldLevel',
    NewLevel : 'NewLevel'
};

UserInfo = function () {
    this.SessionKey = '';
    this.LoginId = '';
    this.AccountId = 0;
    this.Nick = '';
    this.Gold = 0;
    this.Gem = 0;
    this.PayGem = 0;
    this.PvpCoin = 0;
    this.Stamina = 0;
    this.StaminaRechargeTime = '';
    this.TeamLevel = 0;
    this.TeamExp = 0;
    this.Sword = 0;
    this.SwordRechargeTime = '';
    this.AvatarHeroIndex = 0;
    this.GuildPoint = 0;
    this.RoyalPoint = 0;
    this.UndergroundPrisonKey = 0;
    this.UndergroundPrisonKeyRechargeTime = '';
    this.UndergroundLabyrinthKey = 0;
    this.UndergroundLabyrinthKeyRechargeTime = '';
    this.Mileage = 0;
};

UserInfoKey = {
    SessionKey : 'SessionKey',
    LoginId : 'LoginId',
    AccountId : 'AccountId',
    Nick : 'Nick',
    Gold : 'Gold',
    Gem : 'Gem',
    PayGem : 'PayGem',
    PvpCoin : 'PvpCoin',
    Stamina : 'Stamina',
    StaminaRechargeTime : 'StaminaRechargeTime',
    TeamLevel : 'TeamLevel',
    TeamExp : 'TeamExp',
    Sword : 'Sword',
    SwordRechargeTime : 'SwordRechargeTime',
    AvatarHeroIndex : 'AvatarHeroIndex',
    GuildPoint : 'GuildPoint',
    RoyalPoint : 'RoyalPoint',
    UndergroundPrisonKey : 'UndergroundPrisonKey',
    UndergroundPrisonKeyRechargeTime : 'UndergroundPrisonKeyRechargeTime',
    UndergroundLabyrinthKey : 'UndergroundLabyrinthKey',
    UndergroundLabyrinthKeyRechargeTime : 'UndergroundLabyrinthKeyRechargeTime',
    Mileage : 'Mileage'
};

AchievementData = function () {
    this.Index = 0;
    this.Step = 0;
    this.Type = AchievementType.General;
    this.SubType = AchievementSubType.None;
    this.CheckType = AchievementCheckType.None;
    this.ReqType = AchievementReqType.None;
    this.ReqValue = '';
    this.ReqSub1Type = AchievementReqSubType.None;
    this.ReqSub1Value = 0;
    this.ReqSub2Type = AchievementReqSubType.None;
    this.ReqSub2Value = 0;
    this.RewardType = AchievementRewardType.None;
    this.RewardCode = '';
    this.RewardValue = 0;
    this.Reward2Type = AchievementRewardType.None;
    this.Reward2Code = '';
    this.Reward2Value = 0;
    this.ResetAchievement = 0;
};

AchievementDataKey = {
    Index : 'Index',
    Step : 'Step',
    ReqValue : 'ReqValue',
    ReqSub1Value : 'ReqSub1Value',
    ReqSub2Value : 'ReqSub2Value',
    RewardCode : 'RewardCode',
    RewardValue : 'RewardValue',
    Reward2Code : 'Reward2Code',
    Reward2Value : 'Reward2Value',
    ResetAchievement : 'ResetAchievement'
};

AttendanceLocalInfo = function () {
    this.Index = 0;
    this.Language = '';
    this.Title = '';
    this.BackgroundImageUrl = '';
};

AttendanceLocalInfoKey = {
    Index : 'Index',
    Language : 'Language',
    Title : 'Title',
    BackgroundImageUrl : 'BackgroundImageUrl'
};

AttendanceRewardLocalInfo = function () {
    this.Index = 0;
    this.Day = 0;
    this.Language = '';
    this.Description = '';
    this.ImageUrl = '';
};

AttendanceRewardLocalInfoKey = {
    Index : 'Index',
    Day : 'Day',
    Language : 'Language',
    Description : 'Description',
    ImageUrl : 'ImageUrl'
};

DbRewardData = function () {
    this.Type = RewardType.None;
    this.Value = 0;
    this.Count = 0;
    this.Star = 0;
};

DbRewardDataKey = {
    Value : 'Value',
    Count : 'Count',
    Star : 'Star'
};

AttendanceReward = function () {
    this.Index = 0;
    this.Day = 0;
    this.No = 0;
    this.Type = RewardType.None;
    this.Value = 0;
    this.Count = 0;
    this.Star = 0;
};

AttendanceRewardKey = {
    Index : 'Index',
    Day : 'Day',
    No : 'No',
    Value : 'Value',
    Count : 'Count',
    Star : 'Star'
};

AttendanceRewards = function () {
    //this.Reward = Array();
};

AttendanceRewardsKey = {
};

AttendanceData = function () {
    this.Index = 0;
    this.StartDate = '';
    this.Title = '';
    this.Repeatable = 0;
    this.PageSize = 0;
    this.InitialPage = 0;
    //this.LocalInfo = Array();
    //this.Reward = Array();
    //this.RewardLocalInfo = Array();
};

AttendanceDataKey = {
    Index : 'Index',
    StartDate : 'StartDate',
    Title : 'Title',
    Repeatable : 'Repeatable',
    PageSize : 'PageSize',
    InitialPage : 'InitialPage'
};

EquipGachaData = function () {
    this.Index = 0;
    this.Type = EquipGachaType.Normal;
    this.FreeCoolTime = 0;
    this.Bid = 0;
    this.BonusBid = 0;
    this.OpenGold = 0;
    this.OpenGem = 0;
    this.Mileage = 0;
    this.DailyMaxFree = 0;
    this.GradeLimit1 = 0;
    this.GradeLimitCount1 = 0;
    this.GradeLimit2 = 0;
    this.GradeLimitCount2 = 0;
    this.GradeLimit3 = 0;
    this.GradeLimitCount3 = 0;
};

EquipGachaDataKey = {
    Index : 'Index',
    FreeCoolTime : 'FreeCoolTime',
    Bid : 'Bid',
    BonusBid : 'BonusBid',
    OpenGold : 'OpenGold',
    OpenGem : 'OpenGem',
    Mileage : 'Mileage',
    DailyMaxFree : 'DailyMaxFree',
    GradeLimit1 : 'GradeLimit1',
    GradeLimitCount1 : 'GradeLimitCount1',
    GradeLimit2 : 'GradeLimit2',
    GradeLimitCount2 : 'GradeLimitCount2',
    GradeLimit3 : 'GradeLimit3',
    GradeLimitCount3 : 'GradeLimitCount3'
};

ScenarioQuestGroupData = function () {
    this.Group = 0;
    this.Title = '';
};

ScenarioQuestGroupDataKey = {
    Group : 'Group',
    Title : 'Title'
};

ScenarioQuestData = function () {
    this.Group = 0;
    this.Step = 0;
    this.Title = '';
    this.DetailTitle = '';
    this.StateType = ScenarioQuestActionType.None;
    //this.StateValue = Array();
    this.ReqProgress = 0;
    this.AutoComplete = false;
    this.RewardIndex = 0;
    this.MoveTaskType = '';
    //this.MoveTaskValue = Array();
};

ScenarioQuestDataKey = {
    Group : 'Group',
    Step : 'Step',
    Title : 'Title',
    DetailTitle : 'DetailTitle',
    ReqProgress : 'ReqProgress',
    AutoComplete : 'AutoComplete',
    RewardIndex : 'RewardIndex',
    MoveTaskType : 'MoveTaskType'
};

DOWDungeonData = function () {
    this.DungeonIndex = 0;
    //this.OpenDOWs = Array();
};

DOWDungeonDataKey = {
    DungeonIndex : 'DungeonIndex'
};

EquipItemGradeData = function () {
    this.Grade = 0;
    this.IsUnique = false;
    this.MaxLevel = 0;
    this.MaxLevelByHero = false;
    this.ReqAwakeMaterialLevel = 0;
    this.MaxStar = 0;
    this.OptionCount = 0;
    this.AllOptionOpen = false;
    this.RuneSlotCount = 0;
};

EquipItemGradeDataKey = {
    Grade : 'Grade',
    IsUnique : 'IsUnique',
    MaxLevel : 'MaxLevel',
    MaxLevelByHero : 'MaxLevelByHero',
    ReqAwakeMaterialLevel : 'ReqAwakeMaterialLevel',
    MaxStar : 'MaxStar',
    OptionCount : 'OptionCount',
    AllOptionOpen : 'AllOptionOpen',
    RuneSlotCount : 'RuneSlotCount'
};

DbRewardResult = function () {
    //this.GoldResult = new GoldResultInfo();
    //this.GemResult = new GemResultInfo();
    //this.ItemResults = Array();
    //this.EquipItemResults = Array();
    //this.HeroInfos = Array();
    //this.ExpResultInfos = Array();
    //this.StaminaResultInfos = Array();
};

DbRewardResultKey = {
    GoldResult : 'GoldResult',
    GemResult : 'GemResult'
};

GuildLevelData = function () {
    this.Level = 0;
    this.Exp = 0;
    this.TotalExp = 0;
    this.MaxMember = 0;
};

GuildLevelDataKey = {
    Level : 'Level',
    Exp : 'Exp',
    TotalExp : 'TotalExp',
    MaxMember : 'MaxMember'
};

GuildSettingData = function () {
    this.Index = 0;
    this.ReqTeamLevel = 0;
    this.CreateGold = 0;
    this.MaxLevel = 0;
    this.NameMaxByte = 0;
    this.NoticeMaxByte = 0;
    this.IntroduceMaxByte = 0;
    this.ActivityDailyResetHour = 0;
    this.MaxJoinGuildRequest = 0;
    this.MaxJoinGuildRequestPerPlayer = 0;
    this.GuildMercenaryUseResetHour = 0;
    this.MinMercenaryRegisterTime = 0;
};

GuildSettingDataKey = {
    Index : 'Index',
    ReqTeamLevel : 'ReqTeamLevel',
    CreateGold : 'CreateGold',
    MaxLevel : 'MaxLevel',
    NameMaxByte : 'NameMaxByte',
    NoticeMaxByte : 'NoticeMaxByte',
    IntroduceMaxByte : 'IntroduceMaxByte',
    ActivityDailyResetHour : 'ActivityDailyResetHour',
    MaxJoinGuildRequest : 'MaxJoinGuildRequest',
    MaxJoinGuildRequestPerPlayer : 'MaxJoinGuildRequestPerPlayer',
    GuildMercenaryUseResetHour : 'GuildMercenaryUseResetHour',
    MinMercenaryRegisterTime : 'MinMercenaryRegisterTime'
};

GuildMemberInfo = function () {
    this.AccountId = 0;
    this.TeamLevel = 0;
    this.Nick = '';
    this.Rank = 0;
    this.AvatarHeroIndex = 0;
    this.LastLoginTime = '';
    this.Activity = 0;
};

GuildMemberInfoKey = {
    AccountId : 'AccountId',
    TeamLevel : 'TeamLevel',
    Nick : 'Nick',
    Rank : 'Rank',
    AvatarHeroIndex : 'AvatarHeroIndex',
    LastLoginTime : 'LastLoginTime',
    Activity : 'Activity'
};

GuildJoinRequestPlayerInfo = function () {
    this.AccountId = 0;
    this.TeamLevel = 0;
    this.Nick = '';
    this.AvatarHeroIndex = 0;
};

GuildJoinRequestPlayerInfoKey = {
    AccountId : 'AccountId',
    TeamLevel : 'TeamLevel',
    Nick : 'Nick',
    AvatarHeroIndex : 'AvatarHeroIndex'
};

MercenaryHeroInfo = function () {
    this.AccountId = 0;
    this.Nick = '';
    this.TeamLevel = 0;
    this.HeroIndex = 0;
    this.RegisterTime = '';
    this.UsedCount = 0;
    //this.HeroInfo = new CachedHeroInfo();
};

MercenaryHeroInfoKey = {
    AccountId : 'AccountId',
    Nick : 'Nick',
    TeamLevel : 'TeamLevel',
    HeroIndex : 'HeroIndex',
    RegisterTime : 'RegisterTime',
    UsedCount : 'UsedCount',
    HeroInfo : 'HeroInfo'
};

DropBonusEventLocalInfo = function () {
    this.Id = 0;
    this.Language = '';
    this.Title = '';
    this.Message = '';
};

DropBonusEventLocalInfoKey = {
    Id : 'Id',
    Language : 'Language',
    Title : 'Title',
    Message : 'Message'
};

DropBonusEvent = function () {
    this.Id = 0;
    this.BeginTime = '';
    this.EndTime = '';
    this.BeginHour = 0;
    this.BeginMinute = 0;
    this.EndHour = 0;
    this.EndMinute = 0;
    //this.DungeonType = Array();
    this.BonusType = EventBonusType.None;
    this.BonusPercentage = 0;
    //this.LocalInfo = Array();
};

DropBonusEventKey = {
    Id : 'Id',
    BeginTime : 'BeginTime',
    EndTime : 'EndTime',
    BeginHour : 'BeginHour',
    BeginMinute : 'BeginMinute',
    EndHour : 'EndHour',
    EndMinute : 'EndMinute',
    BonusPercentage : 'BonusPercentage'
};

NMessage.NProtocol.DelegateGuildMaster = function () {
};

NMessage.NProtocol.DelegateGuildMasterKey = {
};

Notice = function () {
    this.Id = 0;
    this.BeginTime = '';
    this.EndTime = '';
    this.Message = '';
    this.Oneshot = 0;
    this.Interval = 0;
    //this.LocalInfo = Array();
};

NoticeKey = {
    Id : 'Id',
    BeginTime : 'BeginTime',
    EndTime : 'EndTime',
    Message : 'Message',
    Oneshot : 'Oneshot',
    Interval : 'Interval'
};

BaseRequest = function () {
    this.RequestId = 0;
};

BaseRequestKey = {
    RequestId : 'RequestId'
};

NMessage.LoginReq = function () {
    this.AccountId = 0;
    this.GuildId = 0;
    //this.FriendIds = Array();
    this.RequestId = 0;
};

NMessage.LoginReqKey = {
    AccountId : 'AccountId',
    GuildId : 'GuildId',
    RequestId : 'RequestId'
};

BaseResponse = function () {
    this.RequestId = 0;
};

BaseResponseKey = {
    RequestId : 'RequestId'
};

NMessage.LoginRes = function () {
    this.Result = NMessage.LoginResType.Success;
    //this.WhisperChats = Array();
    //this.GuildChats = Array();
    this.ChannelNo = 0;
    this.RequestId = 0;
};

NMessage.LoginResKey = {
    ChannelNo : 'ChannelNo',
    RequestId : 'RequestId'
};

NMessage.ChangeGuildReq = function () {
    this.GuildId = 0;
    this.RequestId = 0;
};

NMessage.ChangeGuildReqKey = {
    GuildId : 'GuildId',
    RequestId : 'RequestId'
};

NMessage.ChangeGuildRes = function () {
    this.Result = NMessage.ChangeGuildResType.Success;
    this.RequestId = 0;
};

NMessage.ChangeGuildResKey = {
    RequestId : 'RequestId'
};

NMessage.ChangeFriendReq = function () {
    //this.FriendIds = Array();
    this.RequestId = 0;
};

NMessage.ChangeFriendReqKey = {
    RequestId : 'RequestId'
};

NMessage.ChangeFriendRes = function () {
    this.Result = NMessage.ChangeFriendResType.Success;
    this.RequestId = 0;
};

NMessage.ChangeFriendResKey = {
    RequestId : 'RequestId'
};

NMessage.ChangeChannelReq = function () {
    this.ChannelNo = 0;
    this.RequestId = 0;
};

NMessage.ChangeChannelReqKey = {
    ChannelNo : 'ChannelNo',
    RequestId : 'RequestId'
};

NMessage.ChangeChannelRes = function () {
    this.Changed = false;
    this.RequestId = 0;
};

NMessage.ChangeChannelResKey = {
    Changed : 'Changed',
    RequestId : 'RequestId'
};

NMessage.MessageReq = function () {
    this.GroupType = MessageGroupType.None;
    //this.ReceiverIds = Array();
    this.Message = '';
    this.RequestId = 0;
};

NMessage.MessageReqKey = {
    Message : 'Message',
    RequestId : 'RequestId'
};

NMessage.MessageRes = function () {
    this.Result = NMessage.MessageResType.Success;
    this.RequestId = 0;
};

NMessage.MessageResKey = {
    RequestId : 'RequestId'
};

NMessage.MessageNot = function () {
    this.SenderId = 0;
    this.GroupType = MessageGroupType.None;
    //this.ReceiverIds = Array();
    this.Type = '';
    this.Content = '';
};

NMessage.MessageNotKey = {
    SenderId : 'SenderId',
    Type : 'Type',
    Content : 'Content'
};

NMessage.ClearMessageReq = function () {
    this.MessageTypeName = '';
    this.RemoveAccountId = 0;
    this.RequestId = 0;
};

NMessage.ClearMessageReqKey = {
    MessageTypeName : 'MessageTypeName',
    RemoveAccountId : 'RemoveAccountId',
    RequestId : 'RequestId'
};

NMessage.ClearMessageRes = function () {
    this.Result = NMessage.ClearMessageResType.Success;
    this.RequestId = 0;
};

NMessage.ClearMessageResKey = {
    RequestId : 'RequestId'
};

NMessage.PingReq = function () {
    this.RequestId = 0;
};

NMessage.PingReqKey = {
    RequestId : 'RequestId'
};

NMessage.PingRes = function () {
    this.Result = NMessage.PingResType.Success;
    this.RequestId = 0;
};

NMessage.PingResKey = {
    RequestId : 'RequestId'
};

NMessage.ClientLog = function () {
    this.Log = '';
    this.RequestId = 0;
};

NMessage.ClientLogKey = {
    Log : 'Log',
    RequestId : 'RequestId'
};

NoticeLocalInfo = function () {
    this.Language = '';
    this.Message = '';
};

NoticeLocalInfoKey = {
    Language : 'Language',
    Message : 'Message'
};

LobbyNotice = function () {
    this.Index = 0;
    this.Name = '';
    this.BeginTime = '';
    this.EndTime = '';
    //this.LocalInfo = Array();
};

LobbyNoticeKey = {
    Index : 'Index',
    Name : 'Name',
    BeginTime : 'BeginTime',
    EndTime : 'EndTime'
};

LobbyNoticeLocalInfo = function () {
    this.Language = '';
    this.ImageUrl = '';
    this.LinkUrl = '';
    this.Message = '';
};

LobbyNoticeLocalInfoKey = {
    Language : 'Language',
    ImageUrl : 'ImageUrl',
    LinkUrl : 'LinkUrl',
    Message : 'Message'
};

PlunderReplayInfo = function () {
    this.FieldName = '';
    //this.Attacker = new ReplayTeamInfo();
    //this.Defender = new ReplayTeamInfo();
    this.Defended = false;
    this.StolenItemIndex = 0;
    this.StolenItemCount = 0;
    this.RewardItemIndex = 0;
    this.RewardItemCount = 0;
    this.PlayTimeMs = 0;
    this.RecordedTime = '';
};

PlunderReplayInfoKey = {
    FieldName : 'FieldName',
    Attacker : 'Attacker',
    Defender : 'Defender',
    Defended : 'Defended',
    StolenItemIndex : 'StolenItemIndex',
    StolenItemCount : 'StolenItemCount',
    RewardItemIndex : 'RewardItemIndex',
    RewardItemCount : 'RewardItemCount',
    PlayTimeMs : 'PlayTimeMs',
    RecordedTime : 'RecordedTime'
};

ReplayTeamInfo = function () {
    this.AccountId = 0;
    this.Level = 0;
    this.NickName = '';
    this.AvaterIndex = 0;
    this.MatchScore = 0;
    this.TierIndex = 0;
    this.TierRank = 0;
    this.TeamType = TeamType.Left;
    //this.HeroInfos = Array();
};

ReplayTeamInfoKey = {
    AccountId : 'AccountId',
    Level : 'Level',
    NickName : 'NickName',
    AvaterIndex : 'AvaterIndex',
    MatchScore : 'MatchScore',
    TierIndex : 'TierIndex',
    TierRank : 'TierRank'
};

ReplayTeamHeroInfo = function () {
    this.Index = 0;
    this.Star = 0;
};

ReplayTeamHeroInfoKey = {
    Index : 'Index',
    Star : 'Star'
};

ArenaReplayInfo = function () {
    this.ChapterIndex = 0;
    this.DungeonIndex = 0;
    this.Difficulty = DungeonDifficultyType.Easy;
    //this.LeftTeam = new ReplayTeamInfo();
    //this.RightTeam = new ReplayTeamInfo();
    this.WinTeam = TeamType.Left;
    this.WinMatchScore = 0;
    this.LoseMatchScore = 0;
    this.PlayTimeMs = 0;
    this.RecordedTime = '';
};

ArenaReplayInfoKey = {
    ChapterIndex : 'ChapterIndex',
    DungeonIndex : 'DungeonIndex',
    LeftTeam : 'LeftTeam',
    RightTeam : 'RightTeam',
    WinMatchScore : 'WinMatchScore',
    LoseMatchScore : 'LoseMatchScore',
    PlayTimeMs : 'PlayTimeMs',
    RecordedTime : 'RecordedTime'
};

Replay = function () {
    this.Uid = 0;
    this.Info = '';
    this.Data = '';
};

ReplayKey = {
    Uid : 'Uid',
    Info : 'Info',
    Data : 'Data'
};

B2G_SetAbuser.Request = function () {
    this.AccountId = 0;
    this.ChapterIndex = 0;
    this.DungeonIndex = 0;
    this.Difficulty = 0;
    this.BattleVersion = '';
    this.BattleLogString = '';
    this.LeftCreatureInfoString = '';
    this.RightCreatureInfoString = '';
    this.VerifiedLeftCreatureInfoString = '';
    this.VerifiedRightCreatureInfoString = '';
};

B2G_SetAbuser.RequestKey = {
    AccountId : 'AccountId',
    ChapterIndex : 'ChapterIndex',
    DungeonIndex : 'DungeonIndex',
    Difficulty : 'Difficulty',
    BattleVersion : 'BattleVersion',
    BattleLogString : 'BattleLogString',
    LeftCreatureInfoString : 'LeftCreatureInfoString',
    RightCreatureInfoString : 'RightCreatureInfoString',
    VerifiedLeftCreatureInfoString : 'VerifiedLeftCreatureInfoString',
    VerifiedRightCreatureInfoString : 'VerifiedRightCreatureInfoString'
};

B2G_SetAbuser.Response = function () {
    this.Result = B2G_SetAbuser.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

B2G_SetAbuser.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

B2G_GetHeroInfo.Request = function () {
    this.AccountId = 0;
    //this.HeroIndices = Array();
};

B2G_GetHeroInfo.RequestKey = {
    AccountId : 'AccountId'
};

B2G_GetHeroInfo.Response = function () {
    //this.HeroInfos = Array();
    this.Result = B2G_GetHeroInfo.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

B2G_GetHeroInfo.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GMT2G_Complete_Billing.Request = function () {
    this.AccountId = 0;
    this.Uid = '';
};

GMT2G_Complete_Billing.RequestKey = {
    AccountId : 'AccountId',
    Uid : 'Uid'
};

GMT2G_Complete_Billing.Response = function () {
    this.Result = GMT2G_Complete_Billing.ResultType.Fail;
};

GMT2G_Complete_Billing.ResponseKey = {
};

M2G_ReloadPlayerBattle.Request = function () {
};

M2G_ReloadPlayerBattle.RequestKey = {
};

M2G_ReloadPlayerBattle.Response = function () {
    this.Result = M2G_ReloadPlayerBattle.ResultType.Fail;
};

M2G_ReloadPlayerBattle.ResponseKey = {
};

P2G_BuyCashShopItem.Request = function () {
    this.AccountId = 0;
    this.ShopIndex = 0;
    this.Index = 0;
    this.CountryCode = '';
    this.LocalPrice = 0;
};

P2G_BuyCashShopItem.RequestKey = {
    AccountId : 'AccountId',
    ShopIndex : 'ShopIndex',
    Index : 'Index',
    CountryCode : 'CountryCode',
    LocalPrice : 'LocalPrice'
};

P2G_BuyCashShopItem.Response = function () {
    this.Host = '';
    this.Result = P2G_BuyCashShopItem.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

P2G_BuyCashShopItem.ResponseKey = {
    Host : 'Host',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

P2G_GetCashShopItems.Request = function () {
    this.AccountId = 0;
};

P2G_GetCashShopItems.RequestKey = {
    AccountId : 'AccountId'
};

P2G_GetCashShopItems.Response = function () {
    //this.CashShopItemInfos = Array();
    //this.PackageShopItemInfos = Array();
    this.Host = '';
    this.Result = P2G_GetCashShopItems.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

P2G_GetCashShopItems.ResponseKey = {
    Host : 'Host',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

B2G_SetCampaignResult.Request = function () {
    this.AccountId = 0;
    //this.FinishedAccountIds = Array();
    this.PlayTime = 0;
    this.Win = false;
    this.IsMaster = false;
    this.AvgHeroLevel = 0;
    //this.AliveHeroIndices = Array();
};

B2G_SetCampaignResult.RequestKey = {
    AccountId : 'AccountId',
    PlayTime : 'PlayTime',
    Win : 'Win',
    IsMaster : 'IsMaster',
    AvgHeroLevel : 'AvgHeroLevel'
};

B2G_SetCampaignResult.Response = function () {
    this.Result = B2G_SetCampaignResult.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

B2G_SetCampaignResult.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

B2M_GetMatchInfo.Request = function () {
    this.MatchUid = 0;
};

B2M_GetMatchInfo.RequestKey = {
    MatchUid : 'MatchUid'
};

B2M_GetMatchInfo.Response = function () {
    this.Result = B2M_GetMatchInfo.ResultType.Fail;
    //this.MatchInfo = new MatchInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

B2M_GetMatchInfo.ResponseKey = {
    MatchInfo : 'MatchInfo',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

B2M_Ping.Request = function () {
    this.Address = '';
    this.Port = 0;
    this.Weight = 0;
    this.BattleVersion = '';
};

B2M_Ping.RequestKey = {
    Address : 'Address',
    Port : 'Port',
    Weight : 'Weight',
    BattleVersion : 'BattleVersion'
};

B2M_Ping.BattleIntegrityCheckInfo = function () {
    this.AccountId = 0;
    this.ChapterIndex = 0;
    this.DungeonIndex = 0;
    this.Difficulty = 0;
    this.BattleType = BattleType.None;
    this.BattleLogString = '';
    //this.LeftHeroInfos = Array();
    //this.LeftInitialHeroInfos = Array();
    this.LeftCreatureInfoString = '';
    //this.RightHeroInfos = Array();
    //this.RightInitialHeroInfos = Array();
    this.RightCreatureInfoString = '';
};

B2M_Ping.BattleIntegrityCheckInfoKey = {
    AccountId : 'AccountId',
    ChapterIndex : 'ChapterIndex',
    DungeonIndex : 'DungeonIndex',
    Difficulty : 'Difficulty',
    BattleLogString : 'BattleLogString',
    LeftCreatureInfoString : 'LeftCreatureInfoString',
    RightCreatureInfoString : 'RightCreatureInfoString'
};

B2M_Ping.Response = function () {
    this.Result = B2M_Ping.ResultType.Fail;
    //this.BattleIntegrityCheckInfos = Array();
};

B2M_Ping.ResponseKey = {
};

B2G_SetMatchResult.Request = function () {
    this.SeasonIndex = 0;
    this.MatchUid = 0;
    this.AccountId = 0;
    this.Win = 0;
    this.AvgFightingPower = 0;
    this.PlayTime = 0;
    //this.AliveHeroIndices = Array();
};

B2G_SetMatchResult.RequestKey = {
    SeasonIndex : 'SeasonIndex',
    MatchUid : 'MatchUid',
    AccountId : 'AccountId',
    Win : 'Win',
    AvgFightingPower : 'AvgFightingPower',
    PlayTime : 'PlayTime'
};

B2G_SetMatchResult.Response = function () {
    //this.MatchResult = new MatchResultInfo();
    this.Result = B2G_SetMatchResult.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

B2G_SetMatchResult.ResponseKey = {
    MatchResult : 'MatchResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

BattleLoginReq = function () {
    this.MatchUid = 0;
    this.AccountId = 0;
    this.MasterId = 0;
    this.GameServerHost = '';
    //this.HeroIndices = Array();
    this.ChapterIndex = 0;
    this.DungeonIndex = 0;
    //this.UserInfos = Array();
    this.RequestId = 0;
};

BattleLoginReqKey = {
    MatchUid : 'MatchUid',
    AccountId : 'AccountId',
    MasterId : 'MasterId',
    GameServerHost : 'GameServerHost',
    ChapterIndex : 'ChapterIndex',
    DungeonIndex : 'DungeonIndex',
    RequestId : 'RequestId'
};

BattleLoginRes = function () {
    this.Result = BattleLoginRes.ResultType.Success;
    this.RequestId = 0;
};

BattleLoginResKey = {
    RequestId : 'RequestId'
};

BattleEnterReq = function () {
    this.RequestId = 0;
};

BattleEnterReqKey = {
    RequestId : 'RequestId'
};

BattleEnterRes = function () {
    this.Result = BattleEnterRes.ResultType.Success;
    this.RequestId = 0;
};

BattleEnterResKey = {
    RequestId : 'RequestId'
};

BattleStartReq = function () {
    this.RequestId = 0;
};

BattleStartReqKey = {
    RequestId : 'RequestId'
};

BattleStartRes = function () {
    this.Result = BattleStartRes.ResultType.Success;
    this.RequestId = 0;
};

BattleStartResKey = {
    RequestId : 'RequestId'
};

BattleLogNot = function () {
    //this.BattleLogs = Array();
};

BattleLogNotKey = {
};

BattleEndNot = function () {
    this.Reason = BattleEndNot.ReasonType.Ended;
};

BattleEndNotKey = {
};

BattleResultNot = function () {
    this.Win = false;
    this.Dropped = false;
    //this.KillCount = new System.Collections.Generic.Dictionary`2[System.Int32,System.Int32]();
    //this.AliveHeroIndices = Array();
};

BattleResultNotKey = {
    Win : 'Win',
    Dropped : 'Dropped',
    KillCount : 'KillCount'
};

DestroyCreatureNot = function () {
    this.CreatureUid = 0;
};

DestroyCreatureNotKey = {
    CreatureUid : 'CreatureUid'
};

WaveReadyNot = function () {
    this.WaveIndex = 0;
    this.TotalWaveIndex = 0;
};

WaveReadyNotKey = {
    WaveIndex : 'WaveIndex',
    TotalWaveIndex : 'TotalWaveIndex'
};

WaveEndNot = function () {
};

WaveEndNotKey = {
};

BaseCreatureActionReq = function () {
    this.CreatureUid = 0;
    this.RequestId = 0;
};

BaseCreatureActionReqKey = {
    CreatureUid : 'CreatureUid',
    RequestId : 'RequestId'
};

BaseCreatureActionRes = function () {
    this.Result = BaseCreatureActionRes.ResultType.Success;
    this.RequestId = 0;
};

BaseCreatureActionResKey = {
    RequestId : 'RequestId'
};

UseSkillReq = function () {
    this.CreatureUid = 0;
    this.SkillSlotIndex = 0;
    this.RequestId = 0;
};

UseSkillReqKey = {
    CreatureUid : 'CreatureUid',
    SkillSlotIndex : 'SkillSlotIndex',
    RequestId : 'RequestId'
};

UseSkillRes = function () {
    this.Result = UseSkillRes.ResultType.Success;
    this.RequestId = 0;
};

UseSkillResKey = {
    RequestId : 'RequestId'
};

ReserveOnSkillReq = function () {
    this.SkillSlotIndex = 0;
    this.ManualTargetUid = 0;
    this.CreatureUid = 0;
    this.RequestId = 0;
};

ReserveOnSkillReqKey = {
    SkillSlotIndex : 'SkillSlotIndex',
    ManualTargetUid : 'ManualTargetUid',
    CreatureUid : 'CreatureUid',
    RequestId : 'RequestId'
};

ReserveOffSkillReq = function () {
    this.CreatureUid = 0;
    this.RequestId = 0;
};

ReserveOffSkillReqKey = {
    CreatureUid : 'CreatureUid',
    RequestId : 'RequestId'
};

SetManualTargetReq = function () {
    this.TargetCreatureUid = 0;
    this.CreatureUid = 0;
    this.RequestId = 0;
};

SetManualTargetReqKey = {
    TargetCreatureUid : 'TargetCreatureUid',
    CreatureUid : 'CreatureUid',
    RequestId : 'RequestId'
};

SetManualMoveReq = function () {
    //this.Position = new NUtil.Vector3();
    this.CreatureUid = 0;
    this.RequestId = 0;
};

SetManualMoveReqKey = {
    Position : 'Position',
    CreatureUid : 'CreatureUid',
    RequestId : 'RequestId'
};

FireNextSkillReq = function () {
    this.CreatureUid = 0;
    this.RequestId = 0;
};

FireNextSkillReqKey = {
    CreatureUid : 'CreatureUid',
    RequestId : 'RequestId'
};

PingReq = function () {
    this.ClientTimeMs = 0;
    this.RequestId = 0;
};

PingReqKey = {
    ClientTimeMs : 'ClientTimeMs',
    RequestId : 'RequestId'
};

PingRes = function () {
    this.Result = PingRes.ResultType.Success;
    this.ClientTimeMs = 0;
    this.ServerTimeMs = 0;
    this.RequestId = 0;
};

PingResKey = {
    ClientTimeMs : 'ClientTimeMs',
    ServerTimeMs : 'ServerTimeMs',
    RequestId : 'RequestId'
};

PingIdleReq = function () {
    this.RequestId = 0;
};

PingIdleReqKey = {
    RequestId : 'RequestId'
};

PingIdleRes = function () {
    this.RequestId = 0;
};

PingIdleResKey = {
    RequestId : 'RequestId'
};

G2G_RejectFriend.Request = function () {
    this.AccountId = 0;
    this.FriendId = 0;
};

G2G_RejectFriend.RequestKey = {
    AccountId : 'AccountId',
    FriendId : 'FriendId'
};

G2G_RejectFriend.Response = function () {
    this.Result = G2G_RejectFriend.ResultType.Fail;
};

G2G_RejectFriend.ResponseKey = {
};

G2G_DropUser.Request = function () {
    this.AccountId = 0;
};

G2G_DropUser.RequestKey = {
    AccountId : 'AccountId'
};

G2G_DropUser.Response = function () {
    this.Result = G2G_DropUser.ResultType.Fail;
};

G2G_DropUser.ResponseKey = {
};

G2M_SyncWaiter.Request = function () {
    this.Host = '';
    //this.AccountInfosForRegister = Array();
    //this.AccountIdsForTouch = Array();
    //this.PausedAccountIds = Array();
};

G2M_SyncWaiter.RequestKey = {
    Host : 'Host'
};

G2M_SyncWaiter.Response = function () {
    this.Result = G2M_SyncWaiter.ResultType.Fail;
    //this.MatchInfos = Array();
    //this.ExpiredAccountIds = Array();
    //this.AllServerHosts = Array();
};

G2M_SyncWaiter.ResponseKey = {
};

SaveReplay.Request = function () {
    this.ServiceName = '';
    this.Type = ReplayType.Arena;
    this.Info = '';
    this.BattleLogs = '';
    //this.AccountIds = Array();
    this.SessionId = '';
};

SaveReplay.RequestKey = {
    ServiceName : 'ServiceName',
    Info : 'Info',
    BattleLogs : 'BattleLogs',
    SessionId : 'SessionId'
};

B2M_SaveReplay.Request = function () {
    this.ServiceName = '';
    this.Type = ReplayType.Arena;
    this.Info = '';
    this.BattleLogs = '';
    //this.AccountIds = Array();
    this.SessionId = '';
};

B2M_SaveReplay.RequestKey = {
    ServiceName : 'ServiceName',
    Info : 'Info',
    BattleLogs : 'BattleLogs',
    SessionId : 'SessionId'
};

GetAchievements.Request = function () {
    this.SessionId = '';
};

GetAchievements.RequestKey = {
    SessionId : 'SessionId'
};

GetAchievements.Response = function () {
    this.Result = GetAchievements.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetAchievements.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

RewardAchievement.Request = function () {
    this.AchievementIndex = 0;
    this.Step = 0;
    this.SessionId = '';
};

RewardAchievement.RequestKey = {
    AchievementIndex : 'AchievementIndex',
    Step : 'Step',
    SessionId : 'SessionId'
};

RewardAchievement.Response = function () {
    this.Result = RewardAchievement.ResultType.Fail;
    //this.goldResult = new GoldResultInfo();
    //this.gemResult = new GemResultInfo();
    //this.itemResults = Array();
    //this.staminaResult = new StaminaResultInfo();
    //this.expResult = new ExpResultInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

RewardAchievement.ResponseKey = {
    goldResult : 'goldResult',
    gemResult : 'gemResult',
    staminaResult : 'staminaResult',
    expResult : 'expResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

Cheat.Request = function () {
    this.Command = '';
    this.SessionId = '';
};

Cheat.RequestKey = {
    Command : 'Command',
    SessionId : 'SessionId'
};

Cheat.Response = function () {
    this.Message = '';
    //this.EquipItemResults = Array();
    //this.ItemResults = Array();
    //this.GoldResult = new GoldResultInfo();
    //this.GemResult = new GemResultInfo();
    //this.HeroInfos = Array();
    //this.TeamExpResult = new ExpResultInfo();
    //this.TowerInfos = Array();
    //this.DungeonInfos = Array();
    //this.TutorialInfos = Array();
    //this.StaminaResult = new StaminaResultInfo();
    //this.SwordResult = new SwordResultInfo();
    //this.PrisonKeyResult = new UndergroundPrisonKeyResultInfo();
    //this.LabyrinthKeyResult = new UndergroundLabyrinthKeyResultInfo();
    this.Result = Cheat.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

Cheat.ResponseKey = {
    Message : 'Message',
    GoldResult : 'GoldResult',
    GemResult : 'GemResult',
    TeamExpResult : 'TeamExpResult',
    StaminaResult : 'StaminaResult',
    SwordResult : 'SwordResult',
    PrisonKeyResult : 'PrisonKeyResult',
    LabyrinthKeyResult : 'LabyrinthKeyResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

CompareDbSchema.Request = function () {
    this.AccountId = 0;
    this.SessionId = '';
};

CompareDbSchema.RequestKey = {
    AccountId : 'AccountId',
    SessionId : 'SessionId'
};

CompareDbSchema.Response = function () {
    this.Result = CompareDbSchema.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

CompareDbSchema.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

DumpDbSchema.Request = function () {
    this.AccountId = 0;
    this.SessionId = '';
};

DumpDbSchema.RequestKey = {
    AccountId : 'AccountId',
    SessionId : 'SessionId'
};

DumpDbSchema.Response = function () {
    this.Result = DumpDbSchema.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

DumpDbSchema.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetAttendanceReward.Request = function () {
    this.AttendanceIndex = 0;
    this.SessionId = '';
};

GetAttendanceReward.RequestKey = {
    AttendanceIndex : 'AttendanceIndex',
    SessionId : 'SessionId'
};

GetAttendanceReward.Response = function () {
    //this.AttendanceRewardResult = new DbRewardResult();
    //this.AttendanceInfos = Array();
    this.Result = GetAttendanceReward.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetAttendanceReward.ResponseKey = {
    AttendanceRewardResult : 'AttendanceRewardResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

AbandonMultiplayReward.Request = function () {
    this.ServiceName = '';
    this.MasterAccountId = 0;
    this.MasterServerIp = '';
    this.MasterServerPort = 0;
    this.SessionId = '';
};

AbandonMultiplayReward.RequestKey = {
    ServiceName : 'ServiceName',
    MasterAccountId : 'MasterAccountId',
    MasterServerIp : 'MasterServerIp',
    MasterServerPort : 'MasterServerPort',
    SessionId : 'SessionId'
};

AbandonMultiplayReward.Response = function () {
    this.RewardCalculated = false;
    this.Result = AbandonMultiplayReward.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

AbandonMultiplayReward.ResponseKey = {
    RewardCalculated : 'RewardCalculated',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

RewardClearChapter.Request = function () {
    this.ChapterIndex = 0;
    this.Difficulty = 0;
    this.SessionId = '';
};

RewardClearChapter.RequestKey = {
    ChapterIndex : 'ChapterIndex',
    Difficulty : 'Difficulty',
    SessionId : 'SessionId'
};

RewardClearChapter.Response = function () {
    //this.RewardInfo = new ChapterRewardInfo();
    //this.GoldResult = new GoldResultInfo();
    //this.GemResult = new GemResultInfo();
    //this.HeroAddResult = new HeroAddResultInfo();
    this.Result = RewardClearChapter.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

RewardClearChapter.ResponseKey = {
    RewardInfo : 'RewardInfo',
    GoldResult : 'GoldResult',
    GemResult : 'GemResult',
    HeroAddResult : 'HeroAddResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetTowerNpcInfo.Request = function () {
    this.TowerIndex = 0;
    this.TowerFloor = 0;
    this.SessionId = '';
};

GetTowerNpcInfo.RequestKey = {
    TowerIndex : 'TowerIndex',
    TowerFloor : 'TowerFloor',
    SessionId : 'SessionId'
};

GetTowerNpcInfo.Response = function () {
    //this.TowerNpcInfo = new CachedAccountInfo();
    this.Result = GetTowerNpcInfo.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetTowerNpcInfo.ResponseKey = {
    TowerNpcInfo : 'TowerNpcInfo',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetTowerHeroInfo.Request = function () {
    this.TowerIndex = 0;
    this.SessionId = '';
};

GetTowerHeroInfo.RequestKey = {
    TowerIndex : 'TowerIndex',
    SessionId : 'SessionId'
};

GetTowerHeroInfo.Response = function () {
    //this.TowerHeroInfos = Array();
    this.Result = GetTowerHeroInfo.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetTowerHeroInfo.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

ResetTower.Request = function () {
    this.TowerIndex = 0;
    this.SessionId = '';
};

ResetTower.RequestKey = {
    TowerIndex : 'TowerIndex',
    SessionId : 'SessionId'
};

ResetTower.Response = function () {
    //this.CurrencyResults = Array();
    //this.TowerInfo = new TowerInfo();
    this.Result = ResetTower.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

ResetTower.ResponseKey = {
    TowerInfo : 'TowerInfo',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

SaveIAPurchaseInfo.Request = function () {
    this.Platform = '';
    this.PurchaseStatus = '';
    this.ProductId = '';
    this.DeveloperPayload = '';
    this.OrderId = '';
    this.PurchaseToken = '';
    this.CurrencyCode = '';
    this.Price = 0;
    this.SessionId = '';
};

SaveIAPurchaseInfo.RequestKey = {
    Platform : 'Platform',
    PurchaseStatus : 'PurchaseStatus',
    ProductId : 'ProductId',
    DeveloperPayload : 'DeveloperPayload',
    OrderId : 'OrderId',
    PurchaseToken : 'PurchaseToken',
    CurrencyCode : 'CurrencyCode',
    Price : 'Price',
    SessionId : 'SessionId'
};

SaveIAPurchaseInfo.Response = function () {
    this.Result = SaveIAPurchaseInfo.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

SaveIAPurchaseInfo.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetFreeEquipGachaInfo.Request = function () {
    this.SessionId = '';
};

GetFreeEquipGachaInfo.RequestKey = {
    SessionId : 'SessionId'
};

GetFreeEquipGachaInfo.Response = function () {
    this.Result = GetFreeEquipGachaInfo.ResultType.Fail;
    //this.gachaInfos = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetFreeEquipGachaInfo.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

ExecEquipGacha.Request = function () {
    this.ItemIndex = 0;
    this.GachaIndex = 0;
    this.Free = false;
    this.SessionId = '';
};

ExecEquipGacha.RequestKey = {
    ItemIndex : 'ItemIndex',
    GachaIndex : 'GachaIndex',
    Free : 'Free',
    SessionId : 'SessionId'
};

ExecEquipGacha.Response = function () {
    this.Result = ExecEquipGacha.ResultType.Fail;
    //this.gachaInfo = new FreeEquipGachaInfo();
    //this.goldResult = new GoldResultInfo();
    //this.gemResult = new GemResultInfo();
    //this.mileageResult = new MileageResultInfo();
    //this.equipItemInfos = Array();
    //this.itemResultInfo = new ItemResultInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

ExecEquipGacha.ResponseKey = {
    gachaInfo : 'gachaInfo',
    goldResult : 'goldResult',
    gemResult : 'gemResult',
    mileageResult : 'mileageResult',
    itemResultInfo : 'itemResultInfo',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

UpgradeEquipOption.Request = function () {
    this.EquipItemSlotIndex = 0;
    this.MaterialItemIndex = 0;
    this.MaterialItemCount = 0;
    this.SessionId = '';
};

UpgradeEquipOption.RequestKey = {
    EquipItemSlotIndex : 'EquipItemSlotIndex',
    MaterialItemIndex : 'MaterialItemIndex',
    MaterialItemCount : 'MaterialItemCount',
    SessionId : 'SessionId'
};

UpgradeEquipOption.Response = function () {
    //this.ResultEquipItem = new EquipItemInfo();
    //this.GoldResult = new GoldResultInfo();
    //this.ItemResult = new ItemResultInfo();
    this.Result = UpgradeEquipOption.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

UpgradeEquipOption.ResponseKey = {
    ResultEquipItem : 'ResultEquipItem',
    GoldResult : 'GoldResult',
    ItemResult : 'ItemResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

ExtendEquip.Request = function () {
    this.SessionId = '';
};

ExtendEquip.RequestKey = {
    SessionId : 'SessionId'
};

ExtendEquip.Response = function () {
    this.Result = ExtendEquip.ResultType.Fail;
    //this.GemResult = new GemResultInfo();
    this.NewInventoryExtend = 0;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

ExtendEquip.ResponseKey = {
    GemResult : 'GemResult',
    NewInventoryExtend : 'NewInventoryExtend',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

EnhanceHero.Request = function () {
    this.HeroIndex = 0;
    this.SessionId = '';
};

EnhanceHero.RequestKey = {
    HeroIndex : 'HeroIndex',
    SessionId : 'SessionId'
};

EnhanceHero.Response = function () {
    this.Result = EnhanceHero.ResultType.Fail;
    //this.ItemResults = Array();
    this.NewEnhanced = 0;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

EnhanceHero.ResponseKey = {
    NewEnhanced : 'NewEnhanced',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

UsePackageItem.Request = function () {
    this.ItemIndex = 0;
    this.ItemCount = 0;
    this.SessionId = '';
};

UsePackageItem.RequestKey = {
    ItemIndex : 'ItemIndex',
    ItemCount : 'ItemCount',
    SessionId : 'SessionId'
};

UsePackageItem.Response = function () {
    this.Result = UsePackageItem.ResultType.Fail;
    //this.ItemResult = new ItemResultInfo();
    //this.RewardResults = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

UsePackageItem.ResponseKey = {
    ItemResult : 'ItemResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

UseBoosterItem.Request = function () {
    this.ItemIndex = 0;
    this.SessionId = '';
};

UseBoosterItem.RequestKey = {
    ItemIndex : 'ItemIndex',
    SessionId : 'SessionId'
};

UseBoosterItem.Response = function () {
    this.Result = UseBoosterItem.ResultType.Fail;
    //this.ItemResult = new ItemResultInfo();
    //this.ItemTimeDurationInfo = new PlayerItemTimeDurationInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

UseBoosterItem.ResponseKey = {
    ItemResult : 'ItemResult',
    ItemTimeDurationInfo : 'ItemTimeDurationInfo',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

UseHeroSelectItem.Request = function () {
    this.ItemIndex = 0;
    this.HeroIndex = 0;
    this.SessionId = '';
};

UseHeroSelectItem.RequestKey = {
    ItemIndex : 'ItemIndex',
    HeroIndex : 'HeroIndex',
    SessionId : 'SessionId'
};

UseHeroSelectItem.Response = function () {
    this.Result = UseHeroSelectItem.ResultType.Fail;
    //this.ItemResults = Array();
    //this.HeroResult = new HeroAddResultInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

UseHeroSelectItem.ResponseKey = {
    HeroResult : 'HeroResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

EnterLobby.Request = function () {
    this.SessionId = '';
};

EnterLobby.RequestKey = {
    SessionId : 'SessionId'
};

EnterLobby.Response = function () {
    this.ForwardHost = '';
    //this.DungeonInfos = Array();
    //this.TowerInfos = Array();
    //this.AttendanceDatas = Array();
    //this.AttendanceRewardableDays = Array();
    //this.LobbyNotices = Array();
    this.CurStamina = 0;
    this.StaminaRechargeTime = '';
    this.Result = EnterLobby.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

EnterLobby.ResponseKey = {
    ForwardHost : 'ForwardHost',
    CurStamina : 'CurStamina',
    StaminaRechargeTime : 'StaminaRechargeTime',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

VisitDungeon.Request = function () {
    this.ChapterIndex = 0;
    this.DungeonIndex = 0;
    this.SessionId = '';
};

VisitDungeon.RequestKey = {
    ChapterIndex : 'ChapterIndex',
    DungeonIndex : 'DungeonIndex',
    SessionId : 'SessionId'
};

VisitDungeon.Response = function () {
    //this.GoldResult = new GoldResultInfo();
    //this.GemResult = new GemResultInfo();
    //this.ItemResults = Array();
    //this.EquipItemResults = Array();
    //this.HeroInfos = Array();
    //this.ExpResultInfos = Array();
    //this.StaminaResultInfos = Array();
    //this.DungeonInfo = new ChapterDungeonInfo();
    this.Result = VisitDungeon.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

VisitDungeon.ResponseKey = {
    GoldResult : 'GoldResult',
    GemResult : 'GemResult',
    DungeonInfo : 'DungeonInfo',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetMultiplayReward.Request = function () {
    this.MasterAccountId = 0;
    this.MasterServerIp = '';
    this.MasterServerPort = 0;
    this.SessionId = '';
};

GetMultiplayReward.RequestKey = {
    MasterAccountId : 'MasterAccountId',
    MasterServerIp : 'MasterServerIp',
    MasterServerPort : 'MasterServerPort',
    SessionId : 'SessionId'
};

GetMultiplayReward.RewardWinner = function () {
    //this.ApplicantIds = Array();
    //this.DiceNumbers = Array();
    this.WinnerId = 0;
};

GetMultiplayReward.RewardWinnerKey = {
    WinnerId : 'WinnerId'
};

GetMultiplayReward.Response = function () {
    //this.ReceivedRewardItems = Array();
    //this.RewardWinners = Array();
    //this.ItemResults = Array();
    //this.EquipItemInfos = Array();
    this.Result = GetMultiplayReward.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetMultiplayReward.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

ApplyForMultiplayReward.Request = function () {
    this.MasterAccountId = 0;
    this.MasterServerIp = '';
    this.MasterServerPort = 0;
    this.RewardItemNo = 0;
    this.SessionId = '';
};

ApplyForMultiplayReward.RequestKey = {
    MasterAccountId : 'MasterAccountId',
    MasterServerIp : 'MasterServerIp',
    MasterServerPort : 'MasterServerPort',
    RewardItemNo : 'RewardItemNo',
    SessionId : 'SessionId'
};

ApplyForMultiplayReward.Response = function () {
    this.RewardCalculated = false;
    this.Result = ApplyForMultiplayReward.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

ApplyForMultiplayReward.ResponseKey = {
    RewardCalculated : 'RewardCalculated',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetSelectedReward.Request = function () {
    this.ChapterIndex = 0;
    this.DungeonIndex = 0;
    //this.ItemCodes = Array();
    this.SessionId = '';
};

GetSelectedReward.RequestKey = {
    ChapterIndex : 'ChapterIndex',
    DungeonIndex : 'DungeonIndex',
    SessionId : 'SessionId'
};

GetSelectedReward.Response = function () {
    //this.ItemResults = Array();
    //this.EquipItemInfos = Array();
    this.Result = GetSelectedReward.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetSelectedReward.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetKeyDecoder.Request = function () {
    this.SessionId = '';
};

GetKeyDecoder.RequestKey = {
    SessionId : 'SessionId'
};

GetKeyDecoder.Response = function () {
    this.Result = GetKeyDecoder.ResultType.Fail;
    this.key_param = '';
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetKeyDecoder.ResponseKey = {
    key_param : 'key_param',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

RechargeUndergroundPrisonKey.Request = function () {
    this.DungeonIndex = 0;
    this.SessionId = '';
};

RechargeUndergroundPrisonKey.RequestKey = {
    DungeonIndex : 'DungeonIndex',
    SessionId : 'SessionId'
};

RechargeUndergroundPrisonKey.Response = function () {
    this.Result = RechargeUndergroundPrisonKey.ResultType.Fail;
    //this.GemResult = new GemResultInfo();
    //this.UndergroundPrisonKeyResult = new UndergroundPrisonKeyResultInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

RechargeUndergroundPrisonKey.ResponseKey = {
    GemResult : 'GemResult',
    UndergroundPrisonKeyResult : 'UndergroundPrisonKeyResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetDOWDungeonInfo.Request = function () {
    this.SessionId = '';
};

GetDOWDungeonInfo.RequestKey = {
    SessionId : 'SessionId'
};

GetDOWDungeonInfo.Response = function () {
    this.Result = GetDOWDungeonInfo.ResultType.Fail;
    //this.DOWDungeonInfos = Array();
    this.UndergroundPrisonKey = 0;
    this.UndergroundPrisonKeyRechargeTime = '';
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetDOWDungeonInfo.ResponseKey = {
    UndergroundPrisonKey : 'UndergroundPrisonKey',
    UndergroundPrisonKeyRechargeTime : 'UndergroundPrisonKeyRechargeTime',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

AwakenEquip.Request = function () {
    this.EquipItemSlotIndex = 0;
    //this.MaterialSlotIndices = Array();
    this.SessionId = '';
};

AwakenEquip.RequestKey = {
    EquipItemSlotIndex : 'EquipItemSlotIndex',
    SessionId : 'SessionId'
};

AwakenEquip.Response = function () {
    this.Success = false;
    //this.ResultEquipItem = new EquipItemInfo();
    //this.GoldResult = new GoldResultInfo();
    //this.ItemResults = Array();
    //this.RemovedEquipItemSlotIndices = Array();
    this.Result = AwakenEquip.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

AwakenEquip.ResponseKey = {
    Success : 'Success',
    ResultEquipItem : 'ResultEquipItem',
    GoldResult : 'GoldResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

BreakEquip.Request = function () {
    //this.EquipItemSlotIndices = Array();
    this.SessionId = '';
};

BreakEquip.RequestKey = {
    SessionId : 'SessionId'
};

BreakEquip.Response = function () {
    this.Result = BreakEquip.ResultType.Fail;
    //this.ItemResults = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

BreakEquip.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

UnsetRune.Request = function () {
    this.EquipItemSlotIndex = 0;
    this.RuneSlotIndex = 0;
    this.Preserve = false;
    this.SessionId = '';
};

UnsetRune.RequestKey = {
    EquipItemSlotIndex : 'EquipItemSlotIndex',
    RuneSlotIndex : 'RuneSlotIndex',
    Preserve : 'Preserve',
    SessionId : 'SessionId'
};

UnsetRune.Response = function () {
    this.Result = UnsetRune.ResultType.Fail;
    //this.EquipItem = new EquipItemInfo();
    //this.GemResult = new GemResultInfo();
    //this.ItemResult = new ItemResultInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

UnsetRune.ResponseKey = {
    EquipItem : 'EquipItem',
    GemResult : 'GemResult',
    ItemResult : 'ItemResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

SetRune.Request = function () {
    this.EquipItemSlotIndex = 0;
    this.RuneSlotIndex = 0;
    this.RuneItemIndex = 0;
    this.SessionId = '';
};

SetRune.RequestKey = {
    EquipItemSlotIndex : 'EquipItemSlotIndex',
    RuneSlotIndex : 'RuneSlotIndex',
    RuneItemIndex : 'RuneItemIndex',
    SessionId : 'SessionId'
};

SetRune.Response = function () {
    this.Result = SetRune.ResultType.Fail;
    //this.EquipItem = new EquipItemInfo();
    //this.ItemResults = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

SetRune.ResponseKey = {
    EquipItem : 'EquipItem',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

UnsetEquip.Request = function () {
    //this.EquipItemSlotIndex = Array();
    this.SessionId = '';
};

UnsetEquip.RequestKey = {
    SessionId : 'SessionId'
};

UnsetEquip.Response = function () {
    this.Result = UnsetEquip.ResultType.Fail;
    //this.UnequippedSlotIndex = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

UnsetEquip.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

UnlockEquip.Request = function () {
    this.HeroIndex = 0;
    this.HeroPartIndex = 0;
    this.SessionId = '';
};

UnlockEquip.RequestKey = {
    HeroIndex : 'HeroIndex',
    HeroPartIndex : 'HeroPartIndex',
    SessionId : 'SessionId'
};

UnlockEquip.Response = function () {
    this.Result = UnlockEquip.ResultType.Fail;
    //this.GoldResult = new GoldResultInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

UnlockEquip.ResponseKey = {
    GoldResult : 'GoldResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

SellEquip.Request = function () {
    //this.EquipItemSlotIndices = Array();
    this.SessionId = '';
};

SellEquip.RequestKey = {
    SessionId : 'SessionId'
};

SellEquip.Response = function () {
    this.Result = SellEquip.ResultType.Fail;
    //this.GoldResult = new GoldResultInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

SellEquip.ResponseKey = {
    GoldResult : 'GoldResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

SearchFriend.Request = function () {
    this.Keyword = '';
    this.SessionId = '';
};

SearchFriend.RequestKey = {
    Keyword : 'Keyword',
    SessionId : 'SessionId'
};

SearchFriend.Response = function () {
    this.Result = SearchFriend.ResultType.Fail;
    //this.FriendInfos = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

SearchFriend.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

RejectFriend.Request = function () {
    this.FriendId = 0;
    this.SessionId = '';
};

RejectFriend.RequestKey = {
    FriendId : 'FriendId',
    SessionId : 'SessionId'
};

RejectFriend.Response = function () {
    this.Result = RejectFriend.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

RejectFriend.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

RequestFriend.Request = function () {
    this.FriendId = 0;
    this.SessionId = '';
};

RequestFriend.RequestKey = {
    FriendId : 'FriendId',
    SessionId : 'SessionId'
};

RequestFriend.Response = function () {
    this.Result = RequestFriend.ResultType.Fail;
    //this.FriendInfo = new FriendInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

RequestFriend.ResponseKey = {
    FriendInfo : 'FriendInfo',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetGuildAllMercenaries.Request = function () {
    this.SessionId = '';
};

GetGuildAllMercenaries.RequestKey = {
    SessionId : 'SessionId'
};

GetGuildAllMercenaries.Response = function () {
    this.Result = GetGuildAllMercenaries.ResultType.Fail;
    //this.Mercenaries = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetGuildAllMercenaries.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

CancelRequestJoinGuild.Request = function () {
    this.GuildId = 0;
    this.SessionId = '';
};

CancelRequestJoinGuild.RequestKey = {
    GuildId : 'GuildId',
    SessionId : 'SessionId'
};

CancelRequestJoinGuild.Response = function () {
    this.Result = CancelRequestJoinGuild.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

CancelRequestJoinGuild.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetJoinRequestedGuilds.Request = function () {
    this.SessionId = '';
};

GetJoinRequestedGuilds.RequestKey = {
    SessionId : 'SessionId'
};

GetJoinRequestedGuilds.Response = function () {
    this.Result = GetJoinRequestedGuilds.ResultType.Fail;
    //this.guildInfos = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetJoinRequestedGuilds.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

CheckGuildName.Request = function () {
    this.name = '';
    this.SessionId = '';
};

CheckGuildName.RequestKey = {
    name : 'name',
    SessionId : 'SessionId'
};

CheckGuildName.Response = function () {
    this.Result = CheckGuildName.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

CheckGuildName.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

WithdrawGuild.Request = function () {
    this.SessionId = '';
};

WithdrawGuild.RequestKey = {
    SessionId : 'SessionId'
};

WithdrawGuild.Response = function () {
    this.Result = WithdrawGuild.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

WithdrawGuild.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

RequestJoinGuild.Request = function () {
    this.GuildId = 0;
    this.SessionId = '';
};

RequestJoinGuild.RequestKey = {
    GuildId : 'GuildId',
    SessionId : 'SessionId'
};

RequestJoinGuild.Response = function () {
    this.Result = RequestJoinGuild.ResultType.Fail;
    this.JoinWay = 0;
    //this.guildInfo = new MyGuildInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

RequestJoinGuild.ResponseKey = {
    JoinWay : 'JoinWay',
    guildInfo : 'guildInfo',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

RejectJoinRequest.Request = function () {
    this.AccountId = 0;
    this.SessionId = '';
};

RejectJoinRequest.RequestKey = {
    AccountId : 'AccountId',
    SessionId : 'SessionId'
};

RejectJoinRequest.Response = function () {
    this.Result = RejectJoinRequest.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

RejectJoinRequest.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetGuildBasicInfo.Request = function () {
    this.SessionId = '';
};

GetGuildBasicInfo.RequestKey = {
    SessionId : 'SessionId'
};

GetGuildBasicInfo.Response = function () {
    this.Result = GetGuildBasicInfo.ResultType.Fail;
    //this.info = new MyGuildInfo();
    //this.members = Array();
    //this.Mercenaries = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetGuildBasicInfo.ResponseKey = {
    info : 'info',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

ApplyGuildSettingChange.Request = function () {
    this.Mark = 0;
    this.joinWay = 0;
    this.TeamLevel = 0;
    this.introduce = '';
    this.notice = '';
    this.SessionId = '';
};

ApplyGuildSettingChange.RequestKey = {
    Mark : 'Mark',
    joinWay : 'joinWay',
    TeamLevel : 'TeamLevel',
    introduce : 'introduce',
    notice : 'notice',
    SessionId : 'SessionId'
};

ApplyGuildSettingChange.Response = function () {
    this.Result = ApplyGuildSettingChange.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

ApplyGuildSettingChange.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

AcceptJoinRequest.Request = function () {
    this.AccountId = 0;
    this.SessionId = '';
};

AcceptJoinRequest.RequestKey = {
    AccountId : 'AccountId',
    SessionId : 'SessionId'
};

AcceptJoinRequest.Response = function () {
    this.Result = AcceptJoinRequest.ResultType.Fail;
    //this.MemberInfo = new GuildMemberInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

AcceptJoinRequest.ResponseKey = {
    MemberInfo : 'MemberInfo',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

DelegateMaster.Request = function () {
    this.DelegateAccountId = 0;
    this.SessionId = '';
};

DelegateMaster.RequestKey = {
    DelegateAccountId : 'DelegateAccountId',
    SessionId : 'SessionId'
};

DelegateMaster.Response = function () {
    this.Result = DelegateMaster.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

DelegateMaster.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

DestroyGuild.Request = function () {
    this.SessionId = '';
};

DestroyGuild.RequestKey = {
    SessionId : 'SessionId'
};

DestroyGuild.Response = function () {
    this.Result = DestroyGuild.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

DestroyGuild.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

CreateGuild.Request = function () {
    this.mark = 0;
    this.joinWay = 0;
    this.introduce = '';
    this.name = '';
    this.SessionId = '';
};

CreateGuild.RequestKey = {
    mark : 'mark',
    joinWay : 'joinWay',
    introduce : 'introduce',
    name : 'name',
    SessionId : 'SessionId'
};

CreateGuild.Response = function () {
    this.Result = CreateGuild.ResultType.Fail;
    //this.GoldResult = new GoldResultInfo();
    this.GuildId = 0;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

CreateGuild.ResponseKey = {
    GoldResult : 'GoldResult',
    GuildId : 'GuildId',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetGuildList.Request = function () {
    this.SessionId = '';
};

GetGuildList.RequestKey = {
    SessionId : 'SessionId'
};

GetGuildList.Response = function () {
    this.Result = GetGuildList.ResultType.Fail;
    //this.guildInfos = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetGuildList.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetJoinRequestPlayers.Request = function () {
    this.SessionId = '';
};

GetJoinRequestPlayers.RequestKey = {
    SessionId : 'SessionId'
};

GetJoinRequestPlayers.Response = function () {
    this.Result = GetJoinRequestPlayers.ResultType.Fail;
    //this.players = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetJoinRequestPlayers.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

SearchGuild.Request = function () {
    this.name = '';
    this.SessionId = '';
};

SearchGuild.RequestKey = {
    name : 'name',
    SessionId : 'SessionId'
};

SearchGuild.Response = function () {
    this.Result = SearchGuild.ResultType.Fail;
    //this.Info = new GuildInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

SearchGuild.ResponseKey = {
    Info : 'Info',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

SetGuildAdminRank.Request = function () {
    this.AccountId = 0;
    this.GuildRank = 0;
    this.SessionId = '';
};

SetGuildAdminRank.RequestKey = {
    AccountId : 'AccountId',
    GuildRank : 'GuildRank',
    SessionId : 'SessionId'
};

SetGuildAdminRank.Response = function () {
    this.Result = SetGuildAdminRank.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

SetGuildAdminRank.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

UnregisterMercenary.Request = function () {
    this.heroIndex = 0;
    this.SessionId = '';
};

UnregisterMercenary.RequestKey = {
    heroIndex : 'heroIndex',
    SessionId : 'SessionId'
};

UnregisterMercenary.Response = function () {
    this.Result = UnregisterMercenary.ResultType.Fail;
    //this.GoldResult = new GoldResultInfo();
    //this.GuildPointResult = new GuildPointResultInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

UnregisterMercenary.ResponseKey = {
    GoldResult : 'GoldResult',
    GuildPointResult : 'GuildPointResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

RegisterMercenary.Request = function () {
    this.heroIndex = 0;
    this.SessionId = '';
};

RegisterMercenary.RequestKey = {
    heroIndex : 'heroIndex',
    SessionId : 'SessionId'
};

RegisterMercenary.Response = function () {
    this.Result = RegisterMercenary.ResultType.Fail;
    //this.info = new MercenaryHeroInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

RegisterMercenary.ResponseKey = {
    info : 'info',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

KickGuildMember.Request = function () {
    this.AccountId = 0;
    this.SessionId = '';
};

KickGuildMember.RequestKey = {
    AccountId : 'AccountId',
    SessionId : 'SessionId'
};

KickGuildMember.Response = function () {
    this.Result = KickGuildMember.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

KickGuildMember.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

LearnHeroSkill.Request = function () {
    this.HeroIndex = 0;
    this.SkillIndex = 0;
    this.SessionId = '';
};

LearnHeroSkill.RequestKey = {
    HeroIndex : 'HeroIndex',
    SkillIndex : 'SkillIndex',
    SessionId : 'SessionId'
};

LearnHeroSkill.Response = function () {
    this.Result = LearnHeroSkill.ResultType.Fail;
    //this.ItemResult = new ItemResultInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

LearnHeroSkill.ResponseKey = {
    ItemResult : 'ItemResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

ExtendHeroSkill.Request = function () {
    this.HeroIndex = 0;
    this.SkillIndex = 0;
    this.SkillExtend = 0;
    this.SessionId = '';
};

ExtendHeroSkill.RequestKey = {
    HeroIndex : 'HeroIndex',
    SkillIndex : 'SkillIndex',
    SkillExtend : 'SkillExtend',
    SessionId : 'SessionId'
};

ExtendHeroSkill.Response = function () {
    this.Result = ExtendHeroSkill.ResultType.Fail;
    //this.ItemResult = new ItemResultInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

ExtendHeroSkill.ResponseKey = {
    ItemResult : 'ItemResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

PurifyHero.Request = function () {
    this.HeroIndex = 0;
    this.SessionId = '';
};

PurifyHero.RequestKey = {
    HeroIndex : 'HeroIndex',
    SessionId : 'SessionId'
};

PurifyHero.Response = function () {
    this.Result = PurifyHero.ResultType.Fail;
    //this.GoldResult = new GoldResultInfo();
    //this.ItemResult = new ItemResultInfo();
    //this.PurifyResult = new HeroPurifyResultInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

PurifyHero.ResponseKey = {
    GoldResult : 'GoldResult',
    ItemResult : 'ItemResult',
    PurifyResult : 'PurifyResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

UseRecipeItem.Request = function () {
    this.ItemIndex = 0;
    this.SessionId = '';
};

UseRecipeItem.RequestKey = {
    ItemIndex : 'ItemIndex',
    SessionId : 'SessionId'
};

UseRecipeItem.Response = function () {
    this.Result = UseRecipeItem.ResultType.Fail;
    //this.GoldResult = new GoldResultInfo();
    //this.ItemResults = Array();
    //this.EquipItemInfos = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

UseRecipeItem.ResponseKey = {
    GoldResult : 'GoldResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

UsePotionItem.Request = function () {
    this.ItemIndex = 0;
    this.HeroIndex = 0;
    this.ItemCount = 0;
    this.SessionId = '';
};

UsePotionItem.RequestKey = {
    ItemIndex : 'ItemIndex',
    HeroIndex : 'HeroIndex',
    ItemCount : 'ItemCount',
    SessionId : 'SessionId'
};

UsePotionItem.Response = function () {
    this.Result = UsePotionItem.ResultType.Fail;
    //this.StaminaResult = new StaminaResultInfo();
    //this.ItemResult = new ItemResultInfo();
    //this.HeroExpResult = new HeroExpResultInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

UsePotionItem.ResponseKey = {
    StaminaResult : 'StaminaResult',
    ItemResult : 'ItemResult',
    HeroExpResult : 'HeroExpResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

MailReceiveResult = function () {
    //this.GoldResult = new GoldResultInfo();
    //this.GemResult = new GemResultInfo();
    //this.PvpCoinResult = new PvpCoinResultInfo();
    //this.MileageResult = new MileageResultInfo();
    //this.ItemResults = Array();
    //this.EquipItemResults = Array();
};

MailReceiveResultKey = {
    GoldResult : 'GoldResult',
    GemResult : 'GemResult',
    PvpCoinResult : 'PvpCoinResult',
    MileageResult : 'MileageResult'
};

CheckNewMail.Request = function () {
    this.TopmostMailIndex = 0;
    this.SessionId = '';
};

CheckNewMail.RequestKey = {
    TopmostMailIndex : 'TopmostMailIndex',
    SessionId : 'SessionId'
};

CheckNewMail.Response = function () {
    this.NewMailArrived = false;
    this.TotalMailCount = 0;
    this.Result = CheckNewMail.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

CheckNewMail.ResponseKey = {
    NewMailArrived : 'NewMailArrived',
    TotalMailCount : 'TotalMailCount',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetGlobalMailList.Request = function () {
    this.SessionId = '';
};

GetGlobalMailList.RequestKey = {
    SessionId : 'SessionId'
};

GetGlobalMailList.Response = function () {
    //this.MailInfos = Array();
    this.Result = GetGlobalMailList.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetGlobalMailList.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetMailListByPage.Request = function () {
    this.PageNo = 0;
    this.MaxCount = 0;
    this.ForceReload = false;
    this.SessionId = '';
};

GetMailListByPage.RequestKey = {
    PageNo : 'PageNo',
    MaxCount : 'MaxCount',
    ForceReload : 'ForceReload',
    SessionId : 'SessionId'
};

GetMailListByPage.Response = function () {
    //this.MailInfos = Array();
    this.TotalCount = 0;
    this.Result = GetMailListByPage.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetMailListByPage.ResponseKey = {
    TotalCount : 'TotalCount',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

ReceiveAllMail.Request = function () {
    this.SessionId = '';
};

ReceiveAllMail.RequestKey = {
    SessionId : 'SessionId'
};

ReceiveAllMail.Response = function () {
    //this.MailReceiveResults = Array();
    this.ReceivedMailCount = 0;
    this.Result = ReceiveAllMail.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

ReceiveAllMail.ResponseKey = {
    ReceivedMailCount : 'ReceivedMailCount',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

ReceiveMail.Request = function () {
    this.MailIndex = 0;
    this.SessionId = '';
};

ReceiveMail.RequestKey = {
    MailIndex : 'MailIndex',
    SessionId : 'SessionId'
};

ReceiveMail.Response = function () {
    //this.MailReceiveResult = new MailReceiveResult();
    this.Result = ReceiveMail.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

ReceiveMail.ResponseKey = {
    MailReceiveResult : 'MailReceiveResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetMailList.Request = function () {
    this.LastMailIndex = 0;
    this.MaxCount = 0;
    this.ForceReload = false;
    this.SessionId = '';
};

GetMailList.RequestKey = {
    LastMailIndex : 'LastMailIndex',
    MaxCount : 'MaxCount',
    ForceReload : 'ForceReload',
    SessionId : 'SessionId'
};

GetMailList.Response = function () {
    //this.MailInfos = Array();
    this.TotalCount = 0;
    this.Result = GetMailList.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetMailList.ResponseKey = {
    TotalCount : 'TotalCount',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetSeasonInfo.Request = function () {
    this.SessionId = '';
};

GetSeasonInfo.RequestKey = {
    SessionId : 'SessionId'
};

GetSeasonInfo.Response = function () {
    this.Result = GetSeasonInfo.ResultType.Fail;
    //this.SeasonData = new MatchSeasonData();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetSeasonInfo.ResponseKey = {
    SeasonData : 'SeasonData',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetMatchRank.Request = function () {
    this.MatchType = 0;
    this.TierType = MatchTierType.Bronze;
    this.RankerAccountId = 0;
    this.SessionId = '';
};

GetMatchRank.RequestKey = {
    MatchType : 'MatchType',
    RankerAccountId : 'RankerAccountId',
    SessionId : 'SessionId'
};

GetMatchRank.Response = function () {
    this.Result = GetMatchRank.ResultType.Fail;
    this.TierRank = 0;
    this.TotalRank = 0;
    this.TotalRankerCount = 0;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetMatchRank.ResponseKey = {
    TierRank : 'TierRank',
    TotalRank : 'TotalRank',
    TotalRankerCount : 'TotalRankerCount',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetMatchRanker.Request = function () {
    this.TierType = MatchTierType.Bronze;
    this.StartRank = 0;
    this.EndRank = 0;
    this.SessionId = '';
};

GetMatchRanker.RequestKey = {
    StartRank : 'StartRank',
    EndRank : 'EndRank',
    SessionId : 'SessionId'
};

GetMatchRanker.Response = function () {
    this.Result = GetMatchRanker.ResultType.Fail;
    //this.MatchRankers = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetMatchRanker.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetMatchResult.Request = function () {
    this.MatchUid = 0;
    this.SessionId = '';
};

GetMatchResult.RequestKey = {
    MatchUid : 'MatchUid',
    SessionId : 'SessionId'
};

GetMatchResult.Response = function () {
    this.Result = GetMatchResult.ResultType.Fail;
    //this.MatchResult = new MatchResultInfo();
    //this.BattleInfo = new PlayerBattleInfo();
    //this.SwordResult = new SwordResultInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetMatchResult.ResponseKey = {
    MatchResult : 'MatchResult',
    BattleInfo : 'BattleInfo',
    SwordResult : 'SwordResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

SetOfflineMatchResult.Request = function () {
    this.Win = 0;
    this.PlayTime = 0;
    //this.AliveHeroIndices = Array();
    this.BattleLogString = '';
    this.CreatureInfoString = '';
    this.EnemyCreatureInfoString = '';
    this.SessionId = '';
};

SetOfflineMatchResult.RequestKey = {
    Win : 'Win',
    PlayTime : 'PlayTime',
    BattleLogString : 'BattleLogString',
    CreatureInfoString : 'CreatureInfoString',
    EnemyCreatureInfoString : 'EnemyCreatureInfoString',
    SessionId : 'SessionId'
};

SetOfflineMatchResult.Response = function () {
    this.Result = SetOfflineMatchResult.ResultType.Fail;
    //this.BattleInfo = new PlayerBattleInfo();
    //this.MatchResult = new MatchResultInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

SetOfflineMatchResult.ResponseKey = {
    BattleInfo : 'BattleInfo',
    MatchResult : 'MatchResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

UseCoupon.Request = function () {
    this.CouponCode = '';
    this.CountryCode = '';
    this.SessionId = '';
};

UseCoupon.RequestKey = {
    CouponCode : 'CouponCode',
    CountryCode : 'CountryCode',
    SessionId : 'SessionId'
};

UseCoupon.Response = function () {
    this.Result = UseCoupon.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

UseCoupon.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetReplay.Request = function () {
    this.ReplayUid = 0;
    this.SessionId = '';
};

GetReplay.RequestKey = {
    ReplayUid : 'ReplayUid',
    SessionId : 'SessionId'
};

GetReplay.Response = function () {
    //this.Replay = new Replay();
    this.Result = GetReplay.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetReplay.ResponseKey = {
    Replay : 'Replay',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

SaveReplay.Response = function () {
    this.ReplayUid = 0;
    this.Result = SaveReplay.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

SaveReplay.ResponseKey = {
    ReplayUid : 'ReplayUid',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetReplayList.Request = function () {
    this.Type = ReplayType.Arena;
    this.Count = 0;
    this.SessionId = '';
};

GetReplayList.RequestKey = {
    Count : 'Count',
    SessionId : 'SessionId'
};

GetReplayList.Response = function () {
    //this.Replays = Array();
    this.Result = GetReplayList.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetReplayList.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

CompleteScenarioQuest.Request = function () {
    this.SessionId = '';
};

CompleteScenarioQuest.RequestKey = {
    SessionId : 'SessionId'
};

CompleteScenarioQuest.Response = function () {
    this.Result = CompleteScenarioQuest.ResultType.Fail;
    this.NewScenarioQuestIndex = 0;
    this.NewScenarioQuestProgress = 0;
    //this.RewardResult = new RewardResultInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

CompleteScenarioQuest.ResponseKey = {
    NewScenarioQuestIndex : 'NewScenarioQuestIndex',
    NewScenarioQuestProgress : 'NewScenarioQuestProgress',
    RewardResult : 'RewardResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

BuyCashShopItem.Request = function () {
    this.ShopType = PayShopType.None;
    this.Index = 0;
    this.SessionId = '';
};

BuyCashShopItem.RequestKey = {
    Index : 'Index',
    SessionId : 'SessionId'
};

BuyCashShopItem.Response = function () {
    this.Result = BuyCashShopItem.ResultType.Fail;
    //this.GemResult = new GemResultInfo();
    //this.firstPurchase = new PlayerFirstPurchaseInfo();
    //this.purchaseTimeDuration = new PlayerPurchaseTimeDurationInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

BuyCashShopItem.ResponseKey = {
    GemResult : 'GemResult',
    firstPurchase : 'firstPurchase',
    purchaseTimeDuration : 'purchaseTimeDuration',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

BuyHero.Request = function () {
    this.HeroIndex = 0;
    this.ItemIndex = 0;
    this.BuyGem = 0;
    this.SessionId = '';
};

BuyHero.RequestKey = {
    HeroIndex : 'HeroIndex',
    ItemIndex : 'ItemIndex',
    BuyGem : 'BuyGem',
    SessionId : 'SessionId'
};

BuyHero.Response = function () {
    this.Result = BuyHero.ResultType.Fail;
    //this.GemResult = new GemResultInfo();
    //this.HeroResult = new HeroAddResultInfo();
    //this.MileageResult = new MileageResultInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

BuyHero.ResponseKey = {
    GemResult : 'GemResult',
    HeroResult : 'HeroResult',
    MileageResult : 'MileageResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

BuyPayShopItem.Request = function () {
    this.ShopType = PayShopType.None;
    this.Index = 0;
    this.SessionId = '';
};

BuyPayShopItem.RequestKey = {
    Index : 'Index',
    SessionId : 'SessionId'
};

BuyPayShopItem.Response = function () {
    this.Result = BuyPayShopItem.ResultType.Fail;
    //this.GoldResult = new GoldResultInfo();
    //this.GemResult = new GemResultInfo();
    //this.PvpCoinResult = new PvpCoinResultInfo();
    //this.ItemResults = Array();
    //this.firstPurchase = new PlayerFirstPurchaseInfo();
    //this.MileageResult = new MileageResultInfo();
    //this.HeroResults = Array();
    //this.EquipItemInfos = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

BuyPayShopItem.ResponseKey = {
    GoldResult : 'GoldResult',
    GemResult : 'GemResult',
    PvpCoinResult : 'PvpCoinResult',
    firstPurchase : 'firstPurchase',
    MileageResult : 'MileageResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetPayShopItems.Request = function () {
    this.ShopType = PayShopType.None;
    this.SessionId = '';
};

GetPayShopItems.RequestKey = {
    SessionId : 'SessionId'
};

GetPayShopItems.Response = function () {
    this.Result = GetPayShopItems.ResultType.Fail;
    //this.ShopItemInfos = Array();
    //this.CashShopItemInfos = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetPayShopItems.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetStoreItemList.Request = function () {
    this.Language = '';
    this.CountryCode = '';
    this.Limited = false;
    this.SessionId = '';
};

GetStoreItemList.RequestKey = {
    Language : 'Language',
    CountryCode : 'CountryCode',
    Limited : 'Limited',
    SessionId : 'SessionId'
};

GetStoreItemList.Response = function () {
    this.Result = GetStoreItemList.ResultType.Fail;
    //this.ItemInfos = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetStoreItemList.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetAwakeMaterialChallenge.Request = function () {
    this.HeroIndex = 0;
    this.SessionId = '';
};

GetAwakeMaterialChallenge.RequestKey = {
    HeroIndex : 'HeroIndex',
    SessionId : 'SessionId'
};

GetAwakeMaterialChallenge.Response = function () {
    this.Result = GetAwakeMaterialChallenge.ResultType.Fail;
    //this.ItemResults = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetAwakeMaterialChallenge.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

CompleteTutorial.Request = function () {
    this.TutorialIndex = 0;
    this.SessionId = '';
};

CompleteTutorial.RequestKey = {
    TutorialIndex : 'TutorialIndex',
    SessionId : 'SessionId'
};

CompleteTutorial.Response = function () {
    this.Result = CompleteTutorial.ResultType.Fail;
    //this.Info = new TutorialInfo();
    //this.GemResult = new GemResultInfo();
    //this.GoldResult = new GoldResultInfo();
    //this.ItemResults = Array();
    //this.EquipItemResults = Array();
    //this.HeroInfos = Array();
    //this.TeamExpResultInfos = Array();
    //this.StaminaResultInfos = Array();
    //this.DungeonInfos = Array();
    //this.FreeEquipGachaInfo = new FreeEquipGachaInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

CompleteTutorial.ResponseKey = {
    Info : 'Info',
    GemResult : 'GemResult',
    GoldResult : 'GoldResult',
    FreeEquipGachaInfo : 'FreeEquipGachaInfo',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

BuyStamina.Request = function () {
    this.SessionId = '';
};

BuyStamina.RequestKey = {
    SessionId : 'SessionId'
};

BuyStamina.Response = function () {
    //this.GemResult = new GemResultInfo();
    //this.StaminaResult = new StaminaResultInfo();
    this.Result = BuyStamina.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

BuyStamina.ResponseKey = {
    GemResult : 'GemResult',
    StaminaResult : 'StaminaResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetCertificate.Request = function () {
    this.SessionId = '';
};

GetCertificate.RequestKey = {
    SessionId : 'SessionId'
};

GetCertificate.Response = function () {
    this.Result = GetCertificate.ResultType.Fail;
    this.Certificate = '';
    this.Salt = 0;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetCertificate.ResponseKey = {
    Certificate : 'Certificate',
    Salt : 'Salt',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

DumpUser.Request = function () {
    this.AccountId = 0;
    this.SessionId = '';
};

DumpUser.RequestKey = {
    AccountId : 'AccountId',
    SessionId : 'SessionId'
};

DumpUser.Response = function () {
    this.Result = DumpUser.ResultType.Fail;
    this.Output = '';
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

DumpUser.ResponseKey = {
    Output : 'Output',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetStamina.Request = function () {
    this.staminaType = StaminaType.None;
    this.SessionId = '';
};

GetStamina.RequestKey = {
    SessionId : 'SessionId'
};

GetStamina.Response = function () {
    this.Result = GetStamina.ResultType.Fail;
    this.CurValue = 0;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetStamina.ResponseKey = {
    CurValue : 'CurValue',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetLoginId.Request = function () {
    this.AccountId = 0;
    this.SessionId = '';
};

GetLoginId.RequestKey = {
    AccountId : 'AccountId',
    SessionId : 'SessionId'
};

GetLoginId.Response = function () {
    this.Result = GetLoginId.ResultType.Fail;
    this.LoginId = '';
    this.Message = '';
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetLoginId.ResponseKey = {
    LoginId : 'LoginId',
    Message : 'Message',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

LinkAccount.Request = function () {
    this.LoginMethod = LoginMethodType.None;
    this.LinkedId = '';
    this.SessionId = '';
};

LinkAccount.RequestKey = {
    LinkedId : 'LinkedId',
    SessionId : 'SessionId'
};

LinkAccount.Response = function () {
    this.Result = LinkAccount.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

LinkAccount.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

InitDeviceId.Request = function () {
    this.DeviceId = '';
    this.CountryCode = '';
    this.SessionId = '';
};

InitDeviceId.RequestKey = {
    DeviceId : 'DeviceId',
    CountryCode : 'CountryCode',
    SessionId : 'SessionId'
};

InitDeviceId.Response = function () {
    this.Result = InitDeviceId.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

InitDeviceId.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

QuerySession.Request = function () {
    this.AccountId = 0;
    this.SessionId = '';
};

QuerySession.RequestKey = {
    AccountId : 'AccountId',
    SessionId : 'SessionId'
};

QuerySession.Response = function () {
    this.IsLogon = false;
    this.Result = QuerySession.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

QuerySession.ResponseKey = {
    IsLogon : 'IsLogon',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

RegisterDeviceToken.Request = function () {
    this.DeviceToken = '';
    this.SessionId = '';
};

RegisterDeviceToken.RequestKey = {
    DeviceToken : 'DeviceToken',
    SessionId : 'SessionId'
};

RegisterDeviceToken.Response = function () {
    this.Result = RegisterDeviceToken.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

RegisterDeviceToken.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

QueryMarketUrl.Request = function () {
    this.MarketType = QueryMarketUrl.MarketType.Android;
    this.SessionId = '';
};

QueryMarketUrl.RequestKey = {
    SessionId : 'SessionId'
};

QueryMarketUrl.Response = function () {
    this.Version = '';
    this.MarketUrl = '';
    this.Result = QueryMarketUrl.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

QueryMarketUrl.ResponseKey = {
    Version : 'Version',
    MarketUrl : 'MarketUrl',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

SignOut.Request = function () {
    this.SessionId = '';
};

SignOut.RequestKey = {
    SessionId : 'SessionId'
};

SignOut.Response = function () {
    this.Result = SignOut.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

SignOut.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

QueryNick.Request = function () {
    this.Nick = '';
    this.SessionId = '';
};

QueryNick.RequestKey = {
    Nick : 'Nick',
    SessionId : 'SessionId'
};

QueryNick.Response = function () {
    this.Result = QueryNick.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

QueryNick.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

ChangeNick.Request = function () {
    this.Nick = '';
    this.CountryCode = '';
    this.Language = '';
    this.SessionId = '';
};

ChangeNick.RequestKey = {
    Nick : 'Nick',
    CountryCode : 'CountryCode',
    Language : 'Language',
    SessionId : 'SessionId'
};

ChangeNick.Response = function () {
    this.Result = QueryNick.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

ChangeNick.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

ChangeAvatarHero.Request = function () {
    this.AvatarHeroIndex = 0;
    this.SessionId = '';
};

ChangeAvatarHero.RequestKey = {
    AvatarHeroIndex : 'AvatarHeroIndex',
    SessionId : 'SessionId'
};

ChangeAvatarHero.Response = function () {
    this.Result = ChangeAvatarHero.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

ChangeAvatarHero.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

InspectUser.Request = function () {
    this.TargetAccountId = 0;
    this.SessionId = '';
};

InspectUser.RequestKey = {
    TargetAccountId : 'TargetAccountId',
    SessionId : 'SessionId'
};

InspectUser.Response = function () {
    this.Result = InspectUser.ResultType.Fail;
    //this.CachedAccountInfo = new CachedAccountInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

InspectUser.ResponseKey = {
    CachedAccountInfo : 'CachedAccountInfo',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

SearchUser.Request = function () {
    this.SearchNick = '';
    this.SessionId = '';
};

SearchUser.RequestKey = {
    SearchNick : 'SearchNick',
    SessionId : 'SessionId'
};

SearchUser.Response = function () {
    this.Result = SearchUser.ResultType.Fail;
    this.Id = 0;
    this.Nick = '';
    this.TeamLevel = 0;
    this.HeroIndex = 0;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

SearchUser.ResponseKey = {
    Id : 'Id',
    Nick : 'Nick',
    TeamLevel : 'TeamLevel',
    HeroIndex : 'HeroIndex',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

UpgradeEquip.Request = function () {
    this.EquipItemSlotIndex = 0;
    //this.MaterialSlotIndices = Array();
    this.SessionId = '';
};

UpgradeEquip.RequestKey = {
    EquipItemSlotIndex : 'EquipItemSlotIndex',
    SessionId : 'SessionId'
};

UpgradeEquip.Response = function () {
    //this.ResultEquipItem = new EquipItemInfo();
    //this.GoldResult = new GoldResultInfo();
    //this.ItemResults = Array();
    //this.RemovedEquipItemSlotIndices = Array();
    this.Result = UpgradeEquip.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

UpgradeEquip.ResponseKey = {
    ResultEquipItem : 'ResultEquipItem',
    GoldResult : 'GoldResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

CancelMatch.Request = function () {
    this.SessionId = '';
};

CancelMatch.RequestKey = {
    SessionId : 'SessionId'
};

CancelMatch.Response = function () {
    this.Result = CancelMatch.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

CancelMatch.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

WaitMatch.Request = function () {
    this.PlayOfflineMatch = false;
    this.SessionId = '';
};

WaitMatch.RequestKey = {
    PlayOfflineMatch : 'PlayOfflineMatch',
    SessionId : 'SessionId'
};

WaitMatch.Response = function () {
    this.Result = WaitMatch.ResultType.Fail;
    //this.MatchInfo = new MatchInfo();
    //this.MatchedNpcInfo = new MatchedAccountInfo();
    //this.SwordResult = new SwordResultInfo();
    this.ChapterIndex = 0;
    this.DungeonIndex = 0;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

WaitMatch.ResponseKey = {
    MatchInfo : 'MatchInfo',
    MatchedNpcInfo : 'MatchedNpcInfo',
    SwordResult : 'SwordResult',
    ChapterIndex : 'ChapterIndex',
    DungeonIndex : 'DungeonIndex',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

RegisterMatch.Request = function () {
    //this.HeroIndices = Array();
    this.LeaderHeroIndex = 0;
    this.Rank = 0;
    this.SingleTest = false;
    this.GroupId = 0;
    this.SessionId = '';
};

RegisterMatch.RequestKey = {
    LeaderHeroIndex : 'LeaderHeroIndex',
    Rank : 'Rank',
    SingleTest : 'SingleTest',
    GroupId : 'GroupId',
    SessionId : 'SessionId'
};

RegisterMatch.Response = function () {
    this.Result = RegisterMatch.ResultType.Fail;
    //this.AccountInfo = new MatchedAccountInfo();
    //this.SwordResult = new SwordResultInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

RegisterMatch.ResponseKey = {
    AccountInfo : 'AccountInfo',
    SwordResult : 'SwordResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

CheckConsume.Request = function () {
    this.DeveloperPayload = '';
    this.ProductId = '';
    this.PurchaseToken = '';
    this.OrderId = '';
    this.CurrencyCode = '';
    this.Price = 0;
    this.SessionId = '';
};

CheckConsume.RequestKey = {
    DeveloperPayload : 'DeveloperPayload',
    ProductId : 'ProductId',
    PurchaseToken : 'PurchaseToken',
    OrderId : 'OrderId',
    CurrencyCode : 'CurrencyCode',
    Price : 'Price',
    SessionId : 'SessionId'
};

CheckConsume.Response = function () {
    this.Result = CheckConsume.ResultType.Fail;
    //this.GemResult = new GemResultInfo();
    //this.GoldResult = new GoldResultInfo();
    //this.PvpCoinResult = new PvpCoinResultInfo();
    //this.purchaseTimeDuration = new PlayerPurchaseTimeDurationInfo();
    //this.firstPurchase = new PlayerFirstPurchaseInfo();
    //this.MileageResult = new MileageResultInfo();
    //this.ItemResults = Array();
    //this.EquipItemInfos = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

CheckConsume.ResponseKey = {
    GemResult : 'GemResult',
    GoldResult : 'GoldResult',
    PvpCoinResult : 'PvpCoinResult',
    purchaseTimeDuration : 'purchaseTimeDuration',
    firstPurchase : 'firstPurchase',
    MileageResult : 'MileageResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

CheckPurchase.Request = function () {
    this.DeveloperPayload = '';
    this.ProductId = '';
    this.OrderId = '';
    this.PurchaseToken = '';
    this.SessionId = '';
};

CheckPurchase.RequestKey = {
    DeveloperPayload : 'DeveloperPayload',
    ProductId : 'ProductId',
    OrderId : 'OrderId',
    PurchaseToken : 'PurchaseToken',
    SessionId : 'SessionId'
};

CheckPurchase.Response = function () {
    this.Result = CheckPurchase.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

CheckPurchase.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

ExecIOSPayment.Request = function () {
    this.ProductId = '';
    this.TransactionId = '';
    this.Receipt = '';
    this.CurrencyCode = '';
    this.Price = 0;
    this.SessionId = '';
};

ExecIOSPayment.RequestKey = {
    ProductId : 'ProductId',
    TransactionId : 'TransactionId',
    Receipt : 'Receipt',
    CurrencyCode : 'CurrencyCode',
    Price : 'Price',
    SessionId : 'SessionId'
};

ExecIOSPayment.Response = function () {
    this.Result = ExecIOSPayment.ResultType.Fail;
    //this.GemResult = new GemResultInfo();
    //this.GoldResult = new GoldResultInfo();
    //this.PvpCoinResult = new PvpCoinResultInfo();
    //this.purchaseTimeDuration = new PlayerPurchaseTimeDurationInfo();
    //this.firstPurchase = new PlayerFirstPurchaseInfo();
    //this.MileageResult = new MileageResultInfo();
    //this.ItemResults = Array();
    //this.EquipItemInfos = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

ExecIOSPayment.ResponseKey = {
    GemResult : 'GemResult',
    GoldResult : 'GoldResult',
    PvpCoinResult : 'PvpCoinResult',
    purchaseTimeDuration : 'purchaseTimeDuration',
    firstPurchase : 'firstPurchase',
    MileageResult : 'MileageResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetDeveloperPayload.Request = function () {
    this.Platform = EPurchasePlatform.AOS;
    this.ProductID = '';
    this.SessionId = '';
};

GetDeveloperPayload.RequestKey = {
    ProductID : 'ProductID',
    SessionId : 'SessionId'
};

GetDeveloperPayload.Response = function () {
    this.Result = GetDeveloperPayload.ResultType.Fail;
    this.DeveloperPayload = '';
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetDeveloperPayload.ResponseKey = {
    DeveloperPayload : 'DeveloperPayload',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

SellItem.Request = function () {
    //this.ItemIndices = Array();
    //this.ItemCount = Array();
    this.SessionId = '';
};

SellItem.RequestKey = {
    SessionId : 'SessionId'
};

SellItem.Response = function () {
    this.Result = SellItem.ResultType.Fail;
    //this.GoldResult = new GoldResultInfo();
    //this.ItemResults = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

SellItem.ResponseKey = {
    GoldResult : 'GoldResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

BuyShopItem.Request = function () {
    this.ShopIndex = 0;
    this.ListNo = 0;
    this.ShopItemListIndex = 0;
    this.SessionId = '';
};

BuyShopItem.RequestKey = {
    ShopIndex : 'ShopIndex',
    ListNo : 'ListNo',
    ShopItemListIndex : 'ShopItemListIndex',
    SessionId : 'SessionId'
};

BuyShopItem.Response = function () {
    this.Result = BuyShopItem.ResultType.Fail;
    //this.GoldResult = new GoldResultInfo();
    //this.GemResult = new GemResultInfo();
    //this.PvpCoinResult = new PvpCoinResultInfo();
    //this.ItemResult = new ItemResultInfo();
    //this.GuildPointResult = new GuildPointResultInfo();
    //this.RoyalPointResult = new RoyalPointResultInfo();
    //this.EquipItems = Array();
    //this.ItemTimeDurationInfo = new PlayerItemTimeDurationInfo();
    //this.heroInfo = new HeroInfo();
    //this.firstPurchase = new PlayerFirstPurchaseInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

BuyShopItem.ResponseKey = {
    GoldResult : 'GoldResult',
    GemResult : 'GemResult',
    PvpCoinResult : 'PvpCoinResult',
    ItemResult : 'ItemResult',
    GuildPointResult : 'GuildPointResult',
    RoyalPointResult : 'RoyalPointResult',
    ItemTimeDurationInfo : 'ItemTimeDurationInfo',
    heroInfo : 'heroInfo',
    firstPurchase : 'firstPurchase',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

RequestShopList.Request = function () {
    this.ShopIndex = 0;
    this.SessionId = '';
};

RequestShopList.RequestKey = {
    ShopIndex : 'ShopIndex',
    SessionId : 'SessionId'
};

RequestShopList.Response = function () {
    this.Result = RequestShopList.ResultType.Fail;
    //this.RestockTimeInfo = new ShopRestockTimeInfo();
    //this.ShopItems = Array();
    //this.GemResult = new GemResultInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

RequestShopList.ResponseKey = {
    RestockTimeInfo : 'RestockTimeInfo',
    GemResult : 'GemResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

GetShopList.Request = function () {
    this.ShopIndex = 0;
    this.SessionId = '';
};

GetShopList.RequestKey = {
    ShopIndex : 'ShopIndex',
    SessionId : 'SessionId'
};

GetShopList.Response = function () {
    this.Result = GetShopList.ResultType.Fail;
    //this.RestockTimeInfo = new ShopRestockTimeInfo();
    //this.ShopItems = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

GetShopList.ResponseKey = {
    RestockTimeInfo : 'RestockTimeInfo',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

BeginCampaign.Request = function () {
    this.ChapterIndex = 0;
    this.DungeonIndex = 0;
    this.LinkedDungeonIndex = 0;
    this.DungeonDifficulty = 0;
    //this.HeroIndices = Array();
    this.LeaderHeroIndex = 0;
    //this.AccountIds = Array();
    this.Repeat = false;
    this.BuyKey = 0;
    this.WorldMapEventIndex = 0;
    this.WorldMapNodeIndex = 0;
    this.MultiplayMasterId = 0;
    //this.MultiplayMemberIds = Array();
    //this.MultiplayObserverIds = Array();
    this.MultiplayMasterServerIp = '';
    this.MultiplayMasterServerPort = 0;
    this.TowerIndex = 0;
    this.TowerFloor = 0;
    this.TowerRewardNo = 0;
    this.SessionId = '';
};

BeginCampaign.RequestKey = {
    ChapterIndex : 'ChapterIndex',
    DungeonIndex : 'DungeonIndex',
    LinkedDungeonIndex : 'LinkedDungeonIndex',
    DungeonDifficulty : 'DungeonDifficulty',
    LeaderHeroIndex : 'LeaderHeroIndex',
    Repeat : 'Repeat',
    BuyKey : 'BuyKey',
    WorldMapEventIndex : 'WorldMapEventIndex',
    WorldMapNodeIndex : 'WorldMapNodeIndex',
    MultiplayMasterId : 'MultiplayMasterId',
    MultiplayMasterServerIp : 'MultiplayMasterServerIp',
    MultiplayMasterServerPort : 'MultiplayMasterServerPort',
    TowerIndex : 'TowerIndex',
    TowerFloor : 'TowerFloor',
    TowerRewardNo : 'TowerRewardNo',
    SessionId : 'SessionId'
};

BeginCampaign.Response = function () {
    //this.DropItems = Array();
    this.DropGold = 0;
    //this.StaminaResult = new StaminaResultInfo();
    //this.GemResult = new GemResultInfo();
    //this.CurrencyResults = Array();
    this.RechargeTime = '';
    this.BattleServerAddress = '';
    this.BattleServerPort = 0;
    this.CheckIntegrity = false;
    //this.TowerIntialUserHeroes = Array();
    //this.TowerIntialEnemyHeroes = Array();
    this.Result = BeginCampaign.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

BeginCampaign.ResponseKey = {
    DropGold : 'DropGold',
    StaminaResult : 'StaminaResult',
    GemResult : 'GemResult',
    RechargeTime : 'RechargeTime',
    BattleServerAddress : 'BattleServerAddress',
    BattleServerPort : 'BattleServerPort',
    CheckIntegrity : 'CheckIntegrity',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

SetEquip.Request = function () {
    this.HeroIndex = 0;
    //this.HeroPartIndex = Array();
    //this.EquipItemSlotIndex = Array();
    this.SessionId = '';
};

SetEquip.RequestKey = {
    HeroIndex : 'HeroIndex',
    SessionId : 'SessionId'
};

SetEquip.Response = function () {
    this.Result = SetEquip.ResultType.Fail;
    //this.EquippedSlotIndex = Array();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

SetEquip.ResponseKey = {
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

Ping.Request = function () {
    this.SessionId = '';
};

Ping.RequestKey = {
    SessionId : 'SessionId'
};

Ping.Response = function () {
    this.Result = Ping.ResultType.Fail;
    this.ForwardHost = '';
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

Ping.ResponseKey = {
    ForwardHost : 'ForwardHost',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

UpgradeHeroSkill.Request = function () {
    this.HeroIndex = 0;
    this.SkillIndex = 0;
    this.SessionId = '';
};

UpgradeHeroSkill.RequestKey = {
    HeroIndex : 'HeroIndex',
    SkillIndex : 'SkillIndex',
    SessionId : 'SessionId'
};

UpgradeHeroSkill.Response = function () {
    this.Result = UpgradeHeroSkill.ResultType.Fail;
    //this.GoldResult = new GoldResultInfo();
    //this.ItemResult = new ItemResultInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

UpgradeHeroSkill.ResponseKey = {
    GoldResult : 'GoldResult',
    ItemResult : 'ItemResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

UpgradeHeroStar.Request = function () {
    this.HeroIndex = 0;
    this.SessionId = '';
};

UpgradeHeroStar.RequestKey = {
    HeroIndex : 'HeroIndex',
    SessionId : 'SessionId'
};

UpgradeHeroStar.Response = function () {
    this.Result = UpgradeHeroStar.ResultType.Fail;
    //this.GoldResult = new GoldResultInfo();
    //this.ItemResult = new ItemResultInfo();
    this.NewHeroStar = 0;
    //this.TeamExpResult = new ExpResultInfo();
    //this.StaminaResult = new StaminaResultInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

UpgradeHeroStar.ResponseKey = {
    GoldResult : 'GoldResult',
    ItemResult : 'ItemResult',
    NewHeroStar : 'NewHeroStar',
    TeamExpResult : 'TeamExpResult',
    StaminaResult : 'StaminaResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

EndCampaign.Request = function () {
    this.ChapterIndex = 0;
    this.DungeonIndex = 0;
    this.Completed = false;
    this.Star = 0;
    //this.MonsterIndices = Array();
    //this.KillCounts = Array();
    //this.AliveHeroIndices = Array();
    this.BattleLogString = '';
    this.CreatureInfoString = '';
    this.SessionId = '';
};

EndCampaign.RequestKey = {
    ChapterIndex : 'ChapterIndex',
    DungeonIndex : 'DungeonIndex',
    Completed : 'Completed',
    Star : 'Star',
    BattleLogString : 'BattleLogString',
    CreatureInfoString : 'CreatureInfoString',
    SessionId : 'SessionId'
};

EndCampaign.Response = function () {
    //this.CampaignResults = Array();
    //this.GoldResults = Array();
    //this.GemResults = Array();
    //this.CurrencyResults = Array();
    //this.ExpResult = new ExpResultInfo();
    //this.ExpResultsByGetHero = Array();
    //this.StaminaResult = new StaminaResultInfo();
    //this.ItemResults = Array();
    //this.EquipItemInfos = Array();
    //this.EquipItemBoostInfos = Array();
    //this.HeroExpResults = Array();
    //this.HeroInfos = Array();
    //this.TowerInfos = Array();
    //this.TowerHeroInfos = Array();
    //this.UndergroundPrisonKeyResult = new UndergroundPrisonKeyResultInfo();
    this.DailyCompletedCount = 0;
    this.Diff = 0;
    //this.WorldMapEventTimeInfos = Array();
    //this.WorldMapEventInfos = Array();
    //this.RemovedWorldMapEventInfos = Array();
    //this.MultiplayMemberIds = Array();
    this.MultiplayRewardCalculated = false;
    this.MultiplayRemainTimeoutTime = 0;
    this.Result = EndCampaign.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

EndCampaign.ResponseKey = {
    ExpResult : 'ExpResult',
    StaminaResult : 'StaminaResult',
    UndergroundPrisonKeyResult : 'UndergroundPrisonKeyResult',
    DailyCompletedCount : 'DailyCompletedCount',
    Diff : 'Diff',
    MultiplayRewardCalculated : 'MultiplayRewardCalculated',
    MultiplayRemainTimeoutTime : 'MultiplayRemainTimeoutTime',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

Login.Request = function () {
    this.LoginMethod = LoginMethodType.None;
    this.LoginId = '';
    this.EncryptSalt = 0;
    this.DeviceId = '';
    this.Version = '';
    this.BattleVersion = '';
    this.UTCOffsetHour = 0;
    this.ForcedHost = false;
    this.DeviceOs = '';
    this.DevicePlatform = '';
    this.DeviceModel = '';
    this.DeviceToken = '';
    this.Language = '';
    this.CountryCode = '';
    this.SessionId = '';
};

Login.RequestKey = {
    LoginId : 'LoginId',
    EncryptSalt : 'EncryptSalt',
    DeviceId : 'DeviceId',
    Version : 'Version',
    BattleVersion : 'BattleVersion',
    UTCOffsetHour : 'UTCOffsetHour',
    ForcedHost : 'ForcedHost',
    DeviceOs : 'DeviceOs',
    DevicePlatform : 'DevicePlatform',
    DeviceModel : 'DeviceModel',
    DeviceToken : 'DeviceToken',
    Language : 'Language',
    CountryCode : 'CountryCode',
    SessionId : 'SessionId'
};

Login.Response = function () {
    this.Result = Login.ResultType.Fail;
    this.ServerPrivateIp = '';
    this.ServerPort = 0;
    this.AdminLevel = 0;
    this.StickyHost = '';
    this.AlternativeHost = '';
    this.IsNewUser = false;
    this.ServerLocalTime = '';
    this.LoginId = '';
    this.FaceBookId = '';
    this.GooglePlusId = '';
    this.GameCenterId = '';
    //this.UserInfo = new UserInfo();
    //this.BattleInfo = new PlayerBattleInfo();
    //this.MiscInfo = new PlayerMiscInfo();
    this.GuildId = 0;
    //this.Heroes = Array();
    //this.Items = Array();
    //this.EquipItems = Array();
    //this.ChapterDungeons = Array();
    //this.Towers = Array();
    //this.ShopRestockTimes = Array();
    //this.ShopListItems = Array();
    //this.MessageServerInfo = new MessageServerInfo();
    //this.FriendInfos = Array();
    //this.FriendInvitorInfos = Array();
    //this.Tutorials = Array();
    //this.ItemTimeDurations = Array();
    //this.FirstPurchases = Array();
    //this.PurchaseTimeDurations = Array();
    //this.WorldMapEventTimeInfos = Array();
    //this.WorldMapEventInfos = Array();
    //this.WantedQuestInfos = Array();
    //this.AttendanceInfos = Array();
    //this.Notices = Array();
    //this.DropBonusEvents = Array();
    //this.PayShopItemEventInfos = Array();
    //this.ImageInfos = Array();
    //this.freeEquipGachaInfos = Array();
    //this.chapterRewardInfos = Array();
    //this.PayShopItemInfos = Array();
    //this.CashShopItemInfos = Array();
    //this.PackageShopItemInfos = Array();
    //this.LatestIAPInfo = new PlayerInAppPurchaseInfo();
    this.CreatedTime = '';
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

Login.ResponseKey = {
    ServerPrivateIp : 'ServerPrivateIp',
    ServerPort : 'ServerPort',
    AdminLevel : 'AdminLevel',
    StickyHost : 'StickyHost',
    AlternativeHost : 'AlternativeHost',
    IsNewUser : 'IsNewUser',
    ServerLocalTime : 'ServerLocalTime',
    LoginId : 'LoginId',
    FaceBookId : 'FaceBookId',
    GooglePlusId : 'GooglePlusId',
    GameCenterId : 'GameCenterId',
    UserInfo : 'UserInfo',
    BattleInfo : 'BattleInfo',
    MiscInfo : 'MiscInfo',
    GuildId : 'GuildId',
    MessageServerInfo : 'MessageServerInfo',
    LatestIAPInfo : 'LatestIAPInfo',
    CreatedTime : 'CreatedTime',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

RewardWantedQuest.Request = function () {
    this.Index = 0;
    this.SessionId = '';
};

RewardWantedQuest.RequestKey = {
    Index : 'Index',
    SessionId : 'SessionId'
};

RewardWantedQuest.Response = function () {
    this.Result = RewardWantedQuest.ResultType.Fail;
    //this.RoyalPointResult = new RoyalPointResultInfo();
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

RewardWantedQuest.ResponseKey = {
    RoyalPointResult : 'RoyalPointResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

ReceiveCompletedReward.Request = function () {
    this.ChapterIndex = 0;
    //this.DungeonIndices = Array();
    //this.EventIndices = Array();
    this.SessionId = '';
};

ReceiveCompletedReward.RequestKey = {
    ChapterIndex : 'ChapterIndex',
    SessionId : 'SessionId'
};

ReceiveCompletedReward.Response = function () {
    //this.GoldResult = new GoldResultInfo();
    //this.GemResult = new GemResultInfo();
    //this.ExpResult = new ExpResultInfo();
    //this.StaminaResult = new StaminaResultInfo();
    //this.ItemResults = Array();
    //this.EquipItemInfos = Array();
    //this.WorldMapEventTimeInfos = Array();
    //this.WorldMapEventInfos = Array();
    //this.RemovedWorldMapEventInfos = Array();
    this.Result = ReceiveCompletedReward.ResultType.Fail;
    this.BaseResult = BaseResultType.Fail;
    //this.AchievementInfos = Array();
    //this.ReservedScenarioQuestInfo = new ScenarioQuestInfo();
};

ReceiveCompletedReward.ResponseKey = {
    GoldResult : 'GoldResult',
    GemResult : 'GemResult',
    ExpResult : 'ExpResult',
    StaminaResult : 'StaminaResult',
    ReservedScenarioQuestInfo : 'ReservedScenarioQuestInfo'
};

NWorldMap.NEventSubData.FieldBoss = function () {
    this.BossCreatureIndex = 0;
};

NWorldMap.NEventSubData.FieldBossKey = {
    BossCreatureIndex : 'BossCreatureIndex'
};

NWorldMap.NEventSubData.EventDungeon = function () {
    this.EventDungeonIndex = 0;
};

NWorldMap.NEventSubData.EventDungeonKey = {
    EventDungeonIndex : 'EventDungeonIndex'
};

NWorldMap.NEventSubData.Excavation = function () {
};

NWorldMap.NEventSubData.ExcavationKey = {
};

NWorldMap.NEventSubData.MapCoin = function () {
};

NWorldMap.NEventSubData.MapCoinKey = {
};

NWorldMap.NEventSubData.TreasureBox = function () {
};

NWorldMap.NEventSubData.TreasureBoxKey = {
};

NWorldMap.NEventSubData.StageBuff = function () {
};

NWorldMap.NEventSubData.StageBuffKey = {
};

NWorldMap.NEventSubData.GuerrillaDungeon = function () {
    this.GuerrillaDungeonIndex = 0;
};

NWorldMap.NEventSubData.GuerrillaDungeonKey = {
    GuerrillaDungeonIndex : 'GuerrillaDungeonIndex'
};

NWorldMap.NEventSubData.GoblinShop = function () {
};

NWorldMap.NEventSubData.GoblinShopKey = {
};

NWorldMap.NEventSubData.QuestDungeon = function () {
    this.MonsterIndex = 0;
};

NWorldMap.NEventSubData.QuestDungeonKey = {
    MonsterIndex : 'MonsterIndex'
};

NWorldMap.EventData = function () {
    this.Index = 0;
    this.ChapterIndex = 0;
    this.EventType = NWorldMap.EventType.None;
    //this.DungeonIndex = Array();
    this.CompletedDungeonOnly = false;
    this.CurrentChapterOnly = false;
    this.ReqChapterIndex = 0;
    this.ReqDungeonIndex = 0;
    //this.EventValue = Array();
    this.OccurCount = 0;
    //this.OccurPercentage = Array();
    //this.OccurHour = Array();
    this.Duration = 0;
    this.Cooltime = 0;
};

NWorldMap.EventDataKey = {
    Index : 'Index',
    ChapterIndex : 'ChapterIndex',
    CompletedDungeonOnly : 'CompletedDungeonOnly',
    CurrentChapterOnly : 'CurrentChapterOnly',
    ReqChapterIndex : 'ReqChapterIndex',
    ReqDungeonIndex : 'ReqDungeonIndex',
    OccurCount : 'OccurCount',
    Duration : 'Duration',
    Cooltime : 'Cooltime'
};

module.exports.AbandonMultiplayReward = AbandonMultiplayReward
module.exports.AcceptJoinRequest = AcceptJoinRequest
module.exports.ApplyForMultiplayReward = ApplyForMultiplayReward
module.exports.ApplyGuildSettingChange = ApplyGuildSettingChange
module.exports.AwakenEquip = AwakenEquip
module.exports.B2G_GetHeroInfo = B2G_GetHeroInfo
module.exports.B2G_SetAbuser = B2G_SetAbuser
module.exports.B2G_SetCampaignResult = B2G_SetCampaignResult
module.exports.B2G_SetMatchResult = B2G_SetMatchResult
module.exports.B2M_GetMatchInfo = B2M_GetMatchInfo
module.exports.B2M_Ping = B2M_Ping
module.exports.B2M_SaveReplay = B2M_SaveReplay
module.exports.BaseCreatureActionRes = BaseCreatureActionRes
module.exports.BattleEndNot = BattleEndNot
module.exports.BattleEnterRes = BattleEnterRes
module.exports.BattleLoginRes = BattleLoginRes
module.exports.BattleStartRes = BattleStartRes
module.exports.BeginCampaign = BeginCampaign
module.exports.BreakEquip = BreakEquip
module.exports.BuyCashShopItem = BuyCashShopItem
module.exports.BuyHero = BuyHero
module.exports.BuyPayShopItem = BuyPayShopItem
module.exports.BuyShopItem = BuyShopItem
module.exports.BuyStamina = BuyStamina
module.exports.CancelMatch = CancelMatch
module.exports.CancelRequestJoinGuild = CancelRequestJoinGuild
module.exports.ChangeAvatarHero = ChangeAvatarHero
module.exports.ChangeNick = ChangeNick
module.exports.Cheat = Cheat
module.exports.CheckConsume = CheckConsume
module.exports.CheckGuildName = CheckGuildName
module.exports.CheckNewMail = CheckNewMail
module.exports.CheckPurchase = CheckPurchase
module.exports.CompareDbSchema = CompareDbSchema
module.exports.CompleteScenarioQuest = CompleteScenarioQuest
module.exports.CompleteTutorial = CompleteTutorial
module.exports.CreateGuild = CreateGuild
module.exports.DelegateMaster = DelegateMaster
module.exports.DestroyGuild = DestroyGuild
module.exports.DumpDbSchema = DumpDbSchema
module.exports.DumpUser = DumpUser
module.exports.EndCampaign = EndCampaign
module.exports.EnhanceHero = EnhanceHero
module.exports.EnterLobby = EnterLobby
module.exports.ExecEquipGacha = ExecEquipGacha
module.exports.ExecIOSPayment = ExecIOSPayment
module.exports.ExtendEquip = ExtendEquip
module.exports.ExtendHeroSkill = ExtendHeroSkill
module.exports.G2G_DropUser = G2G_DropUser
module.exports.G2G_RejectFriend = G2G_RejectFriend
module.exports.G2M_SyncWaiter = G2M_SyncWaiter
module.exports.GetAchievements = GetAchievements
module.exports.GetAttendanceReward = GetAttendanceReward
module.exports.GetAwakeMaterialChallenge = GetAwakeMaterialChallenge
module.exports.GetCertificate = GetCertificate
module.exports.GetDeveloperPayload = GetDeveloperPayload
module.exports.GetDOWDungeonInfo = GetDOWDungeonInfo
module.exports.GetFreeEquipGachaInfo = GetFreeEquipGachaInfo
module.exports.GetGlobalMailList = GetGlobalMailList
module.exports.GetGuildAllMercenaries = GetGuildAllMercenaries
module.exports.GetGuildBasicInfo = GetGuildBasicInfo
module.exports.GetGuildList = GetGuildList
module.exports.GetJoinRequestedGuilds = GetJoinRequestedGuilds
module.exports.GetJoinRequestPlayers = GetJoinRequestPlayers
module.exports.GetKeyDecoder = GetKeyDecoder
module.exports.GetLoginId = GetLoginId
module.exports.GetMailList = GetMailList
module.exports.GetMailListByPage = GetMailListByPage
module.exports.GetMatchRank = GetMatchRank
module.exports.GetMatchRanker = GetMatchRanker
module.exports.GetMatchResult = GetMatchResult
module.exports.GetMultiplayReward = GetMultiplayReward
module.exports.GetPayShopItems = GetPayShopItems
module.exports.GetReplay = GetReplay
module.exports.GetReplayList = GetReplayList
module.exports.GetSeasonInfo = GetSeasonInfo
module.exports.GetSelectedReward = GetSelectedReward
module.exports.GetShopList = GetShopList
module.exports.GetStamina = GetStamina
module.exports.GetStoreItemList = GetStoreItemList
module.exports.GetTowerHeroInfo = GetTowerHeroInfo
module.exports.GetTowerNpcInfo = GetTowerNpcInfo
module.exports.GMT2G_Complete_Billing = GMT2G_Complete_Billing
module.exports.InitDeviceId = InitDeviceId
module.exports.InspectUser = InspectUser
module.exports.KickGuildMember = KickGuildMember
module.exports.LearnHeroSkill = LearnHeroSkill
module.exports.LinkAccount = LinkAccount
module.exports.Login = Login
module.exports.M2G_ReloadPlayerBattle = M2G_ReloadPlayerBattle
module.exports.NMessage = NMessage
module.exports.NMessage.NProtocol = NMessage.NProtocol
module.exports.NUtil = NUtil
module.exports.NWorldMap = NWorldMap
module.exports.NWorldMap.NEventSubData = NWorldMap.NEventSubData
module.exports.P2G_BuyCashShopItem = P2G_BuyCashShopItem
module.exports.P2G_GetCashShopItems = P2G_GetCashShopItems
module.exports.Ping = Ping
module.exports.PingRes = PingRes
module.exports.PurifyHero = PurifyHero
module.exports.QueryMarketUrl = QueryMarketUrl
module.exports.QueryNick = QueryNick
module.exports.QuerySession = QuerySession
module.exports.ReceiveAllMail = ReceiveAllMail
module.exports.ReceiveCompletedReward = ReceiveCompletedReward
module.exports.ReceiveMail = ReceiveMail
module.exports.RechargeUndergroundPrisonKey = RechargeUndergroundPrisonKey
module.exports.RegisterDeviceToken = RegisterDeviceToken
module.exports.RegisterMatch = RegisterMatch
module.exports.RegisterMercenary = RegisterMercenary
module.exports.RejectFriend = RejectFriend
module.exports.RejectJoinRequest = RejectJoinRequest
module.exports.RequestFriend = RequestFriend
module.exports.RequestJoinGuild = RequestJoinGuild
module.exports.RequestShopList = RequestShopList
module.exports.ResetTower = ResetTower
module.exports.RewardAchievement = RewardAchievement
module.exports.RewardClearChapter = RewardClearChapter
module.exports.RewardWantedQuest = RewardWantedQuest
module.exports.SaveIAPurchaseInfo = SaveIAPurchaseInfo
module.exports.SaveReplay = SaveReplay
module.exports.SearchFriend = SearchFriend
module.exports.SearchGuild = SearchGuild
module.exports.SearchUser = SearchUser
module.exports.SellEquip = SellEquip
module.exports.SellItem = SellItem
module.exports.SetEquip = SetEquip
module.exports.SetGuildAdminRank = SetGuildAdminRank
module.exports.SetOfflineMatchResult = SetOfflineMatchResult
module.exports.SetRune = SetRune
module.exports.SignOut = SignOut
module.exports.UnlockEquip = UnlockEquip
module.exports.UnregisterMercenary = UnregisterMercenary
module.exports.UnsetEquip = UnsetEquip
module.exports.UnsetRune = UnsetRune
module.exports.UpgradeEquip = UpgradeEquip
module.exports.UpgradeEquipOption = UpgradeEquipOption
module.exports.UpgradeHeroSkill = UpgradeHeroSkill
module.exports.UpgradeHeroStar = UpgradeHeroStar
module.exports.UseBoosterItem = UseBoosterItem
module.exports.UseCoupon = UseCoupon
module.exports.UseHeroSelectItem = UseHeroSelectItem
module.exports.UsePackageItem = UsePackageItem
module.exports.UsePotionItem = UsePotionItem
module.exports.UseRecipeItem = UseRecipeItem
module.exports.UseSkillRes = UseSkillRes
module.exports.VisitDungeon = VisitDungeon
module.exports.WaitMatch = WaitMatch
module.exports.WithdrawGuild = WithdrawGuild
module.exports.CachedUserInfo = CachedUserInfo
module.exports.CachedUserInfoKey = CachedUserInfoKey
module.exports.FriendUserInfo = FriendUserInfo
module.exports.FriendUserInfoKey = FriendUserInfoKey
module.exports.HeroInfo = HeroInfo
module.exports.HeroInfoKey = HeroInfoKey
module.exports.CachedHeroInfo = CachedHeroInfo
module.exports.CachedHeroInfoKey = CachedHeroInfoKey
module.exports.ChapterRewardInfo = ChapterRewardInfo
module.exports.ChapterRewardInfoKey = ChapterRewardInfoKey
module.exports.DOWDungeonInfo = DOWDungeonInfo
module.exports.DOWDungeonInfoKey = DOWDungeonInfoKey
module.exports.AttendanceInfo = AttendanceInfo
module.exports.AttendanceInfoKey = AttendanceInfoKey
module.exports.FreeEquipGachaInfo = FreeEquipGachaInfo
module.exports.FreeEquipGachaInfoKey = FreeEquipGachaInfoKey
module.exports.ScenarioQuestInfo = ScenarioQuestInfo
module.exports.ScenarioQuestInfoKey = ScenarioQuestInfoKey
module.exports.TowerInfo = TowerInfo
module.exports.TowerInfoKey = TowerInfoKey
module.exports.MailItemInfo = MailItemInfo
module.exports.MailItemInfoKey = MailItemInfoKey
module.exports.MailEquipItemInfo = MailEquipItemInfo
module.exports.MailEquipItemInfoKey = MailEquipItemInfoKey
module.exports.MailInfo = MailInfo
module.exports.MailInfoKey = MailInfoKey
module.exports.FriendInfo = FriendInfo
module.exports.FriendInfoKey = FriendInfoKey
module.exports.AchievementInfo = AchievementInfo
module.exports.AchievementInfoKey = AchievementInfoKey
module.exports.WantedQuestInfo = WantedQuestInfo
module.exports.WantedQuestInfoKey = WantedQuestInfoKey
module.exports.PlayerItemTimeDurationInfo = PlayerItemTimeDurationInfo
module.exports.PlayerItemTimeDurationInfoKey = PlayerItemTimeDurationInfoKey
module.exports.PlayerFirstPurchaseInfo = PlayerFirstPurchaseInfo
module.exports.PlayerFirstPurchaseInfoKey = PlayerFirstPurchaseInfoKey
module.exports.PlayerInAppPurchaseInfo = PlayerInAppPurchaseInfo
module.exports.PlayerInAppPurchaseInfoKey = PlayerInAppPurchaseInfoKey
module.exports.EquipItemInfo = EquipItemInfo
module.exports.EquipItemInfoKey = EquipItemInfoKey
module.exports.PlayerPurchaseTimeDurationInfo = PlayerPurchaseTimeDurationInfo
module.exports.PlayerPurchaseTimeDurationInfoKey = PlayerPurchaseTimeDurationInfoKey
module.exports.ShopRestockTimeInfo = ShopRestockTimeInfo
module.exports.ShopRestockTimeInfoKey = ShopRestockTimeInfoKey
module.exports.ShopItemInfo = ShopItemInfo
module.exports.ShopItemInfoKey = ShopItemInfoKey
module.exports.ShopListItemInfo = ShopListItemInfo
module.exports.ShopListItemInfoKey = ShopListItemInfoKey
module.exports.PayShopItemInfo = PayShopItemInfo
module.exports.PayShopItemInfoKey = PayShopItemInfoKey
module.exports.CashShopItemInfo = CashShopItemInfo
module.exports.CashShopItemInfoKey = CashShopItemInfoKey
module.exports.StoreShopItemContent = StoreShopItemContent
module.exports.StoreShopItemContentKey = StoreShopItemContentKey
module.exports.PackageShopItemInfo = PackageShopItemInfo
module.exports.PackageShopItemInfoKey = PackageShopItemInfoKey
module.exports.PayShopItemEventInfo = PayShopItemEventInfo
module.exports.PayShopItemEventInfoKey = PayShopItemEventInfoKey
module.exports.PayShopImageUrlInfo = PayShopImageUrlInfo
module.exports.PayShopImageUrlInfoKey = PayShopImageUrlInfoKey
module.exports.ReqItemInfo = ReqItemInfo
module.exports.ReqItemInfoKey = ReqItemInfoKey
module.exports.CachedAccountInfo = CachedAccountInfo
module.exports.CachedAccountInfoKey = CachedAccountInfoKey
module.exports.PlayerMiscInfo = PlayerMiscInfo
module.exports.PlayerMiscInfoKey = PlayerMiscInfoKey
module.exports.PlayerBattleInfo = PlayerBattleInfo
module.exports.PlayerBattleInfoKey = PlayerBattleInfoKey
module.exports.WorldMapEventTimeInfo = WorldMapEventTimeInfo
module.exports.WorldMapEventTimeInfoKey = WorldMapEventTimeInfoKey
module.exports.WorldMapEventInfo = WorldMapEventInfo
module.exports.WorldMapEventInfoKey = WorldMapEventInfoKey
module.exports.TutorialInfo = TutorialInfo
module.exports.TutorialInfoKey = TutorialInfoKey
module.exports.UserTimeInfo = UserTimeInfo
module.exports.UserTimeInfoKey = UserTimeInfoKey
module.exports.CurrencyResultInfo = CurrencyResultInfo
module.exports.CurrencyResultInfoKey = CurrencyResultInfoKey
module.exports.HeroAddResultInfo = HeroAddResultInfo
module.exports.HeroAddResultInfoKey = HeroAddResultInfoKey
module.exports.RoyalPointResultInfo = RoyalPointResultInfo
module.exports.RoyalPointResultInfoKey = RoyalPointResultInfoKey
module.exports.HeroPurifyResultInfo = HeroPurifyResultInfo
module.exports.HeroPurifyResultInfoKey = HeroPurifyResultInfoKey
module.exports.RewardResultInfo = RewardResultInfo
module.exports.RewardResultInfoKey = RewardResultInfoKey
module.exports.EquipItemBoostInfo = EquipItemBoostInfo
module.exports.EquipItemBoostInfoKey = EquipItemBoostInfoKey
module.exports.PvpCoinResultInfo = PvpCoinResultInfo
module.exports.PvpCoinResultInfoKey = PvpCoinResultInfoKey
module.exports.GuildPointResultInfo = GuildPointResultInfo
module.exports.GuildPointResultInfoKey = GuildPointResultInfoKey
module.exports.QuickCompleteCollectResultInfo = QuickCompleteCollectResultInfo
module.exports.QuickCompleteCollectResultInfoKey = QuickCompleteCollectResultInfoKey
module.exports.PlunderSearchResultInfo = PlunderSearchResultInfo
module.exports.PlunderSearchResultInfoKey = PlunderSearchResultInfoKey
module.exports.MileageResultInfo = MileageResultInfo
module.exports.MileageResultInfoKey = MileageResultInfoKey
module.exports.UndergroundLabyrinthKeyResultInfo = UndergroundLabyrinthKeyResultInfo
module.exports.UndergroundLabyrinthKeyResultInfoKey = UndergroundLabyrinthKeyResultInfoKey
module.exports.UndergroundPrisonKeyResultInfo = UndergroundPrisonKeyResultInfo
module.exports.UndergroundPrisonKeyResultInfoKey = UndergroundPrisonKeyResultInfoKey
module.exports.SwordResultInfo = SwordResultInfo
module.exports.SwordResultInfoKey = SwordResultInfoKey
module.exports.BattleVersionInfo = BattleVersionInfo
module.exports.BattleVersionInfoKey = BattleVersionInfoKey
module.exports.ResultCreatureInfo = ResultCreatureInfo
module.exports.ResultCreatureInfoKey = ResultCreatureInfoKey
module.exports.MatchRankerInfo = MatchRankerInfo
module.exports.MatchRankerInfoKey = MatchRankerInfoKey
module.exports.MatchResultInfo = MatchResultInfo
module.exports.MatchResultInfoKey = MatchResultInfoKey
module.exports.MatchInfo = MatchInfo
module.exports.MatchInfoKey = MatchInfoKey
module.exports.MatchedAccountInfo = MatchedAccountInfo
module.exports.MatchedAccountInfoKey = MatchedAccountInfoKey
module.exports.ChapterDungeonInfo = ChapterDungeonInfo
module.exports.ChapterDungeonInfoKey = ChapterDungeonInfoKey
module.exports.ItemInfo = ItemInfo
module.exports.ItemInfoKey = ItemInfoKey
module.exports.ExpResultInfo = ExpResultInfo
module.exports.ExpResultInfoKey = ExpResultInfoKey
module.exports.GemResultInfo = GemResultInfo
module.exports.GemResultInfoKey = GemResultInfoKey
module.exports.StaminaResultInfo = StaminaResultInfo
module.exports.StaminaResultInfoKey = StaminaResultInfoKey
module.exports.GoldResultInfo = GoldResultInfo
module.exports.GoldResultInfoKey = GoldResultInfoKey
module.exports.ItemResultInfo = ItemResultInfo
module.exports.ItemResultInfoKey = ItemResultInfoKey
module.exports.RewardItemInfo = RewardItemInfo
module.exports.RewardItemInfoKey = RewardItemInfoKey
module.exports.HeroExpResultInfo = HeroExpResultInfo
module.exports.HeroExpResultInfoKey = HeroExpResultInfoKey
module.exports.UserInfo = UserInfo
module.exports.UserInfoKey = UserInfoKey
module.exports.AchievementData = AchievementData
module.exports.AchievementDataKey = AchievementDataKey
module.exports.AttendanceLocalInfo = AttendanceLocalInfo
module.exports.AttendanceLocalInfoKey = AttendanceLocalInfoKey
module.exports.AttendanceRewardLocalInfo = AttendanceRewardLocalInfo
module.exports.AttendanceRewardLocalInfoKey = AttendanceRewardLocalInfoKey
module.exports.DbRewardData = DbRewardData
module.exports.DbRewardDataKey = DbRewardDataKey
module.exports.AttendanceReward = AttendanceReward
module.exports.AttendanceRewardKey = AttendanceRewardKey
module.exports.AttendanceRewards = AttendanceRewards
module.exports.AttendanceRewardsKey = AttendanceRewardsKey
module.exports.AttendanceData = AttendanceData
module.exports.AttendanceDataKey = AttendanceDataKey
module.exports.EquipGachaData = EquipGachaData
module.exports.EquipGachaDataKey = EquipGachaDataKey
module.exports.ScenarioQuestGroupData = ScenarioQuestGroupData
module.exports.ScenarioQuestGroupDataKey = ScenarioQuestGroupDataKey
module.exports.ScenarioQuestData = ScenarioQuestData
module.exports.ScenarioQuestDataKey = ScenarioQuestDataKey
module.exports.DOWDungeonData = DOWDungeonData
module.exports.DOWDungeonDataKey = DOWDungeonDataKey
module.exports.EquipItemGradeData = EquipItemGradeData
module.exports.EquipItemGradeDataKey = EquipItemGradeDataKey
module.exports.DbRewardResult = DbRewardResult
module.exports.DbRewardResultKey = DbRewardResultKey
module.exports.GuildLevelData = GuildLevelData
module.exports.GuildLevelDataKey = GuildLevelDataKey
module.exports.GuildSettingData = GuildSettingData
module.exports.GuildSettingDataKey = GuildSettingDataKey
module.exports.GuildMemberInfo = GuildMemberInfo
module.exports.GuildMemberInfoKey = GuildMemberInfoKey
module.exports.GuildJoinRequestPlayerInfo = GuildJoinRequestPlayerInfo
module.exports.GuildJoinRequestPlayerInfoKey = GuildJoinRequestPlayerInfoKey
module.exports.MercenaryHeroInfo = MercenaryHeroInfo
module.exports.MercenaryHeroInfoKey = MercenaryHeroInfoKey
module.exports.DropBonusEventLocalInfo = DropBonusEventLocalInfo
module.exports.DropBonusEventLocalInfoKey = DropBonusEventLocalInfoKey
module.exports.DropBonusEvent = DropBonusEvent
module.exports.DropBonusEventKey = DropBonusEventKey
module.exports.NMessage.NProtocol.DelegateGuildMaster = NMessage.NProtocol.DelegateGuildMaster
module.exports.NMessage.NProtocol.DelegateGuildMasterKey = NMessage.NProtocol.DelegateGuildMasterKey
module.exports.Notice = Notice
module.exports.NoticeKey = NoticeKey
module.exports.BaseRequest = BaseRequest
module.exports.BaseRequestKey = BaseRequestKey
module.exports.NMessage.LoginReq = NMessage.LoginReq
module.exports.NMessage.LoginReqKey = NMessage.LoginReqKey
module.exports.BaseResponse = BaseResponse
module.exports.BaseResponseKey = BaseResponseKey
module.exports.NMessage.LoginRes = NMessage.LoginRes
module.exports.NMessage.LoginResKey = NMessage.LoginResKey
module.exports.NMessage.ChangeGuildReq = NMessage.ChangeGuildReq
module.exports.NMessage.ChangeGuildReqKey = NMessage.ChangeGuildReqKey
module.exports.NMessage.ChangeGuildRes = NMessage.ChangeGuildRes
module.exports.NMessage.ChangeGuildResKey = NMessage.ChangeGuildResKey
module.exports.NMessage.ChangeFriendReq = NMessage.ChangeFriendReq
module.exports.NMessage.ChangeFriendReqKey = NMessage.ChangeFriendReqKey
module.exports.NMessage.ChangeFriendRes = NMessage.ChangeFriendRes
module.exports.NMessage.ChangeFriendResKey = NMessage.ChangeFriendResKey
module.exports.NMessage.ChangeChannelReq = NMessage.ChangeChannelReq
module.exports.NMessage.ChangeChannelReqKey = NMessage.ChangeChannelReqKey
module.exports.NMessage.ChangeChannelRes = NMessage.ChangeChannelRes
module.exports.NMessage.ChangeChannelResKey = NMessage.ChangeChannelResKey
module.exports.NMessage.MessageReq = NMessage.MessageReq
module.exports.NMessage.MessageReqKey = NMessage.MessageReqKey
module.exports.NMessage.MessageRes = NMessage.MessageRes
module.exports.NMessage.MessageResKey = NMessage.MessageResKey
module.exports.NMessage.MessageNot = NMessage.MessageNot
module.exports.NMessage.MessageNotKey = NMessage.MessageNotKey
module.exports.NMessage.ClearMessageReq = NMessage.ClearMessageReq
module.exports.NMessage.ClearMessageReqKey = NMessage.ClearMessageReqKey
module.exports.NMessage.ClearMessageRes = NMessage.ClearMessageRes
module.exports.NMessage.ClearMessageResKey = NMessage.ClearMessageResKey
module.exports.NMessage.PingReq = NMessage.PingReq
module.exports.NMessage.PingReqKey = NMessage.PingReqKey
module.exports.NMessage.PingRes = NMessage.PingRes
module.exports.NMessage.PingResKey = NMessage.PingResKey
module.exports.NMessage.ClientLog = NMessage.ClientLog
module.exports.NMessage.ClientLogKey = NMessage.ClientLogKey
module.exports.NoticeLocalInfo = NoticeLocalInfo
module.exports.NoticeLocalInfoKey = NoticeLocalInfoKey
module.exports.LobbyNotice = LobbyNotice
module.exports.LobbyNoticeKey = LobbyNoticeKey
module.exports.LobbyNoticeLocalInfo = LobbyNoticeLocalInfo
module.exports.LobbyNoticeLocalInfoKey = LobbyNoticeLocalInfoKey
module.exports.PlunderReplayInfo = PlunderReplayInfo
module.exports.PlunderReplayInfoKey = PlunderReplayInfoKey
module.exports.ReplayTeamInfo = ReplayTeamInfo
module.exports.ReplayTeamInfoKey = ReplayTeamInfoKey
module.exports.ReplayTeamHeroInfo = ReplayTeamHeroInfo
module.exports.ReplayTeamHeroInfoKey = ReplayTeamHeroInfoKey
module.exports.ArenaReplayInfo = ArenaReplayInfo
module.exports.ArenaReplayInfoKey = ArenaReplayInfoKey
module.exports.Replay = Replay
module.exports.ReplayKey = ReplayKey
module.exports.B2G_SetAbuser.Request = B2G_SetAbuser.Request
module.exports.B2G_SetAbuser.RequestKey = B2G_SetAbuser.RequestKey
module.exports.B2G_SetAbuser.Response = B2G_SetAbuser.Response
module.exports.B2G_SetAbuser.ResponseKey = B2G_SetAbuser.ResponseKey
module.exports.B2G_GetHeroInfo.Request = B2G_GetHeroInfo.Request
module.exports.B2G_GetHeroInfo.RequestKey = B2G_GetHeroInfo.RequestKey
module.exports.B2G_GetHeroInfo.Response = B2G_GetHeroInfo.Response
module.exports.B2G_GetHeroInfo.ResponseKey = B2G_GetHeroInfo.ResponseKey
module.exports.GMT2G_Complete_Billing.Request = GMT2G_Complete_Billing.Request
module.exports.GMT2G_Complete_Billing.RequestKey = GMT2G_Complete_Billing.RequestKey
module.exports.GMT2G_Complete_Billing.Response = GMT2G_Complete_Billing.Response
module.exports.GMT2G_Complete_Billing.ResponseKey = GMT2G_Complete_Billing.ResponseKey
module.exports.M2G_ReloadPlayerBattle.Request = M2G_ReloadPlayerBattle.Request
module.exports.M2G_ReloadPlayerBattle.RequestKey = M2G_ReloadPlayerBattle.RequestKey
module.exports.M2G_ReloadPlayerBattle.Response = M2G_ReloadPlayerBattle.Response
module.exports.M2G_ReloadPlayerBattle.ResponseKey = M2G_ReloadPlayerBattle.ResponseKey
module.exports.P2G_BuyCashShopItem.Request = P2G_BuyCashShopItem.Request
module.exports.P2G_BuyCashShopItem.RequestKey = P2G_BuyCashShopItem.RequestKey
module.exports.P2G_BuyCashShopItem.Response = P2G_BuyCashShopItem.Response
module.exports.P2G_BuyCashShopItem.ResponseKey = P2G_BuyCashShopItem.ResponseKey
module.exports.P2G_GetCashShopItems.Request = P2G_GetCashShopItems.Request
module.exports.P2G_GetCashShopItems.RequestKey = P2G_GetCashShopItems.RequestKey
module.exports.P2G_GetCashShopItems.Response = P2G_GetCashShopItems.Response
module.exports.P2G_GetCashShopItems.ResponseKey = P2G_GetCashShopItems.ResponseKey
module.exports.B2G_SetCampaignResult.Request = B2G_SetCampaignResult.Request
module.exports.B2G_SetCampaignResult.RequestKey = B2G_SetCampaignResult.RequestKey
module.exports.B2G_SetCampaignResult.Response = B2G_SetCampaignResult.Response
module.exports.B2G_SetCampaignResult.ResponseKey = B2G_SetCampaignResult.ResponseKey
module.exports.B2M_GetMatchInfo.Request = B2M_GetMatchInfo.Request
module.exports.B2M_GetMatchInfo.RequestKey = B2M_GetMatchInfo.RequestKey
module.exports.B2M_GetMatchInfo.Response = B2M_GetMatchInfo.Response
module.exports.B2M_GetMatchInfo.ResponseKey = B2M_GetMatchInfo.ResponseKey
module.exports.B2M_Ping.Request = B2M_Ping.Request
module.exports.B2M_Ping.RequestKey = B2M_Ping.RequestKey
module.exports.B2M_Ping.BattleIntegrityCheckInfo = B2M_Ping.BattleIntegrityCheckInfo
module.exports.B2M_Ping.BattleIntegrityCheckInfoKey = B2M_Ping.BattleIntegrityCheckInfoKey
module.exports.B2M_Ping.Response = B2M_Ping.Response
module.exports.B2M_Ping.ResponseKey = B2M_Ping.ResponseKey
module.exports.B2G_SetMatchResult.Request = B2G_SetMatchResult.Request
module.exports.B2G_SetMatchResult.RequestKey = B2G_SetMatchResult.RequestKey
module.exports.B2G_SetMatchResult.Response = B2G_SetMatchResult.Response
module.exports.B2G_SetMatchResult.ResponseKey = B2G_SetMatchResult.ResponseKey
module.exports.BattleLoginReq = BattleLoginReq
module.exports.BattleLoginReqKey = BattleLoginReqKey
module.exports.BattleLoginRes = BattleLoginRes
module.exports.BattleLoginResKey = BattleLoginResKey
module.exports.BattleEnterReq = BattleEnterReq
module.exports.BattleEnterReqKey = BattleEnterReqKey
module.exports.BattleEnterRes = BattleEnterRes
module.exports.BattleEnterResKey = BattleEnterResKey
module.exports.BattleStartReq = BattleStartReq
module.exports.BattleStartReqKey = BattleStartReqKey
module.exports.BattleStartRes = BattleStartRes
module.exports.BattleStartResKey = BattleStartResKey
module.exports.BattleLogNot = BattleLogNot
module.exports.BattleLogNotKey = BattleLogNotKey
module.exports.BattleEndNot = BattleEndNot
module.exports.BattleEndNotKey = BattleEndNotKey
module.exports.BattleResultNot = BattleResultNot
module.exports.BattleResultNotKey = BattleResultNotKey
module.exports.DestroyCreatureNot = DestroyCreatureNot
module.exports.DestroyCreatureNotKey = DestroyCreatureNotKey
module.exports.WaveReadyNot = WaveReadyNot
module.exports.WaveReadyNotKey = WaveReadyNotKey
module.exports.WaveEndNot = WaveEndNot
module.exports.WaveEndNotKey = WaveEndNotKey
module.exports.BaseCreatureActionReq = BaseCreatureActionReq
module.exports.BaseCreatureActionReqKey = BaseCreatureActionReqKey
module.exports.BaseCreatureActionRes = BaseCreatureActionRes
module.exports.BaseCreatureActionResKey = BaseCreatureActionResKey
module.exports.UseSkillReq = UseSkillReq
module.exports.UseSkillReqKey = UseSkillReqKey
module.exports.UseSkillRes = UseSkillRes
module.exports.UseSkillResKey = UseSkillResKey
module.exports.ReserveOnSkillReq = ReserveOnSkillReq
module.exports.ReserveOnSkillReqKey = ReserveOnSkillReqKey
module.exports.ReserveOffSkillReq = ReserveOffSkillReq
module.exports.ReserveOffSkillReqKey = ReserveOffSkillReqKey
module.exports.SetManualTargetReq = SetManualTargetReq
module.exports.SetManualTargetReqKey = SetManualTargetReqKey
module.exports.SetManualMoveReq = SetManualMoveReq
module.exports.SetManualMoveReqKey = SetManualMoveReqKey
module.exports.FireNextSkillReq = FireNextSkillReq
module.exports.FireNextSkillReqKey = FireNextSkillReqKey
module.exports.PingReq = PingReq
module.exports.PingReqKey = PingReqKey
module.exports.PingRes = PingRes
module.exports.PingResKey = PingResKey
module.exports.PingIdleReq = PingIdleReq
module.exports.PingIdleReqKey = PingIdleReqKey
module.exports.PingIdleRes = PingIdleRes
module.exports.PingIdleResKey = PingIdleResKey
module.exports.G2G_RejectFriend.Request = G2G_RejectFriend.Request
module.exports.G2G_RejectFriend.RequestKey = G2G_RejectFriend.RequestKey
module.exports.G2G_RejectFriend.Response = G2G_RejectFriend.Response
module.exports.G2G_RejectFriend.ResponseKey = G2G_RejectFriend.ResponseKey
module.exports.G2G_DropUser.Request = G2G_DropUser.Request
module.exports.G2G_DropUser.RequestKey = G2G_DropUser.RequestKey
module.exports.G2G_DropUser.Response = G2G_DropUser.Response
module.exports.G2G_DropUser.ResponseKey = G2G_DropUser.ResponseKey
module.exports.G2M_SyncWaiter.Request = G2M_SyncWaiter.Request
module.exports.G2M_SyncWaiter.RequestKey = G2M_SyncWaiter.RequestKey
module.exports.G2M_SyncWaiter.Response = G2M_SyncWaiter.Response
module.exports.G2M_SyncWaiter.ResponseKey = G2M_SyncWaiter.ResponseKey
module.exports.SaveReplay.Request = SaveReplay.Request
module.exports.SaveReplay.RequestKey = SaveReplay.RequestKey
module.exports.B2M_SaveReplay.Request = B2M_SaveReplay.Request
module.exports.B2M_SaveReplay.RequestKey = B2M_SaveReplay.RequestKey
module.exports.GetAchievements.Request = GetAchievements.Request
module.exports.GetAchievements.RequestKey = GetAchievements.RequestKey
module.exports.GetAchievements.Response = GetAchievements.Response
module.exports.GetAchievements.ResponseKey = GetAchievements.ResponseKey
module.exports.RewardAchievement.Request = RewardAchievement.Request
module.exports.RewardAchievement.RequestKey = RewardAchievement.RequestKey
module.exports.RewardAchievement.Response = RewardAchievement.Response
module.exports.RewardAchievement.ResponseKey = RewardAchievement.ResponseKey
module.exports.Cheat.Request = Cheat.Request
module.exports.Cheat.RequestKey = Cheat.RequestKey
module.exports.Cheat.Response = Cheat.Response
module.exports.Cheat.ResponseKey = Cheat.ResponseKey
module.exports.CompareDbSchema.Request = CompareDbSchema.Request
module.exports.CompareDbSchema.RequestKey = CompareDbSchema.RequestKey
module.exports.CompareDbSchema.Response = CompareDbSchema.Response
module.exports.CompareDbSchema.ResponseKey = CompareDbSchema.ResponseKey
module.exports.DumpDbSchema.Request = DumpDbSchema.Request
module.exports.DumpDbSchema.RequestKey = DumpDbSchema.RequestKey
module.exports.DumpDbSchema.Response = DumpDbSchema.Response
module.exports.DumpDbSchema.ResponseKey = DumpDbSchema.ResponseKey
module.exports.GetAttendanceReward.Request = GetAttendanceReward.Request
module.exports.GetAttendanceReward.RequestKey = GetAttendanceReward.RequestKey
module.exports.GetAttendanceReward.Response = GetAttendanceReward.Response
module.exports.GetAttendanceReward.ResponseKey = GetAttendanceReward.ResponseKey
module.exports.AbandonMultiplayReward.Request = AbandonMultiplayReward.Request
module.exports.AbandonMultiplayReward.RequestKey = AbandonMultiplayReward.RequestKey
module.exports.AbandonMultiplayReward.Response = AbandonMultiplayReward.Response
module.exports.AbandonMultiplayReward.ResponseKey = AbandonMultiplayReward.ResponseKey
module.exports.RewardClearChapter.Request = RewardClearChapter.Request
module.exports.RewardClearChapter.RequestKey = RewardClearChapter.RequestKey
module.exports.RewardClearChapter.Response = RewardClearChapter.Response
module.exports.RewardClearChapter.ResponseKey = RewardClearChapter.ResponseKey
module.exports.GetTowerNpcInfo.Request = GetTowerNpcInfo.Request
module.exports.GetTowerNpcInfo.RequestKey = GetTowerNpcInfo.RequestKey
module.exports.GetTowerNpcInfo.Response = GetTowerNpcInfo.Response
module.exports.GetTowerNpcInfo.ResponseKey = GetTowerNpcInfo.ResponseKey
module.exports.GetTowerHeroInfo.Request = GetTowerHeroInfo.Request
module.exports.GetTowerHeroInfo.RequestKey = GetTowerHeroInfo.RequestKey
module.exports.GetTowerHeroInfo.Response = GetTowerHeroInfo.Response
module.exports.GetTowerHeroInfo.ResponseKey = GetTowerHeroInfo.ResponseKey
module.exports.ResetTower.Request = ResetTower.Request
module.exports.ResetTower.RequestKey = ResetTower.RequestKey
module.exports.ResetTower.Response = ResetTower.Response
module.exports.ResetTower.ResponseKey = ResetTower.ResponseKey
module.exports.SaveIAPurchaseInfo.Request = SaveIAPurchaseInfo.Request
module.exports.SaveIAPurchaseInfo.RequestKey = SaveIAPurchaseInfo.RequestKey
module.exports.SaveIAPurchaseInfo.Response = SaveIAPurchaseInfo.Response
module.exports.SaveIAPurchaseInfo.ResponseKey = SaveIAPurchaseInfo.ResponseKey
module.exports.GetFreeEquipGachaInfo.Request = GetFreeEquipGachaInfo.Request
module.exports.GetFreeEquipGachaInfo.RequestKey = GetFreeEquipGachaInfo.RequestKey
module.exports.GetFreeEquipGachaInfo.Response = GetFreeEquipGachaInfo.Response
module.exports.GetFreeEquipGachaInfo.ResponseKey = GetFreeEquipGachaInfo.ResponseKey
module.exports.ExecEquipGacha.Request = ExecEquipGacha.Request
module.exports.ExecEquipGacha.RequestKey = ExecEquipGacha.RequestKey
module.exports.ExecEquipGacha.Response = ExecEquipGacha.Response
module.exports.ExecEquipGacha.ResponseKey = ExecEquipGacha.ResponseKey
module.exports.UpgradeEquipOption.Request = UpgradeEquipOption.Request
module.exports.UpgradeEquipOption.RequestKey = UpgradeEquipOption.RequestKey
module.exports.UpgradeEquipOption.Response = UpgradeEquipOption.Response
module.exports.UpgradeEquipOption.ResponseKey = UpgradeEquipOption.ResponseKey
module.exports.ExtendEquip.Request = ExtendEquip.Request
module.exports.ExtendEquip.RequestKey = ExtendEquip.RequestKey
module.exports.ExtendEquip.Response = ExtendEquip.Response
module.exports.ExtendEquip.ResponseKey = ExtendEquip.ResponseKey
module.exports.EnhanceHero.Request = EnhanceHero.Request
module.exports.EnhanceHero.RequestKey = EnhanceHero.RequestKey
module.exports.EnhanceHero.Response = EnhanceHero.Response
module.exports.EnhanceHero.ResponseKey = EnhanceHero.ResponseKey
module.exports.UsePackageItem.Request = UsePackageItem.Request
module.exports.UsePackageItem.RequestKey = UsePackageItem.RequestKey
module.exports.UsePackageItem.Response = UsePackageItem.Response
module.exports.UsePackageItem.ResponseKey = UsePackageItem.ResponseKey
module.exports.UseBoosterItem.Request = UseBoosterItem.Request
module.exports.UseBoosterItem.RequestKey = UseBoosterItem.RequestKey
module.exports.UseBoosterItem.Response = UseBoosterItem.Response
module.exports.UseBoosterItem.ResponseKey = UseBoosterItem.ResponseKey
module.exports.UseHeroSelectItem.Request = UseHeroSelectItem.Request
module.exports.UseHeroSelectItem.RequestKey = UseHeroSelectItem.RequestKey
module.exports.UseHeroSelectItem.Response = UseHeroSelectItem.Response
module.exports.UseHeroSelectItem.ResponseKey = UseHeroSelectItem.ResponseKey
module.exports.EnterLobby.Request = EnterLobby.Request
module.exports.EnterLobby.RequestKey = EnterLobby.RequestKey
module.exports.EnterLobby.Response = EnterLobby.Response
module.exports.EnterLobby.ResponseKey = EnterLobby.ResponseKey
module.exports.VisitDungeon.Request = VisitDungeon.Request
module.exports.VisitDungeon.RequestKey = VisitDungeon.RequestKey
module.exports.VisitDungeon.Response = VisitDungeon.Response
module.exports.VisitDungeon.ResponseKey = VisitDungeon.ResponseKey
module.exports.GetMultiplayReward.Request = GetMultiplayReward.Request
module.exports.GetMultiplayReward.RequestKey = GetMultiplayReward.RequestKey
module.exports.GetMultiplayReward.RewardWinner = GetMultiplayReward.RewardWinner
module.exports.GetMultiplayReward.RewardWinnerKey = GetMultiplayReward.RewardWinnerKey
module.exports.GetMultiplayReward.Response = GetMultiplayReward.Response
module.exports.GetMultiplayReward.ResponseKey = GetMultiplayReward.ResponseKey
module.exports.ApplyForMultiplayReward.Request = ApplyForMultiplayReward.Request
module.exports.ApplyForMultiplayReward.RequestKey = ApplyForMultiplayReward.RequestKey
module.exports.ApplyForMultiplayReward.Response = ApplyForMultiplayReward.Response
module.exports.ApplyForMultiplayReward.ResponseKey = ApplyForMultiplayReward.ResponseKey
module.exports.GetSelectedReward.Request = GetSelectedReward.Request
module.exports.GetSelectedReward.RequestKey = GetSelectedReward.RequestKey
module.exports.GetSelectedReward.Response = GetSelectedReward.Response
module.exports.GetSelectedReward.ResponseKey = GetSelectedReward.ResponseKey
module.exports.GetKeyDecoder.Request = GetKeyDecoder.Request
module.exports.GetKeyDecoder.RequestKey = GetKeyDecoder.RequestKey
module.exports.GetKeyDecoder.Response = GetKeyDecoder.Response
module.exports.GetKeyDecoder.ResponseKey = GetKeyDecoder.ResponseKey
module.exports.RechargeUndergroundPrisonKey.Request = RechargeUndergroundPrisonKey.Request
module.exports.RechargeUndergroundPrisonKey.RequestKey = RechargeUndergroundPrisonKey.RequestKey
module.exports.RechargeUndergroundPrisonKey.Response = RechargeUndergroundPrisonKey.Response
module.exports.RechargeUndergroundPrisonKey.ResponseKey = RechargeUndergroundPrisonKey.ResponseKey
module.exports.GetDOWDungeonInfo.Request = GetDOWDungeonInfo.Request
module.exports.GetDOWDungeonInfo.RequestKey = GetDOWDungeonInfo.RequestKey
module.exports.GetDOWDungeonInfo.Response = GetDOWDungeonInfo.Response
module.exports.GetDOWDungeonInfo.ResponseKey = GetDOWDungeonInfo.ResponseKey
module.exports.AwakenEquip.Request = AwakenEquip.Request
module.exports.AwakenEquip.RequestKey = AwakenEquip.RequestKey
module.exports.AwakenEquip.Response = AwakenEquip.Response
module.exports.AwakenEquip.ResponseKey = AwakenEquip.ResponseKey
module.exports.BreakEquip.Request = BreakEquip.Request
module.exports.BreakEquip.RequestKey = BreakEquip.RequestKey
module.exports.BreakEquip.Response = BreakEquip.Response
module.exports.BreakEquip.ResponseKey = BreakEquip.ResponseKey
module.exports.UnsetRune.Request = UnsetRune.Request
module.exports.UnsetRune.RequestKey = UnsetRune.RequestKey
module.exports.UnsetRune.Response = UnsetRune.Response
module.exports.UnsetRune.ResponseKey = UnsetRune.ResponseKey
module.exports.SetRune.Request = SetRune.Request
module.exports.SetRune.RequestKey = SetRune.RequestKey
module.exports.SetRune.Response = SetRune.Response
module.exports.SetRune.ResponseKey = SetRune.ResponseKey
module.exports.UnsetEquip.Request = UnsetEquip.Request
module.exports.UnsetEquip.RequestKey = UnsetEquip.RequestKey
module.exports.UnsetEquip.Response = UnsetEquip.Response
module.exports.UnsetEquip.ResponseKey = UnsetEquip.ResponseKey
module.exports.UnlockEquip.Request = UnlockEquip.Request
module.exports.UnlockEquip.RequestKey = UnlockEquip.RequestKey
module.exports.UnlockEquip.Response = UnlockEquip.Response
module.exports.UnlockEquip.ResponseKey = UnlockEquip.ResponseKey
module.exports.SellEquip.Request = SellEquip.Request
module.exports.SellEquip.RequestKey = SellEquip.RequestKey
module.exports.SellEquip.Response = SellEquip.Response
module.exports.SellEquip.ResponseKey = SellEquip.ResponseKey
module.exports.SearchFriend.Request = SearchFriend.Request
module.exports.SearchFriend.RequestKey = SearchFriend.RequestKey
module.exports.SearchFriend.Response = SearchFriend.Response
module.exports.SearchFriend.ResponseKey = SearchFriend.ResponseKey
module.exports.RejectFriend.Request = RejectFriend.Request
module.exports.RejectFriend.RequestKey = RejectFriend.RequestKey
module.exports.RejectFriend.Response = RejectFriend.Response
module.exports.RejectFriend.ResponseKey = RejectFriend.ResponseKey
module.exports.RequestFriend.Request = RequestFriend.Request
module.exports.RequestFriend.RequestKey = RequestFriend.RequestKey
module.exports.RequestFriend.Response = RequestFriend.Response
module.exports.RequestFriend.ResponseKey = RequestFriend.ResponseKey
module.exports.GetGuildAllMercenaries.Request = GetGuildAllMercenaries.Request
module.exports.GetGuildAllMercenaries.RequestKey = GetGuildAllMercenaries.RequestKey
module.exports.GetGuildAllMercenaries.Response = GetGuildAllMercenaries.Response
module.exports.GetGuildAllMercenaries.ResponseKey = GetGuildAllMercenaries.ResponseKey
module.exports.CancelRequestJoinGuild.Request = CancelRequestJoinGuild.Request
module.exports.CancelRequestJoinGuild.RequestKey = CancelRequestJoinGuild.RequestKey
module.exports.CancelRequestJoinGuild.Response = CancelRequestJoinGuild.Response
module.exports.CancelRequestJoinGuild.ResponseKey = CancelRequestJoinGuild.ResponseKey
module.exports.GetJoinRequestedGuilds.Request = GetJoinRequestedGuilds.Request
module.exports.GetJoinRequestedGuilds.RequestKey = GetJoinRequestedGuilds.RequestKey
module.exports.GetJoinRequestedGuilds.Response = GetJoinRequestedGuilds.Response
module.exports.GetJoinRequestedGuilds.ResponseKey = GetJoinRequestedGuilds.ResponseKey
module.exports.CheckGuildName.Request = CheckGuildName.Request
module.exports.CheckGuildName.RequestKey = CheckGuildName.RequestKey
module.exports.CheckGuildName.Response = CheckGuildName.Response
module.exports.CheckGuildName.ResponseKey = CheckGuildName.ResponseKey
module.exports.WithdrawGuild.Request = WithdrawGuild.Request
module.exports.WithdrawGuild.RequestKey = WithdrawGuild.RequestKey
module.exports.WithdrawGuild.Response = WithdrawGuild.Response
module.exports.WithdrawGuild.ResponseKey = WithdrawGuild.ResponseKey
module.exports.RequestJoinGuild.Request = RequestJoinGuild.Request
module.exports.RequestJoinGuild.RequestKey = RequestJoinGuild.RequestKey
module.exports.RequestJoinGuild.Response = RequestJoinGuild.Response
module.exports.RequestJoinGuild.ResponseKey = RequestJoinGuild.ResponseKey
module.exports.RejectJoinRequest.Request = RejectJoinRequest.Request
module.exports.RejectJoinRequest.RequestKey = RejectJoinRequest.RequestKey
module.exports.RejectJoinRequest.Response = RejectJoinRequest.Response
module.exports.RejectJoinRequest.ResponseKey = RejectJoinRequest.ResponseKey
module.exports.GetGuildBasicInfo.Request = GetGuildBasicInfo.Request
module.exports.GetGuildBasicInfo.RequestKey = GetGuildBasicInfo.RequestKey
module.exports.GetGuildBasicInfo.Response = GetGuildBasicInfo.Response
module.exports.GetGuildBasicInfo.ResponseKey = GetGuildBasicInfo.ResponseKey
module.exports.ApplyGuildSettingChange.Request = ApplyGuildSettingChange.Request
module.exports.ApplyGuildSettingChange.RequestKey = ApplyGuildSettingChange.RequestKey
module.exports.ApplyGuildSettingChange.Response = ApplyGuildSettingChange.Response
module.exports.ApplyGuildSettingChange.ResponseKey = ApplyGuildSettingChange.ResponseKey
module.exports.AcceptJoinRequest.Request = AcceptJoinRequest.Request
module.exports.AcceptJoinRequest.RequestKey = AcceptJoinRequest.RequestKey
module.exports.AcceptJoinRequest.Response = AcceptJoinRequest.Response
module.exports.AcceptJoinRequest.ResponseKey = AcceptJoinRequest.ResponseKey
module.exports.DelegateMaster.Request = DelegateMaster.Request
module.exports.DelegateMaster.RequestKey = DelegateMaster.RequestKey
module.exports.DelegateMaster.Response = DelegateMaster.Response
module.exports.DelegateMaster.ResponseKey = DelegateMaster.ResponseKey
module.exports.DestroyGuild.Request = DestroyGuild.Request
module.exports.DestroyGuild.RequestKey = DestroyGuild.RequestKey
module.exports.DestroyGuild.Response = DestroyGuild.Response
module.exports.DestroyGuild.ResponseKey = DestroyGuild.ResponseKey
module.exports.CreateGuild.Request = CreateGuild.Request
module.exports.CreateGuild.RequestKey = CreateGuild.RequestKey
module.exports.CreateGuild.Response = CreateGuild.Response
module.exports.CreateGuild.ResponseKey = CreateGuild.ResponseKey
module.exports.GetGuildList.Request = GetGuildList.Request
module.exports.GetGuildList.RequestKey = GetGuildList.RequestKey
module.exports.GetGuildList.Response = GetGuildList.Response
module.exports.GetGuildList.ResponseKey = GetGuildList.ResponseKey
module.exports.GetJoinRequestPlayers.Request = GetJoinRequestPlayers.Request
module.exports.GetJoinRequestPlayers.RequestKey = GetJoinRequestPlayers.RequestKey
module.exports.GetJoinRequestPlayers.Response = GetJoinRequestPlayers.Response
module.exports.GetJoinRequestPlayers.ResponseKey = GetJoinRequestPlayers.ResponseKey
module.exports.SearchGuild.Request = SearchGuild.Request
module.exports.SearchGuild.RequestKey = SearchGuild.RequestKey
module.exports.SearchGuild.Response = SearchGuild.Response
module.exports.SearchGuild.ResponseKey = SearchGuild.ResponseKey
module.exports.SetGuildAdminRank.Request = SetGuildAdminRank.Request
module.exports.SetGuildAdminRank.RequestKey = SetGuildAdminRank.RequestKey
module.exports.SetGuildAdminRank.Response = SetGuildAdminRank.Response
module.exports.SetGuildAdminRank.ResponseKey = SetGuildAdminRank.ResponseKey
module.exports.UnregisterMercenary.Request = UnregisterMercenary.Request
module.exports.UnregisterMercenary.RequestKey = UnregisterMercenary.RequestKey
module.exports.UnregisterMercenary.Response = UnregisterMercenary.Response
module.exports.UnregisterMercenary.ResponseKey = UnregisterMercenary.ResponseKey
module.exports.RegisterMercenary.Request = RegisterMercenary.Request
module.exports.RegisterMercenary.RequestKey = RegisterMercenary.RequestKey
module.exports.RegisterMercenary.Response = RegisterMercenary.Response
module.exports.RegisterMercenary.ResponseKey = RegisterMercenary.ResponseKey
module.exports.KickGuildMember.Request = KickGuildMember.Request
module.exports.KickGuildMember.RequestKey = KickGuildMember.RequestKey
module.exports.KickGuildMember.Response = KickGuildMember.Response
module.exports.KickGuildMember.ResponseKey = KickGuildMember.ResponseKey
module.exports.LearnHeroSkill.Request = LearnHeroSkill.Request
module.exports.LearnHeroSkill.RequestKey = LearnHeroSkill.RequestKey
module.exports.LearnHeroSkill.Response = LearnHeroSkill.Response
module.exports.LearnHeroSkill.ResponseKey = LearnHeroSkill.ResponseKey
module.exports.ExtendHeroSkill.Request = ExtendHeroSkill.Request
module.exports.ExtendHeroSkill.RequestKey = ExtendHeroSkill.RequestKey
module.exports.ExtendHeroSkill.Response = ExtendHeroSkill.Response
module.exports.ExtendHeroSkill.ResponseKey = ExtendHeroSkill.ResponseKey
module.exports.PurifyHero.Request = PurifyHero.Request
module.exports.PurifyHero.RequestKey = PurifyHero.RequestKey
module.exports.PurifyHero.Response = PurifyHero.Response
module.exports.PurifyHero.ResponseKey = PurifyHero.ResponseKey
module.exports.UseRecipeItem.Request = UseRecipeItem.Request
module.exports.UseRecipeItem.RequestKey = UseRecipeItem.RequestKey
module.exports.UseRecipeItem.Response = UseRecipeItem.Response
module.exports.UseRecipeItem.ResponseKey = UseRecipeItem.ResponseKey
module.exports.UsePotionItem.Request = UsePotionItem.Request
module.exports.UsePotionItem.RequestKey = UsePotionItem.RequestKey
module.exports.UsePotionItem.Response = UsePotionItem.Response
module.exports.UsePotionItem.ResponseKey = UsePotionItem.ResponseKey
module.exports.MailReceiveResult = MailReceiveResult
module.exports.MailReceiveResultKey = MailReceiveResultKey
module.exports.CheckNewMail.Request = CheckNewMail.Request
module.exports.CheckNewMail.RequestKey = CheckNewMail.RequestKey
module.exports.CheckNewMail.Response = CheckNewMail.Response
module.exports.CheckNewMail.ResponseKey = CheckNewMail.ResponseKey
module.exports.GetGlobalMailList.Request = GetGlobalMailList.Request
module.exports.GetGlobalMailList.RequestKey = GetGlobalMailList.RequestKey
module.exports.GetGlobalMailList.Response = GetGlobalMailList.Response
module.exports.GetGlobalMailList.ResponseKey = GetGlobalMailList.ResponseKey
module.exports.GetMailListByPage.Request = GetMailListByPage.Request
module.exports.GetMailListByPage.RequestKey = GetMailListByPage.RequestKey
module.exports.GetMailListByPage.Response = GetMailListByPage.Response
module.exports.GetMailListByPage.ResponseKey = GetMailListByPage.ResponseKey
module.exports.ReceiveAllMail.Request = ReceiveAllMail.Request
module.exports.ReceiveAllMail.RequestKey = ReceiveAllMail.RequestKey
module.exports.ReceiveAllMail.Response = ReceiveAllMail.Response
module.exports.ReceiveAllMail.ResponseKey = ReceiveAllMail.ResponseKey
module.exports.ReceiveMail.Request = ReceiveMail.Request
module.exports.ReceiveMail.RequestKey = ReceiveMail.RequestKey
module.exports.ReceiveMail.Response = ReceiveMail.Response
module.exports.ReceiveMail.ResponseKey = ReceiveMail.ResponseKey
module.exports.GetMailList.Request = GetMailList.Request
module.exports.GetMailList.RequestKey = GetMailList.RequestKey
module.exports.GetMailList.Response = GetMailList.Response
module.exports.GetMailList.ResponseKey = GetMailList.ResponseKey
module.exports.GetSeasonInfo.Request = GetSeasonInfo.Request
module.exports.GetSeasonInfo.RequestKey = GetSeasonInfo.RequestKey
module.exports.GetSeasonInfo.Response = GetSeasonInfo.Response
module.exports.GetSeasonInfo.ResponseKey = GetSeasonInfo.ResponseKey
module.exports.GetMatchRank.Request = GetMatchRank.Request
module.exports.GetMatchRank.RequestKey = GetMatchRank.RequestKey
module.exports.GetMatchRank.Response = GetMatchRank.Response
module.exports.GetMatchRank.ResponseKey = GetMatchRank.ResponseKey
module.exports.GetMatchRanker.Request = GetMatchRanker.Request
module.exports.GetMatchRanker.RequestKey = GetMatchRanker.RequestKey
module.exports.GetMatchRanker.Response = GetMatchRanker.Response
module.exports.GetMatchRanker.ResponseKey = GetMatchRanker.ResponseKey
module.exports.GetMatchResult.Request = GetMatchResult.Request
module.exports.GetMatchResult.RequestKey = GetMatchResult.RequestKey
module.exports.GetMatchResult.Response = GetMatchResult.Response
module.exports.GetMatchResult.ResponseKey = GetMatchResult.ResponseKey
module.exports.SetOfflineMatchResult.Request = SetOfflineMatchResult.Request
module.exports.SetOfflineMatchResult.RequestKey = SetOfflineMatchResult.RequestKey
module.exports.SetOfflineMatchResult.Response = SetOfflineMatchResult.Response
module.exports.SetOfflineMatchResult.ResponseKey = SetOfflineMatchResult.ResponseKey
module.exports.UseCoupon.Request = UseCoupon.Request
module.exports.UseCoupon.RequestKey = UseCoupon.RequestKey
module.exports.UseCoupon.Response = UseCoupon.Response
module.exports.UseCoupon.ResponseKey = UseCoupon.ResponseKey
module.exports.GetReplay.Request = GetReplay.Request
module.exports.GetReplay.RequestKey = GetReplay.RequestKey
module.exports.GetReplay.Response = GetReplay.Response
module.exports.GetReplay.ResponseKey = GetReplay.ResponseKey
module.exports.SaveReplay.Response = SaveReplay.Response
module.exports.SaveReplay.ResponseKey = SaveReplay.ResponseKey
module.exports.GetReplayList.Request = GetReplayList.Request
module.exports.GetReplayList.RequestKey = GetReplayList.RequestKey
module.exports.GetReplayList.Response = GetReplayList.Response
module.exports.GetReplayList.ResponseKey = GetReplayList.ResponseKey
module.exports.CompleteScenarioQuest.Request = CompleteScenarioQuest.Request
module.exports.CompleteScenarioQuest.RequestKey = CompleteScenarioQuest.RequestKey
module.exports.CompleteScenarioQuest.Response = CompleteScenarioQuest.Response
module.exports.CompleteScenarioQuest.ResponseKey = CompleteScenarioQuest.ResponseKey
module.exports.BuyCashShopItem.Request = BuyCashShopItem.Request
module.exports.BuyCashShopItem.RequestKey = BuyCashShopItem.RequestKey
module.exports.BuyCashShopItem.Response = BuyCashShopItem.Response
module.exports.BuyCashShopItem.ResponseKey = BuyCashShopItem.ResponseKey
module.exports.BuyHero.Request = BuyHero.Request
module.exports.BuyHero.RequestKey = BuyHero.RequestKey
module.exports.BuyHero.Response = BuyHero.Response
module.exports.BuyHero.ResponseKey = BuyHero.ResponseKey
module.exports.BuyPayShopItem.Request = BuyPayShopItem.Request
module.exports.BuyPayShopItem.RequestKey = BuyPayShopItem.RequestKey
module.exports.BuyPayShopItem.Response = BuyPayShopItem.Response
module.exports.BuyPayShopItem.ResponseKey = BuyPayShopItem.ResponseKey
module.exports.GetPayShopItems.Request = GetPayShopItems.Request
module.exports.GetPayShopItems.RequestKey = GetPayShopItems.RequestKey
module.exports.GetPayShopItems.Response = GetPayShopItems.Response
module.exports.GetPayShopItems.ResponseKey = GetPayShopItems.ResponseKey
module.exports.GetStoreItemList.Request = GetStoreItemList.Request
module.exports.GetStoreItemList.RequestKey = GetStoreItemList.RequestKey
module.exports.GetStoreItemList.Response = GetStoreItemList.Response
module.exports.GetStoreItemList.ResponseKey = GetStoreItemList.ResponseKey
module.exports.GetAwakeMaterialChallenge.Request = GetAwakeMaterialChallenge.Request
module.exports.GetAwakeMaterialChallenge.RequestKey = GetAwakeMaterialChallenge.RequestKey
module.exports.GetAwakeMaterialChallenge.Response = GetAwakeMaterialChallenge.Response
module.exports.GetAwakeMaterialChallenge.ResponseKey = GetAwakeMaterialChallenge.ResponseKey
module.exports.CompleteTutorial.Request = CompleteTutorial.Request
module.exports.CompleteTutorial.RequestKey = CompleteTutorial.RequestKey
module.exports.CompleteTutorial.Response = CompleteTutorial.Response
module.exports.CompleteTutorial.ResponseKey = CompleteTutorial.ResponseKey
module.exports.BuyStamina.Request = BuyStamina.Request
module.exports.BuyStamina.RequestKey = BuyStamina.RequestKey
module.exports.BuyStamina.Response = BuyStamina.Response
module.exports.BuyStamina.ResponseKey = BuyStamina.ResponseKey
module.exports.GetCertificate.Request = GetCertificate.Request
module.exports.GetCertificate.RequestKey = GetCertificate.RequestKey
module.exports.GetCertificate.Response = GetCertificate.Response
module.exports.GetCertificate.ResponseKey = GetCertificate.ResponseKey
module.exports.DumpUser.Request = DumpUser.Request
module.exports.DumpUser.RequestKey = DumpUser.RequestKey
module.exports.DumpUser.Response = DumpUser.Response
module.exports.DumpUser.ResponseKey = DumpUser.ResponseKey
module.exports.GetStamina.Request = GetStamina.Request
module.exports.GetStamina.RequestKey = GetStamina.RequestKey
module.exports.GetStamina.Response = GetStamina.Response
module.exports.GetStamina.ResponseKey = GetStamina.ResponseKey
module.exports.GetLoginId.Request = GetLoginId.Request
module.exports.GetLoginId.RequestKey = GetLoginId.RequestKey
module.exports.GetLoginId.Response = GetLoginId.Response
module.exports.GetLoginId.ResponseKey = GetLoginId.ResponseKey
module.exports.LinkAccount.Request = LinkAccount.Request
module.exports.LinkAccount.RequestKey = LinkAccount.RequestKey
module.exports.LinkAccount.Response = LinkAccount.Response
module.exports.LinkAccount.ResponseKey = LinkAccount.ResponseKey
module.exports.InitDeviceId.Request = InitDeviceId.Request
module.exports.InitDeviceId.RequestKey = InitDeviceId.RequestKey
module.exports.InitDeviceId.Response = InitDeviceId.Response
module.exports.InitDeviceId.ResponseKey = InitDeviceId.ResponseKey
module.exports.QuerySession.Request = QuerySession.Request
module.exports.QuerySession.RequestKey = QuerySession.RequestKey
module.exports.QuerySession.Response = QuerySession.Response
module.exports.QuerySession.ResponseKey = QuerySession.ResponseKey
module.exports.RegisterDeviceToken.Request = RegisterDeviceToken.Request
module.exports.RegisterDeviceToken.RequestKey = RegisterDeviceToken.RequestKey
module.exports.RegisterDeviceToken.Response = RegisterDeviceToken.Response
module.exports.RegisterDeviceToken.ResponseKey = RegisterDeviceToken.ResponseKey
module.exports.QueryMarketUrl.Request = QueryMarketUrl.Request
module.exports.QueryMarketUrl.RequestKey = QueryMarketUrl.RequestKey
module.exports.QueryMarketUrl.Response = QueryMarketUrl.Response
module.exports.QueryMarketUrl.ResponseKey = QueryMarketUrl.ResponseKey
module.exports.SignOut.Request = SignOut.Request
module.exports.SignOut.RequestKey = SignOut.RequestKey
module.exports.SignOut.Response = SignOut.Response
module.exports.SignOut.ResponseKey = SignOut.ResponseKey
module.exports.QueryNick.Request = QueryNick.Request
module.exports.QueryNick.RequestKey = QueryNick.RequestKey
module.exports.QueryNick.Response = QueryNick.Response
module.exports.QueryNick.ResponseKey = QueryNick.ResponseKey
module.exports.ChangeNick.Request = ChangeNick.Request
module.exports.ChangeNick.RequestKey = ChangeNick.RequestKey
module.exports.ChangeNick.Response = ChangeNick.Response
module.exports.ChangeNick.ResponseKey = ChangeNick.ResponseKey
module.exports.ChangeAvatarHero.Request = ChangeAvatarHero.Request
module.exports.ChangeAvatarHero.RequestKey = ChangeAvatarHero.RequestKey
module.exports.ChangeAvatarHero.Response = ChangeAvatarHero.Response
module.exports.ChangeAvatarHero.ResponseKey = ChangeAvatarHero.ResponseKey
module.exports.InspectUser.Request = InspectUser.Request
module.exports.InspectUser.RequestKey = InspectUser.RequestKey
module.exports.InspectUser.Response = InspectUser.Response
module.exports.InspectUser.ResponseKey = InspectUser.ResponseKey
module.exports.SearchUser.Request = SearchUser.Request
module.exports.SearchUser.RequestKey = SearchUser.RequestKey
module.exports.SearchUser.Response = SearchUser.Response
module.exports.SearchUser.ResponseKey = SearchUser.ResponseKey
module.exports.UpgradeEquip.Request = UpgradeEquip.Request
module.exports.UpgradeEquip.RequestKey = UpgradeEquip.RequestKey
module.exports.UpgradeEquip.Response = UpgradeEquip.Response
module.exports.UpgradeEquip.ResponseKey = UpgradeEquip.ResponseKey
module.exports.CancelMatch.Request = CancelMatch.Request
module.exports.CancelMatch.RequestKey = CancelMatch.RequestKey
module.exports.CancelMatch.Response = CancelMatch.Response
module.exports.CancelMatch.ResponseKey = CancelMatch.ResponseKey
module.exports.WaitMatch.Request = WaitMatch.Request
module.exports.WaitMatch.RequestKey = WaitMatch.RequestKey
module.exports.WaitMatch.Response = WaitMatch.Response
module.exports.WaitMatch.ResponseKey = WaitMatch.ResponseKey
module.exports.RegisterMatch.Request = RegisterMatch.Request
module.exports.RegisterMatch.RequestKey = RegisterMatch.RequestKey
module.exports.RegisterMatch.Response = RegisterMatch.Response
module.exports.RegisterMatch.ResponseKey = RegisterMatch.ResponseKey
module.exports.CheckConsume.Request = CheckConsume.Request
module.exports.CheckConsume.RequestKey = CheckConsume.RequestKey
module.exports.CheckConsume.Response = CheckConsume.Response
module.exports.CheckConsume.ResponseKey = CheckConsume.ResponseKey
module.exports.CheckPurchase.Request = CheckPurchase.Request
module.exports.CheckPurchase.RequestKey = CheckPurchase.RequestKey
module.exports.CheckPurchase.Response = CheckPurchase.Response
module.exports.CheckPurchase.ResponseKey = CheckPurchase.ResponseKey
module.exports.ExecIOSPayment.Request = ExecIOSPayment.Request
module.exports.ExecIOSPayment.RequestKey = ExecIOSPayment.RequestKey
module.exports.ExecIOSPayment.Response = ExecIOSPayment.Response
module.exports.ExecIOSPayment.ResponseKey = ExecIOSPayment.ResponseKey
module.exports.GetDeveloperPayload.Request = GetDeveloperPayload.Request
module.exports.GetDeveloperPayload.RequestKey = GetDeveloperPayload.RequestKey
module.exports.GetDeveloperPayload.Response = GetDeveloperPayload.Response
module.exports.GetDeveloperPayload.ResponseKey = GetDeveloperPayload.ResponseKey
module.exports.SellItem.Request = SellItem.Request
module.exports.SellItem.RequestKey = SellItem.RequestKey
module.exports.SellItem.Response = SellItem.Response
module.exports.SellItem.ResponseKey = SellItem.ResponseKey
module.exports.BuyShopItem.Request = BuyShopItem.Request
module.exports.BuyShopItem.RequestKey = BuyShopItem.RequestKey
module.exports.BuyShopItem.Response = BuyShopItem.Response
module.exports.BuyShopItem.ResponseKey = BuyShopItem.ResponseKey
module.exports.RequestShopList.Request = RequestShopList.Request
module.exports.RequestShopList.RequestKey = RequestShopList.RequestKey
module.exports.RequestShopList.Response = RequestShopList.Response
module.exports.RequestShopList.ResponseKey = RequestShopList.ResponseKey
module.exports.GetShopList.Request = GetShopList.Request
module.exports.GetShopList.RequestKey = GetShopList.RequestKey
module.exports.GetShopList.Response = GetShopList.Response
module.exports.GetShopList.ResponseKey = GetShopList.ResponseKey
module.exports.BeginCampaign.Request = BeginCampaign.Request
module.exports.BeginCampaign.RequestKey = BeginCampaign.RequestKey
module.exports.BeginCampaign.Response = BeginCampaign.Response
module.exports.BeginCampaign.ResponseKey = BeginCampaign.ResponseKey
module.exports.SetEquip.Request = SetEquip.Request
module.exports.SetEquip.RequestKey = SetEquip.RequestKey
module.exports.SetEquip.Response = SetEquip.Response
module.exports.SetEquip.ResponseKey = SetEquip.ResponseKey
module.exports.Ping.Request = Ping.Request
module.exports.Ping.RequestKey = Ping.RequestKey
module.exports.Ping.Response = Ping.Response
module.exports.Ping.ResponseKey = Ping.ResponseKey
module.exports.UpgradeHeroSkill.Request = UpgradeHeroSkill.Request
module.exports.UpgradeHeroSkill.RequestKey = UpgradeHeroSkill.RequestKey
module.exports.UpgradeHeroSkill.Response = UpgradeHeroSkill.Response
module.exports.UpgradeHeroSkill.ResponseKey = UpgradeHeroSkill.ResponseKey
module.exports.UpgradeHeroStar.Request = UpgradeHeroStar.Request
module.exports.UpgradeHeroStar.RequestKey = UpgradeHeroStar.RequestKey
module.exports.UpgradeHeroStar.Response = UpgradeHeroStar.Response
module.exports.UpgradeHeroStar.ResponseKey = UpgradeHeroStar.ResponseKey
module.exports.EndCampaign.Request = EndCampaign.Request
module.exports.EndCampaign.RequestKey = EndCampaign.RequestKey
module.exports.EndCampaign.Response = EndCampaign.Response
module.exports.EndCampaign.ResponseKey = EndCampaign.ResponseKey
module.exports.Login.Request = Login.Request
module.exports.Login.RequestKey = Login.RequestKey
module.exports.Login.Response = Login.Response
module.exports.Login.ResponseKey = Login.ResponseKey
module.exports.RewardWantedQuest.Request = RewardWantedQuest.Request
module.exports.RewardWantedQuest.RequestKey = RewardWantedQuest.RequestKey
module.exports.RewardWantedQuest.Response = RewardWantedQuest.Response
module.exports.RewardWantedQuest.ResponseKey = RewardWantedQuest.ResponseKey
module.exports.ReceiveCompletedReward.Request = ReceiveCompletedReward.Request
module.exports.ReceiveCompletedReward.RequestKey = ReceiveCompletedReward.RequestKey
module.exports.ReceiveCompletedReward.Response = ReceiveCompletedReward.Response
module.exports.ReceiveCompletedReward.ResponseKey = ReceiveCompletedReward.ResponseKey
module.exports.NWorldMap.NEventSubData.FieldBoss = NWorldMap.NEventSubData.FieldBoss
module.exports.NWorldMap.NEventSubData.FieldBossKey = NWorldMap.NEventSubData.FieldBossKey
module.exports.NWorldMap.NEventSubData.EventDungeon = NWorldMap.NEventSubData.EventDungeon
module.exports.NWorldMap.NEventSubData.EventDungeonKey = NWorldMap.NEventSubData.EventDungeonKey
module.exports.NWorldMap.NEventSubData.Excavation = NWorldMap.NEventSubData.Excavation
module.exports.NWorldMap.NEventSubData.ExcavationKey = NWorldMap.NEventSubData.ExcavationKey
module.exports.NWorldMap.NEventSubData.MapCoin = NWorldMap.NEventSubData.MapCoin
module.exports.NWorldMap.NEventSubData.MapCoinKey = NWorldMap.NEventSubData.MapCoinKey
module.exports.NWorldMap.NEventSubData.TreasureBox = NWorldMap.NEventSubData.TreasureBox
module.exports.NWorldMap.NEventSubData.TreasureBoxKey = NWorldMap.NEventSubData.TreasureBoxKey
module.exports.NWorldMap.NEventSubData.StageBuff = NWorldMap.NEventSubData.StageBuff
module.exports.NWorldMap.NEventSubData.StageBuffKey = NWorldMap.NEventSubData.StageBuffKey
module.exports.NWorldMap.NEventSubData.GuerrillaDungeon = NWorldMap.NEventSubData.GuerrillaDungeon
module.exports.NWorldMap.NEventSubData.GuerrillaDungeonKey = NWorldMap.NEventSubData.GuerrillaDungeonKey
module.exports.NWorldMap.NEventSubData.GoblinShop = NWorldMap.NEventSubData.GoblinShop
module.exports.NWorldMap.NEventSubData.GoblinShopKey = NWorldMap.NEventSubData.GoblinShopKey
module.exports.NWorldMap.NEventSubData.QuestDungeon = NWorldMap.NEventSubData.QuestDungeon
module.exports.NWorldMap.NEventSubData.QuestDungeonKey = NWorldMap.NEventSubData.QuestDungeonKey
module.exports.NWorldMap.EventData = NWorldMap.EventData
module.exports.NWorldMap.EventDataKey = NWorldMap.EventDataKey
module.exports.EPurchaseStatus = EPurchaseStatus
module.exports.EPurchaseStatusValue = EPurchaseStatusValue
module.exports.EPurchasePlatform = EPurchasePlatform
module.exports.EPurchasePlatformValue = EPurchasePlatformValue
module.exports.PayShopType = PayShopType
module.exports.PayShopTypeValue = PayShopTypeValue
module.exports.StoreShopItemType = StoreShopItemType
module.exports.StoreShopItemTypeValue = StoreShopItemTypeValue
module.exports.AchievementType = AchievementType
module.exports.AchievementTypeValue = AchievementTypeValue
module.exports.AchievementReqType = AchievementReqType
module.exports.AchievementReqTypeValue = AchievementReqTypeValue
module.exports.AchievementReqSubType = AchievementReqSubType
module.exports.AchievementReqSubTypeValue = AchievementReqSubTypeValue
module.exports.AchievementSubType = AchievementSubType
module.exports.AchievementSubTypeValue = AchievementSubTypeValue
module.exports.AchievementRewardType = AchievementRewardType
module.exports.AchievementRewardTypeValue = AchievementRewardTypeValue
module.exports.AchievementCheckType = AchievementCheckType
module.exports.AchievementCheckTypeValue = AchievementCheckTypeValue
module.exports.EquipGachaType = EquipGachaType
module.exports.EquipGachaTypeValue = EquipGachaTypeValue
module.exports.DungeonDifficultyType = DungeonDifficultyType
module.exports.DungeonDifficultyTypeValue = DungeonDifficultyTypeValue
module.exports.ChapterType = ChapterType
module.exports.ChapterTypeValue = ChapterTypeValue
module.exports.CreatureOpenType = CreatureOpenType
module.exports.CreatureOpenTypeValue = CreatureOpenTypeValue
module.exports.CreatureOpenStatusType = CreatureOpenStatusType
module.exports.CreatureOpenStatusTypeValue = CreatureOpenStatusTypeValue
module.exports.CreatureRaceType = CreatureRaceType
module.exports.CreatureRaceTypeValue = CreatureRaceTypeValue
module.exports.ScenarioQuestActionType = ScenarioQuestActionType
module.exports.ScenarioQuestActionTypeValue = ScenarioQuestActionTypeValue
module.exports.AttackAttrType = AttackAttrType
module.exports.AttackAttrTypeValue = AttackAttrTypeValue
module.exports.EventTriggerCategory = EventTriggerCategory
module.exports.EventTriggerCategoryValue = EventTriggerCategoryValue
module.exports.RewardType = RewardType
module.exports.RewardTypeValue = RewardTypeValue
module.exports.CreatureTagType = CreatureTagType
module.exports.CreatureTagTypeValue = CreatureTagTypeValue
module.exports.CreatureTransformType = CreatureTransformType
module.exports.CreatureTransformTypeValue = CreatureTransformTypeValue
module.exports.ItemActionType = ItemActionType
module.exports.ItemActionTypeValue = ItemActionTypeValue
module.exports.ShopCostType = ShopCostType
module.exports.ShopCostTypeValue = ShopCostTypeValue
module.exports.TowerType = TowerType
module.exports.TowerTypeValue = TowerTypeValue
module.exports.TutorialRewardActionType = TutorialRewardActionType
module.exports.TutorialRewardActionTypeValue = TutorialRewardActionTypeValue
module.exports.LoginMethodType = LoginMethodType
module.exports.LoginMethodTypeValue = LoginMethodTypeValue
module.exports.ReplayType = ReplayType
module.exports.ReplayTypeValue = ReplayTypeValue
module.exports.NodeFunctionType = NodeFunctionType
module.exports.NodeFunctionTypeValue = NodeFunctionTypeValue
module.exports.ItemType = ItemType
module.exports.ItemTypeValue = ItemTypeValue
module.exports.EquipPartType = EquipPartType
module.exports.EquipPartTypeValue = EquipPartTypeValue
module.exports.StatType = StatType
module.exports.StatTypeValue = StatTypeValue
module.exports.StaminaType = StaminaType
module.exports.StaminaTypeValue = StaminaTypeValue
module.exports.NWorldMap.EventTriggerType = NWorldMap.EventTriggerType
module.exports.NWorldMap.EventTriggerTypeValue = NWorldMap.EventTriggerTypeValue
module.exports.NWorldMap.EventType = NWorldMap.EventType
module.exports.NWorldMap.EventTypeValue = NWorldMap.EventTypeValue
module.exports.TeamType = TeamType
module.exports.TeamTypeValue = TeamTypeValue
module.exports.EventBonusType = EventBonusType
module.exports.EventBonusTypeValue = EventBonusTypeValue
module.exports.NMessage.LoginResType = NMessage.LoginResType
module.exports.NMessage.LoginResTypeValue = NMessage.LoginResTypeValue
module.exports.NMessage.ChangeGuildResType = NMessage.ChangeGuildResType
module.exports.NMessage.ChangeGuildResTypeValue = NMessage.ChangeGuildResTypeValue
module.exports.NMessage.ChangeFriendResType = NMessage.ChangeFriendResType
module.exports.NMessage.ChangeFriendResTypeValue = NMessage.ChangeFriendResTypeValue
module.exports.MessageGroupType = MessageGroupType
module.exports.MessageGroupTypeValue = MessageGroupTypeValue
module.exports.NMessage.MessageResType = NMessage.MessageResType
module.exports.NMessage.MessageResTypeValue = NMessage.MessageResTypeValue
module.exports.NMessage.ClearMessageResType = NMessage.ClearMessageResType
module.exports.NMessage.ClearMessageResTypeValue = NMessage.ClearMessageResTypeValue
module.exports.NMessage.PingResType = NMessage.PingResType
module.exports.NMessage.PingResTypeValue = NMessage.PingResTypeValue
module.exports.B2G_SetAbuser.ResultType = B2G_SetAbuser.ResultType
module.exports.B2G_SetAbuser.ResultTypeValue = B2G_SetAbuser.ResultTypeValue
module.exports.BaseResultType = BaseResultType
module.exports.BaseResultTypeValue = BaseResultTypeValue
module.exports.B2G_GetHeroInfo.ResultType = B2G_GetHeroInfo.ResultType
module.exports.B2G_GetHeroInfo.ResultTypeValue = B2G_GetHeroInfo.ResultTypeValue
module.exports.GMT2G_Complete_Billing.ResultType = GMT2G_Complete_Billing.ResultType
module.exports.GMT2G_Complete_Billing.ResultTypeValue = GMT2G_Complete_Billing.ResultTypeValue
module.exports.M2G_ReloadPlayerBattle.ResultType = M2G_ReloadPlayerBattle.ResultType
module.exports.M2G_ReloadPlayerBattle.ResultTypeValue = M2G_ReloadPlayerBattle.ResultTypeValue
module.exports.P2G_BuyCashShopItem.ResultType = P2G_BuyCashShopItem.ResultType
module.exports.P2G_BuyCashShopItem.ResultTypeValue = P2G_BuyCashShopItem.ResultTypeValue
module.exports.P2G_GetCashShopItems.ResultType = P2G_GetCashShopItems.ResultType
module.exports.P2G_GetCashShopItems.ResultTypeValue = P2G_GetCashShopItems.ResultTypeValue
module.exports.B2G_SetCampaignResult.ResultType = B2G_SetCampaignResult.ResultType
module.exports.B2G_SetCampaignResult.ResultTypeValue = B2G_SetCampaignResult.ResultTypeValue
module.exports.B2M_GetMatchInfo.ResultType = B2M_GetMatchInfo.ResultType
module.exports.B2M_GetMatchInfo.ResultTypeValue = B2M_GetMatchInfo.ResultTypeValue
module.exports.BattleType = BattleType
module.exports.BattleTypeValue = BattleTypeValue
module.exports.B2M_Ping.ResultType = B2M_Ping.ResultType
module.exports.B2M_Ping.ResultTypeValue = B2M_Ping.ResultTypeValue
module.exports.B2G_SetMatchResult.ResultType = B2G_SetMatchResult.ResultType
module.exports.B2G_SetMatchResult.ResultTypeValue = B2G_SetMatchResult.ResultTypeValue
module.exports.BattleLoginRes.ResultType = BattleLoginRes.ResultType
module.exports.BattleLoginRes.ResultTypeValue = BattleLoginRes.ResultTypeValue
module.exports.BattleEnterRes.ResultType = BattleEnterRes.ResultType
module.exports.BattleEnterRes.ResultTypeValue = BattleEnterRes.ResultTypeValue
module.exports.BattleStartRes.ResultType = BattleStartRes.ResultType
module.exports.BattleStartRes.ResultTypeValue = BattleStartRes.ResultTypeValue
module.exports.BattleEndNot.ReasonType = BattleEndNot.ReasonType
module.exports.BattleEndNot.ReasonTypeValue = BattleEndNot.ReasonTypeValue
module.exports.BaseCreatureActionRes.ResultType = BaseCreatureActionRes.ResultType
module.exports.BaseCreatureActionRes.ResultTypeValue = BaseCreatureActionRes.ResultTypeValue
module.exports.UseSkillRes.ResultType = UseSkillRes.ResultType
module.exports.UseSkillRes.ResultTypeValue = UseSkillRes.ResultTypeValue
module.exports.PingRes.ResultType = PingRes.ResultType
module.exports.PingRes.ResultTypeValue = PingRes.ResultTypeValue
module.exports.G2G_RejectFriend.ResultType = G2G_RejectFriend.ResultType
module.exports.G2G_RejectFriend.ResultTypeValue = G2G_RejectFriend.ResultTypeValue
module.exports.G2G_DropUser.ResultType = G2G_DropUser.ResultType
module.exports.G2G_DropUser.ResultTypeValue = G2G_DropUser.ResultTypeValue
module.exports.G2M_SyncWaiter.ResultType = G2M_SyncWaiter.ResultType
module.exports.G2M_SyncWaiter.ResultTypeValue = G2M_SyncWaiter.ResultTypeValue
module.exports.GetAchievements.ResultType = GetAchievements.ResultType
module.exports.GetAchievements.ResultTypeValue = GetAchievements.ResultTypeValue
module.exports.RewardAchievement.ResultType = RewardAchievement.ResultType
module.exports.RewardAchievement.ResultTypeValue = RewardAchievement.ResultTypeValue
module.exports.Cheat.ResultType = Cheat.ResultType
module.exports.Cheat.ResultTypeValue = Cheat.ResultTypeValue
module.exports.CompareDbSchema.ResultType = CompareDbSchema.ResultType
module.exports.CompareDbSchema.ResultTypeValue = CompareDbSchema.ResultTypeValue
module.exports.DumpDbSchema.ResultType = DumpDbSchema.ResultType
module.exports.DumpDbSchema.ResultTypeValue = DumpDbSchema.ResultTypeValue
module.exports.GetAttendanceReward.ResultType = GetAttendanceReward.ResultType
module.exports.GetAttendanceReward.ResultTypeValue = GetAttendanceReward.ResultTypeValue
module.exports.AbandonMultiplayReward.ResultType = AbandonMultiplayReward.ResultType
module.exports.AbandonMultiplayReward.ResultTypeValue = AbandonMultiplayReward.ResultTypeValue
module.exports.RewardClearChapter.ResultType = RewardClearChapter.ResultType
module.exports.RewardClearChapter.ResultTypeValue = RewardClearChapter.ResultTypeValue
module.exports.GetTowerNpcInfo.ResultType = GetTowerNpcInfo.ResultType
module.exports.GetTowerNpcInfo.ResultTypeValue = GetTowerNpcInfo.ResultTypeValue
module.exports.GetTowerHeroInfo.ResultType = GetTowerHeroInfo.ResultType
module.exports.GetTowerHeroInfo.ResultTypeValue = GetTowerHeroInfo.ResultTypeValue
module.exports.ResetTower.ResultType = ResetTower.ResultType
module.exports.ResetTower.ResultTypeValue = ResetTower.ResultTypeValue
module.exports.SaveIAPurchaseInfo.ResultType = SaveIAPurchaseInfo.ResultType
module.exports.SaveIAPurchaseInfo.ResultTypeValue = SaveIAPurchaseInfo.ResultTypeValue
module.exports.GetFreeEquipGachaInfo.ResultType = GetFreeEquipGachaInfo.ResultType
module.exports.GetFreeEquipGachaInfo.ResultTypeValue = GetFreeEquipGachaInfo.ResultTypeValue
module.exports.ExecEquipGacha.ResultType = ExecEquipGacha.ResultType
module.exports.ExecEquipGacha.ResultTypeValue = ExecEquipGacha.ResultTypeValue
module.exports.UpgradeEquipOption.ResultType = UpgradeEquipOption.ResultType
module.exports.UpgradeEquipOption.ResultTypeValue = UpgradeEquipOption.ResultTypeValue
module.exports.ExtendEquip.ResultType = ExtendEquip.ResultType
module.exports.ExtendEquip.ResultTypeValue = ExtendEquip.ResultTypeValue
module.exports.EnhanceHero.ResultType = EnhanceHero.ResultType
module.exports.EnhanceHero.ResultTypeValue = EnhanceHero.ResultTypeValue
module.exports.UsePackageItem.ResultType = UsePackageItem.ResultType
module.exports.UsePackageItem.ResultTypeValue = UsePackageItem.ResultTypeValue
module.exports.UseBoosterItem.ResultType = UseBoosterItem.ResultType
module.exports.UseBoosterItem.ResultTypeValue = UseBoosterItem.ResultTypeValue
module.exports.UseHeroSelectItem.ResultType = UseHeroSelectItem.ResultType
module.exports.UseHeroSelectItem.ResultTypeValue = UseHeroSelectItem.ResultTypeValue
module.exports.EnterLobby.ResultType = EnterLobby.ResultType
module.exports.EnterLobby.ResultTypeValue = EnterLobby.ResultTypeValue
module.exports.VisitDungeon.ResultType = VisitDungeon.ResultType
module.exports.VisitDungeon.ResultTypeValue = VisitDungeon.ResultTypeValue
module.exports.GetMultiplayReward.ResultType = GetMultiplayReward.ResultType
module.exports.GetMultiplayReward.ResultTypeValue = GetMultiplayReward.ResultTypeValue
module.exports.ApplyForMultiplayReward.ResultType = ApplyForMultiplayReward.ResultType
module.exports.ApplyForMultiplayReward.ResultTypeValue = ApplyForMultiplayReward.ResultTypeValue
module.exports.GetSelectedReward.ResultType = GetSelectedReward.ResultType
module.exports.GetSelectedReward.ResultTypeValue = GetSelectedReward.ResultTypeValue
module.exports.GetKeyDecoder.ResultType = GetKeyDecoder.ResultType
module.exports.GetKeyDecoder.ResultTypeValue = GetKeyDecoder.ResultTypeValue
module.exports.RechargeUndergroundPrisonKey.ResultType = RechargeUndergroundPrisonKey.ResultType
module.exports.RechargeUndergroundPrisonKey.ResultTypeValue = RechargeUndergroundPrisonKey.ResultTypeValue
module.exports.GetDOWDungeonInfo.ResultType = GetDOWDungeonInfo.ResultType
module.exports.GetDOWDungeonInfo.ResultTypeValue = GetDOWDungeonInfo.ResultTypeValue
module.exports.AwakenEquip.ResultType = AwakenEquip.ResultType
module.exports.AwakenEquip.ResultTypeValue = AwakenEquip.ResultTypeValue
module.exports.BreakEquip.ResultType = BreakEquip.ResultType
module.exports.BreakEquip.ResultTypeValue = BreakEquip.ResultTypeValue
module.exports.UnsetRune.ResultType = UnsetRune.ResultType
module.exports.UnsetRune.ResultTypeValue = UnsetRune.ResultTypeValue
module.exports.SetRune.ResultType = SetRune.ResultType
module.exports.SetRune.ResultTypeValue = SetRune.ResultTypeValue
module.exports.UnsetEquip.ResultType = UnsetEquip.ResultType
module.exports.UnsetEquip.ResultTypeValue = UnsetEquip.ResultTypeValue
module.exports.UnlockEquip.ResultType = UnlockEquip.ResultType
module.exports.UnlockEquip.ResultTypeValue = UnlockEquip.ResultTypeValue
module.exports.SellEquip.ResultType = SellEquip.ResultType
module.exports.SellEquip.ResultTypeValue = SellEquip.ResultTypeValue
module.exports.SearchFriend.ResultType = SearchFriend.ResultType
module.exports.SearchFriend.ResultTypeValue = SearchFriend.ResultTypeValue
module.exports.RejectFriend.ResultType = RejectFriend.ResultType
module.exports.RejectFriend.ResultTypeValue = RejectFriend.ResultTypeValue
module.exports.RequestFriend.ResultType = RequestFriend.ResultType
module.exports.RequestFriend.ResultTypeValue = RequestFriend.ResultTypeValue
module.exports.GetGuildAllMercenaries.ResultType = GetGuildAllMercenaries.ResultType
module.exports.GetGuildAllMercenaries.ResultTypeValue = GetGuildAllMercenaries.ResultTypeValue
module.exports.CancelRequestJoinGuild.ResultType = CancelRequestJoinGuild.ResultType
module.exports.CancelRequestJoinGuild.ResultTypeValue = CancelRequestJoinGuild.ResultTypeValue
module.exports.GetJoinRequestedGuilds.ResultType = GetJoinRequestedGuilds.ResultType
module.exports.GetJoinRequestedGuilds.ResultTypeValue = GetJoinRequestedGuilds.ResultTypeValue
module.exports.CheckGuildName.ResultType = CheckGuildName.ResultType
module.exports.CheckGuildName.ResultTypeValue = CheckGuildName.ResultTypeValue
module.exports.WithdrawGuild.ResultType = WithdrawGuild.ResultType
module.exports.WithdrawGuild.ResultTypeValue = WithdrawGuild.ResultTypeValue
module.exports.RequestJoinGuild.ResultType = RequestJoinGuild.ResultType
module.exports.RequestJoinGuild.ResultTypeValue = RequestJoinGuild.ResultTypeValue
module.exports.RejectJoinRequest.ResultType = RejectJoinRequest.ResultType
module.exports.RejectJoinRequest.ResultTypeValue = RejectJoinRequest.ResultTypeValue
module.exports.GetGuildBasicInfo.ResultType = GetGuildBasicInfo.ResultType
module.exports.GetGuildBasicInfo.ResultTypeValue = GetGuildBasicInfo.ResultTypeValue
module.exports.ApplyGuildSettingChange.ResultType = ApplyGuildSettingChange.ResultType
module.exports.ApplyGuildSettingChange.ResultTypeValue = ApplyGuildSettingChange.ResultTypeValue
module.exports.AcceptJoinRequest.ResultType = AcceptJoinRequest.ResultType
module.exports.AcceptJoinRequest.ResultTypeValue = AcceptJoinRequest.ResultTypeValue
module.exports.DelegateMaster.ResultType = DelegateMaster.ResultType
module.exports.DelegateMaster.ResultTypeValue = DelegateMaster.ResultTypeValue
module.exports.DestroyGuild.ResultType = DestroyGuild.ResultType
module.exports.DestroyGuild.ResultTypeValue = DestroyGuild.ResultTypeValue
module.exports.CreateGuild.ResultType = CreateGuild.ResultType
module.exports.CreateGuild.ResultTypeValue = CreateGuild.ResultTypeValue
module.exports.GetGuildList.ResultType = GetGuildList.ResultType
module.exports.GetGuildList.ResultTypeValue = GetGuildList.ResultTypeValue
module.exports.GetJoinRequestPlayers.ResultType = GetJoinRequestPlayers.ResultType
module.exports.GetJoinRequestPlayers.ResultTypeValue = GetJoinRequestPlayers.ResultTypeValue
module.exports.SearchGuild.ResultType = SearchGuild.ResultType
module.exports.SearchGuild.ResultTypeValue = SearchGuild.ResultTypeValue
module.exports.SetGuildAdminRank.ResultType = SetGuildAdminRank.ResultType
module.exports.SetGuildAdminRank.ResultTypeValue = SetGuildAdminRank.ResultTypeValue
module.exports.UnregisterMercenary.ResultType = UnregisterMercenary.ResultType
module.exports.UnregisterMercenary.ResultTypeValue = UnregisterMercenary.ResultTypeValue
module.exports.RegisterMercenary.ResultType = RegisterMercenary.ResultType
module.exports.RegisterMercenary.ResultTypeValue = RegisterMercenary.ResultTypeValue
module.exports.KickGuildMember.ResultType = KickGuildMember.ResultType
module.exports.KickGuildMember.ResultTypeValue = KickGuildMember.ResultTypeValue
module.exports.LearnHeroSkill.ResultType = LearnHeroSkill.ResultType
module.exports.LearnHeroSkill.ResultTypeValue = LearnHeroSkill.ResultTypeValue
module.exports.ExtendHeroSkill.ResultType = ExtendHeroSkill.ResultType
module.exports.ExtendHeroSkill.ResultTypeValue = ExtendHeroSkill.ResultTypeValue
module.exports.PurifyHero.ResultType = PurifyHero.ResultType
module.exports.PurifyHero.ResultTypeValue = PurifyHero.ResultTypeValue
module.exports.UseRecipeItem.ResultType = UseRecipeItem.ResultType
module.exports.UseRecipeItem.ResultTypeValue = UseRecipeItem.ResultTypeValue
module.exports.UsePotionItem.ResultType = UsePotionItem.ResultType
module.exports.UsePotionItem.ResultTypeValue = UsePotionItem.ResultTypeValue
module.exports.CheckNewMail.ResultType = CheckNewMail.ResultType
module.exports.CheckNewMail.ResultTypeValue = CheckNewMail.ResultTypeValue
module.exports.GetGlobalMailList.ResultType = GetGlobalMailList.ResultType
module.exports.GetGlobalMailList.ResultTypeValue = GetGlobalMailList.ResultTypeValue
module.exports.GetMailListByPage.ResultType = GetMailListByPage.ResultType
module.exports.GetMailListByPage.ResultTypeValue = GetMailListByPage.ResultTypeValue
module.exports.ReceiveAllMail.ResultType = ReceiveAllMail.ResultType
module.exports.ReceiveAllMail.ResultTypeValue = ReceiveAllMail.ResultTypeValue
module.exports.ReceiveMail.ResultType = ReceiveMail.ResultType
module.exports.ReceiveMail.ResultTypeValue = ReceiveMail.ResultTypeValue
module.exports.GetMailList.ResultType = GetMailList.ResultType
module.exports.GetMailList.ResultTypeValue = GetMailList.ResultTypeValue
module.exports.GetSeasonInfo.ResultType = GetSeasonInfo.ResultType
module.exports.GetSeasonInfo.ResultTypeValue = GetSeasonInfo.ResultTypeValue
module.exports.MatchTierType = MatchTierType
module.exports.MatchTierTypeValue = MatchTierTypeValue
module.exports.GetMatchRank.ResultType = GetMatchRank.ResultType
module.exports.GetMatchRank.ResultTypeValue = GetMatchRank.ResultTypeValue
module.exports.GetMatchRanker.ResultType = GetMatchRanker.ResultType
module.exports.GetMatchRanker.ResultTypeValue = GetMatchRanker.ResultTypeValue
module.exports.GetMatchResult.ResultType = GetMatchResult.ResultType
module.exports.GetMatchResult.ResultTypeValue = GetMatchResult.ResultTypeValue
module.exports.SetOfflineMatchResult.ResultType = SetOfflineMatchResult.ResultType
module.exports.SetOfflineMatchResult.ResultTypeValue = SetOfflineMatchResult.ResultTypeValue
module.exports.UseCoupon.ResultType = UseCoupon.ResultType
module.exports.UseCoupon.ResultTypeValue = UseCoupon.ResultTypeValue
module.exports.GetReplay.ResultType = GetReplay.ResultType
module.exports.GetReplay.ResultTypeValue = GetReplay.ResultTypeValue
module.exports.SaveReplay.ResultType = SaveReplay.ResultType
module.exports.SaveReplay.ResultTypeValue = SaveReplay.ResultTypeValue
module.exports.GetReplayList.ResultType = GetReplayList.ResultType
module.exports.GetReplayList.ResultTypeValue = GetReplayList.ResultTypeValue
module.exports.CompleteScenarioQuest.ResultType = CompleteScenarioQuest.ResultType
module.exports.CompleteScenarioQuest.ResultTypeValue = CompleteScenarioQuest.ResultTypeValue
module.exports.BuyCashShopItem.ResultType = BuyCashShopItem.ResultType
module.exports.BuyCashShopItem.ResultTypeValue = BuyCashShopItem.ResultTypeValue
module.exports.BuyHero.ResultType = BuyHero.ResultType
module.exports.BuyHero.ResultTypeValue = BuyHero.ResultTypeValue
module.exports.BuyPayShopItem.ResultType = BuyPayShopItem.ResultType
module.exports.BuyPayShopItem.ResultTypeValue = BuyPayShopItem.ResultTypeValue
module.exports.GetPayShopItems.ResultType = GetPayShopItems.ResultType
module.exports.GetPayShopItems.ResultTypeValue = GetPayShopItems.ResultTypeValue
module.exports.GetStoreItemList.ResultType = GetStoreItemList.ResultType
module.exports.GetStoreItemList.ResultTypeValue = GetStoreItemList.ResultTypeValue
module.exports.GetAwakeMaterialChallenge.ResultType = GetAwakeMaterialChallenge.ResultType
module.exports.GetAwakeMaterialChallenge.ResultTypeValue = GetAwakeMaterialChallenge.ResultTypeValue
module.exports.CompleteTutorial.ResultType = CompleteTutorial.ResultType
module.exports.CompleteTutorial.ResultTypeValue = CompleteTutorial.ResultTypeValue
module.exports.BuyStamina.ResultType = BuyStamina.ResultType
module.exports.BuyStamina.ResultTypeValue = BuyStamina.ResultTypeValue
module.exports.GetCertificate.ResultType = GetCertificate.ResultType
module.exports.GetCertificate.ResultTypeValue = GetCertificate.ResultTypeValue
module.exports.DumpUser.ResultType = DumpUser.ResultType
module.exports.DumpUser.ResultTypeValue = DumpUser.ResultTypeValue
module.exports.GetStamina.ResultType = GetStamina.ResultType
module.exports.GetStamina.ResultTypeValue = GetStamina.ResultTypeValue
module.exports.GetLoginId.ResultType = GetLoginId.ResultType
module.exports.GetLoginId.ResultTypeValue = GetLoginId.ResultTypeValue
module.exports.LinkAccount.ResultType = LinkAccount.ResultType
module.exports.LinkAccount.ResultTypeValue = LinkAccount.ResultTypeValue
module.exports.InitDeviceId.ResultType = InitDeviceId.ResultType
module.exports.InitDeviceId.ResultTypeValue = InitDeviceId.ResultTypeValue
module.exports.QuerySession.ResultType = QuerySession.ResultType
module.exports.QuerySession.ResultTypeValue = QuerySession.ResultTypeValue
module.exports.RegisterDeviceToken.ResultType = RegisterDeviceToken.ResultType
module.exports.RegisterDeviceToken.ResultTypeValue = RegisterDeviceToken.ResultTypeValue
module.exports.QueryMarketUrl.MarketType = QueryMarketUrl.MarketType
module.exports.QueryMarketUrl.MarketTypeValue = QueryMarketUrl.MarketTypeValue
module.exports.QueryMarketUrl.ResultType = QueryMarketUrl.ResultType
module.exports.QueryMarketUrl.ResultTypeValue = QueryMarketUrl.ResultTypeValue
module.exports.SignOut.ResultType = SignOut.ResultType
module.exports.SignOut.ResultTypeValue = SignOut.ResultTypeValue
module.exports.QueryNick.ResultType = QueryNick.ResultType
module.exports.QueryNick.ResultTypeValue = QueryNick.ResultTypeValue
module.exports.ChangeAvatarHero.ResultType = ChangeAvatarHero.ResultType
module.exports.ChangeAvatarHero.ResultTypeValue = ChangeAvatarHero.ResultTypeValue
module.exports.InspectUser.ResultType = InspectUser.ResultType
module.exports.InspectUser.ResultTypeValue = InspectUser.ResultTypeValue
module.exports.SearchUser.ResultType = SearchUser.ResultType
module.exports.SearchUser.ResultTypeValue = SearchUser.ResultTypeValue
module.exports.UpgradeEquip.ResultType = UpgradeEquip.ResultType
module.exports.UpgradeEquip.ResultTypeValue = UpgradeEquip.ResultTypeValue
module.exports.CancelMatch.ResultType = CancelMatch.ResultType
module.exports.CancelMatch.ResultTypeValue = CancelMatch.ResultTypeValue
module.exports.WaitMatch.ResultType = WaitMatch.ResultType
module.exports.WaitMatch.ResultTypeValue = WaitMatch.ResultTypeValue
module.exports.RegisterMatch.ResultType = RegisterMatch.ResultType
module.exports.RegisterMatch.ResultTypeValue = RegisterMatch.ResultTypeValue
module.exports.CheckConsume.ResultType = CheckConsume.ResultType
module.exports.CheckConsume.ResultTypeValue = CheckConsume.ResultTypeValue
module.exports.CheckPurchase.ResultType = CheckPurchase.ResultType
module.exports.CheckPurchase.ResultTypeValue = CheckPurchase.ResultTypeValue
module.exports.ExecIOSPayment.ResultType = ExecIOSPayment.ResultType
module.exports.ExecIOSPayment.ResultTypeValue = ExecIOSPayment.ResultTypeValue
module.exports.GetDeveloperPayload.ResultType = GetDeveloperPayload.ResultType
module.exports.GetDeveloperPayload.ResultTypeValue = GetDeveloperPayload.ResultTypeValue
module.exports.SellItem.ResultType = SellItem.ResultType
module.exports.SellItem.ResultTypeValue = SellItem.ResultTypeValue
module.exports.BuyShopItem.ResultType = BuyShopItem.ResultType
module.exports.BuyShopItem.ResultTypeValue = BuyShopItem.ResultTypeValue
module.exports.RequestShopList.ResultType = RequestShopList.ResultType
module.exports.RequestShopList.ResultTypeValue = RequestShopList.ResultTypeValue
module.exports.GetShopList.ResultType = GetShopList.ResultType
module.exports.GetShopList.ResultTypeValue = GetShopList.ResultTypeValue
module.exports.BeginCampaign.ResultType = BeginCampaign.ResultType
module.exports.BeginCampaign.ResultTypeValue = BeginCampaign.ResultTypeValue
module.exports.SetEquip.ResultType = SetEquip.ResultType
module.exports.SetEquip.ResultTypeValue = SetEquip.ResultTypeValue
module.exports.Ping.ResultType = Ping.ResultType
module.exports.Ping.ResultTypeValue = Ping.ResultTypeValue
module.exports.UpgradeHeroSkill.ResultType = UpgradeHeroSkill.ResultType
module.exports.UpgradeHeroSkill.ResultTypeValue = UpgradeHeroSkill.ResultTypeValue
module.exports.UpgradeHeroStar.ResultType = UpgradeHeroStar.ResultType
module.exports.UpgradeHeroStar.ResultTypeValue = UpgradeHeroStar.ResultTypeValue
module.exports.EndCampaign.ResultType = EndCampaign.ResultType
module.exports.EndCampaign.ResultTypeValue = EndCampaign.ResultTypeValue
module.exports.Login.ResultType = Login.ResultType
module.exports.Login.ResultTypeValue = Login.ResultTypeValue
module.exports.RewardWantedQuest.ResultType = RewardWantedQuest.ResultType
module.exports.RewardWantedQuest.ResultTypeValue = RewardWantedQuest.ResultTypeValue
module.exports.ReceiveCompletedReward.ResultType = ReceiveCompletedReward.ResultType
module.exports.ReceiveCompletedReward.ResultTypeValue = ReceiveCompletedReward.ResultTypeValue
