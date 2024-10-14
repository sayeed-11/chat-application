import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image, Platform, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'
import axios from 'axios'
// import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
const HomePage = () => {

    const logOut = () => {
        signOut(auth)
    }
    return (
        <View className="flex-1 bg-slate-100 relative">

            <StatusBar style="light" />
            <SafeAreaView style={{
                paddingTop: Platform.OS === "ios" ? 0 : 35,
            }} className=" flex flex-row justify-between items-center bg-pink-700">
                <Text className="font-ChakraPetch ml-2 text-2xl text-white">Chats</Text>
                <View className="mr-2 mt-1 mb-2 border-2 border-white w-9 aspect-square rounded-full">
                    <Image className="w-8 h-8 object-cover rounded-full" source={{ uri: "https://i.pinimg.com/550x/47/07/98/470798697fff4e16ea823d13f45dbc09.jpg" }} />
                </View>
            </SafeAreaView>
            <View className="px-2 bg-pink-700 py-2">
                <TextInput className="bg-black py-3.5 px-5 rounded-md text-white" placeholder='Search' placeholderTextColor={'white'} />
            </View>
            <ScrollView bounces={false} className="py-1 px-1 bg-black relative">
                <TouchableOpacity className="flex-row justify-between items-center px-3 py-2">
                    <View className="flex-row justify-between items-center gap-x-5">
                        <View className="bg-pink-700 p-3 rounded-full">
                            <Ionicon name='archive-outline' color={'white'} size={24} />
                        </View>
                        <Text className="text-white font-semibold">Archived</Text>
                    </View>
                    <View className="bg-pink-700 py-1 px-2 rounded-full">
                        <Text className="text-white text-xs">9</Text>
                    </View>
                </TouchableOpacity>
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
            </ScrollView>

            <TouchableOpacity className="absolute bottom-5 right-3">
                <View className="p-3 bg-pink-700 rounded-md z-50 border-2 border-black">
                    <Ionicon name="add-circle" size={24} color={'white'} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default HomePage


const Chat = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('ChatScreen')
        }} className="flex flex-row items-center justify-between px-2 py-1 rounded-md my-2 border-b-[0.25px] border-white/[0.1]">
            <View className="flex-row items-center gap-x-5">
                <View>
                    <Image className="w-14 h-14 object-cover rounded-full" source={{ uri: "https://i.pinimg.com/550x/47/07/98/470798697fff4e16ea823d13f45dbc09.jpg" }} />
                </View>
                <View>
                    <Text style={{ fontSize: 16 }} className=" text-white font-ChakraPetch">Alex Gomez</Text>
                    <Text className="text-white/[0.5] text-sm font-ChakraPetch">Hi</Text>
                </View>
            </View>
            <View className="items-center gap-y-2">
                <Text className="text-white text-xs font-ChakraPetch">12:35 PM</Text>
                <View className='flex-row-reverse items-center gap-x-2'>
                    <View className="bg-pink-700 px-1.5 py-0.5 rounded-full">
                        <Text style={{ borderRadius: 50 }} className="text-white text-xs font-ChakraPetch">9</Text>
                    </View>
                    <View>
                        <Ionicon name='notifications-off' color={'rgba(255,255,255, 0.5)'} size={16} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}