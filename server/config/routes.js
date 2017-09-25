var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');

var users = require('../controllers/users.js');
var questions = require('../controllers/users.js');


module.exports = function(app) {
    app.get('/create_user', function(req, res) {
        console.log('GET /create_user')
        User.find({})
            .then(data => {
                console.log('*** GET ***')
                res.json(data)
            })
    })

    app.get('/create_questionn', function(req, res) {
        console.log('GET /create_question')
        Question.find({})
            .then(data => {
                console.log('*** GET ***')
                res.json(data)
            })
    })

    app.get('/questions', function(req, res) {
        console.log('GET /questions')
        Question.find({}, function(err, questions) {
            if(err) {
                console.log('*** GET ERROR ***')
            }
            res.json(questions)
        })
    })

    app.get('/users', function(req, res) {
        console.log('GET /users')
        User.find({})
            .then(data => {
                console.log('~~~~ GET ~~~~')
                res.json(data)
            })
    })

    app.post('/create_user', (req, res, next) => {
        console.log('POST /create_user')
        let userInstance = new User(req.body);
        userInstance.save(function(err) {
            if(err) {
                console.log('*** ERROR routes ***')
                return res.json(false);
            }
            else {
                User.find({}, function(err, users) {
                    console.log('*** routes ***')
                    console.log(users)
                    return res.json(users)
                })
            }
        })
    })
    
    app.post('/create_question', (req, res, next) => {
        console.log('POST /create_question')
        let questionInstance = new Question(req.body);
        console.log(questionInstance, '0000000')
        questionInstance.save(function(err) {
            if(err) {
                console.log('*** Error routes ***')
                return res.json(false);
            }
            else {
                Question.find({}, function(err, questions) {
                    console.log('*** routes ***')
                    console.log(questionInstance)
                    return res.json(questions)
                })
            }
        })
        
    })

    app.all('*', (req,res,next) => {
        res.sendFile(path.resolve('./public/dist/index.html'))
    })
}