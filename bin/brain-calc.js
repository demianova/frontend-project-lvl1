#!/usr/bin/env node

import gameEngine from '../src/index.js';
import calcGame, { gameRules } from '../src/games/brain-calc.js';

gameEngine(calcGame, gameRules);
