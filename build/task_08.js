"use strict";
const currentTime = new Date();
var week;
(function (week) {
    week[week["sunday"] = 0] = "sunday";
    week[week["monday"] = 1] = "monday";
    week[week["tuesday"] = 2] = "tuesday";
    week[week["wednesday"] = 3] = "wednesday";
    week[week["thursday"] = 4] = "thursday";
    week[week["friday"] = 5] = "friday";
    week[week["saturday"] = 6] = "saturday";
})(week || (week = {}));
let dayOfweek = week[currentTime.getDay()];
console.log(currentTime);
console.log(dayOfweek);
