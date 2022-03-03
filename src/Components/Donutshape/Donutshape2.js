//import liraries
import React, { Component } from 'react';
import { View, Text,Image, StyleSheet,TouchableOpacity } from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily'
import { moderateScale,scale } from '../../styles/responsiveSize';
import PieChart from 'react-native-pie-chart';
import Imagespath from '../../Constants/Imagespath';
import Roundimg from '../Roundimg'
import {styles} from '../Donutshape/styles'

// create a component
const Donutshape2 = ({
    widthAndHeight =moderateScale(170),
     series = [a],
     sliceColor = [colors.blue2],
     classvalue,
     text,
}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.classStyle}>Class:<Text style={{color:'black'}}>{classvalue}</Text></Text>
         <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.75}
            coverFill={'#FFF'}
            style={styles.chartStyle}
          />
          
        <View style={{...styles.content,alignItems:'center',}}>
        <Roundimg 
        image={Imagespath.error}
        size={70}
        />
        <Text style={styles.textStyle}>{text}</Text>
        </View>
        <View style={styles.imgStyle}>
        <Image
        source={Imagespath.clock}
        style={{width:moderateScale(20),
        height:moderateScale(20),
        
    }}
        />
        <Text style={{...styles.textStyle,color:colors.black6}}> 10:30</Text>
        </View>
        </View>
    
    );
};

// define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         height:moderateScale(286),
//         width:moderateScale(340),
//         backgroundColor:colors.white,
//         marginTop:moderateScale(20),
//         marginLeft:moderateScale(20),
//         // borderEndWidth:1,
//         // borderRightWidth:1,
//         shadowColor: "#000",
// shadowOffset: {
// 	width: 0,
// 	height: 2,
// },
// shadowOpacity: 0.25,
// shadowRadius: 3.84,

// elevation: 5,
//     },
//     content:{
//         flex:1,
//         width:moderateScale(107),
//         alignItems:'center',
//         alignSelf:'flex-end',
//         marginTop:moderateScale(-80),
        
//     },
//     textStyle:{
//         fontSize:scale(12),
//         fontWeight:'bold',
//         fontFamily:fontFamily.bold
//     },
//     chartStyle:{
//         marginRight:moderateScale(95),
//         marginTop:moderateScale(10)
//     },
//     classStyle:{
//         fontWeight:'bold',
//         color:colors.black4,
//         alignSelf:'center'
//     },
//     imgStyle:{
//         flex:0.3,
//         width:moderateScale(60),
//         flexDirection:'row',
//         alignSelf:'flex-end'
//     }
// });

//make this component available to the app
export default Donutshape2;
