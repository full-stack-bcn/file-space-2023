import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import FileList from "./FileList";

type Props = {
  userId: string;
};
export default async function RootFolder({ userId }: Props) {
  const supabase = createServerComponentClient({ cookies });
  const { data: files, error } = await supabase.storage
    .from("files")
    .list(userId);

  if (!files) {
    return <div>ERROR: {error.toString()}</div>;
  }
  if (files.length === 0) {
    return <div>No files</div>;
  }
  return <FileList userId={userId} files={files} />;
}
