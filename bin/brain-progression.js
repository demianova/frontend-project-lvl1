#!/usr/bin/env node

import gameEngine from '../src/index.js';
import progressionGame, { gameRules } from '../src/games/brain-progression.js';

gameEngine(progressionGame, gameRules);
