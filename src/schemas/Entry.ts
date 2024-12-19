import { z } from "zod";

const entrySchema = z.object({
  id: z.string(),
  character_id: z.string(),
  title: z.string(),
  content: z.string(),
});

export { entrySchema };
export type Entry = z.infer<typeof entrySchema>;
