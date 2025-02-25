// enum
const currentTime = new Date();

enum week{
    sunday=0,
    monday=1,
    tuesday=2,
    wednesday=3,
    thursday=4,
    friday=5,
    saturday=6
}

// verifide day in the week
let dayOfweek:string = week[currentTime.getDay()];

console.log(currentTime)

console.log(dayOfweek);