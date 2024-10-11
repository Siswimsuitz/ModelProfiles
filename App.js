import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/Tabs'; // Assuming your Tabs component is in the Tabs.js file

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;