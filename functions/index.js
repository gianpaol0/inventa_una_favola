// Copyright 2019, Gianpaolo Altamura

'use strict';

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Node util module used for creating dynamic strings
const util = require('util');

const utils = require('./utils');

// Import the Dialogflow module and response creation dependencies
// from the Actions on Google client library.
const {
  dialogflow,
  //  BasicCard,
  //  Permission,
  Suggestions,
  //  Carousel,
  //  Image,
} = require('actions-on-google');

// Instantiate the Dialogflow client.
const app = dialogflow({ debug: true });

const getCharacterListByChoosedPrompt = () => {
  return "cowboy, orsetto di peluche ed un cavaliere";
}

const ask = (conv, label) => {
  let index = 0;
  let params = [];
  let suggestions = [];
  let randomPrompt = utils.getRandomPrompt(conv, label, index)
  
  index = randomPrompt.index;
  params = randomPrompt.params;
  suggestions = randomPrompt.suggestions;
  let prompt = randomPrompt.prompt;
  //Set choosed story
  if (conv.data.character !== undefined && label === 'start') {
    conv.data.story = 'story' + (index + 1);
  }

  // If there are params to pass execute util.format
  if (params) {
    let paramsArray = [];
    paramsArray.push(prompt);

    params.forEach(p => {
      paramsArray.push(conv.data.params[p])
    });

    prompt = util.format.apply(util, paramsArray);
  }
  conv.data.lastPrompt = prompt;
  conv.ask(`<speak>${prompt}</speak>`);


  if (suggestions) {
    conv.data.lastSuggestions = new Suggestions(suggestions);
    conv.ask(conv.data.lastSuggestions);
  } else {
    conv.data.lastSuggestions = undefined;
  }
}

const repeat = (conv) => {
  conv.ask(`<speak>${conv.data.lastPrompt}</speak>`);
  if (conv.data.lastSuggestions) {
    conv.ask(conv.data.lastSuggestions);
  }
}

// Handle the Dialogflow intent named 'Default Welcome Intent'.
app.intent('Default Welcome Intent', (conv) => {

  if (!conv.user.last.seen) {
    //first visit
    ask(conv, 'welcome')
  } else {
    ask(conv, 'welcome_back')
  }
});

app.intent('Start Game Intent', (conv) => {
  let index = 0;
  conv.data.characterList = getCharacterListByChoosedPrompt(index);
  conv.data.params = {};
  conv.data.params['characterList'] = conv.data.characterList;
  ask(conv, 'choose_character');

});

app.intent('Character Choose Intent', (conv, { character }) => {
  let characterValue = utils.characterEntityToCharacter(character);
  conv.data.params['character'] = character;
  ask(conv, 'character_name');
  conv.data.character = characterValue;
});

app.intent('Character Name Intent', (conv, { name }) => {
  conv.data.characterName = name;
  conv.data.params['name'] = name;
  ask(conv, 'start');
});

// CODE REUSE FUNCTIONS FOR CHOOSE AND FINAL...
const choose = (conv, label) => {
  conv.data.choose = label;
  ask(conv, conv.data.story + '_' + label);
}

const final = (conv, label) => {
  conv.data.final = label;
  ask(conv, conv.data.story + '_' + conv.data.choose + '_' + label);
}

// COWBOY STORIES INTENT
// STORY 1
app.intent('Cowboy Story1 Choose1', (conv) => {
  choose(conv, 'choose1');
});

app.intent('Cowboy Story1 Choose2', (conv) => {
  choose(conv, 'choose2');
});

app.intent('Cowboy Story1 Choose1 Final1', (conv) => {
  final(conv, 'final1');
});

app.intent('Cowboy Story1 Choose1 Final2', (conv) => {
  final(conv, 'final2');
});

app.intent('Cowboy Story1 Choose2 Final1', (conv) => {
  final(conv, 'final1');
});

app.intent('Cowboy Story1 Choose2 Final2', (conv) => {
  final(conv, 'final2');
});

// STORY 2
app.intent('Cowboy Story2 Choose1', (conv) => {
  choose(conv, 'choose1');
});

