import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>

      <ul>
        <li>
        <Link href="/admin">Admin</Link>
        </li>
      </ul>
    </main>
  );
}
