import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import { moderateScale, scale } from '../../styles/responsiveSize';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewStyle:{
        flex:1,
        
    },
    detailsStyle:{
        flex:0.30,  
        backgroundColor:'yellow',
        marginTop:moderateScale(15),
        marginLeft:moderateScale(5),
        width:moderateScale(375),
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    },
    tableviewStyle:{
        height:moderateScale(450),
        width:moderateScale(370),
        backgroundColor:colors.white,
        marginTop:moderateScale(20),
        marginLeft:moderateScale(5),
        marginBottom:moderateScale(20),
    },
    tableheadStyle:{
        flex:0.20,
        flexDirection:'row',
        backgroundColor:colors.black4,
        borderWidth:1,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
    },
    flatStyle1:{
        flex:0.80,
        //flexDirection:'row'
        // marginLeft:moderateScale(7),
        // width:moderateScale(370),
    },
    headStyle:{
        flex:0.13,
        borderWidth:1,
        // marginLeft:moderateScale(7),
        // width:moderateScale(370),
    
    },
    flatStyle:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'space-around',
        //borderWidth:1,
//         shadowColor: "#000",
// shadowOffset: {
// 	width: 0,
// 	height: 2,
// },
// shadowOpacity: 0.25,
// shadowRadius: 3.84,
        // marginLeft:moderateScale(7),
        // width:moderateScale(370),
    },
    
    textStyle:{
        fontWeight:'bold',
        marginLeft:moderateScale(15),
        fontSize:scale(18),
        marginTop:moderateScale(50),
        color:colors.black
    },
    modalStyle:{
        flex:1,
        backgroundColor:'#000000aa',
        // height:moderateScale(50),
         //width:moderateScale(200)
    },
    modalouterStyle:{
        flex:0.5,
        backgroundColor:'white',
        marginTop:moderateScale(150),
        borderRadius:scale(20),
        //justifyContent:'flex-end',
        //alignContent:'center',
        
    },
    buttonStyle:{
        width:moderateScale(180),
        height:moderateScale(50),
        backgroundColor:colors.blue2,
        alignSelf:'center',
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center'
    },
    modaltextStyle:{
        color:colors.white,
        fontSize:scale(25),
    },
    modalflexStyle:{
        flex:0.9,
    },
    modalflatStyle:{
        flex:0.2,
        flexDirection:'row',
        //backgroundColor:'yellow',
        justifyContent:'space-around'
        // marginLeft:moderateScale(7),
        // width:moderateScale(370),
    },
    monthtextStyle:{
        fontWeight:'bold',
        fontSize:scale(10),
        color:colors.black
    },
    daytextStyle:{
        fontWeight:'bold',
        fontSize:scale(15),
        color:colors.black
    }
});