app.intent('Cowboy Story2 Choose2', (conv) => {
  choose(conv, 'choose2');
});

app.intent('Cowboy Story2 Choose1 Final1', (conv) => {
  final(conv, 'final1');
});

app.intent('Cowboy Story2 Choose1 Final2', (conv) => {
  final(conv, 'final2');
});

app.intent('Cowboy Story2 Choose2 Final1', (conv) => {
  final(conv, 'final1');
});

app.intent('Cowboy Story2 Choose2 Final2', (conv) => {
  final(conv, 'final2');
});

// PELUCHE BEAR STORIES INTENT
// STORY 1
app.intent('Peluche Story1 Choose1', (conv) => {
  choose(conv, 'choose1');
});

app.intent('Peluche Story1 Choose2', (conv) => {
  choose(conv, 'choose2');
});

app.intent('Peluche Story1 Choose1 Final1', (conv) => {
  final(conv, 'final1');
});

app.intent('Peluche Story1 Choose1 Final2', (conv) => {
  final(conv, 'final2');
});

app.intent('Peluche Story1 Choose2 Final1', (conv) => {
  final(conv, 'final1');
});

app.intent('Peluche Story1 Choose2 Final2', (conv) => {
  final(conv, 'final2');
});

// STORY 2
app.intent('Peluche Story2 Choose1', (conv) => {
  choose(conv, 'choose1');
});

app.intent('Peluche Story2 Choose2', (conv) => {
  choose(conv, 'choose2');
});

app.intent('Peluche Story2 Choose1 Final1', (conv) => {
  final(conv, 'final1');
});

app.intent('Peluche Story2 Choose1 Final2', (conv) => {
  final(conv, 'final2');
});

app.intent('Peluche Story2 Choose2 Final1', (conv) => {
  final(conv, 'final1');
});

app.intent('Peluche Story2 Choose2 Final2', (conv) => {
  final(conv, 'final2');
});

// KNIGHT STORIES INTENT
// STORY 1
app.intent('Knight Story1 Choose1', (conv) => {
  choose(conv, 'choose1');
});

app.intent('Knight Story1 Choose2', (conv) => {
  choose(conv, 'choose2');
});

app.intent('Knight Story1 Choose1 Final1', (conv) => {
  final(conv, 'final1');
});

app.intent('Knight Story1 Choose1 Final2', (conv) => {
  final(conv, 'final2');
});

app.intent('Knight Story1 Choose2 Final1', (conv) => {
  final(conv, 'final1');
});

app.intent('Knight Story1 Choose2 Final2', (conv) => {
  final(conv, 'final2');
});

// STORY 2
app.intent('Knight Story2 Choose1', (conv) => {
  choose(conv, 'choose1');
});

app.intent('Knight Story2 Choose2', (conv) => {
  choose(conv, 'choose2');
});

app.intent('Knight Story2 Choose1 Final1', (conv) => {
  final(conv, 'final1');
});

app.intent('Knight Story2 Choose1 Final2', (conv) => {
  final(conv, 'final2');
});

app.intent('Knight Story2 Choose2 Final1', (conv) => {
  final(conv, 'final1');
});

app.intent('Knight Story2 Choose2 Final2', (conv) => {
  final(conv, 'final2');
});

// Handle the Dialogflow REPEAT intent
app.intent('Repeat', (conv) => {
  repeat(conv);
});

// Handle the Dialogflow NO_INPUT intent.
// Triggered when the user doesn't provide input to the Action
app.intent('actions_intent_NO_INPUT', (conv) => {
  // Use the number of reprompts to vary response
  const repromptCount = parseInt(conv.arguments.get('REPROMPT_COUNT'));
  if (repromptCount === 0) {
    conv.ask('Which color would you like to hear about?');
  } else if (repromptCount === 1) {
    conv.ask(`Please say the name of a color.`);
  } else if (conv.arguments.get('IS_FINAL_REPROMPT')) {
    conv.close(`Sorry we're having trouble. Let's ` +
      `try this again later. Goodbye.`);
  }
});


// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);