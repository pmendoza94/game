var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema ({
    name: String,
    score: 0,
})

var QuestionSchema = new mongoose.Schema ({
    content: String,
    answer: String,
    fake1: String,
    fake2: String,
})

mongoose.model('User', UserSchema);
var User = mongoose.model('User')

mongoose.model('Question', QuestionSchema);
var Question = mongoose.model('Question')