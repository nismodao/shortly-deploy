var db = require('../config');
var crypto = require('crypto');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UrlSchema = new Schema({
  id: Number,
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number
})

UrlSchema.methods.shortenUrL = function () {
  var shasum = crypto.createHash('sha1');
  shasum.update(this.get('url'));
  this.set('code', shasum.digest('hex').slice(0, 5));
}

var Link = mongoose.model('Link', UrlSchema);

UrlSchema.pre('save', function (next) {
  this.shortenUrL();
  return next();
})

module.exports = Link;

// var abc = new Link({
//   url: 'www.cnn.com'
// });

// abc.save().then(function(value) {
//   console.log('expect success value', value);
// })


// module.exports = Link;
// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function() {
//     this.on('creating', function(model, attrs, options) {
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });
