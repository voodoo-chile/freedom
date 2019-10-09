const express = require('express');
const app = express();
const questionRoutes = express.Router();

let Question = require('../models/Question');

questionRoutes.route('/add').post(function(req, res) {
  let question = new Question(req.body);
  question.save()
    .then(question => {
      res.status(200).json({'Question': 'Question has been added successfully'});
    })
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
});

questionRoutes.route('/').get(function(req, res) {
  Question.find(function(err, questions){
    if(err){
      console.log(err);
    } else {
      res.json(questions);
    }
  });
});

questionRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  Question.findById(id, function(err, question) {
    res.json(question);
  });
});

questionRoutes.route('/edit/:id').get(function(req, res) {
  let id = req.params.id;
  Question.findById(id, function(err, question) {
    res.json(question);
  });
});

questionRoutes.route('/update/:id').post(function(req, res) {
  Question.findById(req.params.id, function(err, question) {
    if (!question)
      res.status(404).send('Record not found');
    else {
      question.QuestionText = req.body.QuestionText;
      question.QuestionAnswers = req.body.QuestionAnswers;
      question.QuestionCategories = req.body.QuestionCategories;

      question.save().then(question => {
        res.json(question);
      })
      .catch(err => {
        res.status(400).send('unable to update the database');
      });
    }
  });
});

questionRoutes.route('/delete/:id').get(function(req, res) {
  Question.findByIdAndRemove({_id: req.params.id}, function(err, question) {
    if(err) {
      res.json(err);
    }
    else res.json('Successfully removed');
  });
});

module.exports = questionRoutes;