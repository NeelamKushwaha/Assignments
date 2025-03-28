import React, { useState } from "react";

// 1. TextUpdater Component
const TextUpdater = () => {
  const [text, setText] = useState("");
  return (
    <div className="p-4">
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-2">You typed: {text}</p>
    </div>
  );
};

// 2. React Form Component
const SimpleForm = () => {
  const [input, setInput] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted value:", input);
  };
  
  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        className="border p-2"
        placeholder="Enter text..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">Submit</button>
    </form>
  );
};

// 3. UserCard Component
const UserCard = ({ name, email }) => {
  return (
    <div className="p-4 border rounded shadow-md bg-gray-100">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-700">{email}</p>
    </div>
  );
};

// 4. Button Component
const StyledButton = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  
  return (
    <button
      className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      onClick={handleClick}
    >
      Click Me
    </button>
  );
};

// 5. LoginForm Component
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };
  
  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md w-80">
      <input
        type="email"
        className="border p-2 w-full mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border p-2 w-full mb-2"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded w-full">Login</button>
    </form>
  );
};

// App Component
const App = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">React.js Assignment</h1>
      <TextUpdater />
      <SimpleForm />
      <UserCard name="John Doe" email="john@example.com" />
      <StyledButton />
      <LoginForm />
    </div>
  );
};

export default App;
