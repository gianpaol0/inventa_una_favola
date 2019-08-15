// Copyright 2019, Gianpaolo Altamura
/**
 * All the prompts used in the game (Italian only) for stories of knight character. Each prompts has a key
 * and multiple alternative variations that are selected by the fulfillment logic
 * to ensure that prompts are not repeated in sequence.
 */
const prompts = {
  'start': {
    'prompts': [
      `C'era una volta un prode cavaliere di nome %s. Due grandi minacce incombevano sul regno dei cavalieri, un terribile drago sputafuoco che bruciava i villaggi ed una malvagia strega che tramutava tutti gli abitanti del regno in statue. Quale delle due avventure avrebbe dovuto scegliere? Il drago o la strega?`,
      `Un giorno. Un cavaliere di nome %s che andava alla miniera d'oro di Valmot. La miniera si diceva fosse infestata dai fantasmi. Giunto alla miniera, il cavaliere si accorse che c'erano due strade all'interno della miniera. Dove andare? A destra o a sinistra? Aiutalo dicendogli dove andare`,
    ],
    'params': ['name'],
    'suggestions': [
      ['Drago', 'Strega'],
      ['Destra', 'Sinistra'],
    ]
  },
  'story1_choose1': {
    'prompts': [
      `%s decise che si sarebbe occupato del drago e partì alla volta della grotta incantata dove c'era la tana del pauroso drago. Giunto alla grotta si accorse che il drago dormire. Cosa doveva fare? Svegliarlo o colpirlo?`
    ],
    'params': ['name'],
    'suggestions': [
      ['Svegliarlo', 'Colpirlo']
    ]
  },
  'story1_choose2': {
    'prompts': [
      `"Affronterò la temibile strega" disse %s e partì verso il bosco oscuro dove viveva la strega. Arrivato al castello della strega, non sapeva che fare. "Devo scalare il castello o forzare la porta?".`
    ],
    'params': ['name'],
    'suggestions': [
      ['Scalare il castello', 'Forzare la porta']
    ]
  },
  'story1_choose1_final1': {
    'prompts': [
      `Il cavaliere %s svegliò il drago e lo affrontò in un terribile scontro. Fu uno scontro molto concitato da cui il cavaliere uscì vincitore. Il drago venne ferito più volte e scappò. Grazie a %s da quel giorno il drago non si vide mai più nel regno.`
    ],
    'params': ['name', 'name'],
    'finalConversation':true
  },
  'story1_choose1_final2': {
    'prompts': [
      `%s decise di colpire il drago mentre stava dormendo. Ma proprio mentre stava scagliando il colpo si accorse che il drago lo guardava piangendo. Allora %s fermò il colpo e disee al drago: "ti risparmio la vita ma tu da oggi dovrai essere amico del mio popolo". Il drago accettò e da allora divenne il guardiano del regno.`
    ],
    'params': ['name'],
    'finalConversation':true
  },
  'story1_choose2_final1': {
    'prompts': [
      `Il cavaliere %s scalò il castello ed entrò dalla torre più alta dove la malefica strega stava effettuando i suoi esperimenti diabolici. %s si avvicinò furtivamente e tramortì la strega, quindi le spezzo la bacchetta magica e la portò in prigione. Gli abitanti del regno fecero una grande festa quando seppero la notizia e il cavaliere venne nominato primo cavaliere direttamente dal re.`
    ],
    'params': ['name', 'name'],
    'finalConversation':true
  },
  'story1_choose2_final2': {
    'prompts': [
      `%s sfondò con grande abilità la porta del castello. La strega furiosa cercò di colpirlo con un incantesimo ma il cavaliere si buttò a terra e schivò l'incantesimo. Quindi %s scagliò dal suo arco una freccia che spezzò in due la bacchetta magica della strega. La strega a quel punto si arrese. Il re fu molto soddisfatto del lavoro di %s e gli regalò 1000 monete d'oro.`
    ],
    'params': ['name', 'name', 'name'],
    'finalConversation':true
  },
  'story2_choose1': {
    'prompts': [
      `Il nostro eroe prese la strada di destra e lì scoprì un macchinario che produceva urla di fantasmi. Capì allora che qualcuno per rubare l'oro della miniera aveva architettato l'imbroglio delle urla di fantasmi. Cosa doveva fare %s? Nascondersi ed attendere gli impostori o dirlo al re?`
    ],
    'params': ['name'],
    'suggestions': [
      ['Nascondersi', "Parlare con il re"]
    ]
  },
  'story2_choose2': {
    'prompts': [
      `%s andò sulla sinistra, dopo pochi passi si ritrovò circondato dai fantasmi di antichi cavalieri. Che fare? Arrendersi o combattere?`
    ],
    'params': ['name'],
    'suggestions': [
      ["Arrendersi", "Combattere"]
    ]
  },
  'story2_choose1_final1': {
    'prompts': [
      `%s decise di nascondersi ed attendere che arrivassero i ladri. Quando entrarono uscì fuori e li sgominò con grande destrezza. Una volta che li ebbe legati tutti, li condusse nelle prigioni del regno. Gli abitanti del regno furono molto felici ed organizzarono una festa in onore di %s.`
    ],
    'params': ['name', 'name'],
    'finalConversation':true
  },
  'story2_choose1_final2': {
    'prompts': [
      `%s tornò al castello e spiegò al re quanto aveva scoperto. Il re organizzò quindi una spedizione per arrestare gli impostori e %s fu ricompensato con una medaglia al valore.`
    ],
    'params': ['name', 'name'],
    'finalConversation':true
  },
  'story2_choose2_final1': {
    'prompts': [
      `%s decise di arrendersi ma i fantasmi gli spiegarono che non gli avrebbero fatto nulla di male. Erano tornati alle miniere per sconfiggere il grosso orco che le abitava. Il nostro eroe decise di aiutarli ed insieme sconfissero l'orrenda creatura. Le miniere erano salve grazie al coraggio di %s.`
    ],
    'params': ['name', 'name'],
    'finalConversation':true
  },
  'story2_choose2_final2': {
    'prompts': [
      `"Non mi arrenderò" disse %s e si scagliò senza paura contro i fantasmi. Il suo coraggio fu tale che i fantasmi scapparono dalla miniera e non si rividero mai più. Le gesta eroiche di %s riecheggiarono in tutto il regno ed ancora oggi i libri sono pieni delle avventure del nostro cavaliere.`
    ],
    'params': ['name'],
    'finalConversation':true
  },
};

exports.prompts = prompts;