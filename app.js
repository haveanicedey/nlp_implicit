var fs = require('fs');
var https = require('https');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var pos = require('pos');
var app = express();

var key_file = 'file.pem';
var cert_file = 'file.crt';
var config = {
	key: fs.readFileSync(key_file),
	cert: fs.readFileSync(cert_file)
};

app.set('views', __dirname + '/views/pages');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use( require('cookie-parser')() );
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

/*******************************************************************************/

app.get('/', function(req, res) {
	res.render('index.ejs');
});

/*******************************************************************************/

app.post('/evaluate', function(req, res) {
	
	var keyword = "No adjectives detected";
	var adjective = "null";
	var noun = "null";
	var asr_result = req.body.term.toLowerCase();
	var words = new pos.Lexer().lex(asr_result);
	var tagger = new pos.Tagger();
	var taggedWords = tagger.tag(words);
	for (i in taggedWords) {
    	var taggedWord = taggedWords[i];
    	var word = taggedWord[0];
    	var tag = taggedWord[1];
    	if (tag == 'JJ') {
    		adjective =  word;
    	}
    	if (tag == 'NN' && word != 'music') {
    		noun = word;
    	}
	}
	// sending data back to client
	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ adjective: adjective, noun: noun}));

});

var server = https.createServer(config, app).listen(443, function() {
	console.log('listening on port 443');
});