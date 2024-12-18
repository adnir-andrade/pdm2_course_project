import { z } from "zod";

const characterSchema = z.object({
  id: z.string(),
  player_id: z.string(),
  name: z.string().nonempty(),
  level: z.number(),
  gender: z.string().nullish(),
  race_id: z.number(),
  klass_id: z.number(),
  campaign_id: z.string(),
});

export { characterSchema };
export type Character = z.infer<typeof characterSchema>;
