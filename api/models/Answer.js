const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Answer = new Schema({
  AnswerTitle: {
    type: String
  },
  AnswerUrl: {
    type: String
  },
  AnswerBlurb: {
    type: String
  },
  AnswerTags: {
    type: [String]
  }
}, {
  collection: 'Answer'
});

module.exports = mongoose.model('Answer', Answer);