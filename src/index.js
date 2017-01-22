'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

var RapidAPI = new require('rapidapi-connect');
var rapid = new RapidAPI('chatline', 'a177400e-389f-4ff2-9bf6-39605b63f2ff');
var twilio = new RapidAPI("chatline", "a177400e-389f-4ff2-9bf6-39605b63f2ff");


var languageStrings = {
    "en-GB": {
        "translation": {
            "SKILL_NAME" : "Demo Skill",
            "MESSAGE" : "Hello World!",
            "HELP_MESSAGE" : "This is a demo, I don't actually do much!",
            "HELP_REPROMPT" : "All I do is say Hello World.",
            "STOP_MESSAGE" : "Goodbye!"
        }
    },
    "en-US": {
        "translation": {
            "TEXTS": [
                "Hi my name is Sally, you are not alone.",
                "Tell me how your day went",
                "How are you feeling? I'll listen.",
                "Do you want to talk about it?",
                "What's Wrong?",
                "Tell me, if you don't mind.",
                "It will be ok.",
                "I'm here for you.",
                "Need to talk?",
                "What can I help you with?",
                "I see; I understand.",
                "I'm sorry to hear that.",
                "You are not alone",
                "I'm here if you need to talk",
                "I care",
                "I'm glad to hear that you're feeling better",
                "Good",
                "I'm listening",
                "Just keep swimming",
                "How are you feeling right now?"
            ],
            "SKILL_NAME" : "Demo Skill",
            "MESSAGE" : "Hello World!",
            "HELP_MESSAGE" : "This is a demo, I don't actually do much!",
            "HELP_REPROMPT" : "All I do is say Hello World.",
            "STOP_MESSAGE" : "Goodbye!"
        }
    },
    "de-DE": {
        "translation": {
            "SKILL_NAME" : "Demo Skill",
            "MESSAGE" : "Hello World!",
            "HELP_MESSAGE" : "This is a demo, I don't actually do much!",
            "HELP_REPROMPT" : "All I do is say Hello World.",
            "STOP_MESSAGE" : "Goodbye!"
        }
    }
};

// var languageStrings = {
//     "en-GB": {
//         "translation": {
//             "FACTS": [
//                 "A year on Mercury is just 88 days long.",
//                 "Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.",
//                 "Venus rotates anti-clockwise, possibly because of a collision in the past with an asteroid.",
//                 "On Mars, the Sun appears about half the size as it does on Earth.",
//                 "Earth is the only planet not named after a god.",
//                 "Jupiter has the shortest day of all the planets.",
//                 "The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.",
//                 "The Sun contains 99.86% of the mass in the Solar System.",
//                 "The Sun is an almost perfect sphere.",
//                 "A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.",
//                 "Saturn radiates two and a half times more energy into space than it receives from the sun.",
//                 "The temperature inside the Sun can reach 15 million degrees Celsius.",
//                 "The Moon is moving approximately 3.8 cm away from our planet every year."
//             ],
//             "SKILL_NAME" : "British Space Facts",
//             "GET_FACT_MESSAGE" : "Here's your fact: ",
//             "HELP_MESSAGE" : "You can say tell me a space fact, or, you can say exit... What can I help you with?",
//             "HELP_REPROMPT" : "What can I help you with?",
//             "STOP_MESSAGE" : "Goodbye!"
//         }
//     },
//     "en-US": {
//         "translation": {
//             "FACTS": [
//                 "A year on Mercury is just 88 days long.",
//                 "Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.",
//                 "Venus rotates counter-clockwise, possibly because of a collision in the past with an asteroid.",
//                 "On Mars, the Sun appears about half the size as it does on Earth.",
//                 "Earth is the only planet not named after a god.",
//                 "Jupiter has the shortest day of all the planets.",
//                 "The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.",
//                 "The Sun contains 99.86% of the mass in the Solar System.",
//                 "The Sun is an almost perfect sphere.",
//                 "A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.",
//                 "Saturn radiates two and a half times more energy into space than it receives from the sun.",
//                 "The temperature inside the Sun can reach 15 million degrees Celsius.",
//                 "The Moon is moving approximately 3.8 cm away from our planet every year."
//             ],
//             "SKILL_NAME" : "American Space Facts",
//             "GET_FACT_MESSAGE" : "Here's your fact: ",
//             "HELP_MESSAGE" : "You can say tell me a space fact, or, you can say exit... What can I help you with?",
//             "HELP_REPROMPT" : "What can I help you with?",
//             "STOP_MESSAGE" : "Goodbye!"
//         }
//     },
//     "de-DE": {
//         "translation": {
//             "FACTS": [
//                 "Ein Jahr dauert auf dem Merkur nur 88 Tage.",
//                 "Die Venus ist zwar weiter von der Sonne entfernt, hat aber höhere Temperaturen als Merkur.",
//                 "Venus dreht sich entgegen dem Uhrzeigersinn, möglicherweise aufgrund eines früheren Zusammenstoßes mit einem Asteroiden.",
//                 "Auf dem Mars erscheint die Sonne nur halb so groß wie auf der Erde.",
//                 "Die Erde ist der einzige Planet, der nicht nach einem Gott benannt ist.",
//                 "Jupiter hat den kürzesten Tag aller Planeten.",
//                 "Die Milchstraßengalaxis wird in etwa 5 Milliarden Jahren mit der Andromeda-Galaxis zusammenstoßen.",
//                 "Die Sonne macht rund 99,86 % der Masse im Sonnensystem aus.",
//                 "Die Sonne ist eine fast perfekte Kugel.",
//                 "Eine Sonnenfinsternis kann alle ein bis zwei Jahre eintreten. Sie ist daher ein seltenes Ereignis.",
//                 "Der Saturn strahlt zweieinhalb mal mehr Energie in den Weltraum aus als er von der Sonne erhält.",
//                 "Die Temperatur in der Sonne kann 15 Millionen Grad Celsius erreichen.",
//                 "Der Mond entfernt sich von unserem Planeten etwa 3,8 cm pro Jahr."
//             ],
//             "SKILL_NAME" : "Weltraumwissen auf Deutsch",
//             "GET_FACT_MESSAGE" : "Hier sind deine Fakten: ",
//             "HELP_MESSAGE" : "Du kannst sagen, „Nenne mir einen Fakt über den Weltraum“, oder du kannst „Beenden“ sagen... Wie kann ich dir helfen?",
//             "HELP_REPROMPT" : "Wie kann ich dir helfen?",
//             "STOP_MESSAGE" : "Auf Wiedersehen!"
//         }
//     }
// };

