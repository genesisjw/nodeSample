var moment = require('moment');

module.exports = new function () {
    
    this.DateTimeFormat = 'YYYY-MM-DD HH:mm:ss';
    
    this.toDateString = function (date) {
        if (!date) {
            return '';
        }
        return moment(date).utc().format(this.DateTimeFormat);
    }
    
    this.toDateStringNow = function () {
        return this.toDateString(new Date());
    }
    
    this.toLocalDateStringNow = function () {
        var utcTime = moment.utc().format(this.DateTimeFormat);
        var localTime = moment.utc(utcTime).toDate();
        return moment(localTime).format(this.DateTimeFormat);
    }
    
    // 현재 날짜로부터 days 날 이후 또는 이전의 시각을 얻는다.
    // days 가 양수인경우 미래, 음수인 경우 과거의 시각을 얻는다.
    this.toDateStringFromNowDay = function (days) {
        var d = new Date();
        d.setHours(d.getHours() + (24 * days));
        return this.toDateString(d);
    }
    
    // CoolTime -> 대기시간 : 초
    // LastSpottedTime -> 최근에 대기시간을 촉발한 시간 : String 
    // 간단하다. 현재 시간 기준으로 CoolTime을 지났는지 판단한다.
    this.CoolTimeElapsed = function (LastSpottedTime, CoolTime) {
        var now = moment.utc();
        var lastSpottedTime = moment.utc(LastSpottedTime);
        var elapsed_sec = now.diff(lastSpottedTime, 'seconds');
        
        if (elapsed_sec > CoolTime)
            return true;
        
        return false;
    }
    
    // MySQL에서 Date Object는 시간은 UTC + 0으로 기록되지만
    // MySQL에서 SELECT해서 받아오면 Server Local Time로 가져오게 되어 있으므로
    // UTC 제거한 스트링만 리턴하면 된다. moment 사용으로 변경 처리
    this.ConvertDBDateToString = function (dbDate) {
        if (dbDate instanceof Date === false)
            return dbDate;      // 그냥 돌려줘...
        
        return moment(dbDate).format(this.DateTimeFormat);
    }
    
    // 현재시간 - strDate 의 값를 얻는다.
    // strDate 가 미래이면 음수 리턴.
    this.GetTimeDiffFromNow = function (unit, strDate) {
        var now = this.toDateStringNow();
        return this.GetTimeDiff(unit, now, strDate);
    }
    
    // strDate1 - strDate2 의 값를 얻는다.
    this.GetTimeDiff = function (unit, strDate1, strDate2) {
        var date1 = moment.utc(strDate1, this.DateTimeFormat);
        var date2 = moment.utc(strDate2, this.DateTimeFormat);
        
        return date1.diff(date2, unit);
    }
    
    this.TimeAddMilliSecond = function (strDate, amount) {
        var date = moment.utc(strDate);
        date.add(amount, 'ms');
        
        return date.format(this.DateTimeFormat);
    }
    
    this.TimeAddSecond = function (strDate, amount) {
        var date = moment.utc(strDate);
        date.add(amount, 's');
        
        return date.format(this.DateTimeFormat);
    }
    
    this.TimeAddHour = function (strDate, amount) {
        var date = moment.utc(strDate);
        date.add(amount, 'h');
        
        return date.format(this.DateTimeFormat);
    }
    
    // UTC + 0에다가 보정치를 적용하고 요일 숫자(0 ~ 6)을 구한다.
    this.GetDOW = function (UTCOffsetHour) {
        if (typeof UTCOffsetHour === 'undefined')
            UTCOffsetHour = 0;
        
        var UTCNow = moment.utc();
        UTCNow.add(UTCOffsetHour, 'h');
        //console.log(UTCNow.toString());
        return UTCNow.day();
    }
    
    // UTC + 0 시간 기준으로 보정한 후에 날짜가 바뀌었는지 확인한다.
    this.DayChanged = function (UTCOffsetHour, time) {
        
        var UTCNow = moment.utc();
        UTCNow.add(UTCOffsetHour, 'h');
        
        var date = moment.utc(time, this.DateTimeFormat);
        date.add(UTCOffsetHour, 'h');
        
        UTCNow.set({ 'hour': 0, 'minutes': 0, 'seconds': 0 });
        date.set({ 'hour': 0, 'minutes': 0, 'seconds': 0 });
        
        return UTCNow.diff(date, 'd') != 0 ? true : false;
    }
    
    //  UTC + 0 시간 기준으로 보정한 후에 달이 바뀌었는지 확인한다.
    this.MonthElapsed = function (UTCOffsetHour, time) {
        var UTCNow = moment.utc();
        UTCNow.add(UTCOffsetHour, 'h');
        
        var date = moment.utc(time, this.DateTimeFormat);
        date.add(UTCOffsetHour, 'h');
        
        var NowYear = UTCNow.year();
        var NowMonth = UTCNow.month();
        
        var Year = date.year();
        var Month = date.month();
        
        return (NowYear > Year || NowMonth > Month);
    }
    
    // Server Local Time 기준으로 맞춘다. 
    // moment.utc()로 하면 UTC 날짜가 남아 원래 날짜보다 하루 밀린 시간이 나오는 문제 발생해서 수정함.
    // 이건 태국에서는 운좋게도 발생하지 않았던 문제.
    this.GetUTCOffsetTime = function (Hour, UTCOffsetHour) {
        var Time = moment();        
        Time.set({ 'hour' : Hour - UTCOffsetHour, 'minutes' : 0, 'seconds' : 0 });
        return Time.format(this.DateTimeFormat);
    }
    
    // 주간 단위의 리셋 관련 판단 목적
    // 주어진 리셋시간과 리셋요일
    // 최근 리셋 시간을 가지고 
    // "다음 리셋 시간"을 구한다음
    // 현재 시간을 기준으로 "다음 리셋 시간"이 지났는지를 판단한다.
    // DOW : 0은 일요일, 6은 토요일
    this.ResetWeekDayHourElapsed = function (ResetDOW, ResetHourLocal, UTCOffsetHour, LastResetTime)
    {
        var CorrectedUTCNow = moment.utc().add(UTCOffsetHour, 'h');
        var CorrectedUTCLastResetTime = moment.utc(LastResetTime, this.DateTimeFormat).add(UTCOffsetHour, 'h');

        var LastResetDOW = CorrectedUTCLastResetTime.day();
        
        //console.log('LastResetDOW = ' + LastResetDOW)
        
        var NextResetTime = null;

        if (LastResetDOW < ResetDOW)
            NextResetTime = CorrectedUTCLastResetTime.day(ResetDOW).hour(ResetHourLocal).minute(0).second(0);
        else
            NextResetTime = CorrectedUTCLastResetTime.day(ResetDOW + 7).hour(ResetHourLocal).minute(0).second(0);
        
        //console.log('NextResetTime = ' + NextResetTime.toString());

        return CorrectedUTCNow.diff(NextResetTime, 'second') >= 0 ? true : false;
    }
    
    // 리셋 시간이 지났는지를 판단한다.(일일 리셋 시간 판단)
    this.ResetHourElapsed = function (DailyResetHourLocal, UTCOffsetHour, LastResetTime) {
        // 전부 UTC + 0 시간으로 맞춘다.
        // 1. 현재 시간과 오늘 리셋 시간을 비교한다.
        // 1-1. 현재 시간이 오늘 리셋 시간이 아직 아니면
        // 1-1-1. 어제 리셋시간과 최근 리셋 시간을 비교해서
        // 1-1-1-1. 최근 리셋 시간이 어제 리셋시간보다 크면 Reset이 된 것이므로 필요없음.
        // 1-1-1-2. 최근 리셋 시간이 어제 리셋시간보다 작으면 Reset이 되지를 않은 것이므로 Reset 해야 됨.
        // 1-2. 현재 시간이 오늘 리셋 시간을 넘었다면
        // 1-2-1. 오늘 리셋시간과 최근 리셋 시간을 비교해서 
        // 1-2-1-1. 최근 리셋 시간이 오늘 리셋시간보다 크면 Reset이 된 것이므로 필요없음
        // 1-2-1-2. 최근 리셋 시간이 오늘 리셋시간보다 작으면 Reset이 되지를 않은 것이므로 Reset 해야 됨.
        // UTC로 리셋 시간을 보정하기
        var UTCCorrectedResetHour = DailyResetHourLocal - UTCOffsetHour;
        
        if (UTCCorrectedResetHour < 0)
            UTCCorrectedResetHour = 24 + UTCCorrectedResetHour;
        
        if (UTCCorrectedResetHour > 24)
            UTCCorrectedResetHour = UTCCorrectedResetHour - 24;

        var UTCNow = moment.utc();      // 현재 시간을 UTC로 환산하므로 어디 지역이던 동일 
        var UTCTodayResetTime = moment.utc().set({ 'hour' : UTCCorrectedResetHour, 'minutes' : 0, 'seconds' : 0 });     
        var UTCYesterdayResetTime = moment.utc().set({ 'date' : UTCTodayResetTime.get('date') - 1, 'hour' : UTCCorrectedResetHour, 'minutes' : 0, 'seconds' : 0 });
        var UTCLastResetTime = moment.utc(LastResetTime, this.DateTimeFormat);
        
        //console.log(UTCTodayResetTime.toString());
        //console.log(UTCYesterdayResetTime.toString());

        if (UTCNow.diff(UTCTodayResetTime, 'seconds') < 0) {
            if (UTCLastResetTime.diff(UTCYesterdayResetTime, 'seconds') > 0)
                return false;
            
            return true;
        }

        if (UTCLastResetTime.diff(UTCTodayResetTime, 'seconds') > 0)
            return false;
            
        return true;
    }

    // 현재 UTC 시간 기준으로 Offset 시간으로 보정된
    // 자정 시간을 가져온다.
    this.GetUTCOffsetMidnightTime = function (UTCOffsetHour) {
        return moment().utc().add(UTCOffsetHour, 'h').startOf('day').add(1, 'd').subtract(UTCOffsetHour, 'h').format(this.DateTimeFormat);
    }

    // 현재 유닉스타임스탬프를 얻는다.
    // (초단위)
    this.GetCurrentTimestamp = function () {
        var timestamp = Math.floor(Date.now() / 1000);
        return timestamp;
    }
    
    // 특정 UTC + 0 시간에 대하여 보정된 자정 시간을 가져온다.
    this.GetUTCOffsetMidnightTime2 = function (time, UTCOffsetHour) {
        var time = moment.utc(time, this.DateTimeFormat);
        return time.add(UTCOffsetHour, 'h').startOf('day').add(1, 'd').subtract(UTCOffsetHour, 'h').format(this.DateTimeFormat);
    }

}
