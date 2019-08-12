// Copyright 2019, Gianpaolo Altamura
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

/**
 * Utility functions.
 */
// Load all the user prompts.
const prompts = require('./prompts').prompts;

const character = {
  'cowboy': 'cowboy',
  'orsetto di peluche': 'peluche',
  'cavaliere': 'knight'
};

module.exports = {
  characterEntityToCharacter: (characterEntity) => {
    return character[characterEntity];
  },
  // Utility to get a random item from an array.
  getRandomItem: (array) => {
    
    return  array[Math.floor(Math.random() * (array.length))];
  },

  // Utility to get a random prompt without sequential repeats.
  getRandomPrompt: (conv, prompt) => {
    let functionPrompts = prompts;

    if(conv.user.storage.prompts === undefined){
      conv.user.storage.prompts = {};
    }
    let userSession = conv.user.storage.prompts;
    
    let character = conv.data.character;
    
    // logger.debug(`getRandomPrompt=${prompt}`);
    if (character !== undefined) {
      functionPrompts = functionPrompts[character];
      if(conv.user.storage.prompts[character] === undefined){
        conv.user.storage.prompts[character] = {};
      }
      userSession = conv.user.storage.prompts[character];
    }

    let index = 0;

    let availablePrompts = functionPrompts[prompt].prompts;
    // Select a new prompt by avoiding prompts used previously in the user sessions.
    if (userSession) {
      if (typeof (userSession[prompt]) !== 'undefined') {
        availablePrompts = availablePrompts.filter((word) => word !== userSession[prompt]);
      }
    } else {
      conv.user.storage.prompts = {};
    }
    // Persist the selected prompt in user sessions storage.
    if (Array.isArray(availablePrompts)) {
      // if no prompts reset the user sessions array...
      if (availablePrompts.length === 0) {
        availablePrompts = functionPrompts[prompt].prompts;
        userSession[prompt] = {};
      }
      if (availablePrompts.length > 0) {
        let randomItem = module.exports.getRandomItem(availablePrompts);
        userSession[prompt] = randomItem;
        index = functionPrompts[prompt].prompts.indexOf(randomItem);
      } else {
        userSession[prompt] = functionPrompts[prompt].prompts[0];
      }
    } else {
      userSession[prompt] = availablePrompts;
    }

    const returnObject = {};

    returnObject['prompt'] = userSession[prompt];

    returnObject['index'] = index;

    if (functionPrompts[prompt].suggestions) {
      returnObject['suggestions'] = functionPrompts[prompt].suggestions[index];
    }

    if (functionPrompts[prompt].params) {
      returnObject['params'] = functionPrompts[prompt].params;
    }


    return returnObject;
  }

};