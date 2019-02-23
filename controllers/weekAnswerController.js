// weekAnswerController.js

// Import answer model
WeekAnswer = require('../models/weekAnswerModel');

// Handle index actions
exports.index = function (req, res) {
    WeekAnswer.get(function (err, weekAnswers) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "WeekAnswers retrieved successfully",
            data: weekAnswers
        });
    });
};

// Handle create weekAnswers actions
exports.new = function (req, res) {
    var weekAnswer = new WeekAnswer();
    weekAnswer.dayOfWeek = req.body.dayOfWeek;
    weekAnswer.answer = req.body.answer;
    weekAnswer.question = req.body.question;

    // save the weekAnswer and check for errors
    weekAnswer.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New weekAnswers created!',
            data: weekAnswer
        });
    });
};

// Handle view weekAnswer info
exports.view = function (req, res) {
    WeekAnswer.findById(req.params.weekAnswer_id, function (err, weekAnswer) {
        if (err)
            res.send(err);
        res.json({
            message: 'WeekAnswer details loading..',
            data: weekAnswer
        });
    });
};

// Handle update weekAnswer info
exports.update = function (req, res) {
    WeekAnswer.findById(req.params.weekAnswer_id, function (err, weekAnswer) {
        if (err)
            res.send(err);
        weekAnswer.answer = req.body.answer;
        // save the weekAnswer and check for errors
        weekAnswer.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'WeekAnswer Info updated',
                data: weekAnswer
            });
        });
    });
};

// Handle delete WeekAnswer
exports.delete = function (req, res) {
    WeekAnswer.remove({
        _id: req.params.weekAnswer_id
    }, function (err, weekAnswer) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'WeekAnswer deleted'
        });
    });
};