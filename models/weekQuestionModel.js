// weekQuestionModel.js

var mongoose = require('mongoose');

// Setup schema
var weekQuestionSchema = mongoose.Schema({
    dayOfWeek: {
        type: Number,
        unique: true,
        min: 1, 
        max: 7 
    },
    question: String
});

// Export WeekQuestion model sorted by DayOfWeek
var WeekQuestion = module.exports = mongoose.model('WeekQuestion', weekQuestionSchema);

module.exports.get = function (callback, limit) {
    WeekQuestion.find(callback).limit(limit).sort('dayOfWeek');
}