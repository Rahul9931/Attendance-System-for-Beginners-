import React from 'react';
import AttendanceDetails from '../Screens/AttendanceDetails/AttendanceDetails';
import ClassAttendance from '../Screens/ClassAttendance/ClassAttendance';
export default function(Stack){
    return(
        <>
        <Stack.Screen name='Class Attendance'
         component={ClassAttendance}
         options={{headerShown: false}}/>
        <Stack.Screen name='Attendance Details'
         component={AttendanceDetails}
         options={{headerShown: false}}/>
        </>
    )
}