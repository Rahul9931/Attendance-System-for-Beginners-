//import liraries
import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { moderateScale, scale } from '../../styles/responsiveSize';
import PieChart from 'react-native-pie-chart';
import fontFamily from '../../styles/fontFamily';
import Slider from '@react-native-community/slider';

const CustomSlider = ({
  finale_date
}) => {
  const [data1, setSliderdata1] = useState(30)
  const [data2, setSliderdata2] = useState(2)
  const [data3, setSliderdata3] = useState(2)
  return (
    <View style={styles.container}>
      <Text style={styles.classStyle}>Today at</Text>
      <Text style={styles.classStyle}>{finale_date}</Text>
      <View style={styles.innerviewStyle}>
        <Text style={styles.classStyle}>Present Student:<Text style={styles.textStyle}>{data1}</Text></Text>
        <Slider
          minimumValue={0}
          maximumValue={40}
          step={1}
          value={data1}
          minimumTrackTintColor="#00d717"
          maximumTrackTintColor="#3793ff"
          onValueChange={(slidervalue) => { setSliderdata1(slidervalue) }}
          thumbTintColor='#00d717'
          style={styles.slistyle}
        />
        <Text style={styles.classStyle}>Absent Student: <Text style={styles.textStyle}>{data2}</Text></Text>
        <Slider
          //style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={40}
          step={1}
          value={data2}
          minimumTrackTintColor="red"
          maximumTrackTintColor="#3793ff"
          onValueChange={(slidervalue2) => { setSliderdata2(slidervalue2) }}
          thumbTintColor='red'
          style={styles.slistyle}
        />
        <Text style={styles.classStyle}>Leave Student: <Text style={styles.textStyle}>{data3}</Text></Text>
        <Slider
          //style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={40}
          step={1}
          value={1}
          minimumTrackTintColor="#ffbe0c"
          maximumTrackTintColor="#3793ff"
          onValueChange={(slidervalue)=>{setSliderdata3(slidervalue)}}
          thumbTintColor='#ffbe0c'
          style={styles.slistyle}
        />
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    height: moderateScale(286),
    width: moderateScale(340),
    backgroundColor: colors.white,
    marginTop: moderateScale(20),
    marginLeft: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,


  },
  innerviewStyle: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'skyblue',
    //flexDirection:'row'
  },
  sliderviewStyle: {
    height: moderateScale(20),
    width: moderateScale(340),
    backgroundColor: 'skyblue'
  },
  textStyle: {
    fontSize: scale(24),
    fontWeight: 'bold',
    fontFamily: fontFamily.bold,
    marginBottom: moderateScale(10)
  },
  classStyle: {
    fontWeight: 'bold',
    color: colors.black4,
    alignSelf: 'center',
    fontSize: scale(20),
    marginTop: moderateScale(10)
  },
  slistyle: {
    width: moderateScale(330),
    height: moderateScale(20),
    //marginRight:moderateScale(-30)
    //marginHorizontal:moderateScale(-10)
  },

});
export default CustomSlider;
