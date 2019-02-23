// weekAnswerModel.js

var mongoose = require('mongoose');

// Setup schema
var weekAnswerSchema = mongoose.Schema({
    dayOfWeek: {
        type: Number,
        unique: true,
        min: 1,
        max: 7
    },
    answer: String,
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WeekQuestion'
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export WeekAnswer model
var WeekAnswer = module.exports = mongoose.model('WeekAnswer', weekAnswerSchema);

module.exports.get = function (callback, limit) {
    WeekAnswer.find(callback).limit(limit);
}