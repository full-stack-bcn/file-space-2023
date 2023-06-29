"use client";

import { FileObject } from "@supabase/storage-js";
import FileItem from "./FileItem";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type Props = {
  userId: string;
  files: FileObject[];
};
export default function FileList({ files, userId }: Props) {
  const supabase = createClientComponentClient();
  const [fileList, setFileList] = useState(files);

  const deleteFile = async (path: string) => {
    const { data, error } = await supabase.storage.from("files").remove([path]);
    if (error) {
      console.error(error);
    }
  };


  const downloadFile = async (path: string) => {
    const { data, error } = await supabase.storage.from("files").download(path);
    if (error) {
      console.error(error);
      return;
    }
    const a = document.createElement("a");
    const url = URL.createObjectURL(data);
    a.href = url;
    a.download = path.split("/").slice(-1)[0];
    a.click();
  };

  return (
    <div className="mt-4">
      {fileList.map((file) => (
        <FileItem
          key={file.id}
          file={file}
          onDownload={() => downloadFile(`${userId}/${file.name}`)}
          onDelete={() => deleteFile(`${userId}/${file.name}`)}
        />
      ))}
    </div>
  );
}
