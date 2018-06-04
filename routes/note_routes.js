module.exports = function(app, db) {
  app.post('/translate/:string/from/:source/to/:target', (req, res) => {

    var translated = "translated text goes here";
    const translate = require( 'google-translate-api');

    translate(req.params.string, {to: 'en'}).then(result => {
    console.log(result.text);
    translated = result.text;
    console.log(translated);
}).catch(err => {
    console.error(err);
})
    res.send(translated);
   //res.send('Translator will convert '+req.params.string+' from ' + req.params.source + ' to ' + req.params.target);
  });
};
