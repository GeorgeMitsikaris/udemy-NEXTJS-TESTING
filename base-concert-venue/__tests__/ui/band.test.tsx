import { render, screen } from "@testing-library/react";

import BandPage from "@/pages/bands/[bandId]";

import { readFakeData } from "../__mocks__/fakeData/index";

test("Band component renders the correct band information", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandPage error={null} band={fakeBands[0]} />);
  const heading = screen.getByRole("heading", {
    name: "The Wandering Bunnies",
  });
  expect(heading).toBeInTheDocument();
});

test("Renders error if band is null", () => {
  render(<BandPage error="No band found" band={null} />);
  const heading = screen.getByRole("heading", {
    name: /Could not retrieve band data: No band found/i,
  });
  expect(heading).toBeInTheDocument();
});
