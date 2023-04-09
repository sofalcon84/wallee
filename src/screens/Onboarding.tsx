import { ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BG_1 } from '../../assets/bg'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

const Onboarding = () => {
  const navigation = useNavigation()
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <ImageBackground source={BG_1} className="w-full h-full" imageStyle={{
        resizeMode: 'cover'
      }} />

      <StatusBar hidden />
      <SafeAreaView className="absolute z-10 inset-0 flex items-center justify-start">
        <View className="w-full dlex px-4 pt-44">
          <Text className="text-4xl text-white" style={{ fontFamily: 'Anderson' }}>
            Mobile
          </Text>
          <Text className="text-[64px] text-white tracking-wider bg-transparent  backdrop-blur-[19px]" style={{ fontFamily: 'Anderson' }}>8K Wallpaper</Text>
        </View>
        <TouchableOpacity className="w-full px-16 mt-[260px]" onPress={() => { navigation.navigate('TabsStack') }}>
          <View className="w-full bg-white p-4 flex-row items-center justify-center rounded-full">
            <Text style={{ color: '#DB4D6D', fontFamily: 'Anderson', fontSize: 26 }}>Get Started !</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
}

export default Onboarding
