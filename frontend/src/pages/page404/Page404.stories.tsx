// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import Page404 from "./Page404";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const meta = {
  title: "Pages/Page 404",
  component: Page404,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Story />} />
        </Routes>
      </BrowserRouter>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Page404>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {},
};
