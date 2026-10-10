import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { App } from "./App";

const meta = {
  component: App,
  tags: ["ai-generated"],
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    const button = canvas.getByRole("button", { name: /count is/i });
    await expect(button).toBeVisible();
  },
};

export const CssCheck: Story = {
  play: async ({ canvas }) => {
    const button = canvas.getByRole("button", { name: /count is/i });
    // Button uses var(--accent) color and var(--accent-bg) background
    // These CSS variables must be defined in index.css
    const bgColor = getComputedStyle(button).backgroundColor;
    const textColor = getComputedStyle(button).color;
    await expect(bgColor).not.toBe("rgba(0, 0, 0, 0)");
    await expect(textColor).not.toBe("rgba(0, 0, 0, 0)");
  },
};
