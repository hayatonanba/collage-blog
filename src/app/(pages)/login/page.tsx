import { auth } from "@/auth"
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function LoginPage() {
    const session = await auth();
    if(session) { redirect("/"); }
  return (
    <div>
        <h1>ログイン</h1>
        <Link href="/api/auth/signin">
        <button type="button">Googleでログイン</button>
      </Link>
    </div>
  )
}