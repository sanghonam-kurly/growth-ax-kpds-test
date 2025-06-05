import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "./alert";
import { Terminal, Info, TriangleAlert } from "lucide-react"; // Example icons

const meta: Meta<typeof Alert> = {
  title: "Components/KPDS/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
      description: "Alert variant",
      table: { defaultValue: { summary: "default" } },
    },
    children: {
      control: "object",
      description:
        "Content of the alert, typically AlertTitle and AlertDescription",
    },
    // className is a common prop, can be added if needed for specific styling tests
  },
  args: {
    // Default args for all stories
    variant: "default",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultBranded: Story = {
  args: {
    variant: "default",
    children: (
      <>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Branded Alert!</AlertTitle>
        <AlertDescription>
          This is the default alert with your custom purple brand colors.
        </AlertDescription>
      </>
    ),
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: (
      <>
        <TriangleAlert className="h-4 w-4" />
        <AlertTitle>Critical Error!</AlertTitle>
        <AlertDescription>
          This alert is for important, destructive action feedback.
        </AlertDescription>
      </>
    ),
  },
};

export const WithTitleOnly: Story = {
  args: {
    variant: "default",
    children: (
      <>
        <Info className="h-4 w-4" />
        <AlertTitle>Informational Title Only</AlertTitle>
      </>
    ),
  },
};

export const WithDescriptionOnly: Story = {
  args: {
    variant: "default",
    children: (
      <>
        {/* Icon is optional, but good for visual cue if description is important */}
        <Info className="h-4 w-4" />
        <AlertDescription>
          This alert contains only a description, providing a concise message.
        </AlertDescription>
      </>
    ),
  },
};

export const SimpleTextContent: Story = {
  args: {
    variant: "default",
    children:
      "This is a simple text content directly inside the alert, without specific Title or Description components.",
  },
};
