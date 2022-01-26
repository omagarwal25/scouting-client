import { z } from 'zod';

export const endgameSchema = z.object({
  climbSuccess: z.boolean(),
  climbHeight: z
    .enum(['none', 'low', 'middle', 'high', 'traversal'])
    .default('none'),
});

export type Endgame = z.infer<typeof endgameSchema>;
