let date = new Date();
let currentTime = document.querySelector('[data-testid="currentUTCTime"]').innerHTML;
// dayOfWeek = new Date()
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// current of the week
document.querySelector('[data-testid= "currentDayOfTheWeek"]').innerHTML = days[date.getDay()];

// current time in milliseconds 
document.querySelector('[data-testid="currentUTCTime"]').innerHTML = date.getTime();

