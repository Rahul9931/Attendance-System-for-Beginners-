//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity, Touchable } from 'react-native';
import Imagespath from '../Constants/Imagespath'
import { useNavigation } from '@react-navigation/native';
import {moderateScale} from '../styles/responsiveSize'
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import Roundimg from './Roundimg';
// create a component
const HomeHeader = ({
    onPress,
    headerStyle,
    style={}
}) => {
    const navigation=useNavigation()
    return (
        <View style={{...styles.headerStyle, ...headerStyle}}>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity>
        <Roundimg 
        image={Imagespath.profile}
        size={50}
        style={{marginLeft: moderateScale(250)}}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={{}} source={Imagespath.search}/>
        </TouchableOpacity>
        </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    headerStyle: {
        flex:0.01,
        width: moderateScale(390),
        minHeight:moderateScale(50),
        flexDirection:'row',
        justifyContent: 'flex-end',
        backgroundColor: 'white',
        borderBottomWidth:3,
        borderBottomColor:colors.black1
        
    },
    imgstyle:{
        height:moderateScale(50),
        width:moderateScale(50),
        borderRadius:moderateScale(25),
        
    },
    textstyle:{
        ...commonStyles.fontSize32,
        
    }

});

//make this component available to the app
export default HomeHeader;