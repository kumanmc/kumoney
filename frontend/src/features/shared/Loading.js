import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function Loading() {
  const styles = {
      top: '50%',
      left: '50%',
      position: 'fixed',
      transform: 'translate(-50%, -50%)'
    }
  
  return (
    <div style={styles}>
      <Spinner animation="border" role="status">
        <span className="">Loading...</span>
      </Spinner>
    </div>
  );
}