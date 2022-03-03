//import liraries
import React, {useState } from 'react';
import { View,SafeAreaView, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { moderateScale, scale } from '../../styles/responsiveSize';
import PieChart from 'react-native-pie-chart';
import Slider from '@react-native-community/slider';

// create a component
const SliderandDonut = ({
    widthAndHeight =moderateScale(110),
     series =[2,3,90],
     sliceColor = ['#ffbe0c','red', '#00d717'],
     classvalue='1A',
     totalpresentStudent,
     totalabsentStudent,
     totalleaveStudent,
     text1,
     text2,
     text3,
}) => {
    const [data1,setSliderdata1]=useState(34)
    const [data2,setSliderdata2]=useState(2)
    const [data3,setSliderdata3]=useState(2)
    return (
        <View style={styles.contentStyle}>
        <View style={styles.donutStyle}>
        <Text style={styles.classStyle}>Class:{classvalue}</Text>
        <Text style={styles.classStyle}>18-01-2022</Text>
        <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.75}
            coverFill={'#FFF'}
            style={styles.chartStyle}
          />
        </View>
        <View style={styles.sliderStyle}>
        <Text style={styles.classStyle}>Today at</Text>
        <Text style={styles.classStyle}>9:00-12:00</Text>
        <View style={styles.textS1}>
        <View style={styles.textS2}>
        <Text style={styles.classStyle}>Present Student:<Text style={styles.textStyle}>{data1}</Text></Text>
        <Text style={styles.classStyle}>Absent Student: <Text style={styles.textStyle}>{data2}</Text></Text>
        <Text style={styles.classStyle}>Leave Student: <Text style={styles.textStyle}>{data3}</Text></Text>
        </View>
        <View style={styles.textS3}>
        <Slider
            //style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={40}
            step={1}
            value={data1}
            minimumTrackTintColor="#00d717"
            maximumTrackTintColor="#3793ff"
            onValueChange={(slidervalue)=>{setSliderdata1(slidervalue)}}
            thumbTintColor='#00d717'
            style={styles.slistyle}
        />
        <Slider
            //style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={40}
            step={1}
            value={data2}
            minimumTrackTintColor="red"
            maximumTrackTintColor="#3793ff"
            onValueChange={(slidervalue2)=>{setSliderdata2(slidervalue2)}}
            thumbTintColor='red'
            style={styles.slistyle}
        />
        <Slider
            //style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={40}
            step={1}
            value={1}
            minimumTrackTintColor="#ffbe0c"
            maximumTrackTintColor="#3793ff"
            //onValueChange={(slidervalue)=>{setSliderdata3(slidervalue)}}
            thumbTintColor='#ffbe0c'
            style={styles.slistyle}
        />
        </View>
        </View>
        
        {/* 
        
        <Text>{data}</Text> */}
        </View>
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    contentStyle:{
        flex:1,
        flexDirection:'row',
        padding:5
    },
    donutStyle:{
     flex:0.33,
     
     justifyContent:'center',
     alignItems:'center'
    },
    sliderStyle:{
        flex:0.67,
        
        height:moderateScale(150)
    },
    chartStyle:{
        //marginTop:moderateScale(40),
    },
    classStyle:{
        fontWeight:'bold',
        color:colors.black6,
        alignSelf:'center',
    },
    slistyle:{
        width:moderateScale(130),
        height:moderateScale(20),
        //marginRight:moderateScale(-30)
        marginHorizontal:moderateScale(-10)
    },
    textS1:{
        flex:1,
        
        flexDirection:'row'
    },
    textS2:{
        flex:0.55,
        justifyContent:"space-evenly",
        
    },
    textS3:{
        flex:0.5,
        backgroundColor:'white',
        justifyContent:"space-evenly",
        
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:scale(13),
        color:colors.black
    }
});

//make this component available to the app
export default SliderandDonut;
