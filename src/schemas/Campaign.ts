import { z } from "zod";

const campaignSchema = z.object({
  id: z.number(),
  dm_id: z.number(),
  name: z.string(),
  next_session: z.date(),
});

export type Campaign = z.infer<typeof campaignSchema>;
