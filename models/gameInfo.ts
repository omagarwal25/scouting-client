import { z } from 'zod';

export const gameInfoSchema = z.object({
  scoutId: z.number().min(1).max(6),
  matchType: z.enum(['qualifier', 'playoff', 'practice']),
  matchNumber: z.number().nonnegative(),
  teamColor: z.enum(['blue', 'red']),
  teamNumber: z.number().min(0).int(),
});

export type GameInfo = z.infer<typeof gameInfoSchema>;
