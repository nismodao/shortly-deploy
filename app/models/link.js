var db = require('../config');
var crypto = require('crypto');

// var Link = mongoose.model('Link');
  
//   var abc = new Link({
//     url: 'www.nytimes.com'
//   });

//   abc.save().then(function(value) {
//     console.log('expect success value', value);
//   })

//   abc.shortenUrL();

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
