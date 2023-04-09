import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import RootNavigatior from './src/navigation/RootNavigatior';
import { View } from 'react-native';
import 'react-native-gesture-handler';
// import NetInfo from '@react-native-community/netinfo';

SplashScreen.preventAutoHideAsync();

export default function App() {
  // NetInfo.fetch().then(state => {
  //   console.log('Connection type', state.type);
  //   console.log('Is connected?', state.isConnected);
  // });
  const [fontsLoaded] = useFonts({
    'Anderson': require('./assets/fonts/Anderson.ttf'),
    'Operator': require('./assets/fonts/Operator.otf'),
    'Ubuntu': require('./assets/fonts/Ubuntu.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1" onLayout={onLayoutRootView}>
      <RootNavigatior />
    </View>
  );
}