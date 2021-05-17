import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Preload } from '../screens';

const Stack = createStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Preload">
      <Stack.Screen name="Preload" component={Preload} />
    </Stack.Navigator>
  );
}
