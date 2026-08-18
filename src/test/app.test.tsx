import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "../app/App";
const mount = (path = "/") =>
  render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    </HelmetProvider>,
  );
describe("critical routes and navigation", () => {
  it("renders home CTA links", async () => {
    mount();
    expect(
      await screen.findByRole("heading", { name: /Power today/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Get a free consultation/i }),
    ).toHaveAttribute("href", "/request-quote");
  });
  it("renders service detail", async () => {
    mount("/services/fire-safety");
    expect(
      await screen.findByRole("heading", {
        name: "Fire safety & firefighting",
      }),
    ).toBeInTheDocument();
  });
  it("renders custom 404", async () => {
    mount("/missing-route");
    expect(
      await screen.findByRole("heading", { name: /circuit ends/i }),
    ).toBeInTheDocument();
  });
  it("opens and closes mobile navigation", async () => {
    const user = userEvent.setup();
    mount();
    await user.click(await screen.findByRole("button", { name: "Open menu" }));
    expect(
      screen.getByRole("dialog", { name: "Navigation" }),
    ).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Close menu" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
  it("exposes verified call and WhatsApp actions", async () => {
    mount("/contact");
    expect(
      await screen.findAllByRole("link", { name: /0322 5566555/ }),
    ).not.toHaveLength(0);
    expect(
      screen.getByRole("link", { name: /Chat with Radiance Tek on WhatsApp/ }),
    ).toHaveAttribute("href", expect.stringContaining("wa.me/923205422223"));
  });
});
