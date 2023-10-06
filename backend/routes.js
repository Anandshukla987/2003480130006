const express = require("express");
const route = express.Router();
const data = require('./trains.json');

route.get('/train', (req, res) => {
    try {
        var result = []
        let currTime = new Date();
        currHour = currTime.getHours();
        currMin = currTime.getMinutes();

        currTime = currHour.toString()+":"+currMin.toString();
        console.log(currTime);

        // const [hours1, minutes1] = time1.split(':').map(Number);
        // const [hours2, minutes2] = time2.split(':').map(Number);

        // const totalMinutes1 = hours1 * 60 + minutes1;
        // const totalMinutes2 = hours2 * 60 + minutes2;

        // const differenceInMinutes = Math.abs(totalMinutes1 - totalMinutes2);

        // const hoursDifference = Math.floor(differenceInMinutes / 60);
        // const minutesDifference = differenceInMinutes % 60;


        data.forEach((item) => {
            
            let data = {
                "train" : item.trainName,
                "sleeper-seat" : {seat: item.seatsAvailable.sleeper, price: item.price.sleeper},
                "ac-seat" : {seat: item.seatsAvailable.AC, price: item.price.AC}
            }
            
            result.push(data);
        })

        console.log(result);
    }
    catch(err){
        console.log(err)
    }
})

module.exports = route;