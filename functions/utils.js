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

  userPromptsIndexArrayToUserPromptsArray: (userArray, promptsArray) => {
    let returnArray = [];
    userArray.forEach(element => {
      returnArray.push(promptsArray[element]);
    });

    return returnArray;
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
    if (character !== undefined && prompt !== 'story_final') {
      functionPrompts = functionPrompts[character];
      if(conv.user.storage.prompts[character] === undefined){
        conv.user.storage.prompts[character] = {};
      }
      userSession = conv.user.storage.prompts[character];
    }

    let index = 0;
    let promptChoosed = '';

    let availablePrompts = functionPrompts[prompt].prompts;
    // Select a new prompt by avoiding prompts used previously in the user sessions.
    if (userSession) {
      if (userSession[prompt]) {
        const userPromptsArray = module.exports.userPromptsIndexArrayToUserPromptsArray(userSession[prompt], availablePrompts);
        availablePrompts = availablePrompts.filter((word) => userPromptsArray.indexOf(word) < 0);
        console.log(availablePrompts);
      }
    } else {
      conv.user.storage.prompts = {};
    }
    // Persist the selected prompt in user sessions storage.
    if (Array.isArray(availablePrompts)) {
      // if no prompts reset the user sessions array...
      if (availablePrompts.length === 0) {
        availablePrompts = functionPrompts[prompt].prompts;
        userSession[prompt] = [];
      }
      if (availablePrompts.length > 0) {
        promptChoosed = module.exports.getRandomItem(availablePrompts);
        index = functionPrompts[prompt].prompts.indexOf(promptChoosed);
        if (userSession[prompt]) {
          userSession[prompt].push(index);
        } else {
          userSession[prompt] = [index];
        }
      }
    } 

    const returnObject = {};

    returnObject['prompt'] = functionPrompts[prompt].prompts[index];

    returnObject['index'] = index;

    returnObject['finalConversation'] = false;

    if(functionPrompts[prompt].finalConversation) {
      returnObject['finalConversation'] = true;
    }

    if (functionPrompts[prompt].suggestions) {
      returnObject['suggestions'] = functionPrompts[prompt].suggestions[index];
    }

    if (functionPrompts[prompt].params) {
      returnObject['params'] = functionPrompts[prompt].params;
    }


    return returnObject;
  }

};