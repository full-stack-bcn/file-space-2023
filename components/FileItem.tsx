import { type FileObject } from "@supabase/storage-js";
import DownloadIcon from "./icons/DownloadIcon";
import { DeleteIcon } from "./icons/DeleteIcon";
import ShareFileButton from "@/components/ShareFileButton";

type Props = {
  onDownload?: () => void;
  onDelete?: () => void;
  file: FileObject;
};
export default function FileItem({ file, onDelete, onDownload }: Props) {
  return (
    <div
      className={
        "p-2 border-2 border-b-0 hover:bg-stone-100 " +
        "last:border-b-2 font-mono cursor-pointer " +
        "flex flex-row items-center group text-stone-400"
      }
    >
      <div className="text-stone-900">{file.name}</div>
      <div className="flex-1"></div>
      <ShareFileButton file={file} className="invisible group-hover:visible" />
      <div
        className="px-2 invisible group-hover:visible hover:text-black"
        onClick={onDownload}
      >
        <DownloadIcon />
      </div>
      <div
        className="px-1 invisible group-hover:visible hover:text-black"
        onClick={onDelete}
      >
        <DeleteIcon />
      </div>
    </div>
  );
}
