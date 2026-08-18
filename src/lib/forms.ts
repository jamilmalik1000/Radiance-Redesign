import { z } from "zod";
export const contactSchema = z.object({
  name: z.string().min(2, "Enter your name"),
  phone: z.string().min(7, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Tell us how we can help"),
  consent: z.literal(true, { error: "Consent is required" }),
  website: z.string().max(0).optional(),
});
export const quoteSchema = contactSchema.extend({
  customerType: z.string().min(1, "Select a customer type"),
  propertyType: z.string().min(1, "Select a property type"),
  city: z.string().min(2, "Enter your city"),
  bill: z.string().min(1, "Enter your monthly bill range"),
  service: z.string().min(1, "Select a service"),
  contactMethod: z.string().min(1, "Select a contact method"),
  roofArea: z.string().optional(),
  backup: z.string().optional(),
});
export type ContactInput = z.infer<typeof contactSchema>;
export type QuoteInput = z.infer<typeof quoteSchema>;
const quoteWhatsAppNumber = "923205422223";
export function buildQuoteWhatsAppUrl(data: QuoteInput) {
  const message = [
    "Hello Radiance Tek, I would like a technical assessment.",
    "",
    `Customer type: ${data.customerType}`,
    `Property / business type: ${data.propertyType}`,
    `City: ${data.city}`,
    `Monthly electricity bill: ${data.bill}`,
    `Required service: ${data.service}`,
    `Available roof area: ${data.roofArea || "Not provided"}`,
    `Backup requirement: ${data.backup || "Not provided"}`,
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Preferred contact method: ${data.contactMethod}`,
    `Message: ${data.message}`,
  ].join("\n");
  return `https://wa.me/${quoteWhatsAppNumber}?text=${encodeURIComponent(message)}`;
}
export interface FormService {
  submit<T extends Record<string, unknown>>(
    kind: "contact" | "quote",
    data: T,
  ): Promise<{ id: string }>;
}
export const mockFormService: FormService = {
  async submit(_kind, data) {
    await new Promise((r) => setTimeout(r, 500));
    if (data.website) throw new Error("Unable to submit");
    return { id: crypto.randomUUID() };
  },
};
