module.exports = function(app, db) {


  var translated = "translated text goes here";

  app.post('/translate/:string/from/:source/to/:target', (req, res) => {

    const translate = require( 'google-translate-api');

    translate(req.params.string, {to: 'en'}).then(result =>{
    console.log(result.text);
    translated = result.text;
}
).catch(err => {
    console.error(err);
})
    console.log('Translated to:'+ translated)
    res.send(translated);
   //res.send('Translator will convert '+req.params.string+' from ' + req.params.source + ' to ' + req.params.target);
  });
};
