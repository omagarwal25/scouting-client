import { z } from 'zod';

export const gameInfoSchema = z.object({
  scoutId: z.enum(['Red1', 'Red2', 'Red3', 'Blue1', 'Blue2', 'Blue3']),
  matchType: z.enum(['qualifier', 'playoff', 'practice']),
  matchNumber: z.number().nonnegative(),
  teamColor: z.enum(['blue', 'red']),
  teamNumber: z.number().min(0).int(),
});

export type GameInfo = z.infer<typeof gameInfoSchema>;
