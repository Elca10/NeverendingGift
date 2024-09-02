'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-items-start">
      <h1>Neverending Gift</h1>
      <div
        className="flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/ribbon transparent.png")',
          backgroundSize: 'contain',
          paddingBottom: '40%', // This is hard-coded based on the aspect ratio of the image
          textAlign: 'center',
          width: '100%',
        }}>
        <button onClick={() => router.push("/new-user")}>Profile</button>
      </div>
      <button onClick={() => router.push("/new-user")}>New User</button>
    </main>
  );
}
