//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native';
import { moderateScale } from '../styles/responsiveSize';

// create a component
const Dt = () => {
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const d = new Date();
    let date = d.getDate();
    let day = d.getDay();
    let year = d.getFullYear();
    let name = month[d.getMonth()];
    daystr=`${name} ${date}, ${year}`
    var curr = new Date; // get current date
var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
var last = first + 6; // last day is the first day + 6

var firstday = new Date(curr.setDate(first)).toUTCString();
var lastday = new Date(curr.setDate(last)).toUTCString();
    console.log(firstday)
    console.log(lastday)
    return (
        <View style={styles.container}>
            <TouchableOpacity
            style={styles.dtStyle}
            >
            <Text>{name} {date}, {year} </Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    dtStyle:{
        height:moderateScale(40),
        width:moderateScale(130),
        backgroundColor:'skyblue'
    }
});

//make this component available to the app
export default Dt;
