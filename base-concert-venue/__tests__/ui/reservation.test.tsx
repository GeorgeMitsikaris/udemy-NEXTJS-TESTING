import { render, screen } from "@testing-library/react";

import { Reservation } from "@/components/reservations/Reservation";

test("test displays the correct number of seats left", async () => {
  render(<Reservation showId={0} submitPurchase={jest.fn()} />);
  const heading = await screen.findByRole("heading", {
    name: /10 seats left/i,
  });
  expect(heading).toBeInTheDocument();
});

test("displays 'Show is sold out!' and doesn't renders button when there are no seats available", async () => {
  render(<Reservation showId={1} submitPurchase={jest.fn()} />);
  const heading = await screen.findByRole("heading", {
    name: /Show is sold out!/i,
  });
  const button = screen.queryByRole("button", { name: /purchase/i });
  expect(heading).toBeInTheDocument();
  expect(button).not.toBeInTheDocument();
});
