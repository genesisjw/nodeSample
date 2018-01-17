function GetPlunderSearchGold(PlunderSearch) {
    if (Number(PlunderSearch) <= 0)
        return 0;

    switch (Number(PlunderSearch)) {
        case 1:
            return 100;
        case 2:
            return 200;
        case 3:
            return 500;
        case 4:
            return 1000;
        case 5:
            return 1500;
    }

    if (Number(PlunderSearch) >= 6)
        return 2000;
}

module.exports.GetPlunderSearchGold = GetPlunderSearchGold;