import { z } from 'zod';

const requiredString = z.string().min(1, 'Required');

export const contactSchema = z.object({
  name: requiredString,
  email: requiredString.email('Invalid Email'),
  phoneNumber: requiredString.regex(/^\d{10}$/, 'Phone number must be 10 digits'),
  service: requiredString,
  message: z.string(),
});

