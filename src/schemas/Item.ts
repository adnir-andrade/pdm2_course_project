import { z } from "zod";

const itemSchema = z.object({
  id: z.number(),
  name: z.string(),
  quantity: z.number(),
  weight: z.number(),
});

export type Item = z.infer<typeof itemSchema>;
