//Dates

let myDate = new Date()
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);

//let myCreatedDate = new Date(2024, 10, 27)
//let myCreatedDate = new Date("2024-11-27")
//let myCreatedDate = new Date(2024, 10, 27, 1, 56)
let myCreatedDate = new Date("11-27-2024")
//console.log(myCreatedDate);
//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000)


let newDate = new Date()
    console.log(newDate);
    
console.log (newDate.getMonth());
console.log(newDate.getDay());

//`${newDate.getDay()} and the time`

newDate.toLocaleString(`default` ,{
    weekday:"long"
})











