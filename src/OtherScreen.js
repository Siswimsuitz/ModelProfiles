import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const OtherScreen = () => { // Function component starts here
  const [items, setItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
  ]);

  return ( // Return statement inside the function
    <View style={{ flex: 1 }}>
      <FlatList
        data={items}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
      />
    </View>
  );
}; // Function component ends here

export default OtherScreen;