// enum
const currentTime = new Date();

enum week{
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
}

let dayOfweek:string = week[currentTime.getDay()];

console.log(currentTime)
console.log(dayOfweek);