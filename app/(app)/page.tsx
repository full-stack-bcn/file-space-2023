import RootFolder from "@/components/RootFolder";
import UploadFile from "@/components/UploadFile";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getUser();
  if (!data.user) {
    redirect("/login");
  }
  return (
    <main className="p-6">
      <UploadFile userId={data.user.id} />
      <RootFolder userId={data.user.id} />
    </main>
  )
}
