import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import OtherScreen from './OtherScreen';// Replace with your other screens
import Icon from 'react-native-vector-icons/Ionicons'; // Or any other icon library you prefer

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="home" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Other"
              component={OtherScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="list" color={color} size={size} />
                ),
              }}
            />
    </Tab.Navigator>
  );
};

export default Tabs;