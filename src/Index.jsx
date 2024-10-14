import { View, Text } from 'react-native'
import React from 'react'
import HomePage from './Screens/HomePage';
import WelcomePage from './Screens/WelcomePage';
import LogIn from './Screens/LogIn';
import SignUp from './Screens/SignUp';
import ChatScreen from './Screens/ChatScreen';
import Group from './Screens/Group';
import Status from './Screens/Status';
import Calls from './Screens/Calls';
import Settings from './Screens/Settings';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useAuth from '../hooks/useAuth';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Ionicon from 'react-native-vector-icons/Ionicons';

import StatusIcon from './icons/StatusIcon';
import Profile from './Screens/Profile';


const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: "#be185d",
        borderBlockColor: "transparent",
      },
      tabBarShowLabel: false
    }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicon name={`${focused ? "chatbubbles" : "chatbubbles-outline"}`} color={'white'} size={focused ? 40 : 28} />
          ),
          tabBarBadge : 10,
          tabBarBadgeStyle:{
            backgroundColor:'#000',
          }
        }} name="HomePage" component={HomePage} />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicon name={`${focused ? "people" : "people-outline"}`} color={'white'} size={focused ? 40 : 28} />
          ),
        }} name="Group" component={Group} />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{
              position: "absolute",
              bottom: 10,
              // backgroundColor: "#22FF22",
              backgroundColor: "#000",
              zIndex: 50,
              borderRadius: 50, // Adjust as needed
            }}>
              <StatusIcon focused={focused}/>
            </View>
          ),
        }} name="Status" component={Status} />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicon name={`${focused ? "call" : "call-outline"}`} color={'white'} size={focused ? 40 : 28} />
          ),
          tabBarBadge : 5,
          tabBarBadgeStyle:{
            backgroundColor:'#000',
          }
        }} name="Calls" component={Calls} />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicon name={`${focused ? "settings" : "settings-outline"}`} color={'white'} size={focused ? 40 : 28} />
          ),
        }} name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}



const Index = () => {

  const { user } = useAuth();

  if (user) {
    return (
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false, }} name="TabNav" component={TabNav} />
        <Stack.Screen options={{ headerShown: false, }} name="ChatScreen" component={ChatScreen} />
        <Stack.Screen options={{ headerShown: false, }} name="Profile" component={Profile} />
        {/* <Stack.Screen options={{ headerShown: false, }} name="ChatScreen" component={ChatScreen} /> */}
      </Stack.Navigator>
    )
  } else {
    return (
      <Stack.Navigator>
        {/* <Stack.Navigator initialRouteName='WelcomePage'> */}
        {/* <Stack.Screen options={{ headerShown: false }} name="TabNav" component={TabNav} /> */}
        <Stack.Screen options={{ headerShown: false }} name="WelcomePage" component={WelcomePage} />
        <Stack.Screen options={{ headerShown: false }} name="LogIn" component={LogIn} />
        <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
      </Stack.Navigator>
    )
  }
}

export default Index