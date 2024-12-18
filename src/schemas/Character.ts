import { z } from "zod";

const characterSchema = z.object({
  id: z.optional(z.string()),
  player_id: z.string(),
  name: z.string().nonempty(),
  level: z.number(),
  gender: z.optional(z.string()),
  race_id: z.string(),
  klass_id: z.string(),
  campaign_id: z.string(),
});

export { characterSchema };
export type Character = z.infer<typeof characterSchema>;
