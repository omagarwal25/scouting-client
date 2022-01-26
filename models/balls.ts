import { z } from 'zod';

export const ballSchema = z.object({
  missed: z.number().int().min(0),
  scoredLow: z.number().int().min(0),
  scoredHigh: z.number().int().min(0),
  intakeFloor: z.number().int().min(0),
  intakeHuman: z.number().int().min(0),
});

export type Ball = z.infer<typeof ballSchema>;
