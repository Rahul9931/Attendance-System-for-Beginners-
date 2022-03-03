import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, Image, View, TouchableOpacity } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';
import { Table, Row, Rows, TableWrapper, Col, Cell } from 'react-native-table-component';
import { scale, moderateScale } from '../../styles/responsiveSize'
import Imagespath from '../../Constants/Imagespath';
import colors from '../../styles/colors';
import data from '../../Constants/data2';
import Mymodal from '../Modal/Mymodal';
import { useSelector } from 'react-redux';
import actions from '../../Redux/actions';
const CustomTable = () => {
  const data1 = useSelector((state) => state.Table_data_selector.data1)
  const datawidthArr = useSelector((state) => state.Table_data_selector.datawidthArr)
  const dataheader1 = useSelector((state) => state.Table_data_selector.dataheader1)
  const dataheader2 = useSelector((state) => state.Table_data_selector.dataheader2)
  const dataheaderwidthArr = useSelector((state) => state.Table_data_selector.dataheaderwidthArr)
  ////////////////////// Date Time ///////////////////////////
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let date1 = new Date();
  let date2 = new Date()
  date2.setDate(date1.getDate() - 7)
  let current_date = date1.getDate();
  let year1 = date1.getFullYear();
  let month1 = month[date1.getMonth()];
  let finale_date1 = `${month1} ${current_date}, ${year1}`

  let past_date = date2.getDate();
  let year2 = date2.getFullYear();
  let month2 = month[date2.getMonth()];
  let finale_date2 = `${month2} ${past_date}, ${year2}`
  let finale_weak = `${finale_date2} | ${finale_date1}`
  const [time, setTime] = useState(finale_date2)
  var final = finale_weak
  /////////////////////////////////////////////////////////////
  // console.log('load data is',modaldata)
  const num = data1.length
  _showData = (data, index) => {
    actions.show()
    actions.load_data(data)
  }
  day1=()=>{
    setdayunderline({underline1:'underline'})
    setweakunderline({underline2:'none'})
    setmonthunderline({underline3:'none'})
    setTime(finale_date1)
    actions.day_data()
  }
  weak1=()=>{
    setdayunderline({underline1:'none'})
    setweakunderline({underline2:'underline'})
    setmonthunderline({underline3:'none'})
    setTime(finale_weak)
    actions.weak_data()
  }
  monthone=()=>{
    setdayunderline({underline1:'none'})
    setweakunderline({underline2:'none'})
    setmonthunderline({underline3:'underline'})
    setTime(finale_weak)
    actions.month_data()
  }
  const [dayunderline, setdayunderline] = useState({
    underline1:'underline'
  })
  const {underline1}=dayunderline
  const [weakunderline, setweakunderline] = useState({
    underline2:'none'
  })
  const {underline2}=weakunderline
  const [monthunderline, setmonthunderline] = useState({
    underline3:'none'
  })
  const {underline3}=monthunderline
  return (
    <View style={styles.container}>
      <Mymodal

      />
      <View style={styles.tableheadStyle}>
        <Text style={{ fontWeight: 'bold', fontSize: scale(20),marginLeft:moderateScale(10) }}

        >Student Details</Text>
        <View style={styles.datetimeStyle}>
          
          <Text style={styles.datetextStyle}>{time}</Text>
          <Image
            source={Imagespath.calender}
            style={{ height: 35, width: 30 ,tintColor:colors.green}}
          />
        </View>
      </View>
      <View style={{flex:0.07,flexDirection:'row',backgroundColor: colors.black4}}>
        <TouchableOpacity
          onPress={() =>day1()}
          style={{ alignSelf: 'flex-end' }}
        >
            <Text style={{...styles.textStyle,textDecorationLine: underline1,}}>Day</Text>
        </TouchableOpacity>
       <TouchableOpacity
          onPress={() =>weak1()}
          style={{ alignSelf: 'flex-end' }}
        >
            <Text style={{...styles.textStyle,textDecorationLine: underline2,}}>Weak</Text>
        </TouchableOpacity>
         <TouchableOpacity
          onPress={() =>monthone()}
          style={{ alignSelf: 'flex-end' }}
        >
            <Text style={{...styles.textStyle,textDecorationLine: underline3,}}>Month</Text>
        </TouchableOpacity>
      </View>
      {/* //////////////// MAIN TABLE ////////////////////////// */}
      <View style={{ flex: 0.80 }}>

        <ScrollView horizontal={true}>
          <ScrollView >
            <Table borderStyle={{ borderWidth: 1 }}>
              <Row data={dataheader1} widthArr={dataheaderwidthArr} style={styles.head1} textStyle={styles.text} />
              <Row data={dataheader2} widthArr={dataheaderwidthArr} style={styles.head} textStyle={styles.text} />
              <TableWrapper style={styles.wrapper}>
                <TableWrapper style={{ flexDirection: 'column', borderWidth: 1 }}>
                  {data1.map((num) => {
                    return (
                      <Image
                        source={Imagespath.profile}
                        style={{ height: 35, width: 30 }}
                      />
                    )
                  })}
                </TableWrapper>
                <TouchableOpacity>
                  {
                    data1.map((cell, j) => (
                      <TouchableOpacity key={j} onPress={() => _showData(cell, j)}>
                        <Row data={cell} widthArr={datawidthArr} style={styles.row} textStyle={styles.text} />
                      </TouchableOpacity>
                    ))
                  }
                </TouchableOpacity>
              </TableWrapper>
            </Table>
          </ScrollView>
        </ScrollView>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  tableviewStyle: { height: moderateScale(250), width: moderateScale(360) },
  head: { height: 25, backgroundColor: '#f1f8ff' },
  head1: { height: 40, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 35, borderWidth: 1 },
  text: {
    textAlign: 'center',
    fontSize: scale(15),
    color: colors.black,
    fontWeight: 'bold'
  },
  tableheadStyle: {
    flex: 0.14,
    flexDirection: 'row',
    backgroundColor: colors.black4,
    //borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textStyle: {
    fontWeight: 'bold',
    marginLeft: moderateScale(15),
    fontSize: scale(18),
    //marginTop: moderateScale(50),
    color: colors.black,
    alignSelf:'flex-start',
    
  },
  datetimeStyle: {
    flex: 0.74,
    height: moderateScale(55),
    borderWidth: 1,
    //backgroundColor: 'green',
    alignSelf: 'flex-start',
    marginLeft: moderateScale(20),
    marginHorizontal: moderateScale(-45),
    marginTop: moderateScale(5),
    flexDirection:'row',
    flexWrap:'wrap'
  },
  datetextStyle: {
    fontWeight: 'bold',
    fontSize: scale(14),
    color: colors.black
  }
});

export default CustomTable;