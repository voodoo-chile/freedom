const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Question = new Schema({
  QuestionText: {
    type: String
  },
  QuestionAnswers: {
    type: [String]
  },
  QuestionTags: {
    type: [String]
  }
}, {
  collection: 'Question'
});

module.exports = mongoose.model('Question', Question);