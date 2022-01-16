const mongoose = require('mongoose')

var betSchema = new mongoose.Schema(
  
    {
        id: String,
        user_id: String,
        events: [{
            eventID: String,
            odd: String
        }],
        total_odd: String,
        bet_ammount: String,
        state: String,
        date: String
  });

module.exports = mongoose.model('bet', betSchema)