import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Terminal, Settings, Info } from "lucide-react"; // Simplified icons
// Removed useState as alerts will be directly visible
import "./App.css";

function App() {
  return (
    <div className="p-10 space-y-12 bg-background text-foreground">
      <h1 className="text-kpds-28 font-kpds-bold mb-kpds-16 text-kpds-gray-950 text-center">
        KPDS Component Test Page
      </h1>

      {/* Button Examples */}
      <section className="space-y-6 p-6 border rounded-lg shadow-md">
        <h2 className="text-kpds-20 font-kpds-semibold border-b pb-kpds-4 mb-kpds-8 text-kpds-gray-800">
          Buttons
        </h2>
        <div className="flex flex-wrap items-center gap-kpds-16">
          <Button color="primary" styling="fill" size="md">
            Primary Fill Button
          </Button>
          <Button
            color="secondary"
            styling="stroke"
            size="md"
            iconLeft={<Settings />}
          >
            Secondary Stroke Button
          </Button>
        </div>
      </section>

      {/* Alert Examples (Directly Visible) */}
      <section className="space-y-6 p-6 border rounded-lg shadow-md">
        <h2 className="text-kpds-20 font-kpds-semibold border-b pb-kpds-4 mb-kpds-8 text-kpds-gray-800">
          Alerts
        </h2>
        <div className="space-y-kpds-12">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Branded Alert (Default)</AlertTitle>
            <AlertDescription>
              This is the default alert, styled with your brand's primary
              (purple) color scheme.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <Info className="h-4 w-4" /> {/* Changed icon for variety */}
            <AlertTitle>Destructive Alert</AlertTitle>
            <AlertDescription>
              This alert is for critical messages or error feedback.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Dialog Example */}
      <section className="space-y-6 p-6 border rounded-lg shadow-md">
        <h2 className="text-kpds-20 font-kpds-semibold border-b pb-kpds-4 mb-kpds-8 text-kpds-gray-800">
          Dialog
        </h2>
        <div className="flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button color="primary" styling="lightFill">
                Open Simple Dialog
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Simple Dialog Title</DialogTitle>
                <DialogDescription>
                  This is a basic description for the dialog content. You can
                  add more details here.
                </DialogDescription>
              </DialogHeader>
              <div className="py-kpds-16">
                <p className="text-sm text-kpds-gray-700">
                  This is the main body of the dialog. You can place forms,
                  text, or other components here.
                </p>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" color="secondary" styling="stroke">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="button" color="primary" styling="fill">
                  Confirm Action
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </div>
  );
}

export default App;
