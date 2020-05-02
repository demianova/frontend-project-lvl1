#!/usr/bin/env node

import gameEngine from '../src/index.js';
import evenGame, { gameRules } from '../src/games/brain-even.js';

gameEngine(evenGame, gameRules);
