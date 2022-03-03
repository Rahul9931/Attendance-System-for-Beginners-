//import liraries
import React, { Component } from 'react';
import { View,SafeAreaView,TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import Donutshape from '../../Components/Donutshape/Donutshape';
import Header from '../../Components/Header';
import HomeHeader from '../../Components/HomeHeader';
import Donutshape2 from '../../Components/Donutshape/Donutshape2'
import colors from '../../styles/colors'
import { moderateScale } from '../../styles/responsiveSize';
import actions from '../../Redux/actions';
import { useSelector } from 'react-redux';

// create a component
const ClassAttendance = ({navigation}) => {
    const class1 = useSelector((state) => state.Classvalue.class_value)
    const gotoscreen1=(screen)=>{
        actions.classvalue1A()
        console.log('gotoscreen1 is ',class1)
        navigation.navigate(screen)}
    const gotoscreen2=(screen)=>{
        actions.classvalue2B()
        console.log('gotoscreen2 is ',class1)
        navigation.navigate(screen)}
    return (
        <SafeAreaView style={styles.container}>
            <HomeHeader
            />
            <Header
            text={'Class Attendance'}
            screen={'Attendance Details'}
            />
            <View style={styles.mainareaStyle}>
            <ScrollView>
            <TouchableOpacity
            onPress={()=>{gotoscreen1('Attendance Details')}}
            >
            <Donutshape
            classvalue={'1A'}
            series={[2,3,90]}
            totalpresentStudent={'48'}
            totalabsentStudent={'02'}
            totalleaveStudent={'02'}
            text1={'Present Students'}
            text2={'Leave Students'}
            text3={'Absent Students'}
            />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{gotoscreen2('Attendance Details')}}
            >
            <Donutshape
            classvalue={'2B'}
            series={[2,3,90]}
            totalpresentStudent={'48'}
            totalabsentStudent={'02'}
            totalleaveStudent={'02'}
            text1={'Present Students'}
            text2={'Leave Students'}
            text3={'Absent Students'}
            />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{gotoscreen1('Attendance Details')}}
            >
            <Donutshape2
            series={[100]}
            classvalue={'1A'}
            text={'No Attendence Taken Yet'}
            />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{gotoscreen1('Attendance Details')}}
            >
            <Donutshape
            classvalue={'1A'}
            series={[2,3,90]}
            totalpresentStudent={'48'}
            totalabsentStudent={'02'}
            totalleaveStudent={'02'}
            text1={'Present Students'}
            text2={'Leave Students'}
            text3={'Absent Students'}
            donutStyle={{
                marginBottom:40
            }}
            />
            </TouchableOpacity>
            </ScrollView>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: colors.white2,
    },
    mainareaStyle:{
        flex:1,
    }
});
export default ClassAttendance;
