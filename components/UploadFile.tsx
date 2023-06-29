"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ChangeEventHandler, useState } from "react";

type Props = {
  userId: string;
};
export default function UploadFile({ userId }: Props) {
  const supabase = createClientComponentClient();
  const [file, setFile] = useState<File | null>(null);

  const selectFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.target;
    if (files) {
      setFile(files.length === 0 ? null : files[0]);
    }
  };

  const uploadFile = async () => {
    if (!file) {
      return;
    }
    const date = new Date().toLocaleString().replace(/[:, /]/g, "-");
    const { data, error } = await supabase.storage
      .from("files")
      .upload(`${userId}/${file.name}`, file);
    if (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row items-center border p-4">
      <span>{file?.name}</span>
      <input type="file" className="flex-1" onChange={selectFile} />
      <button
        disabled={file === null}
        className="bg-stone-200 py-1 px-3 rounded disabled:text-stone-300 disabled:bg-stone-50"
        onClick={uploadFile}
      >
        Upload File
      </button>
    </div>
  );
}
