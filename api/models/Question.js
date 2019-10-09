const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Question = new Schema({
  QuestionText: {
    type: String
  },
  QuestionAnswers: {
    type: [String]
  },
  QuestionCategories: {
    type: [Number]
  }
}, {
  collection: 'Question'
});

module.exports = mongoose.model('Question', Question);