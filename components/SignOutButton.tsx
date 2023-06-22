"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const signOut = async () => {
    await supabase.auth.signOut();
    router.replace("/login");
  };

  return (
    <button className="bg-stone-200 py-1 px-3 rounded" onClick={signOut}>
      Sign Out
    </button>
  );
}
