// import React, { useState, useCallback } from "react";

// // Child component used only by About.js
// const AboutChild = React.memo(function AboutChild({ count, onIncrement, onAlert }) {
//   console.log("About Child rendered");

//   return (
//     <div style={{ border: "1px solid green", padding: "10px", marginTop: "10px" }}>
//       <h3>About Child Component</h3>
//       <h2>Count: {count}</h2>
//       <button onClick={onIncrement}>Increase Count</button>
//       <button onClick={onAlert}>Show Alert</button>
//     </div>
//   );
// });

// export default function About() {
//   console.log("About Parent rendered");

//   const [count, setCount] = useState(0);

//   const handleAlert = useCallback(() => {
//     alert("Hello from About Child!");
//   }, []);

//   const increment = useCallback(() => {
//     setCount(c => c + 1);
//   }, []);

//   return (
//     <div>
//       <AboutChild count={count} onIncrement={increment} onAlert={handleAlert} />
//     </div>
//   );
// }

import { Virtuoso } from 'react-virtuoso';
import { useState, useEffect } from 'react';
 
function About() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
 
  const loadMore = async () => {
    if (loading) return;
    
    setLoading(true);
    
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`
      );
      const data = await response.json();
      
      setUsers(prev => [...prev, ...data]);
      setPage(prev => prev + 1);
    } catch (error) {
      console.error('Error loading users:', error);
    } finally {
      setLoading(false);
    }
  };
 
  // Load initial users
  useEffect(() => {
    loadMore();
  }, []);
 
  return (
    <Virtuoso
      style={{ height: '500px' }}
      data={users}
      endReached={loadMore}
      itemContent={(index, user) => (
        <div style={{
          padding: '20px',
          borderBottom: '1px solid #eee',
          backgroundColor: '#fff'
        }}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      )}
      components={{
        Footer: () => loading && (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            Loading users...
          </div>
        )
      }}
    />
  );
}
 
export default About;
