const mongoose = require('mongoose')

var eventSchema = new mongoose.Schema(
  
    {
        id: String,
        sport: String, 
        type: String, 
        team1: String, 
        team2: String, 
        result_odd: { 
            home: String, 
            tie: String, 
            away: String 
        },
        state: String
  });

module.exports = mongoose.model('event', eventSchema)