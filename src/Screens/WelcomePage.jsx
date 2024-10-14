import {
    View,
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const WelcomePage = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="flex-1 bg-slate-100">
            <View className="flex-1 flex justify-around ">
                <Text className="text-4xl font-ChakraPetch text-center">Let's Get Started!</Text>
                <View className=" flex-row justify-center items-center">
                    <Image style={{ width: 350, height: 350 }} className="object-cover" source={require("../../assets/Programming-amico.png")} />
                </View>
                <View className="space-y-5">
                    <TouchableOpacity onPress={() => {navigation.navigate('SignUp')}} className=" bg-violet-800 mx-7 py-3 rounded-xl">
                        <Text className="font-ChakraPetch text-center text-white text-xl">Sign up</Text>
                    </TouchableOpacity>
                    <View className="flex-row justify-center gap-x-3">
                        <Text className="font-ChakraPetch">Already have an account?</Text>
                        <TouchableOpacity onPress={() => {navigation.navigate('LogIn')}}>
                            <Text className="font-ChakraPetch text-violet-800 underline">Log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default WelcomePage