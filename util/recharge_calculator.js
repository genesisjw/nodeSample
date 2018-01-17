// 리젠/충전 계산기
// 계산에 필요한 멤버
// 리젠시 최대 리젠 가능한 수치 : maxrecharge : Number
// 리젠 필요한 시간(단위 : 초) : rechargetime : Number
var time_helper = require(__base + 'util/time_helper.js');
var log = require(__base + 'util/log');
var typeHelper = require(__base + 'util/type_helper');
// 최근 충전된 수치와 최근 충전한 시간을 받아서 
// 다음 정보 리턴
// - 최종 수치
// - 최종 충전된 시간
// - 충전된 수치
function CalculateRecharge(MaxRecharge, RechargeTime, CurRecharged, LastRechargedTime, AddRecharge) {
    var TotalRecharged = 0;
    var Recharged = 0;
    var CurLastRechargedTime = '';
    
    var RechargeCount = 1;
    
    if (typeHelper.IsUndefined(AddRecharge) == false)
        RechargeCount += Math.floor(RechargeCount * AddRecharge);
    
    var now = time_helper.toDateStringNow();
    var remain_ms = Date.parse(now) - Date.parse(LastRechargedTime);
    
    if (remain_ms < 0) {
        log.error('remain_ms is negative. check bug or if someone changed server local time. set recharge to 0');
        var CurRechargedInfo = {};
        CurRechargedInfo.TotalRecharged = CurRecharged;
        CurRechargedInfo.Recharged = 0;
        CurRechargedInfo.CurLastRechargedTime = CurLastRechargedTime;
        return CurRechargedInfo;
    }

    Recharged = parseInt((remain_ms * 0.001) / RechargeTime) * RechargeCount;

    if (MaxRecharge > 0) {
        if (Number(CurRecharged) >= MaxRecharge) {
            TotalRecharged = CurRecharged;
        } else {
            TotalRecharged = Number(CurRecharged) + Recharged;
            if (TotalRecharged < MaxRecharge) {
                if (Recharged > 0) {
                    var curTime = new Date();
                    CurLastRechargedTime = time_helper.toDateString(new Date(curTime.getTime() - (remain_ms % (RechargeTime * 1000))));
                } else
                    CurLastRechargedTime = LastRechargedTime;
            } else {
                TotalRecharged = MaxRecharge;
            }
        }
    } else {
        // MaxRecharge가 0인 경우 무한 충전으로 판단한다.
        TotalRecharged = Number(CurRecharged) + Recharged;
        var curTime = new Date();
        CurLastRechargedTime = time_helper.toDateString(new Date(curTime.getTime() - (remain_ms % (RechargeTime * 1000))));
    }

    var CurRechargedInfo = {};

    CurRechargedInfo.TotalRecharged = TotalRecharged;
    CurRechargedInfo.Recharged = Recharged;
    CurRechargedInfo.CurLastRechargedTime = CurLastRechargedTime;
    
    log.debug(CurRechargedInfo);

    return CurRechargedInfo;
}

module.exports.CalculateRecharge = CalculateRecharge;
