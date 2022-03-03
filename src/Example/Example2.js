import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,Image } from 'react-native';
import { data } from '../Constants/data';
import Imagespath from '../Constants/Imagespath';

const Example2=()=>{
    a='../Assests/Images/search24.png'
    c='../Assests/Images/profile.jpg'
    const numbers=[1,2,3,4,5]
    const data=[1,2,3,4,5]
    return(
        <View style={styles.container}>
            <Button
            title='image'
            onPress={data}
            />
            {numbers.map((i)=>{
                return(
                    <View>
                        {/* <Text>{`'${i}'`}</Text> */}
                        <Image
                        source={Imagespath.profile}
                        style={{height:40,width:40}}
                        />
                    </View>
                )
            })}
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'skyblue'
    }
})
export default Example2;