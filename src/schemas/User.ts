import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  password: z.string().min(8),
  email: z.string().email(),
  profile_image: z.string().url(),
});

const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export { userSchema, userLoginSchema };
export type User = z.infer<typeof userSchema>;
