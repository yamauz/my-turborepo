import type { Meta, StoryObj } from "@storybook/react";

import { Button7 } from "ui";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Button7",
  component: Button7,
  tags: ["autodocs"],
} satisfies Meta<typeof Button7>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button7",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button7",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button7",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button7",
  },
};
