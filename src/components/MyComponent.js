import { useState } from 'react';
import AnotherComponent from './AnotherComponent.js';

const MyComponent = () => {
  // Initialisations ------------------
  const [ someData, setSomeData ] = useState([1,2,3,4]);
 
  // State ----------------------------
  // Handlers -------------------------
  const handleChange = () => setSomeData( [...someData, 5] );

  // View -----------------------------
  return (
    <AnotherComponent data={someData} onPress={handleChange} />
  );
};


export default MyComponent;