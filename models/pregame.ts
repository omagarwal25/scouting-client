import { z } from 'zod';

export const pregameSchema = z.object({
  preloadedBalls: z.boolean(),
});

export type Pregame = z.infer<typeof pregameSchema>;
