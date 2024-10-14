import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
   const navigation = useNavigation();
    return (
        <View className="flex-1 bg-black">
            <SafeAreaView className="flex-row justify-between px-2 py-3">
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Ionicon name='arrow-back' size={24} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicon name='ellipsis-vertical' size={24} color={'white'} />
                </TouchableOpacity>
            </SafeAreaView>
            <ScrollView bounces={false} className="space-y-5">
                <View className="items-center space-y-5">
                    <View>
                        <Image className="w-36 h-36 object-cover rounded-full" source={{ uri: "https://i.pinimg.com/550x/47/07/98/470798697fff4e16ea823d13f45dbc09.jpg" }} />
                    </View>
                    <View className="items-center space-y-1">
                        <Text className="text-white text-3xl">Alex Gomez</Text>
                        <Text className="text-white">alexgomez@gmail.com</Text>
                    </View>
                    <View className="flex-row gap-x-2  justify-center">
                        <View className="w-[20%] aspect-square justify-center border-[1px] border-white/[0.15] rounded-xl items-center space-y-2">
                            <Ionicon name='call-outline' size={24} color={'#ef4444'} />
                            <Text className="text-white">Audio</Text>
                        </View>
                        <View className="w-[20%] aspect-square justify-center border-[1px] border-white/[0.15] rounded-xl items-center space-y-2">
                            <Ionicon name='videocam-outline' size={24} color={'#ef4444'} />
                            <Text className="text-white">Video</Text>
                        </View>
                        <View className="w-[20%] aspect-square justify-center border-[1px] border-white/[0.15] rounded-xl items-center space-y-2">
                            <Ionicon name='share-social-outline' size={24} color={'#ef4444'} />
                            <Text className="text-white">Share</Text>
                        </View>
                        <View className="w-[20%] aspect-square justify-center border-[1px] border-white/[0.15] rounded-xl items-center space-y-2">
                            <Ionicon name='search-outline' size={24} color={'#ef4444'} />
                            <Text className="text-white">Search</Text>
                        </View>
                    </View>
                </View>

                <View className="bg-white/[0.05] py-2 space-y-2">
                    <View className="flex-row justify-between px-2 py-2">
                        <Text className="text-white">Media, links and docs</Text>
                        <View className="flex-row items-center gap-x-2">
                            <Text className="text-white">56</Text>
                            <Ionicon name='chevron-forward' size={15} color={'white'} />
                        </View>
                    </View>
                    <ScrollView className="" horizontal showsHorizontalScrollIndicator={false}>
                        <Image className="w-28 h-28 object-cover rounded-md mx-1" source={{ uri: "https://i.pinimg.com/550x/47/07/98/470798697fff4e16ea823d13f45dbc09.jpg" }} />
                        <Image className="w-28 h-28 object-cover rounded-md mx-1" source={{ uri: "https://i.pinimg.com/550x/47/07/98/470798697fff4e16ea823d13f45dbc09.jpg" }} />
                        <Image className="w-28 h-28 object-cover rounded-md mx-1" source={{ uri: "https://i.pinimg.com/550x/47/07/98/470798697fff4e16ea823d13f45dbc09.jpg" }} />
                        <Image className="w-28 h-28 object-cover rounded-md mx-1" source={{ uri: "https://i.pinimg.com/550x/47/07/98/470798697fff4e16ea823d13f45dbc09.jpg" }} />
                        <View className="w-28 h-28 object-cover rounded-md justify-center items-center">
                            <Ionicon name='chevron-forward' size={24} color={'white'} />
                        </View>
                    </ScrollView>
                </View>

                <View className="bg-white/[0.05] py-5 space-y-5 px-2">
                    <View className="flex-row items-center gap-x-5">
                        <Ionicon name='heart-outline' size={26} color={'white'} />
                        <Text style={{ fontSize: 17 }} className="text-white ">Add to Favourite</Text>
                    </View>
                    <View className="flex-row items-center gap-x-5">
                        <View className="relative">
                            <View className="absolute"><Ionicon name='radio-button-off-outline' size={26} color={'#ef4444'} /></View>
                            <View className="scale-[1.2] rotate-45"><Ionicon name='remove-outline' size={26} color={'#ef4444'} /></View>
                        </View>
                        <Text style={{ fontSize: 17 }} className=" text-red-500">Block Alex</Text>
                    </View>
                    <View className="flex-row items-center gap-x-5">
                        <Ionicon name='heart-dislike-outline' size={26} color={'#ef4444'} />
                        <Text style={{ fontSize: 17 }} className="text-red-500">Report Alex</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile

// const ProfileHeader = ({ navigation }) => {
//     return (
//         <SafeAreaView className="flex-row justify-between px-2 py-3">
//             <TouchableOpacity onPress={() => { navigation.goBack() }}>
//                 <Ionicon name='arrow-back' size={24} color={'white'} />
//             </TouchableOpacity>
//             <TouchableOpacity>
//                 <Ionicon name='ellipsis-vertical' size={24} color={'white'} />
//             </TouchableOpacity>
//         </SafeAreaView>
//     )
// }