import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('')

  useEffect(async () => {
    const response = await axios.get('/test');
    setName(response.data);
  }, []);

  return (    
    <h1>Hello {name}</h1>
  )
}

export default App;