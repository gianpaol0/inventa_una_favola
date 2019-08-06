// Copyright 2019, Gianpaolo Altamura
/**
 * All the prompts used in the game (Italian only) for stories of knight character. Each prompts has a key
 * and multiple alternative variations that are selected by the fulfillment logic
 * to ensure that prompts are not repeated in sequence.
 */
const labels = {
  'start': [
    `C'era una volta un prode cavaliere di nome %s. Due grandi minacce incombevano sul regno dei cavalieri, un terribile drago sputafuoco che bruciava i villaggi ed una malvagia strega che tramutava tutti gli abitanti del regno in statue. Quale delle due avventure avrebbe dovuto scegliere? Il drago o la strega?`,
    `Un giorno. Un cavaliere di nome %s era alla ricerca di una miniera d'oro che era infestata dai fantasmi. Riuscì a trovare la miniera ma si accorse che c'era due strade all'interno della miniera. Dove andare? A destra o a sinistra? Aiutalo dicendogli dove andare`,
  ],
  'story1_choose1': [
    `%s decise che si sarebbe occupato del drago e partì alla volta della grotta incantata dove c'era la tana del pauroso drago. Giunto alla grotta si accorse che il drago dormire. Cosa doveva fare? Svegliarlo o colpirlo?`
  ],
  'story1_choose2': [
    `"Affronterò la temibile strega" disse %s e partì verso il bosco oscuro dove viveva la strega. Arrivato al castello della strega, non sapeva che fare. "Devo scalare il castello o forzare la porta?".`
  ],
  'story1_choose1_final1': [
    `Il cavaliere %s svegliò il drago e lo affrontò in un terribile scontro. Fu uno scontro molto concitato da cui il cavaliere uscì vincitore. Il drago venne ferito più volte e scappò. Grazie a %s da quel giorno il drago non si vide mai più nel regno.`
  ],
  'story1_choose1_final2': [
    `%s decise di colpire il drago mentre stava dormendo. Ma proprio mentre stava scagliando il colpo si accorse che il drago lo guardava piangendo. Allora %s fermò il colpo e disee al drago: "ti risparmio la vita ma tu da oggi dovrai essere amico del mio popolo". Il drago accettò e da allora divenne il guardiano del regno.`
  ],
  'story1_choose2_final1': [
    `Il cavaliere %s scalò il castello ed entrò dalla torre più alta dove la malefica strega stava effettuando i suoi esperimenti diabolici. %s si avvicinò furtivamente e tramortì la strega, quindi le spezzo la bacchetta magica e la portò in prigione. Gli abitanti del regno fecero una grande festa quando seppero la notizia e il cavaliere venne nominato primo cavaliere direttamente dal re.`
  ],
  'story1_choose2_final2': [
    `%s sfondò con grande abilità la porta del castello. La strega furiosa cercò di colpirlo con un incantesimo ma il cavaliere si buttò a terra e schivò l'incantesimo. Quindi %s scagliò dal suo arco una freccia che spezzò in due la bacchetta magica della strega. La strega a quel punto si arrese. Il re fu molto soddisfatto del lavoro di %s e gli regalò 1000 monete d'oro.`
  ],
  'story2_choose1': [
    `Il nostro eroe prese la strada di destra e lì scoprì un macchinario che produceva urla di fantasmi. Capì allora che qualcuno per rubare l'oro della miniera aveva finto. Cosa doveva fare? Nascondersi ed attendere gli impostori o dirlo al re?`
  ],
  'story2_choose2': [
    `%s andò sulla sinistra, dopo pochi passi si ritrovò circondato dai fantasmi di antichi cavalieri. Che fare? Arrendersi o combattere?`
  ],
  'story2_choose1_final1': [
    `%s decise di nascondersi ed attendere che arrivassero i ladri. Quando entrarono uscì fuori e li sgominò con grande destrezza. Una volta che li ebbe legati tutti, li condusse nelle prigioni del regno. Gli abitanti del regno furono molto felici ed organizzarono una festa in onore di %s.`
  ],
  'story2_choose1_final2': [
    `%s tornò al castello e spiegò al re quanto aveva scoperto. Il re organizzò quindi una spedizione per arrestare gli impostori e %s fu ricompensato con una medaglia al valore.`
  ],
  'story2_choose2_final1': [
    `%s decise di arrendersi ma i fantasmi gli spiegarono che non gli avrebbero fatto nulla di male. Erano tornati alle miniere per sconfiggere il grosso orco che le abitava. Il nostro eroe decise di aiutarli ed insieme sconfissero l'orrenda creatura. Le miniere erano salve grazie al coraggio di %s.`
  ],
  'story2_choose2_final2': [
    `"Non mi arrenderò" disse %s e si scagliò senza paura contro i fantasmi. Il suo coraggio fu tale che i fantasmi scapparono dalla miniera e non si rividero mai più. Le gesta eroiche di %s riecheggiarono in tutto il regno ed ancora oggi i libri sono pieni delle avventure del nostro cavaliere.`
  ],
};

const suggestions = {
  'start': [
    ['Drago', 'Strega'],
    ['Destra', 'Sinistra'],
  ],
  'story1_choose1': [
    ['Svegliarlo', 'Colpirlo']
  ],
  'story1_choose2': [
    ['Scalare il castello', 'Forzare la porta']
  ],
  'story2_choose1': [
    ['Nascondersi', "Parlare con il re"]
  ],
  'story2_choose2': [
    ["Arrendersi", "Combattere"]
  ],
};


exports.knight_labels = labels;
exports.knight_suggestions = suggestions;