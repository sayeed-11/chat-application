import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'

const LogIn = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");
    const handleSubmit = async () => {
        if(email && password) {
            try {
                await signInWithEmailAndPassword(auth,email, password);
                clearDara();
            } catch (error) {
                console.log(error)
            }
        }
    }

    const clearDara = () => {
        setEmail("");
        setPassowrd("");
    }
    return (
        <View className="flex-1 bg-slate-100">
            <SafeAreaView className="flex">
                <View className="px-5 flex-row justify-between items-center">
                    <TouchableOpacity onPress={() => { navigation.goBack() }} className="bg-violet-800 rounded-bl-2xl rounded-tr-2xl">
                        <Text className="font-ChakraPetch px-5 py-2 text-white">Back</Text>
                    </TouchableOpacity>
                    <Text className="text-xl font-ChakraPetch text-violet-800">LOG IN</Text>
                </View>
                <View className="flex-row justify-center">
                    <Image style={{ width: 250, height: 250 }} className="object-cover" source={require("../../assets/Programming-bro.png")} />
                </View>
            </SafeAreaView>
            <View style={{
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
            }}
                className="flex-1 bg-violet-800 px-5 py-5 flex justify-around items-center ">
                 {/* <Text className="text-3xl text-violet-800 font-ChakraPetch uppercase text-center bg-slate-100 px-5 rounded-bl-xl rounded-br-xl py-1 border-t-2 border-violet-800">log in</Text> */}
                <View className="space-y-5 w-full">
                    <View className="relative">
                        <Text className="font-ChakraPetch text-white absolute z-10 -top-[20%] left-[5%] bg-violet-800 px-2">Email id</Text>
                        <TextInput onChangeText={(val) => {setEmail(val)}} value={email} className=" py-3 px-2 rounded-xl border-2 border-white text-white" placeholder='Enter Email' placeholderTextColor={"rgba(255,255,255,0.3)"} />
                    </View>
                    <View className="relative">
                        <Text className="font-ChakraPetch text-white absolute z-10 -top-[20%] left-[5%] bg-violet-800 px-2">Password</Text>
                        <TextInput onChangeText={(val) => {setPassowrd(val)}} value={password} className=" py-3 px-2 rounded-xl border-2 border-white text-white" placeholder='Enter Password' secureTextEntry={true} placeholderTextColor={"rgba(255,255,255,0.3)"} />
                    </View>
                    <View className="flex items-start -translate-y-4">
                        <TouchableOpacity className="inline-block">
                            <Text className="text-white underline">Forgot Password ?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={handleSubmit} className="bg-white py-2 rounded-xl">
                        <Text className="text-center text-2xl font-ChakraPetch text-violet-800">Log in</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text className="text-center font-ChakraPetch text-xl text-white">or</Text>
                </View>
                <View className="flex-row justify-center gap-x-5">
                    <TouchableOpacity className="p-2 bg-white rounded-xl">
                        <Image style={{ width: 30, height: 30 }} source={require('../../assets/google.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity className="p-2 bg-white rounded-xl">
                        <Image style={{ width: 30, height: 30 }} source={require('../../assets/apple.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity className="p-2 bg-white rounded-xl">
                        <Image style={{ width: 30, height: 30 }} source={require('../../assets/facebook.png')} />
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center gap-x-3">
                    <Text className="text-white font-ChakraPetch">Don't have any account?</Text>
                    <TouchableOpacity onPress={() =>{navigation.navigate('SignUp')}}>
                        <Text className="text-white font-ChakraPetch underline">Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LogIn