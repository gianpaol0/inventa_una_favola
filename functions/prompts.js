// Copyright 2019, Gianpaolo Altamura

//Imports prompts for each character
const cowboy = require('./prompts_cowboy').prompts;
const peluche = require('./prompts_peluche').prompts;
const knight = require('./prompts_knight').prompts;

// const SSML_BREAK_SHORT = '<break time="700ms"/>';

/**
 * All the prompts used in the game (Italian only) for stories. Each prompts has a key
 * and multiple alternative variations that are selected by the fulfillment logic
 * to ensure that prompts are not repeated in sequence.
 */
const prompts = {
  'welcome': {
    'prompts': [
      `Benvenuto ad Inventa una favola. Sei pronto ad iniziare?`,
      `Benvenuto. Che bello vederti. Sei pronto ad iniziare?`,
      `Che bello vederti. Sei pronto ad iniziare?`
    ],
    'suggestions': [
      ['Si', 'No'],
      ['Si', 'No'],
      ['Si', 'No']
    ]
  },
  'welcome_back': {
    'prompts': [
      `Bentornato ad Inventa una favola. Sei pronto ad iniziare?`,
      `Ciao. Finalmente sei tornato. Sei pronto ad iniziare?`,
      `Che bello rivederti. Ti stavo aspettando. Iniziamo?`
    ],
    'suggestions': [
      ['Si', 'No'],
      ['Si', 'No'],
      ['Si', 'No']
    ],
  },
  'choose_character': {
    'prompts': [
      `Benissimo. Per prima cosa scegliamo il personaggio principale. Scegli tra un cowboy, un orsetto di peluche ed un cavaliere.`,
      `Bene. Allora da dove iniziamo. Ah ecco. Scegliamo un personaggio per la nostra favola. Puoi scegliere tra un cowboy, un orsetto di peluche ed un cavaliere.`,
      `Bene. Iniziamo. Scegli un personaggio per la nostra favola. Puoi scegliere tra un cowboy, un orsetto di peluche ed un cavaliere.`
    ],
    'suggestions': [
      ['Cowboy', 'Orsetto di peluche', 'Cavaliere'],
      ['Cowboy', 'Orsetto di peluche', 'Cavaliere'],
      ['Cowboy', 'Orsetto di peluche', 'Cavaliere']
    ]
  },
  'choose_character_error': {
    'prompts': [
      `Temo di non aver capito. Puoi scegliere tra %s`,
      `Non ho capito bene il personaggio che hai scelto. Puoi scegliere tra %s`
    ],
    'params': ['characterList'],
    'suggestions': [
      ['Cowboy', 'Orsetto di peluche', 'Cavaliere'],
      ['Cowboy', 'Orsetto di peluche', 'Cavaliere'],
    ]
  },
  'character_name': {
    'prompts': [
      `Bene hai scelto un %s, che nome vuoi dare al tuo personaggio? Scegli tra %s`,
      `%s. Ottima scelta. Bene, è il momento di dare un nome al nostro personaggio. Scegli un nome tra %s`,
    ],
    'params': ['character', 'namesList']
  },
  'character_name_error': {
    'prompts': [
      `Non ho ben capito il nome. Al momento non riesco ad accettare nomi immaginari. Scegli un nome di persona come Mario, Lucia o Stefano`,
      `Al momento non riesco ad accettare nomi immaginari. Scegli un nome di persona vero come Luigi, Stefania o Matteo.`
    ],
    'suggestions': [
      ['Mario', 'Lucia', 'Stefano'],
      ['Lucia', 'Stefania', 'Matteo']
    ]
  },
  'story_final': {
    'prompts': [
      `La nostra storia è finita. Torna a trovarci perchè aggiungeremo sempre nuove avventure`,
      `Anche questa avventura è giunta alla fine. Ti aspettiamo ancora per creare insieme nuove favole`,
      `Tutto bene quel che finisce bene. La favola finisce qua, ma nuove storie ti aspettano. Torna a giocare quando vuoi.`
    ]
  }
};

prompts['cowboy'] = cowboy;
prompts['peluche'] = peluche;
prompts['knight'] = knight;
  

exports.prompts = prompts;