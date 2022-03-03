//import liraries
import React, { Component } from 'react';
import { View, Text,Image, StyleSheet,TouchableOpacity } from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily'
import { moderateScale,moderateScaleVertical,scale } from '../../styles/responsiveSize';
import PieChart from 'react-native-pie-chart';

// create a component
const DetailsDonutshape = ({
    widthAndHeight =moderateScale(170),
    series = [a,b,c],
    sliceColor = ['#ffbe0c','red', '#00d717'],
    classvalue,
     date,
}) => {
    return (
        <View style={styles.container}>
         <Text style={styles.classStyle}>Class:<Text style={{color:'black'}}>{classvalue}</Text></Text>
         <Text style={styles.classStyle}>{date}</Text>
        <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.75}
            coverFill={'#FFF'}
          />
        </View>
    
    );
};
export const styles = StyleSheet.create({
    container: {
        height:moderateScale(286),
        width:moderateScale(340),
        backgroundColor:colors.white,
        marginTop:moderateScale(20),
        marginLeft:moderateScale(20),
        justifyContent:'center',
        alignItems:'center',
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
    textStyle:{
        fontSize:scale(16),
        fontWeight:'bold',
        fontFamily:fontFamily.bold,
        marginBottom:moderateScale(10)
    },
    classStyle:{
        fontWeight:'bold',
        color:colors.black4,
        alignSelf:'center',
        fontSize:scale(20),
        marginTop:moderateScale(10)
    },
});
export default DetailsDonutshape;
