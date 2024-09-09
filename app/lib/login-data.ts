import { z } from "zod";

export const logInSchema = z.object({
  email: z.string().email().min(3),
  password: z.string().min(5).max(20),
  rememberMe: z.boolean().optional()
});

export type LoginData = z.infer<typeof logInSchema>;

export const emailSchema = z.object({
  email: z.string().email().min(3),
});

export type emailData = z.infer<typeof emailSchema>;

export const resetPasswordSchema = z
  .object({
    email: z.string().email().min(3),
    password: z.string().min(5).max(20),
    confirmPassword: z.string().min(5).max(20),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type resetPasswordData = z.infer<typeof resetPasswordSchema>;