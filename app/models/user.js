var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var crypto = require('crypto');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: Number,
  username: { type: String, required: true, index: { unique: true } },
  password: String,
  timestamps: Number,
  });

UserSchema.prototype.comparePassword = function(attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, this.password, function(err, isMatch) {
    if (err) {
      callback(err);
    } else {
    callback(null,isMatch);
    }
  });
}

UserSchema.pre('save', function (next) {
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.password, null, null).bind(this)
    .then(function(hash) {
      this.code = hash;
      next();
    });
});

var User = mongoose.model('User', UserSchema);

  // Bob.save().then(function(value) {
  //   console.log('expect success value', value);
  // }).catch(console.log);

module.exports = User;
