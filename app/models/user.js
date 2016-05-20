var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var crypto = require('crypto');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: Number,
  username: String,
  password: String,
  timestamps: Number,

});

var UrlSchema = new Schema({
  id: Number,
  url: String,
  baseurl: String,
  code: Number,
  title: String,
  visits: Number,
  timestamps: Number
});


UserSchema.methods.hashPassword = function(cb) {
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.get('password'), null, null).bind(this)
    .then(function(hash) {
      this.set('password', hash);
    });
}

UserSchema.methods.comparePassword = function(attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
    callback(isMatch);
  });
}

UserSchema.pre('save', function (next) {
  this.hashPassword();
  return next();
});

var User = mongoose.model('User', UserSchema);

  // Bob.save().then(function(value) {
  //   console.log('expect success value', value);
  // }).catch(console.log);

module.exports = User;
