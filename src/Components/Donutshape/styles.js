import React, { Component } from 'react';
import {StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily'
import { moderateScale,moderateScaleVertical,scale } from '../../styles/responsiveSize';

export const styles = StyleSheet.create({
    container: {
        height:moderateScale(286),
        width:moderateScale(340),
        backgroundColor:colors.white,
        marginTop:moderateScale(20),
        marginLeft:moderateScale(20),
        // borderEndWidth:1,
        // borderRightWidth:1,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 9,
},
shadowOpacity: 0.48,
shadowRadius: 11.95,

elevation: 18,


    },
    content:{
        flex:0.7,
        width:moderateScale(155),
        justifyContent:'center',
        alignSelf:'flex-end',
        marginTop:moderateScale(-150),
        
    },
    textStyle:{
        fontSize:scale(16),
        fontWeight:'bold',
        fontFamily:fontFamily.bold,
        marginBottom:moderateScale(10)
    },
    chartStyle:{
        marginLeft:moderateScale(10),
        marginTop:moderateScale(50)
    },
    classStyle:{
        fontWeight:'bold',
        color:colors.black4,
        alignSelf:'center',
        fontSize:scale(20),
        marginTop:moderateScale(10)
    },
    imgStyle:{
        flex:0.33,
        //backgroundColor:'yellow',
        width:moderateScale(120),
        flexDirection:'row',
        alignSelf:'flex-end',
        justifyContent:'center',
        alignItems:'center',

    }
});