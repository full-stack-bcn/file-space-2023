"use client";

import { FileObject } from "@supabase/storage-js";
import FileItem from "./FileItem";
import { useEffect, useState } from "react";
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

  const reloadFiles = async () => {
    const { data, error } = await supabase.storage.from("files").list(userId);
    if (data) {
      setFileList(data);
    }
  };

  useEffect(() => {
    // Suscripción (websocket)
    const channel = supabase
      .channel("channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "storage", table: "objects" },
        (payload) => {
          console.log(payload);
          reloadFiles();
        }
      )
      .subscribe();

    return () => {
      // Cleanup: cancelar suscripción
      supabase.removeChannel(channel);
    };
  }, [userId]);

  return (
    <div className="mt-4">
      {fileList.map((file) => {
        const filePath = `${userId}/${file.name}`;
        return (
          <FileItem
            key={file.id}
            file={file}
            path={filePath}
            onDownload={() => downloadFile(filePath)}
            onDelete={() => deleteFile(filePath)}
          />
        );
      })}
    </div>
  );
}
