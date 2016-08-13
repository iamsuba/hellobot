var restify = require('restify');
var builder = require('botbuilder');

// Bot setup

// Setup restify server
var server = restify.createServer();
server.listen(process.port || process.env.PORT || 3978, function () {
    console.log('%SListen to %s', server.name, server.url, server);
});

//Create Chatbot
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//Bot Dialogs
bot.dialog('/', function (session) {
    session.send("Hello World");
});