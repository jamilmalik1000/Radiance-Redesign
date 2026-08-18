import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm, QuoteForm } from "../components/forms/Forms";
describe("form validation", () => {
  it("announces contact errors", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.click(screen.getByRole("button", { name: "Send enquiry" }));
    expect(await screen.findByText("Enter your name")).toBeInTheDocument();
    expect(screen.getByText("Consent is required")).toBeInTheDocument();
  });
  it("validates quote fields", async () => {
    const user = userEvent.setup();
    render(<QuoteForm />);
    await user.click(
      screen.getByRole("button", { name: "Request technical assessment" }),
    );
    expect(
      await screen.findByText("Select a customer type"),
    ).toBeInTheDocument();
    expect(screen.getByText("Enter your city")).toBeInTheDocument();
  });
});
