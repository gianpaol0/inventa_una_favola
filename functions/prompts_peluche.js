// Copyright 2019, Gianpaolo Altamura
/**
 * All the prompts used in the game (Italian only) for stories of peluche bear character. Each prompts has a key
 * and multiple alternative variations that are selected by the fulfillment logic
 * to ensure that prompts are not repeated in sequence.
 */
const prompts = {
  'start': {
    'prompts': [
      `C'era una volta un orsetto peluche di nome %s. %s viveva insieme ad una famiglia di umani ed il suo migliore amico era un bambino di nome Marco. Un giorno Marco invitò a casa un amico di nome Giovanni. Giovanni di nascosto rubò un aereo giocattolo di Marco. Che doveva fare l'orsetto? Dirlo a Marco o dirlo direttamente a Giovanni?`,
      `Nel villaggio dei peluche erano sempre tutti felici finchè un giorno il sole sparì. Con il tempo senza sole, anche la felicità sparì dal villaggio dei peluche. L'orsetto %s, che era un peluche molto coraggioso, decise di indagare. Scoprì che il sole era stato rubato da un gigante. Che doveva fare %s? Affrontare il gigante o dirlo al capo del villaggio?`,
    ],
    'params': ['name', 'name'],
    'suggestions': [
      ['Dirlo a Marco', 'Dirlo a Giovanni'],
      ['Affrontare il gigante', 'Dirlo al capo del villaggio']
    ]
  },
  'story1_choose1': {
    'prompts': [
      `%s decise che lo avrebbe detto a Marco. Lo prese in disparte e gli disse. "Guarda che il tuo amico Giovanni ha rubato il tuo aereo giocattolo". Marco si arrabbiò molto con Giovanni e decise di non vederlo mai più.  All'orsetto dispiacque molto. "Devo trovare un modo per risolvere i loro problemi. Mi aiuteresti? Devo parlare con Marco o con Giovanni?"`
    ],
    'params': ['name'],
    'suggestions': [
      ['Parlare con Marco', 'Parlare con Giovanni']
    ],
  },
  'story1_choose2': {
    'prompts': [
      `Il nostro orsetto %s con una scusa portò Giovanni in un'altra stanza e gli disse "Senti Giovanni ho visto che hai rubato un aereo al mio migliore amico. Devi restituirglielo." Giovanni negò di averlo rubato. Che fare? Continuare a parlargli o frugargli le tasche?`
    ],
    'params': ['name'],
    'suggestions': [
      ['Parlare', 'Frugare le tasche']
    ],
  },
  'story1_choose1_final1': {
    'prompts': [
      `L'orsetto caparbiamente decise di parlarne con il suo amico Marco. "Marco" gli disse "deve subito riappacificarti con Giovanni". "E perchè mai?" gli rispose Marco. "Perchè tutti hanno bisogno di una seconda possibilità" affermò allora %s. "Sono convinto che Giovanni è molto rammaricato e ti chiederà scusa". Marco accolse la richiesta del suo amico peluche e fece pace con l'amico. Da quel giorno Marco e Giovanni divennero ancora più amici e non litigarono mai più. `
    ]
  },
  'story1_choose1_final2': {
    'prompts': [
      `%s con coraggio andò a trovare a Giovanni e gli disse: "Tu e Marco dovete fare pace. Penso sia venuto il momento che tu gli chieda scusa". Giovanni che era molto dispiaciuto per quanto accaduto, decise di fare come suggerito da %s. Chiamò Marco e fecero subito pace. E da quel giorno furono inseparabili come tutti i buoni amici.`
    ],
    'params': ['name', 'name'],
  },
  'story1_choose2_final1': {
    'prompts': [
      `"Ascoltami Giovanni" gli disse %s. "Se non ti penti di quanto fatto e restituisci l'aereo, la tua amicizia con Marco finirà. Un aereo credimi non vale quanto un amico. Ridammelo. Potrai giocarci ogni volta che vorrai a casa di Marco". A quel punto Giovanni restituì l'aereo a Marco e gli disse: "Grazie, sei davvero un peluche molto intelligente. Voglio molto bene a Marco e questo aereo non varrà mai quanto il mio amico". E così grazie al coraggio del nostro orsetto peluche la giornata fu salva.`
    ],
    'params': ['name'],
  },
  'story1_choose2_final2': {
    'prompts': [
      `%s non avrebbe voluto rovistare nelle tasche di Giovanni, ma messo alle strette lo fece e si accorse, con gran stupore, che Giovanni non aveva con sè alcun aereo. Il nostro orsetto peluche si vergognò molto e chiese subito scusa a Giovanni di aver sospettato di lui. "Non preoccuparti" rispose Giovanni. "Apprezzo quanto hai fatto per il tuo amico Marco. Devi volergli molto bene e gliene voglio anche io. Per questo non gli ruberei mai nulla". Subito dopo l'orsetto e Giovanni tornarono da Marco ed insieme si misero a giocare con l'aereo da buoni amici.`
    ],
    'params': ['name'],
  },
  'story2_choose1': {
    'prompts': [
      `Il nostro eroe %s decise che avrebbe affrontato il gigante. Partì per il castello dei giganti che si trovava alla fine del bosco. Arrivato al castello cosa avrebbe dovuto fare %s? Bussare alla porta o introdursi di soppiatto?`
    ],
    'params': ['name', 'name'],
    'suggestions': [
      ['Bussare alla porta', "Introdursi di soppiatto"]
    ],
  },
  'story2_choose2': {
    'prompts': [
      `%s andò subito dal capo del villaggio a riferirgli quanto aveva scoperto. Il capo organizzò una spedizione per andare dal gigante e mise a capo della spedizione il nostro peluche. %s doveva decidere se andare dal gigante armati o con dei doni. Lo aiuteresti?`
    ],
    'params': ['name', 'name'],
    'suggestions': [
      ["Andare con le armi", "Andare con i doni"]
    ],
  },
  'story2_choose1_final1': {
    'prompts': [
      `Il nostro orsetto senza alcun timore con un grosso martello bussò alla porta dei giganti. "Chi è?" rispose la sentinella gigante. "Sono %s" rispose l'orsetto. La sentinella visto che il peluche era davvero molto piccolo sentiva la voce ma non riuscì a vedere %s. Subito al nostro eroe venne una grande idea. "Non riesci a vedermi perchè sono un fantasma. Se non riportate indietro il sole al villaggio dei peluche verrò ogni notte a svegliarvi e spaventarvi." disse furbamente %s. A quel punto i giganti molto impauriti andarono di corsa a riportare il sole al villaggio dei giganti. L'orsetto %s fu premiato con una medaglia per il suo coraggio.`
    ],
    'params': ['name'],
  },
  'story2_choose1_final2': {
    'prompts': [
      `%s bussò alla porta e si nascose, appena il gigante sentinella aprì la porta gli passò sotto le gambe ed entrò nel castello. Esplorò il castello finchè giunse alla stanza in cui avevano nascosto il sole. Mise gli occhiali da sole ed entrò e grazie ad una magia rimpicciolì il sole e lo mise nel suo borsello. Poi scappò dal castello e riportò indietro il sole al villaggio. Alla vista del sole tornò la gioia e tutti acclamarono il nostro eroe.`
    ],
    'params': ['name'],
  },
  'story2_choose2_final1': {
    'prompts': [
      `Decise che sarebbero andati alla grotta del gigante armati, così da intimorirlo. Lottarono fieramente con il gigante e riuscirono a metterlo in fuga, così entrarono nella caverna e ripreso il sole. Quando lo riportarono al villaggio tutti acclamarono %s che diventò l'avventuriero ufficiale del villaggio.`
    ],
    'params': ['name'],
  },
  'story2_choose2_final2': {
    'prompts': [
      `Gli avventurieri capitanati da  %s riempirono delle ceste di doni e partirono per andare alla grotta del gigante. Lì spiegarono al gigante come il loro villaggio fosse triste senza più il sole e che gli avrebbero regalato tutto il contenuto delle loro ceste se glielo avesse restituito. Il gigante accettò e restituì il sole ai coraggiosi peluche. Il gigante da allora diventò grande amico di %s e lo aiutò sempre nelle sue mille avventure.`
    ]
  },
};

exports.prompts = prompts;