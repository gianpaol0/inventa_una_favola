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

module.exports = {

  // Utility to get a random item from an array.
  getRandomItem: (array, index) => {
    index = Math.floor(Math.random() * (array.length));
    return array[index];
  },

  // Utility to get a random prompt without sequential repeats.
  getRandomPrompt: (conv, prompt, index) => {
    
    let prompts = prompts;

    let userSession =  conv.user.storage.prompts;

    let character = conv.data.character;
    // logger.debug(`getRandomPrompt=${prompt}`);
    if ( character !== undefined) { 
      prompts = prompts[character];
      userSession = userSession[character];
    }

    index = 0;
    let availablePrompts = prompts[prompt];
    // Select a new prompt by avoiding prompts used previously in the user sessions.
    if (userSession) {
      if (typeof (userSession[prompt]) !== 'undefined') {
        availablePrompts = availablePrompts.filter((word) => word !== userSession[prompt]);
      }
    } else {
      userSession = {};
    }
    // Persist the selected prompt in user sessions storage.
    if (Array.isArray(availablePrompts)) {
      // if no prompts reset the user sessions array...
      if (availablePrompts.length === 0) {
        availablePrompts = prompts[prompt];
        userSession[prompt] = {};
      }
      if (availablePrompts.length > 0) {
        userSession[prompt] = module.exports.getRandomItem(availablePrompts, index);
      } else {
        userSession[prompt] = prompts[prompt][0];
      }
    } else {
      userSession[prompt] = availablePrompts;
    }
    return userSession[prompt];
  }

};