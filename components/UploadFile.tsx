"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type Props = {
  userId: string;
};
export default function UploadFile({ userId }: Props) {
  const supabase = createClientComponentClient();

  const uploadFile = async () => {
    const date = (new Date()).toLocaleString().replace(/[:, /]/g, '-');
    const { data, error } = await supabase.storage
      .from("files")
      .upload(`${userId}/hola-${date}.txt`, "hola hola hola");
    if (error) {
      console.log(error);
    }
  };

  return (
    <button className="bg-stone-200 py-1 px-3 rounded" onClick={uploadFile}>
      Upload File
    </button>
  );
}
