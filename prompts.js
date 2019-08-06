// Copyright 2019, Gianpaolo Altamura

//Imports prompts for each character
const cowboy = require('./cowboy/prompts_cowboy').cowboy;
const peluche = require('./peluche/prompts_peluche').peluche;
const knight = require('./peluche/prompts_knight').knight;

const SSML_BREAK_SHORT = '<break time="700ms"/>';

/**
 * All the prompts used in the game (Italian only) for stories. Each prompts has a key
 * and multiple alternative variations that are selected by the fulfillment logic
 * to ensure that prompts are not repeated in sequence.
 */
const prompts = {
  'welcome': [
    `Benvenuto ad Inventa una favola. Sei pronto ad iniziare?`,
    `Benvenuto. Che bello vederti. Sei pronto ad iniziare?`,
    `Che bello vederti. Sei pronto ad iniziare?`

  ],
  'welcome_back': [
    `Bentornato ad Inventa una favola. Sei pronto ad iniziare?`,
    `Ciao. Finalmente sei tornato. Sei pronto ad iniziare?`,
    `Che bello rivederti. Ti stavo aspettando. Iniziamo?`
  ],
  'choose_character': [
    `Benissimo. Per prima cosa scegliamo il personaggio principale. Scegli tra un cowboy, un orsetto di peluche ed un cavaliere.`,
    `Bene. Allora da dove iniziamo. Ah ecco. Scegliamo un personaggio per la nostra favola. Puoi scegliere tra un cowboy, un orsetto di peluche ed un cavaliere.`,
    `Bene. Iniziamo. Scegli un personaggio per la nostra favola. Puoi scegliere tra un cowboy, un orsetto di peluche ed un cavaliere.`
  ],
  'choose_character_error': [
    `Temo di non aver capito. Puoi scegliere tra %s`,
    `Non ho capito bene il personaggio che hai scelto. Puoi scegliere tra %s`
  ],
  'character_name': [
    `Bene hai scelto un %s, che nome vuoi dare al tuo personaggio?`,
    `%s. Ottima scelta. Bene, è il momento di dare un nome al nostro personaggio. Scegli un nome.`,
  ],
  'character_name_error': [
    `Non ho ben capito il nome. Al momento non riesco ad accettare nomi immaginari. Scegli un nome di persona come Mario, Lucia o Stefano`,
    `Al momento non riesco ad accettare nomi immaginari. Scegli un nome di persona vero come Luigi, Stefania o Matteo.`
  ],
  'cowboy': cowboy.labels,
  'peluche': peluche.labels,
  'knight': knight.labels,
  'story_final': [
    `E vissero tutti felici e contenti. La nostra storia è finita, torna a trovarci perchè aggiungeremo sempre nuove avventure`,
    `Anche questa avventura è giunta alla fine. Ti aspettiamo ancora per creare insieme nuove favole`,
    `Tutto bene quel che finisce bene. La nostra storia finisce qua, ma nuove storie ti aspettano. Torna a giocare quando vuoi.`
  ]

};

/**
 * All the suggestions used in the game (Italian only) for stories. For each prompt there is a suggestion
 */
const prompts = {
  'welcome': [
    ['Si','No'],
    ['Si','No'],
    ['Si','No']
  ],
  'welcome_back': [
    ['Si','No'],
    ['Si','No'],
    ['Si','No']
  ],
  'choose_character': [
    ['Cowboy','Orsetto di peluce', 'Cavaliere'],
    ['Cowboy','Orsetto di peluce', 'Cavaliere'],
    ['Cowboy','Orsetto di peluce', 'Cavaliere']
  ],
  'choose_character_error': [
    `Temo di non aver capito. Puoi scegliere tra %s`,
    `Non ho capito bene il personaggio che hai scelto. Puoi scegliere tra %s`
  ],
  'cowboy': cowboy.suggestions,
  'peluche': peluche.suggestions,
  'knight': knight.suggestions
};

exports.prompts = prompts;
exports.suggestions = suggestions;