var rawText;

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    if(typeof event.request != 'undefined')
        rawText = event.request.intent.slots.Text.value;
    else
        rawText = '';
    console.log(JSON.stringify(event));
    console.log(rawText);
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // // Get a random space fact from the space facts list
        // // Use this.t() to get corresponding language data
        // var factArr = this.t('FACTS');
        // var factIndex = Math.floor(Math.random() * factArr.length);
        // var randomFact = factArr[factIndex];

        // // Create speech output
        // var speechOutput = this.t("GET_FACT_MESSAGE") + randomFact;
        // this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), randomFact)

        rapid.call('IBMWatsonToneAnalyzer', 'analyzeToneFromText', { 
            'username': 'a64b3034-98f4-445e-915a-e7944bd19567',
            'password': 'v3BWsjP3GyIY',
            'text': rawText,
            'tones': '',
            'sentences': ''
         
        }).on('success', (payload)=>{
             console.log(payload);
             var tone_categories = payload.document_tone.tone_categories;
             var emotion_category = tone_categories[0];
             var emotions = emotion_category.tones;
             var max_emotion = emotions[0];
             for(var i = 0; i < emotions.length; i++) {
                var emotion = emotions[i];
                if(max_emotion.score < emotion.score)
                    max_emotion = emotion;
             }
             var max_score = (max_emotion.score * 100).toFixed(2);

            // Based on the emotion, send stuff to text
            twilio.call('Twilio', 'sendSms', { 
                'accountSid': 'ACd9d3c73231c51f61c06c7dcf9d358906',
                'accountToken': 'dde2c380ea94af0d21183a20a1401650',
                'from': '1 213-805-8610 ',
                'messagingServiceSid': '',
                'to': '1 310-765-0279',
                'body': rawText + '; tone is ' + max_emotion.tone_name + '; score is ' + max_score,
                'statusCallback': '',
                'applicationSid': '',
                'maxPrice': '',
                'provideFeedback': ''
             
            }).on('success', (payload)=>{
                if(max_emotion.tone_name == "Sadness") {
                    this.emit(':tell', 'Flagged response; The highest tone score was for: '+ max_emotion.tone_name + '; the score was ' + max_score);
                } else {
                    // this.emit(':tell', 'The highest tone score was for: ' + max_emotion.tone_name + '; the score was ' + max_score);
                    var textArr = this.t('TEXTS');
                    var textIndex = Math.floor(Math.random() * textArr.length);
                    var resp = textArr[textIndex];
                    this.emit(':tell', resp);
                }
            }).on('error', (payload)=>{
                this.emit(':tell', 'There was an error.');
            });
        }).on('error', (payload)=>{
             this.emit(':tell', 'There was an error.');
        });
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
};