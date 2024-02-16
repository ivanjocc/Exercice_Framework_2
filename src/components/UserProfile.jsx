import React from "react";

function UserProfile({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <ul>
        {user.messages.map((message) => (
          <li
            key={message.id}
            style={{ backgroundColor: message.color ? "transparent" : "blue" }}
          >
            {message.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
