import { z } from 'zod';
import { ballSchema } from './balls';

export const teleopSchema = z
  .object({
    defense: z.boolean(),
    penalties: z.boolean(),
  })
  .merge(ballSchema);

export type Teleop = z.infer<typeof teleopSchema>;
