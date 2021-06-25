import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MenuScreen from './MenuScreen';
import MessageListScreen from './MessageListScreen';
import MessageScreen from './MessageScreen';
import HelpUsuario from './HelpUsuario';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name = "MenuScreen" component={ MenuScreen }/>
        <Stack.Screen name = "MessageListScreen" component={ MessageListScreen }/>
        <Stack.Screen name = "MessageScreen" component={ MessageScreen }/>
        <Stack.Screen name = "HelpUsuario" component={ HelpUsuario }/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;