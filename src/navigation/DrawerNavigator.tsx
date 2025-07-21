import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';

// Defines the parameters for each drawer screen
export type DrawerParamList = {
  Home: undefined;
  'About App': undefined;
  'Contact Us': undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#007AFF' },
        headerTintColor: '#fff',
        drawerActiveTintColor: '#007AFF',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{ title: 'InfoHub Home' }}
      />
      <Drawer.Screen
        name="About App"
        component={AboutScreen}
        options={{ title: 'About InfoHub' }}
      />
      <Drawer.Screen
        name="Contact Us"
        component={ContactScreen}
        options={{ title: 'Contact Information' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
