import { Image, ScrollView, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BG } from '../../assets/bg'
import { useTheme } from '@react-navigation/native'
import Icons from '@expo/vector-icons/MaterialIcons'
import { Ionicons } from '@expo/vector-icons';

const AVATAR_PIC = ""
export default function HomeScreen() {
  const [search, setSearch] = React.useState('')
  const { colors } = useTheme()
  return (
    <ScrollView>
      <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>

        {/* Header Section  */}
        <View style={{ paddingHorizontal: 24, flexDirection: "row", alignItems: 'center', gap: 8 }}>
          <Image
            source={BG}
            style={{ width: 52, aspectRatio: 1, borderRadius: 20 }}
            resizeMode='cover'
          />
          <View style={{ flex: 1 }}>
            <Text
              numberOfLines={1}
              className='font-semibold text-lg '
              style={{ fontFamily: 'Anderson', marginBottom: 2 }}>Hi, User </Text>
            <Text
              className='text-md '
              numberOfLines={1}
              style={{ color: colors.text, opacity: 0.8, fontFamily: 'Anderson' }}
            >
              Discover wallpaper that suit your style</Text>
          </View>
          <TouchableOpacity
            onPress={() => { }}
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              borderWidth: 2,
              borderColor: colors.border
            }}>
            <Icons name="notifications-off" size={24} color={'blue'} />
          </TouchableOpacity>

        </View>
        {/* Search Iput Section */}
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 24, gap: 12 }}>
          <TextInput
            style={{ width: 250, height: 44, padding: 10, marginTop: 20, marginBottom: 10, backgroundColor: '#e8e8e8', fontFamily: 'Anderson', flex: 1 }}
            className='rounded-lg border-2 border-rose-400 text-center'
            autoCorrect={false}

            placeholder="Whta your are looking for ...."
            value={search}
            onChangeText={(text) => { setSearch(text) }}
          />



          <TouchableOpacity
            onPress={() => { }}
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              backgroundColor: colors.border
            }}>
            <Ionicons name="ios-search-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {/* New Collection */}
        <View style={{ paddingHorizontal: 24 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontFamily: 'Anderson', fontSize: 20 }}>New Collections</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 14, fontFamily: 'Anderson' }}> See All</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView >
  )
}

