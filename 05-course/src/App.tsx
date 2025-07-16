import { useEffect, useState } from "react";

function App() {
  interface user {
    id: number;
    userName: string;
  }
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<user | null>(null);
  useEffect(() => {
    console.log("Mounted");
    console.log("users:" + user);
  });
  return <div className="App"></div>;
}

export default App;
