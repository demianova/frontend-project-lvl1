#!/usr/bin/env node

import gameEngine from '../src/index.js';
import gcdGame, { gameRules } from '../src/games/brain-gcd.js';

gameEngine(gcdGame, gameRules);
