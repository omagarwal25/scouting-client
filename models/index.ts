import { z } from 'zod';

import { gameInfoSchema } from './gameInfo';
import { autoSchema } from './auto';
import { endgameSchema } from './endgame';
import { otherSchema } from './other';
import { pregameSchema } from './pregame';
import { ballSchema } from './balls';
import { teleopSchema } from './teleop';

export * from './auto';
export * from './endgame';
export * from './gameInfo';
export * from './other';
export * from './pregame';
export * from './balls';
export * from './teleop';

export const gameSchema = z.object({
  auto: autoSchema,
  endgame: endgameSchema,
  gameInfo: gameInfoSchema,
  other: otherSchema,
  pregame: pregameSchema,
  teleop: teleopSchema,
});

export type Game = z.infer<typeof gameSchema>;
