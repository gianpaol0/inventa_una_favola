// Copyright 2019, Gianpaolo Altamura
/**
 * All the prompts used in the game (Italian only) for stories of cowboy character. Each prompts has a key
 * and multiple alternative variations that are selected by the fulfillment logic
 * to ensure that prompts are not repeated in sequence.
 */
const prompts = {
  'start': {
    'prompts': [
      `Era un pomeriggio torrido ed il cowboy %s si aggirava per le strade di Far City, quando vide lo sceriffo in pericolo. Cosa doveva fare %s? Aiutare lo sceriffo o continuare?`,
      `C'era una volta il cowboy %s. Quel giorno %s aveva voglia di una nuova avventura. Dove posso iniziare la mia avventura? Mi aiuteresti? Vado all'accampamento degli indiani o alla città fantasma?`,
    ],
    'params': ['name', 'name'],
    'suggestions': [
      ['Aiutare lo sceriffo', 'Continuare la strada'],
      ['Accampamento Indiani', 'Città fantasma'],
    ]
  },
  'story1_choose1': {
    'prompts': [
      `Lo sceriffo era stato attaccato dai tre terribili banditi Dalton. %s decise di aiutare lo sceriffo ma non sapeva come fare. "Aiutami"."Devo attirare la loro attenzione o avvicinarmi furtivamente?"`
    ],
    'params': ['name'],
    'suggestions': [
      ["Attirare l'attenzione", 'Avvicinarsi furtivamente']
    ]
  },
  'story1_choose2': {
    'prompts': [
      `Lo sceriffo aveva perduto il suo cavallo, ma %s sapeva benissimo che lo sceriffo era abbastanza in gamba da cavarsela da solo e proseguì il proprio cammino. Ma dopo qualche metro i fratelli Cattivus gli intimarono di alzare le mani e gettare la pistola. Cosa fare obbedire ed arrendersi o combattere?`
    ],
    'params': ['name'],
    'suggestions': [
      ['Arrendersi', 'Combattere']
    ]
  },
  'story1_choose1_final1': {
    'prompts': [
      `"Ciao ragazzi sono qui per salvare lo sceriffo" disse %s. I Dalton non ebbero il tempo di girarsi che il cowboy %s li disarmò sparando sulle loro pistole. Lo sceriffo ringraziò %s nominandolo vicesceriffo e da allora diventarono ottimi amici.`
    ],
    'params': ['name', 'name', 'name'],
    'finalConversation':true
  },
  'story1_choose1_final2': {
    'prompts': [
      `%s si avvicinò furtivamente alle spalle dei banditi e con l'aiuto dello sceriffo mise fuori combattimento i Dalton. "Bel lavoro. Sei il mio degno successore" disse lo sceriffo e gli regalò la propria stella. Così il cowboy %s divenne il nuovo sceriffo.`
    ],
    'params': ['name', 'name'],
    'finalConversation':true
  },
  'story1_choose2_final1': {
    'prompts': [
      `"Va bene. Mi arrendo" disse %s. I fratelli Cattivus lo legarono ad un albero e chissà cosa gli avrebbero fatto se non fosse intervenuto lo sceriffo con i suoi uomini. Alla vista dello sceriffo e dei suoi uomini i fratelli Cattivus si arresero. "Grazie sceriffo per l'aiuto" disse %s che poi si scusò per non averlo aiutato a ritrovare il cavallo. "Non è stato un bel gesto il tuo, ma ti perdono." disse lo sceriffo. "La prossima volta sarai più coraggioso".`
    ],
    'params': ['name', 'name'],
    'finalConversation':true
  },
  'story1_choose2_final2': {
    'prompts': [
      `%s estrasse la pistola in un battibaleno e mise in fuga i malviventi. Nella fretta di fuggire i banditi dimenticarono il cavallo dello sceriffo che avevano rubato. Il cowboy %s restituì subito il cavallo allo sceriffo, che lo ricompensò con un nuovo cappello.`
    ],
    'params': ['name', 'name'],
    'finalConversation':true
  },
  'story2_choose1': {
    'prompts': [
      `Il cowboy %s si diresse all'accampamento degli indiani. Il capo del villaggio Toro Coraggioso, era un suo grande amico e gli chiese di andare a caccia con lui. Cosa deve fare il nostro eroe? Andare a caccia con Toro Coraggioso o restare all'accampamento degli indiani?`
    ],
    'params': ['name'],
    'suggestions': [
      ['Andare a caccia', "Restare all'accampamento"]
    ]
  },
  'story2_choose2': {
    'prompts': [
      `"Bene" disse %s "mi dirigerò alla città fantasma". Arrivato alla città fantasma vide un gruppo di briganti che avevano catturato un indiano. Come poteva salvarlo? Doveva chiamare rinforzi o attaccare in solitaria?`
    ],
    'params': ['name'],
    'suggestions': [
      ["Chiamare rinforzi", "Attaccare in solitaria"]
    ]
  },
  'story2_choose1_final1': {
    'prompts': [
      `Mentre erano a caccia un grosso orso attaccò alle spalle Toro Coraggioso. %s si lanciò a tutta velocità e riuscì a frapporsi tra l'orso e l'amico. Stava per sparargli quando Toro Coraggioso lo fermò. "Ogni creatura del mondo, merita rispetto" disse l'indiano, che sparando in aria fece fuggire il grosso animale. Fu una grande avventura che fortunatamente terminò bene.`
    ],
    'params': ['name'],
    'finalConversation':true
  },
  'story2_choose1_final2': {
    'prompts': [
      `%s decise di restare nell'accampamento a fare la guardia. Durante la notte un gruppo di ladri di cavalli penetrò nell'accampamento per fare razzia dei cavalli. Ma il nostro eroe con grande coraggio combattè contro i ladri mettendoli in fuga. Toro Coraggioso al rientro della caccia volle premiare il coraggio dell'amico con una grande festa.`
    ],
    'params': ['name'],
    'finalConversation':true
  },
  'story2_choose2_final1': {
    'prompts': [
      `%s andò a chiamare gli amici della sua banda e tornarono insieme alla città fantasma. Lo scontro con i briganti fu duro e lungo ma alla fine grazie anche all'aiuto della sua banda, il cowboy %s ebbe la meglio. L'indiano lo ringraziò moltissimo e volle donargli dei nuovi stivali in segno di riconoscenza.`
    ],
    'params': ['name', 'name'],
    'finalConversation':true
  },
  'story2_choose2_final2': {
    'prompts': [
      `%s era la pistola più veloce del West ed anche quel giorno lo dimostrò. Estrasse la pistola in un battibaleno e disarmò i briganti. L'indiano fece i complimenti a %s e decise che da quel giorno lo avrebbe aiutato in ogni sua avventura. E così da quel giorno %s e l'indiano Toro Coraggioso divennero grandi amici.`
    ],
    'params': ['name', 'name', 'name'],
    'finalConversation':true
  }
};

exports.prompts = prompts;