import { z } from "zod";

const entrySchema = z.object({
  id: z.optional(z.string()),
  character_id: z.string(),
  title: z.string().nonempty(),
  content: z.optional(z.string()),
});

export { entrySchema };
export type Entry = z.infer<typeof entrySchema>;
