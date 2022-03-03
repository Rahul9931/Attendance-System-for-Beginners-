//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity, Touchable } from 'react-native';
import Imagespath from '../Constants/Imagespath'
import { useNavigation } from '@react-navigation/native';
import {scale,moderateScale, moderateScaleVertical} from '../styles/responsiveSize'
import colors from '../styles/colors';
// create a component
const Header = ({
    text,
    headerStyle,
    screen={screen},
    headingText
}) => {
    const navigation=useNavigation()
    return (
        <View style={{...styles.headerStyle, ...headerStyle}}>
        <TouchableOpacity
        onPress={()=>navigation.navigate(screen)}>
        <Image style={{height:25, width:25,marginLeft:moderateScale(10),marginTop:moderateScale(10)}} source={Imagespath.back}/>
        </TouchableOpacity>
        <Text style={{...styles.headingText,...headingText}}>{text}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    headerStyle: {
        flex:0.08,
        backgroundColor:colors.white2,
        borderBottomWidth:3,
        borderBottomColor:colors.black1
    },
    headingText:{
        alignSelf:'center',
        fontSize:scale(15),
        fontWeight:'bold',
        marginRight:moderateScale(170),
        marginVertical:moderateScaleVertical(-25)
        
    }
});

//make this component available to the app
export default Header;
