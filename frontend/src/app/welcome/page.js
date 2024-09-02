'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-around">
      <div>
        <h1>Welcome</h1>
      </div>
      <button onClick={() => router.push("/new-user")}>New User</button>
      <button onClick={() => router.push("/returning-user")}>Returning User</button>
    </main>
  );
}
