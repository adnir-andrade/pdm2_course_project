import { z } from "zod";

const journalSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
});

export type Journal = z.infer<typeof journalSchema>;
