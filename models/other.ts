import { z } from 'zod';

export const otherSchema = z.object({
  scoutInitials: z.string().max(5),
  rank: z.number().int().min(1).max(4),
  notes: z.string(),
});

export type Other = z.infer<typeof otherSchema>;
