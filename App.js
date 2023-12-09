import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Импортируйте ваши экраны
import LoginAndRegMain from './pages/LoginAndRegistration/Components/LoginAndRegMain';
import MainPage from './pages/Main/Components/MainPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginAndRegMain} />
        <Stack.Screen name="Main"  options={{ headerShown: false }} component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;