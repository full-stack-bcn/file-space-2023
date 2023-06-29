import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { redirect } from "next/navigation";
import { cookies } from 'next/headers'
import SignOutButton from "@/components/SignOutButton";

export const revalidate = 0;

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getUser();
  if (!data.user) {
    redirect("/login");
  }
  return (
    <main className="p-6">
      <p>Hola, tienes el mail "{data.user.email}"</p>
      <SignOutButton />
    </main>
  )
}
