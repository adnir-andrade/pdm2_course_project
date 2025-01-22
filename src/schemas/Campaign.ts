import { z } from "zod";

const campaignSchema = z.object({
  id: z.optional(z.string()),
  dm_id: z.string(),
  name: z.string(),
  next_session: z.date().optional(),
});

export { campaignSchema };
export type Campaign = z.infer<typeof campaignSchema>;
