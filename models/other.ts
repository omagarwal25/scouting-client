import { z } from 'zod';

export const otherSchema = z.object({
  scoutInitials: z.string().regex(/^[a-z]{1,5}$/i),
  rank: z.number().int().min(1).max(10),
});

export type Other = z.infer<typeof otherSchema>;
