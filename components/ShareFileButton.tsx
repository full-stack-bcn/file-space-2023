import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { type FileObject } from "@supabase/storage-js";

type Props = {
  file: FileObject;
  className: string;
};
export default function ShareFileButton({ file, className }: Props) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className={className}>share</div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share File</DialogTitle>
          <DialogDescription>
            Share file <code>{file.name}</code> by choosing expire time below and generating a URL.
          </DialogDescription>
        </DialogHeader>

        <div>
          TODO: Choose expirty time <br />
          TODO: Input readonly
        </div>

        <DialogFooter>
          <Button>Get URL</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
