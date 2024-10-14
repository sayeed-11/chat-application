import { View, Text, Image, ScrollView, TextInput, Platform, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const chats = [
  {
    author: "you",
    message: "Hi",
    time: "9:45 PM"
  },
  {
    author: "person",
    message: "Hello",
    time: "9:45 PM"
  },
  {
    author: "you",
    message: "Hi",
    time: "9:45 PM"
  },
  {
    author: "person",
    message: "Hello",
    time: "9:45 PM"
  },
  {
    author: "you",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, repellat?",
    time: "9:45 PM"
  },
  {
    author: "person",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "9:45 PM"
  },
  {
    author: "you",
    message: "Hi",
    time: "9:45 PM"
  },
  {
    author: "person",
    message: "Hello",
    time: "9:45 PM"
  },
  {
    author: "you",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "9:45 PM"
  },
  {
    author: "person",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quis quidem pariatur vero quo quia maxime quas distinctio ipsa, reprehenderit praesentium saepe, quasi fuga libero vel amet? Recusandae, a iste.",
    time: "9:45 PM"
  },
  {
    author: "you",
    message: "Lorem ipsum dolor sifffv.",
    time: "9:45 PM"
  },
]

const ChatScreen = () => {
  const navigation = useNavigation();
  const [msg, setMsg] = useState("");

  return (
    <View className="flex flex-1 bg-black">
      <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
        <ChatHeader navigation={navigation}/>
        <Chats />
        <ChatInput msg={msg} setMsg={setMsg} />
      </KeyboardAvoidingView>
    </View>
  )
}

export default ChatScreen


const ChatHeader = ({navigation}) => {
  return (
    <SafeAreaView className="flex-row items-center justify-between px-3 z-50 bg-black pb-2 border-b-[0.5px] border-white/[0.1]">
      <View className="flex-row items-center gap-x-1">
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Ionicon name="arrow-back" size={24} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('Profile') }} className="flex-row items-center gap-x-3">
          <View>
            <Image className="w-11 h-11 object-cover rounded-full" source={{ uri: "https://i.pinimg.com/550x/47/07/98/470798697fff4e16ea823d13f45dbc09.jpg" }} />
          </View>
          <View>
            <Text className="text-white text-sm font-ChakraPetch">Alex Gomez</Text>
            <Text className="text-white text-xs">Typing...</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-row gap-x-5">
        <View>
          <Ionicon name='videocam' size={20} color={'white'} />
        </View>
        <View>
          <Ionicon name='call' size={20} color={'white'} />
        </View>
        <View>
          <Ionicon name='ellipsis-vertical' size={20} color={'white'} />
        </View>
      </View>
    </SafeAreaView>
  )
}


const Chats = () => {
  return (
    <ScrollView bounces={false} className="">
      <View className="py-5 px-2 gap-y-5">

        {
          chats.map((chat, index) => {

            if (chat.author !== "you") {
              if (chat.message.length > 25) {
                return (
                  <View key={index} style={{ borderTopEndRadius: 10, borderBottomRightRadius: 10, borderTopStartRadius: 10, borderBottomLeftRadius: 0 }} className="text-white self-start py-1.5 px-2 bg-white/[0.1] max-w-[80%]  justify-end">
                    <View className="space-y-1">
                      <Image className="w-full aspect-square object-cover rounded-md" source={{ uri: "https://i.pinimg.com/550x/47/07/98/470798697fff4e16ea823d13f45dbc09.jpg" }} />
                      <Text style={{ fontSize: 15 }} className="text-white self-baseline">{chat.message}</Text>
                    </View>
                    <View className="self-end"><Text className="text-white/[0.7] text-xs text-right px-2">4:09 pm</Text></View>
                  </View>
                )
              } else {
                return (
                  <View key={index} style={{ borderTopEndRadius: 10, borderBottomRightRadius: 10, borderTopStartRadius: 10, borderBottomLeftRadius: 0 }} className="text-white self-start py-1.5 px-2 bg-white/[0.1] max-w-[80%] flex-row  justify-end">
                    <Text style={{ fontSize: 15 }} className="text-white">{chat.message}</Text>
                    <View className="self-end"><Text className="text-white/[0.7] text-xs text-right px-2">4:09 pm</Text></View>
                  </View>
                )
              }
            } else {
              if (chat.message.length > 25) {
                return (
                  <View key={index} style={{ borderTopEndRadius: 10, borderBottomRightRadius: 0, borderTopStartRadius: 10, borderBottomLeftRadius: 10 }} className="text-white self-end py-1.5 px-2 bg-pink-900 max-w-[80%] justify-end">
                    <View className="space-y-1">
                      <Image className="w-full aspect-square object-cover rounded-md" source={{ uri: "https://i.pinimg.com/550x/47/07/98/470798697fff4e16ea823d13f45dbc09.jpg" }} />
                      <Text style={{ fontSize: 15 }} className="text-white self-baseline">{chat.message}</Text>
                    </View>
                    <View className="self-end flex-row items-center">
                      <Text className="text-white/[0.7] text-xs text-right px-2">4:09 pm</Text>
                      <Ionicon name='checkmark-done' size={20} color={'white'} />
                    </View>
                  </View>
                )
              } else {
                return (
                  <View key={index} style={{ borderTopEndRadius: 10, borderBottomRightRadius: 0, borderTopStartRadius: 10, borderBottomLeftRadius: 10, clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%) " }} className="text-white self-end py-1.5 px-2 bg-pink-900 max-w-[80%] flex-row justify-end">
                    <View>
                      {/* <Image className="w-[200px] aspect-square object-cover rounded-md" source={{ uri: "https://i.pinimg.com/550x/47/07/98/470798697fff4e16ea823d13f45dbc09.jpg" }} /> */}
                      <Text style={{ fontSize: 15 }} className="text-white self-baseline">{chat.message}</Text>
                    </View>
                    <View className="self-end flex-row items-center">
                      <Text className="text-white/[0.7] text-xs text-right px-2">4:09 pm</Text>
                      <Ionicon name='checkmark-done' size={20} color={'#48CAE4'} />
                    </View>
                  </View>
                )
              }
            }
          })
        }
      </View>
    </ScrollView>
  )
}

const ChatInput = ({ msg, setMsg }) => {
  return (
    <View className="flex-row px-2 items-center gap-x-2 py-2">
      <View className="flex-1 flex-row items-center bg-white/[0.1] px-2 gap-x-1 rounded-full">
        <TouchableOpacity >
          <Ionicon name='chatbox' color={'#be185d'} size={28} />
        </TouchableOpacity>
        <TextInput onChangeText={(text) => {
          setMsg(text);
        }} value={msg} className=" py-3 px-1 flex-1 text-white" placeholder='Type a message' placeholderTextColor={'white'} />
        <TouchableOpacity>
          <Ionicon name='attach' color={'#be185d'} size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicon name='camera' color={'#be185d'} size={30} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity className="p-2.5 bg-pink-700 rounded-full transition-all duration-[0.3s]">
          {
            msg === "" ?
              <Ionicon name='mic' size={Platform.OS === "ios" ? 22 : 30} color={'white'} /> :
              <Ionicon name='send' size={Platform.OS === "ios" ? 22 : 30} color={'white'} />
          }
        </TouchableOpacity>
      </View>
    </View>
  )
}