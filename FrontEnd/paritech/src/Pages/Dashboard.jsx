import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const response = await fetch("http://localhost:8000/api/user", {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        const content = await response.json();
        setName(content.name);
      };
      fetchUser();
    } catch (err) {
      console.log(err);
    }
  });
  return <section>Hello{name}</section>;
};

export default Dashboard;
