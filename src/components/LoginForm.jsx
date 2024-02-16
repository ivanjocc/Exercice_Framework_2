import React from "react";

function LoginForm() {
  return (
    <div>
      <form>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" name="username" autoComplete="off" />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="off"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
