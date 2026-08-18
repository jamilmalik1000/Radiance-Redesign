import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  contactSchema,
  quoteSchema,
  mockFormService,
  buildQuoteWhatsAppUrl,
  type ContactInput,
  type QuoteInput,
} from "../../lib/forms";
const Field = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <label>
    <span>{label}</span>
    {children}
    {error && <small role="alert">{error}</small>}
  </label>
);
export function ContactForm() {
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });
  const submit = async (d: ContactInput) => {
    try {
      await mockFormService.submit("contact", d);
      setStatus(
        "Thanks—your demonstration enquiry was captured locally. No message was sent.",
      );
      reset();
    } catch {
      setStatus("Something went wrong. Please call or use WhatsApp.");
    }
  };
  return (
    <form onSubmit={handleSubmit(submit)} noValidate>
      <div className="form-grid">
        <Field label="Name" error={errors.name?.message}>
          <input {...register("name")} />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input inputMode="tel" {...register("phone")} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input type="email" {...register("email")} />
        </Field>
        <Field label="How can we help?" error={errors.message?.message}>
          <textarea {...register("message")} />
        </Field>
      </div>
      <input
        className="honeypot"
        tabIndex={-1}
        autoComplete="off"
        {...register("website")}
      />
      <label className="check">
        <input type="checkbox" {...register("consent")} /> I consent to being
        contacted about this enquiry.
      </label>
      {errors.consent && <small role="alert">{errors.consent.message}</small>}
      <button disabled={isSubmitting} className="submit" type="submit">
        {isSubmitting ? "Sending…" : "Send enquiry"}
      </button>
      <p aria-live="polite">{status}</p>
    </form>
  );
}
const opts = (values: string[]) =>
  values.map((v) => (
    <option key={v} value={v}>
      {v}
    </option>
  ));
export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteInput>({ resolver: zodResolver(quoteSchema) });
  const submit = async (d: QuoteInput) => {
    try {
      setStatus(
        "Opening WhatsApp with your assessment details. Review the message and press Send to deliver it.",
      );
      window.location.assign(buildQuoteWhatsAppUrl(d));
    } catch {
      setStatus("Submission failed. Please use Call or WhatsApp.");
    }
  };
  return (
    <form onSubmit={handleSubmit(submit)} noValidate>
      <div className="form-grid">
        <Field label="Customer type" error={errors.customerType?.message}>
          <select defaultValue="" {...register("customerType")}>
            <option value="" disabled>
              Select
            </option>
            {opts(["Homeowner", "Business", "Industrial", "Agricultural"])}
          </select>
        </Field>
        <Field
          label="Property or business type"
          error={errors.propertyType?.message}
        >
          <input {...register("propertyType")} />
        </Field>
        <Field label="City" error={errors.city?.message}>
          <input {...register("city")} />
        </Field>
        <Field
          label="Average monthly electricity bill"
          error={errors.bill?.message}
        >
          <select defaultValue="" {...register("bill")}>
            <option value="" disabled>
              Select range
            </option>
            {opts([
              "Under PKR 25,000",
              "PKR 25,000–75,000",
              "PKR 75,000–200,000",
              "Above PKR 200,000",
            ])}
          </select>
        </Field>
        {!compact && (
          <>
            <Field label="Available roof area (optional)">
              <input {...register("roofArea")} />
            </Field>
            <Field label="Backup requirement (optional)">
              <select {...register("backup")}>
                <option value="">Select</option>
                {opts([
                  "No backup",
                  "Essential loads",
                  "Extended backup",
                  "Not sure",
                ])}
              </select>
            </Field>
          </>
        )}
        <Field label="Required service" error={errors.service?.message}>
          <select defaultValue="" {...register("service")}>
            <option value="" disabled>
              Select
            </option>
            {opts([
              "Solar energy",
              "Energy storage",
              "EV charging",
              "Security & access control",
              "Smart-home automation",
              "Fire safety",
            ])}
          </select>
        </Field>
        <Field label="Name" error={errors.name?.message}>
          <input {...register("name")} />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input inputMode="tel" {...register("phone")} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input type="email" {...register("email")} />
        </Field>
        <Field
          label="Preferred contact method"
          error={errors.contactMethod?.message}
        >
          <select defaultValue="" {...register("contactMethod")}>
            <option value="" disabled>
              Select
            </option>
            {opts(["Phone", "WhatsApp", "Email"])}
          </select>
        </Field>
        <Field label="Message" error={errors.message?.message}>
          <textarea {...register("message")} />
        </Field>
      </div>
      <input className="honeypot" tabIndex={-1} {...register("website")} />
      <label className="check">
        <input type="checkbox" {...register("consent")} /> I consent to being
        contacted about this enquiry.
      </label>
      {errors.consent && <small role="alert">{errors.consent.message}</small>}
      <button disabled={isSubmitting} className="submit" type="submit">
        {isSubmitting ? "Preparing…" : "Request technical assessment"}
      </button>
      <p className="form-status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
