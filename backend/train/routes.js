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


        data.forEach((item) => {
            
            let data = {
                "train" : item.trainName,
                "sleeper-seat" : {seat: item.seatsAvailable.sleeper, price: item.price.sleeper},
                "ac-seat" : {seat: item.seatsAvailable.AC, price: item.price.AC}
            }
            
            result.push(data);
        })

        console.log(result);
        res.json(result);
    }
    catch(err){
        console.log(err)
    }
})

module.exports = route;