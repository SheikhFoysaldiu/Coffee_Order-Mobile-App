import { View, Text,Image,Button } from 'react-native'
import React from 'react'

const Single = () => {
  return (
    <View>
    <View style={{margin:30}}>
     <Image style={{width:'100%',height:300,borderRadius:50}} source={require('../assets/coffe1.jpg')}/>
     <View style={{alignItems:'center', margin:50}}>
     <Text style={{fontSize:20}}>Chocolate Coffee</Text>
     <Text style={{fontSize:20, fontWeight:'300'}}>30 TK</Text>
     </View>
     <Button color={'black'} title='ORDER NOW'/>
   </View>
   </View>
  )
}

export default Single