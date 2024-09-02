'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [usernameError, setUsernameError] = useState(false);
  const [name, setName] = useState("") // using state to save the user input for later use

  const checkValidUsername = () => {
    // will check to see if username is already taken or not
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
      <input id="username" name="username" onChange={(e)=>{setName(e.target.value)}} onKeyDown={onKeyDownUsername}/> 
    </main>
  ); // onChange --> setting the name variable (see top of file) to be the user input so that we can work with it later
}
