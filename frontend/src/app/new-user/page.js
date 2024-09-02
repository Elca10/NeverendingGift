'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [usernameError, setUsernameError] = useState(false);

  const checkValidUsername = () => {
    console.log("checkValidUsername");
    return true;
  }

  const onKeyDownUsername = (e) => {
    setUsernameError(false);

    if (e.key === "Enter") {
      if (checkValidUsername()) {
        router.push("/new-user-form");
      } else {
        setUsernameError(true);
        return;
      }
      checkValidUsername();
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-around">
      <div>
        <h2>Pick a username</h2>
      </div>
      Pick a username:
      <input id="username" name="username" onKeyDown={onKeyDownUsername}/>
    </main>
  );
}
