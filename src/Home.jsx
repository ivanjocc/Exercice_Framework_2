import React, { useState } from "react";
import LoginForm from "../src/components/LoginForm";
import UserProfile from "../src/components/UserProfile";

function Home() {
  const [session, setSession] = useState(false);

  const user = {
    name: "ivan",
    messages: [
      { id: 1, text: "hellow", color: false },
      { id: 2, text: "chaolin", color: true },
      { id: 3, text: "test", color: true },
      { id: 4, text: "keep testing", color: false },
    ],
  };

  const toggleSession = () => {
    setSession(!session);
  };

  return (
    <div className="Home">
      {session ? <UserProfile user={user} /> : <LoginForm />}

      <button onClick={toggleSession}>{session ? "Log out" : "Do a Log in"}</button>
    </div>
  );
}

export default Home;
