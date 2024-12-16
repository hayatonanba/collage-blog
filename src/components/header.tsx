import Link from "next/link";

export default function Header() {
  return (
    <div className="container mx-auto p-4">
        <div className="flex justify-between">
        <Link href="/"><h1>Collage-Blog</h1></Link>
        <button type="submit">ログイン</button>
        </div>
    </div>
  )
}
