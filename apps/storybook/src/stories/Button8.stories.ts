import type { Meta, StoryObj } from "@storybook/react";

import { Button8 } from "ui";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Button8",
  component: Button8,
  tags: ["autodocs"],
} satisfies Meta<typeof Button8>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button8",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button8",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button8",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button8",
  },
};
