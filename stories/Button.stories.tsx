import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/ui/button";
import { ChevronRightIcon, Mail } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Basic Components / Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Default",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

export const Icon: Story = {
  args: {
    variant: "outline",
    children: <ChevronRightIcon className="h-4 w-4" />,
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </>
    ),
  },
};
