var mongoose = require('mongoose');
mongoURI = 'mongodb://localhost/libarary';
mongoose.connect(mongoURI);
var db = mongoose.connection;

module.exports = db;



  


// UrlSchema.methods.shortenUrl = function () { 
//   var shasum = crypto.createHash('sha1');
//   shasum.update(this.get('url'));
//   this.set('code', shasum.digest('hex').slice(0, 5));
// };
//   // UrlSchema.on('init', function (model) {
//   //   var shasum = crypto.createHash('sha1');
//   //   shasum.update(this.get('url'));
//   //   this.set('code', shasum.digest('hex').slice(0, 5));

//   // });





// var Url = mongoose.model('Url', UrlSchema);
  
//   var abc = new Url({
//     url: 'www.abc.com'
//   });
// console.log(typeof abc.shortenUrl);  



// nam.hashPassword();
// //abc.shortenUrl;


// // UserSchema.on('init', function (model) {
// //   console.log('hello');
// //   UserSchema.methods.hashPassword(model);
// // });


//   var jay = new User({
//     username: 'jay jay',
//     password: '5647'
//   });

  

//   jay.save().then(console.log).catch(console.log);
// //};



