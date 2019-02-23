// weekQuestionModel.js

var mongoose = require('mongoose');

// Setup Answer Schema
var answer = mongoose.Schema({
    name: String
});

// Setup Question Schema
var weekQuestionSchema = mongoose.Schema({
    title: String,
    description: String,
    dayOfWeek: {
        type: Number,
        unique: true,
        min: 1,
        max: 7
    },
    answers: [answer]
});

// Export WeekQuestion model sorted by DayOfWeek
var WeekQuestion = module.exports = mongoose.model('WeekQuestion', weekQuestionSchema);

module.exports.get = function (callback, limit) {
    WeekQuestion.find(callback).limit(limit).sort('dayOfWeek');
}