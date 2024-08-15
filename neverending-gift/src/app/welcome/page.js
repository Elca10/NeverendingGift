import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around">
      <div>
        <h1>Welcome</h1>
      </div>
      <button>New User</button>
      <button>Returning User</button>
    </main>
  );
}
