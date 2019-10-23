const express = require('express');
const app = express();
const answerRoutes = express.Router();

let Answer = require('../models/Answer');

answerRoutes.route('/add').post(function(req, res) {
  let answer = new Answer(req.body);
  answer.save()
    .then(answer => {
      res.status(200).json({'Answer': 'Answer has been added successfully'});
    })
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
});

answerRoutes.route('/').get(function(req, res) {
  Answer.find(function(err, answers){
    if(err){
      console.log(err);
    } else {
      res.json(answers);
    }
  });
});

answerRoutes.route('/:id').get(function(req,res) {
  let id = req.params.id;
  Answer.findById(id, function(err, answer) {
    res.json(answer);
  });
});

answerRoutes.route('/edit/:id').get(function(req, res) {
  let id = req.params.id;
  Answer.findById(id, function(err, answer) {
    res.json(answer);
  });
});

answerRoutes.route('/update/:id').post(function(req, res) {
  Answer.findById(req.params.id, function(err, answer) {
    if (!answer)
      res.status(404).send('Record not found');
    else {
      answer.AnswerTitle = req.body.AnswerTitle;
      answer.AnswerAuthor = req.body.AnswerAuthor;
      answer.AnswerUrl = req.body.AnswerUrl;
      answer.AnswerBlurb = req.body.AnswerBlurb;
      answer.AnswerTags = req.body.AnswerTags;

      answer.save().then(answer => {
        res.json(answer);
      })
      .catch(err => {
        res.status(400).send('unable to update the database');
      });
    }
  });
});

answerRoutes.route('/delete/:id').get(function(req, res) {
  Answer.findByIdAndRemove({_id: req.params.id}, function(err, answer) {
    if(err) {
      res.json(err);
    }
    else res.json('Successfully removed');
  });
});

module.exports = answerRoutes;