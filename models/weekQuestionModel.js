// weekQuestionModel.js

var mongoose = require('mongoose');

// Setup Answer Schema
var answer = mongoose.Schema({
    title: String
});

// Setup Question Schema
var weekQuestionSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    dayOfWeek: {
        type: Number,
        // unique: true,
        required: true,
        min: 1,
        max: 7
    },
    answers: [answer]
});

// Export WeekQuestion model sorted by DayOfWeek
var WeekQuestion = module.exports = mongoose.model('WeekQuestion', weekQuestionSchema);

// Just for testing: Create a Question with answers

// var weekQuestion = new WeekQuestion({
//     title: 'Its FridayS???',
//     dayOfWeek: 5,
//     answers: [{ title: 'answer1' }, { title: 'answer2' }]
// })
//weekQuestion.save();

module.exports.get = function (callback, limit) {
    WeekQuestion.find(callback).limit(limit).sort('dayOfWeek');
}