import { z } from 'zod';
import { ballSchema } from './balls';

export const autoSchema = z
  .object({
    humanPlayerLow: z.number().int().min(0),
    humanPlayerHigh: z.number().int().min(0),
    apron: z.boolean(),
  })
  .merge(ballSchema);

export type Auto = z.infer<typeof autoSchema>;
