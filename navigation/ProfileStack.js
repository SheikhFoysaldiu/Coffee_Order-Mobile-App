import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../src/Profile';
import Editprofile from '../src/Editprofile'
import Roomnumber from '../src/Roomnumber';

const Stack=createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName='ProfileScreen'>
        <Stack.Screen name='ProfileScreen' component={Profile}options={{
            headerShown:false
        }
        }/>
        <Stack.Screen name='EditProfile' component={Editprofile}/>
        <Stack.Screen name='RoomNumber' component={Roomnumber}/>
    </Stack.Navigator>
  )
}

export default ProfileStack