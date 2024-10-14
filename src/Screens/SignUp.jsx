import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { KeyboardAvoidingView } from 'react-native'

const SignUp = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");
    const handleSubmit = async () => {
        if (email && password && name) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                clearDara();
            } catch (error) {
                console.warn(error)
            }
        }
    }

    const clearDara = () => {
        setEmail("");
        setPassowrd("");
        setName("");
    }

    return (
        <View className="flex-1 bg-slate-100">
            <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
                <ScrollView bounces={false} contentContainerStyle={{
                    flex: 1
                }}>
                    <SafeAreaView className="flex">
                        <View className="px-5 flex-row justify-between items-center">
                            <TouchableOpacity onPress={() => { navigation.goBack() }} className="bg-violet-800 rounded-bl-2xl rounded-tr-2xl">
                                <Text className="font-ChakraPetch px-5 py-2 text-white">Back</Text>
                            </TouchableOpacity>
                            <Text className="text-xl font-ChakraPetch text-violet-800">SIGN UP</Text>
                        </View>
                        <View className="flex-row justify-center">
                            <Image style={{ width: 200, height: 200 }} className="object-cover" source={require("../../assets/Programming-pana.png")} />
                        </View>
                    </SafeAreaView>
                    <View style={{
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                    }}
                        className="flex-1 bg-violet-800 p-5 flex justify-around items-center ">
                        <View className="space-y-5 w-full">
                            <View className="relative">
                                <Text className="font-ChakraPetch text-white absolute z-10 -top-[20%] left-[5%] bg-violet-800 px-2">Full Name</Text>
                                <TextInput onChangeText={(value) => { setName(value) }} value={name} className=" py-3 px-2 rounded-xl border-2 border-white text-white" placeholder='Enter Full Name' placeholderTextColor={"rgba(255,255,255,0.3)"} />
                            </View>
                            <View className="relative">
                                <Text className="font-ChakraPetch text-white absolute z-10 -top-[20%] left-[5%] bg-violet-800 px-2">Email id</Text>
                                <TextInput onChangeText={(value) => { setEmail(value) }} value={email} className=" py-3 px-2 rounded-xl border-2 border-white text-white" placeholder='Enter Email' placeholderTextColor={"rgba(255,255,255,0.3)"} />
                            </View>
                            <View className="relative">
                                <Text className="font-ChakraPetch text-white absolute z-10 -top-[20%] left-[5%] bg-violet-800 px-2">Password</Text>
                                <TextInput onChangeText={(value) => { setPassowrd(value) }} value={password} secureTextEntry={true} className=" py-3 px-2 rounded-xl border-2 border-white text-white" placeholder='Enter Password' placeholderTextColor={"rgba(255,255,255,0.3)"} />
                            </View>
                            <TouchableOpacity onPress={handleSubmit} className="bg-white py-2 rounded-xl">
                                <Text className="text-center text-2xl font-ChakraPetch text-violet-800">Sign up</Text>
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
                            <Text className="text-white font-ChakraPetch">Already have an account?</Text>
                            <TouchableOpacity onPress={() => { navigation.navigate('LogIn') }}>
                                <Text className="text-white font-ChakraPetch underline">Log in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView >
            </KeyboardAvoidingView>
        </View >
    )
}

export default SignUp