//import liraries
import React, { useState } from 'react';
import { View, Text,ScrollView, Modal, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import DetailsDonutshape from '../../Components/Donutshape/Donutshape3';
import Header from '../../Components/Header';
import HomeHeader from '../../Components/HomeHeader';
import CustomSlider from '../../Components/CustomSlider/CustomSlider';
import { moderateScale, scale } from '../../styles/responsiveSize';
import { styles } from './styles';
import CustomTable from '../../Components/Table/CustomTable';
import { useSelector } from 'react-redux';
import actions from '../../Redux/actions';

// create a component
const AttendanceDetails = () => {
    const class1 = useSelector((state) => state.Classvalue.class_value)
    console.log('Attendence details class is',class1)
    
    let date1 = new Date();
    let current_date = date1.getDate();
    let year1 = date1.getFullYear();
    let month1 = (date1.getMonth()+1);
    let finale_date1=` ${current_date}-${month1}-${year1}`
    return (
        <View style={styles.container}>
            <HomeHeader
            />
            <Header
                screen={'Class Attendance'}
                text={'Class Attendance Details'}
                headingText={{ marginLeft: moderateScale(30) }}
            />
            <View style={styles.viewStyle}>
            <ScrollView>
            <DetailsDonutshape
            classvalue={class1}
            series={[2,3,90]}
            date={finale_date1}
            />
            <CustomSlider
            finale_date={finale_date1}
            />
            <View style={styles.tableviewStyle}>
            <CustomTable
            
            /> 
            </View>
            </ScrollView>
            </View>
        </View>
    );
};
export default AttendanceDetails;
