import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, extendTheme } from 'native-base';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import SplashScren from './src/screens/SplashScreen';
import { store } from './src/store/store';

const App = () => {
  type StackParamList = {
    Splash: undefined;
  };

  const Stack = createNativeStackNavigator<StackParamList>();
  const queryClient = new QueryClient();
  const theme = extendTheme(DefaultTheme);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
          <NativeBaseProvider theme={theme}>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen component={SplashScren} name="Splash" />
              </Stack.Navigator>
            </NavigationContainer>
          </NativeBaseProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
