import React from 'react';
import { Link } from 'react-router-dom';


const MyHomePage = () => {
  return (
    <>
        <h1>My Home Page</h1>
        <p>
        
        Go to <Link to="/products">The List of products</Link>

        </p>

    </>
  )
}

export default MyHomePage