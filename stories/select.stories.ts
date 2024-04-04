import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "../components/ui/select";

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    children: "",
  },
};
