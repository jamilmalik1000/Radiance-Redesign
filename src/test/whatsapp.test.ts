import { buildQuoteWhatsAppUrl, type QuoteInput } from "../lib/forms";

it("creates a WhatsApp technical-assessment message from quote data", () => {
  const data: QuoteInput = {
    customerType: "Business",
    propertyType: "Office",
    city: "Islamabad",
    bill: "PKR 75,000–200,000",
    service: "Solar energy",
    roofArea: "2,000 sq ft",
    backup: "Essential loads",
    name: "Test Customer",
    phone: "03001234567",
    email: "customer@example.com",
    contactMethod: "WhatsApp",
    message: "Please arrange a technical assessment.",
    consent: true,
    website: "",
  };
  const url = buildQuoteWhatsAppUrl(data);
  expect(url).toMatch(/^https:\/\/wa\.me\/923205422223\?text=/);
  const message = decodeURIComponent(url.split("?text=")[1]);
  expect(message).toContain("Customer type: Business");
  expect(message).toContain("City: Islamabad");
  expect(message).toContain("Name: Test Customer");
});
