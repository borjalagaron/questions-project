// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to QUESTION PROJECT crafted with love!',
    });
});
// Import contact controller
var contactController = require('../controllers/contactController');

// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

// Import question controller
var weekQuestionController = require('../controllers/weekQuestionController');

// Question routes
router.route('/weekQuestions')
    .get(weekQuestionController.index)
    .post(weekQuestionController.new);
router.route('/weekQuestions/:question_id')
    .get(weekQuestionController.view);

// Import question controller
var weekAnswerController = require('../controllers/weekAnswerController');

// Question routes
router.route('/weekAnswers')
    .get(weekAnswerController.index)
    .post(weekAnswerController.new);
router.route('/weekAnswer/:weekAnswer_id')
    .get(weekAnswerController.view);


// Export API routes
module.exports = router;