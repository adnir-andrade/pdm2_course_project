import { z } from "zod";

const itemSchema = z.object({
  id: z.string(),
  name: z.string(),
  quantity: z.number().int().positive(),
  weight: z.number(),
  character_id: z.string(),
});

export { itemSchema };
export type Item = z.infer<typeof itemSchema>;
