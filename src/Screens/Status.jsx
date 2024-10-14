import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

const Status = () => {
  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="bg-pink-700">
        <View className="flex-row justify-between px-2 py-5">
          <Text className="text-2xl text-white font-ChakraPetch">Updates</Text>
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
      <ScrollView className="p-2 space-y-5">
        <View>
          <TouchableOpacity className="flex-row items-center gap-x-5">
            <View className="relative">
              <Image className="w-14 h-14 object-cover rounded-full" source={{ uri: "https://i.pinimg.com/550x/47/07/98/470798697fff4e16ea823d13f45dbc09.jpg" }} />
              <View className="absolute bg-pink-700 bottom-1 -right-1 rounded-full">
                <Ionicon name='add' color={'white'} size={15} />
              </View>
            </View>
            <View className="">
              <Text className="text-white font-bold text-xl">My Status</Text>
              <Text className="text-white text-xs">Tap to add status update</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text className="text-white">Recent updates</Text>
          <View className="py-2">
            <RecentUpdates />
            <RecentUpdates />
            <RecentUpdates />
          </View>
        </View>
        <View>
          <Text className="text-white">Viewed updates</Text>
          <View className="py-2">
            <RecentUpdates />
            <RecentUpdates />
            <RecentUpdates />
          </View>
        </View>
        <View>
          <Text className="text-white">Muted updates</Text>
          <View className="py-2">
            <RecentUpdates />
            <RecentUpdates />
            <RecentUpdates />
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity className="absolute bottom-20 right-3">
        <View className="p-3 bg-pink-700 rounded-md z-50 border-2 border-black">
          <Ionicon name="pencil" size={24} color={'white'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="absolute bottom-5 right-3">
        <View className="p-3 bg-pink-700 rounded-md z-50 border-2 border-black">
          <Ionicon name="camera" size={24} color={'white'} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Status


const RecentUpdates = () => {
  return (<TouchableOpacity className="flex-row items-center gap-x-5 my-2">
    <View className="relative">
      <Image className="w-14 h-14 object-cover rounded-full" source={{ uri: "https://i.pinimg.com/550x/47/07/98/470798697fff4e16ea823d13f45dbc09.jpg" }} />
    </View>
    <View className="">
      <Text className="text-white font-semibold text-xl">Alex Gomez</Text>
      <Text className="text-white text-xs">10 minutes ago</Text>
    </View>
  </TouchableOpacity>)
}