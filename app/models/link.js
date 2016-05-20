var db = require('../config');
var crypto = require('crypto');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UrlSchema = new Schema({
  id: Number,
  link: String,
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number
});

UrlSchema.pre('save', function(next) {
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  next();
});

var Link = mongoose.model('Link', UrlSchema);

module.exports = Link;
