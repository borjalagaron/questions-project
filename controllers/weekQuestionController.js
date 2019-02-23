// WeekQuestionController.js

// Import WeekQuestion model
WeekQuestion = require('../models/weekQuestionModel');

// Handle index actions
exports.index = function (req, res) {
    WeekQuestion.get(function (err, weekQuestion) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Week Questions retrieved successfully",
            data: weekQuestion
        });
    });
};

// Handle create question actions
exports.new = function (req, res) {
    var weekQuestion = new WeekQuestion();
    weekQuestion.title = req.body.title;
    weekQuestion.description = req.body.description;
    weekQuestion.dayOfWeek = req.body.dayOfWeek;
    
    // save the question and check for errors
    weekQuestion.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New Week Question created!',
            data: weekQuestion
        });
    });
};

// Handle view Week Question info
exports.view = function (req, res) {
    WeekQuestion.findById(req.params.question_id, function (err, weekQuestion) {
        if (err)
            res.send(err);
        res.json({
            message: 'Week Question details loading..',
            data: weekQuestion
        });
    });
};
