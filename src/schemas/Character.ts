import { z } from "zod";

const characterSchema = z.object({
  id: z.number(),
  player_id: z.number(),
  name: z.string().nonempty(),
  level: z.number(),
  gender: z.string().nullish(),
  race_id: z.number(),
  klass_id: z.number(),
});

export { characterSchema };
export type Character = z.infer<typeof characterSchema>;
