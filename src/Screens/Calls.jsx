import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicon from 'react-native-vector-icons/Ionicons';

const Calls = () => {
  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="bg-pink-700">
        <View className="flex-row justify-between px-2 py-5">
          <Text className="text-2xl text-white font-ChakraPetch">Calls</Text>
          <View className="flex-row gap-x-5">
            <View>
              <Ionicon name='search' size={28} color={'white'} />
            </View>
            <View>
              <Ionicon name='ellipsis-horizontal' size={28} color={'white'} />
            </View>
          </View>
        </View>
      </SafeAreaView>
      <ScrollView className=" px-2 py-2">
        <CallInfo />
        <CallInfo />
        <CallInfo />
        <CallInfo />
        <CallInfo />
        <CallInfo />
        <CallInfo />
        <CallInfo />
        <CallInfo />
      </ScrollView>


      <TouchableOpacity className="absolute bottom-5 right-3">
        <View className="p-3 bg-pink-700 rounded-md z-50 border-2 border-black">
          <Ionicon name="call" size={24} color={'white'} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Calls



const CallInfo = () => {
  return (
    <View className="flex-row items-center justify-between my-4">
      <View className="flex-row items-center gap-x-5">
        <View>
          <Image className="w-14 h-14 object-cover rounded-full" source={{ uri: "https://i.pinimg.com/550x/47/07/98/470798697fff4e16ea823d13f45dbc09.jpg" }} />
        </View>
        <View className="gap-y-1">
          <Text className="text-white text-xl font-ChakraPetch">Alex Gomez</Text>
          <View className="flex-row items-center gap-x-1">
            <View className="bg-green-500 p-[1px] rounded-sm">
              <Ionicon name='arrow-down' color={'white'} />
            </View>
            <Text className="text-white">Incoming</Text>
            <Text className="text-white">|</Text>
            <Text className="text-white">Today, 16:24</Text>
          </View>
        </View>
      </View>
      <View>
        <Ionicon name='call' size={28} color={'#be185d'} />
      </View>
    </View>
  )
}