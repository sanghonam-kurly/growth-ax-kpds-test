import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";
import type { ButtonProps } from "./button";
import { Zap, Settings, User, Trash2, PlusCircle } from "lucide-react";

// Meta configuration for the Button component
const meta: Meta<typeof Button> = {
  title: "Components/KPDS/Button",
  component: Button,
  parameters: {
    layout: "centered", // Center the component in the Canvas. Optional.
  },
  tags: ["autodocs"], // Enable automatic documentation generation
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "danger"],
      description: "Button color theme",
      table: { defaultValue: { summary: "primary" } },
    },
    styling: {
      control: "select",
      options: ["fill", "lightFill", "stroke", "lightStroke", "text"],
      description: "Button visual style",
      table: { defaultValue: { summary: "fill" } },
    },
    size: {
      control: "select",
      options: [
        "sm",
        "md",
        "lg",
        "xl",
        "icon-sm",
        "icon-md",
        "icon-lg",
        "icon-xl",
      ],
      description: "Button size",
      table: { defaultValue: { summary: "md" } },
    },
    shape: {
      control: "radio",
      options: ["default", "capsule"],
      description: "Button shape",
      table: { defaultValue: { summary: "default" } },
    },
    fontWeightCustom: {
      control: "radio",
      options: ["regular", "semibold"],
      description: "Button font weight",
      table: { defaultValue: { summary: "semibold" } },
    },
    isLoading: {
      control: "boolean",
      description: "Show loading state",
      table: { defaultValue: { summary: "false" } },
    },
    loadingText: {
      control: "text",
      description:
        "Text to display when isLoading is true (not for icon-only buttons)",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button",
      table: { defaultValue: { summary: "false" } },
    },
    fullWidth: {
      control: "boolean",
      description: "Make button take full width of its container",
      table: { defaultValue: { summary: "false" } },
    },
    iconLeft: {
      control: "object", // More complex control might be needed for actual icon selection
      description: "Icon to display on the left",
    },
    iconRight: {
      control: "object",
      description: "Icon to display on the right",
    },
    children: {
      control: "text",
      description: "Button content (text or other elements)",
    },
    asChild: {
      control: "boolean",
      description: "Render as a child component (e.g., for linking)",
      table: { defaultValue: { summary: "false" } },
    },
    // HTML attributes like onClick, className etc. are also available but not listed in argTypes by default
  },
  args: {
    // Default args for all stories if not overridden
    children: "Button Text",
    color: "primary",
    styling: "fill",
    size: "md",
    shape: "default",
    fontWeightCustom: "semibold",
    isLoading: false,
    disabled: false,
    fullWidth: false,
  },
};

export default meta;

// Define a "type" for our stories to get TypeScript support
type Story = StoryObj<typeof meta>;

// Base template story that all other stories will derive from
const Template: Story = {
  render: (args: ButtonProps) => <Button {...args} />,
};

// --- INDIVIDUAL STORIES ---

// Primary Buttons
export const PrimaryFill: Story = {
  ...Template,
  args: {
    color: "primary",
    styling: "fill",
    children: "Primary Fill",
  },
};

export const PrimaryLightFill: Story = {
  ...Template,
  args: {
    color: "primary",
    styling: "lightFill",
    children: "Primary Light Fill",
    iconLeft: <Zap />,
  },
};

export const PrimaryStroke: Story = {
  ...Template,
  args: {
    color: "primary",
    styling: "stroke",
    children: "Primary Stroke",
    iconRight: <Settings />,
  },
};

export const PrimaryLightStroke: Story = {
  ...Template,
  args: {
    color: "primary",
    styling: "lightStroke",
    children: "Primary Light Stroke",
  },
};

export const PrimaryText: Story = {
  ...Template,
  args: {
    color: "primary",
    styling: "text",
    children: "Primary Text",
  },
};

// Secondary Buttons
export const SecondaryFill: Story = {
  ...Template,
  args: {
    color: "secondary",
    styling: "fill",
    children: "Secondary Fill",
  },
};

export const SecondaryStroke: Story = {
  ...Template,
  args: {
    color: "secondary",
    styling: "stroke",
    children: "Secondary Stroke",
    fontWeightCustom: "regular",
  },
};

export const SecondaryText: Story = {
  ...Template,
  args: {
    color: "secondary",
    styling: "text",
    children: "Secondary Text",
  },
};

// Danger Buttons
export const DangerFill: Story = {
  ...Template,
  args: {
    color: "danger",
    styling: "fill",
    children: "Danger Fill",
    iconLeft: <Trash2 />,
  },
};

export const DangerStroke: Story = {
  ...Template,
  args: {
    color: "danger",
    styling: "stroke",
    children: "Danger Stroke",
  },
};

// Sizes
export const Small: Story = {
  ...Template,
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Large: Story = {
  ...Template,
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const ExtraLarge: Story = {
  ...Template,
  args: {
    size: "xl",
    children: "Extra Large Button",
  },
};

// Shapes
export const Capsule: Story = {
  ...Template,
  args: {
    shape: "capsule",
    children: "Capsule Shape",
    color: "primary",
    styling: "fill",
  },
};

// States
export const Loading: Story = {
  ...Template,
  args: {
    isLoading: true,
    children: "Processing", // This will be hidden by loading indicator if no loadingText
    loadingText: "Loading...",
    color: "primary",
    styling: "fill",
  },
};

export const Disabled: Story = {
  ...Template,
  args: {
    disabled: true,
    children: "Disabled Button",
    color: "secondary",
    styling: "fill",
  },
};

// Icon Buttons
export const IconOnlyPrimary: Story = {
  ...Template,
  args: {
    color: "primary",
    styling: "stroke",
    size: "icon-md",
    children: null, // No text for icon-only
    iconLeft: <User />, // Or just pass the icon as children if your Comp handles it
    "aria-label": "User Profile", // Important for accessibility
  },
};

export const IconOnlyWithTextLoading: Story = {
  ...Template,
  args: {
    color: "secondary",
    styling: "fill",
    size: "icon-lg",
    isLoading: true,
    loadingText: "", // No text shown for icon loading, but prop exists
    children: <PlusCircle />, // Icon is the child
    "aria-label": "Add Item Loading",
  },
};

// Full Width
export const FullWidthButton: Story = {
  ...Template,
  args: {
    fullWidth: true,
    children: "Full Width Primary Button",
    color: "primary",
    styling: "fill",
  },
};

// Example with different font weight
export const RegularWeight: Story = {
  ...Template,
  args: {
    color: "secondary",
    styling: "stroke",
    fontWeightCustom: "regular",
    children: "Regular Weight Stroke",
  },
};

// It's good practice to also include a story for default props if not explicitly covered
export const DefaultProps: Story = {
  ...Template,
  args: {
    // All args will use their default values as defined in meta.args
    // or in the component itself if not defined in meta.args
    // We can explicitly set children here if we want different text than meta.args default
    children: "Default Button",
  },
};

// Story for asChild prop (e.g., using it as a link)
// This one is harder to demo directly without a routing context or a Slot child.
// It mainly tests if the component correctly passes props down.
export const AsChildExample: Story = {
  render: (args: ButtonProps) => (
    <Button {...args} asChild>
      <a href="#" onClick={(e) => e.preventDefault()}>
        Link Styled as Button
      </a>
    </Button>
  ),
  args: {
    color: "tertiary",
    styling: "fill",
  },
};
