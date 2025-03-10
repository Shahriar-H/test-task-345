import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";
import { ApolloProvider } from '@apollo/client';
import { client } from '@/queries/apolloClient';
import {store} from "../redux/store"


import { useColorScheme } from '@/hooks/useColorScheme';
import { Provider } from 'react-redux';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
    <ApolloProvider client={client} >
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" 
        options={{
          headerShown:false
        }} />
        <Stack.Screen name="home" options={{
          headerShown:false
        }} />
        <Stack.Screen name="questions" options={{
          headerShown:false
        }} />
        <Stack.Screen name="scores" options={{
         headerShown:false
        }} /> 
        <Stack.Screen name="cardpayment" options={{
         headerShown:false
        }} /> 
        <Stack.Screen name="result" options={{
         headerShown:false
        }} /> 



        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        <Stack.Screen name="+not-found" options={{
          headerShown:false
        }} />
        
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
    </ApolloProvider>
    </Provider>
  );
}
