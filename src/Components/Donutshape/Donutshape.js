//import liraries
import React, { Component } from 'react';
import { View, Text,Image, StyleSheet,TouchableOpacity } from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily'
import { moderateScale,moderateScaleVertical,scale } from '../../styles/responsiveSize';
import PieChart from 'react-native-pie-chart';
import Imagespath from '../../Constants/Imagespath';
import { styles } from './styles';

// create a component
const Donutshape = ({
    widthAndHeight =moderateScale(170),
    series = [a,b,c],
    sliceColor = ['#ffbe0c','red', '#00d717'],
    classvalue,
     totalpresentStudent,
     totalabsentStudent,
     totalleaveStudent,
     text1,
     text2,
     text3,
     donutStyle
}) => {
    return (
        <View style={{...styles.container,...donutStyle}}>
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
          
        <View style={styles.content}>
            <Text style={styles.textStyle}><Text style={{color:'#00d717'}}>{totalpresentStudent}</Text> {text1}</Text>
            <Text style={styles.textStyle}><Text style={{color:'red'}}>{totalabsentStudent}</Text> {text2}</Text>
            <Text style={styles.textStyle}><Text style={{color:'#ffbe0c'}}>{totalleaveStudent}</Text> {text3}</Text>
        </View>
        <View style={styles.imgStyle}>
        <Image
        source={Imagespath.clock}
        style={{width:moderateScale(30),
        height:moderateScale(30),
        
    }}
        />
        <Text style={{...styles.textStyle,color:colors.black6}}> 9:30-10:30</Text>
        </View>
        </View>
    
    );
};

export default Donutshape;
