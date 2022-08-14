import { render, screen } from "@testing-library/react";

import { UserReservations } from "@/components/user/UserReservations";

test("it shows correct button text when purchasing tickets", async () => {
  render(<UserReservations userId={1} />);
  const button = await screen.findByRole("button", {
    name: /Purchase more tickets/i,
  });
  expect(button).toBeInTheDocument();
});

test("it shows 'No reservations' correct button text when purchasing tickets", async () => {
  render(<UserReservations userId={0} />);
  const button = await screen.findByRole("button", {
    name: /Purchase tickets/i,
  });
  const heading = screen.queryByRole("heading", { name: /your tickets/i });
  expect(button).toBeInTheDocument();
  expect(heading).not.toBeInTheDocument();
});
