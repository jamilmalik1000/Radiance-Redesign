import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  ProjectShowcase,
  TestimonialCarousel,
} from "../components/sections/InteractiveSections";

describe("interactive content", () => {
  it("filters project demonstration modules", async () => {
    const user = userEvent.setup();
    render(<ProjectShowcase />);
    expect(
      screen.getAllByText("Case study awaiting verification"),
    ).toHaveLength(3);
    await user.click(screen.getByRole("button", { name: "Commercial" }));
    expect(
      screen.getAllByText("Case study awaiting verification"),
    ).toHaveLength(1);
    expect(screen.getAllByText("Commercial")).toHaveLength(2);
  });
  it("moves through testimonials with explicit controls", async () => {
    const user = userEvent.setup();
    render(<TestimonialCarousel />);
    expect(screen.getByText("Syed Owais Bokhari")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Next testimonial" }));
    expect(screen.getByText("Asif Hussain")).toBeInTheDocument();
  });
});
