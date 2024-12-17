import { z } from "zod";

const campaignSchema = z.object({
  id: z.string(),
  dm_id: z.string(),
  name: z.string(),
  next_session: z.date(),
});

export { campaignSchema };
export type Campaign = z.infer<typeof campaignSchema>;
