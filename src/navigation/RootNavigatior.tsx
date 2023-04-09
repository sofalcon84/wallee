import React from 'react'
import { NavigatorScreenParams, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoriesScreen, HomeScreen, ItemScreen, Onboarding } from '../screens';
import TabsNavigator, { TabsStackParamList } from './TabsNavigator';


export type RootStackParamList = {
  Onboarding: undefined
  HomeScreen: undefined
  TabsStack: NavigatorScreenParams<TabsStackParamList>;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootNavigatior = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name='Onboarding' component={Onboarding} />
        {/* <RootStack.Screen name='HomeScreen' component={HomeScreen} /> */}
        <RootStack.Screen name='TabsStack' component={TabsNavigator} />

      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigatior