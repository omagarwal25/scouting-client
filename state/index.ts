import { Ball } from '../models/balls';
import { Game } from './../models/index';
import { atom } from 'jotai';
import { focusAtom } from 'jotai/optics';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultScore: Ball = {
  missed: 0,
  scoredHigh: 0,
  scoredLow: 0,
  intakeFloor: 0,
  intakeHuman: 0,
};

const initialValue: Game = {
  auto: {
    apron: false,
    humanPlayerHigh: 0,
    humanPlayerLow: 0,
    ...defaultScore,
  },
  teleop: {
    defense: false,
    penalties: false,
    ...defaultScore,
  },
  endgame: {
    climbSuccess: false,
    climbHeight: 'none',
  },
  gameInfo: {
    teamNumber: 0,
    matchNumber: 0,
    matchType: 'qualifier',
    scoutId: 1,
    teamColor: 'red',
  },
  other: {
    notes: '',
    rank: 1,
    scoutInitials: 'OA',
  },
  pregame: {
    preloadedBalls: false,
  },
};

export const gameAtom = atomWithStorage<Game>(
  'game',
  initialValue,
  createJSONStorage(() => AsyncStorage)
);
export const gameInfoAtom = focusAtom(gameAtom, (optic) =>
  optic.prop('gameInfo')
);
export const otherAtom = focusAtom(gameAtom, (optic) => optic.prop('other'));
export const pregameAtom = focusAtom(gameAtom, (optic) =>
  optic.prop('pregame')
);
export const endgameAtom = focusAtom(gameAtom, (optic) =>
  optic.prop('endgame')
);
export const teleopAtom = focusAtom(gameAtom, (optic) => optic.prop('teleop'));
export const autoAtom = focusAtom(gameAtom, (optic) => optic.prop('auto'));

export const resetGameAtom = atom(null, (_get, set, _update) => {
  set(gameAtom, initialValue);
});
