import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "../components/ui/label";

const meta: Meta<typeof Label> = {
  component: Label,
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  args: {
    children: "Test",
  },
};
