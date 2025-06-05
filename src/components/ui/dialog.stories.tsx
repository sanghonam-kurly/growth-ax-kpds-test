import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "./button";
import React from "react"; // Import React for JSX type

// Interface for our custom story arguments
interface DialogStoryArgs {
  triggerText?: string;
  title?: string;
  description?: string | null;
  dialogMainContent?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  // If we want to control Dialog's own props like defaultOpen from Storybook controls:
  defaultOpen?: boolean;
}

// Combine custom story args with a subset of Dialog's actual props
type CombinedDialogArgs = DialogStoryArgs &
  Partial<
    Pick<
      React.ComponentProps<typeof Dialog>,
      "defaultOpen" | "open" | "onOpenChange" | "modal"
    >
  >;

// Combine Dialog's actual props with our custom story args for typing meta and stories
// However, Meta<T> usually expects T to be the component type itself.
// We will define argTypes for DialogStoryArgs and rely on Storybook merging these.

const meta: Meta<CombinedDialogArgs> = {
  title: "Components/KPDS/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // Define argTypes for our custom story args
  argTypes: {
    triggerText: {
      control: "text",
      description: "Text for the button that triggers the dialog.",
      table: {
        category: "Story Args",
        defaultValue: { summary: "Open Default Dialog" },
      },
    },
    title: {
      control: "text",
      description: "Title displayed in the dialog header.",
      table: {
        category: "Story Args",
        defaultValue: { summary: "Default Dialog Title" },
      },
    },
    description: {
      control: "text",
      description:
        "Description displayed below the title in the dialog header.",
      table: { category: "Story Args" },
    },
    dialogMainContent: {
      control: false, // No direct control, set via story args object
      description: "Main content for the dialog body.",
      table: { category: "Story Args" },
    },
    confirmText: {
      control: "text",
      description: "Text for the confirm/submit button in the footer.",
      table: { category: "Story Args", defaultValue: { summary: "Confirm" } },
    },
    cancelText: {
      control: "text",
      description: "Text for the cancel/close button in the footer.",
      table: { category: "Story Args", defaultValue: { summary: "Cancel" } },
    },
    defaultOpen: {
      control: "boolean",
      description: "Whether the dialog is open by default.",
      table: { category: "Dialog Props", defaultValue: { summary: "false" } },
    },
    open: {
      control: "boolean",
      description: "Controlled open state of the dialog.",
      table: { category: "Dialog Props" },
    },
    modal: {
      control: "boolean",
      description: "Is the dialog modal.",
      table: { category: "Dialog Props", defaultValue: { summary: "true" } },
    },
  },
  // Default values for the custom args for all stories
  args: {
    triggerText: "Open Default Dialog",
    title: "Default Dialog Title",
    description: "This is a default description.",
    confirmText: "Confirm",
    cancelText: "Cancel",
    dialogMainContent: (
      <>
        <p>Default main content for the dialog.</p>
        <p>
          You can replace this by providing the <code>dialogMainContent</code>{" "}
          arg in a specific story.
        </p>
      </>
    ),
    defaultOpen: false,
    modal: true,
  },
};

export default meta;

// The Story type infers args from meta, including component props and defined argTypes.
// So, args in the render function will be a combination.
// Explicitly type args in render to include DialogStoryArgs and Dialog's own props.
type Story = StoryObj<CombinedDialogArgs>; // This will infer args as Partial<DialogProps & DialogStoryArgs>

const DialogTemplate: Story = {
  render: (args) => (
    <Dialog
      open={args.open}
      onOpenChange={args.onOpenChange}
      defaultOpen={args.defaultOpen}
      modal={args.modal}
    >
      <DialogTrigger asChild>
        <Button color="secondary" styling="stroke">
          {args.triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{args.title}</DialogTitle>
          {args.description && (
            <DialogDescription>{args.description}</DialogDescription>
          )}
        </DialogHeader>
        <div className="grid gap-4 py-4">{args.dialogMainContent}</div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" color="secondary" styling="lightStroke">
              {args.cancelText}
            </Button>
          </DialogClose>
          <Button type="submit" color="primary" styling="fill">
            {args.confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// Stories will inherit argTypes and default args from meta
// They can override them as needed.
export const Default: Story = {
  ...DialogTemplate,
  // No specific args here, will use defaults from meta.args
};

export const InitiallyOpen: Story = {
  ...DialogTemplate,
  args: {
    triggerText: "Dialog (Was Initially Open)",
    title: "Initially Open Dialog",
    description: "This dialog was opened by default using the defaultOpen arg.",
    defaultOpen: true,
  },
};

export const EditProfileExample: Story = {
  ...DialogTemplate,
  args: {
    triggerText: "Edit Profile",
    title: "Edit Your Profile",
    description:
      "Make changes to your profile here. Click save when you're done.",
    dialogMainContent: (
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="profile-name" className="text-right">
            Full Name
          </label>
          <input
            id="profile-name"
            placeholder="Enter your full name"
            className="col-span-3 p-2 border rounded-md border-kpds-gray-300"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="profile-email" className="text-right">
            Email Address
          </label>
          <input
            id="profile-email"
            type="email"
            placeholder="your@email.com"
            className="col-span-3 p-2 border rounded-md border-kpds-gray-300"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="profile-bio" className="text-right">
            Bio
          </label>
          <textarea
            id="profile-bio"
            placeholder="Tell us about yourself..."
            className="col-span-3 p-2 border rounded-md border-kpds-gray-300 h-24"
          />
        </div>
      </div>
    ),
    confirmText: "Save Changes",
    cancelText: "Discard",
    defaultOpen: false, // Ensure this doesn't conflict if we want trigger
  },
};

export const SimpleNotification: Story = {
  ...DialogTemplate,
  args: {
    triggerText: "Show Notification",
    title: "Important Update",
    description:
      "Your subscription has been renewed successfully for another year.",
    dialogMainContent: (
      <p className="text-sm text-kpds-gray-700 pt-2">
        Thank you for being a valued customer. Your new billing cycle starts on
        the 1st of next month.
      </p>
    ),
    confirmText: "Okay, Got It!",
    cancelText: "Dismiss",
  },
};

export const WithoutDescription: Story = {
  ...DialogTemplate,
  args: {
    triggerText: "Dialog (No Description)",
    title: "Action Required",
    description: null,
    dialogMainContent: (
      <p>Please confirm this important action before proceeding.</p>
    ),
    confirmText: "Confirm",
    // cancelText will use default from meta.args
  },
};

export const LongContent: Story = {
  ...DialogTemplate,
  args: {
    triggerText: "Dialog (Long Content)",
    title: "Terms and Conditions",
    description: "Please read the following terms and conditions carefully.",
    dialogMainContent: (
      <div className="max-h-64 overflow-y-auto pr-2 space-y-2 text-sm">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    ),
    confirmText: "I Agree",
    cancelText: "Decline",
  },
};
