import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CategoriesScreen, HomeScreen, ItemScreen, SettingsScreen } from '../screens'
import Icons from '@expo/vector-icons/MaterialIcons'
export type TabsStackParamList = {
  Home: undefined
  Categories: undefined
  ItemsScreen: undefined
  SettingsScreen: undefined

}

const TabStack = createBottomTabNavigator<TabsStackParamList>();
const TabsNavigator = () => {

  return (
    <TabStack.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <TabStack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon(props) {
            return <Icons name="home" {...props} />
          },
        }}
      />
      <TabStack.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          tabBarIcon(props) {
            return <Icons name="shop" {...props} />
          },
        }}
      />
      <TabStack.Screen
        name='ItemsScreen'
        component={ItemScreen}
        options={{
          tabBarIcon(props) {
            return <Icons name="8k-plus" {...props} />
          },
        }}
      />
      <TabStack.Screen
        name='SettingsScreen'
        component={SettingsScreen}
        options={{
          tabBarIcon(props) {
            return <Icons name="cloud-download" {...props} />
          },
        }}
      />
    </TabStack.Navigator>
  )
}

export default TabsNavigator