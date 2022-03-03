import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Table, Row, Rows, TableWrapper, Col, Cell } from 'react-native-table-component';
import day from '../Constants/data2';
import { scale, moderateScale } from '../styles/responsiveSize'
import Imagespath from '../Constants/Imagespath';
import colors from '../styles/colors';

const Example3 = () => {
  const num = day.daydata.length
  _showData = (data, index) => {
    console.log('data=',data,'index=',index)
  }

  return (
    <View style={styles.container}>


      <View style={styles.tableviewStyle}>
        <ScrollView>
          <ScrollView horizontal={true}>
            <View>
              <Table borderStyle={{ borderWidth: 1 }}>
                <Row data={day.dayheader} widthArr={day.widthArrheader} style={styles.head} textStyle={styles.text} />
                {/* <Row data={day.dayheader} flexArr={[20, 0.1, 0.1, 0.1]} style={styles.head} textStyle={styles.text}/> */}
                <TableWrapper style={styles.wrapper}>
                  <TableWrapper style={{ backgroundColor: 'yellow', flexDirection: 'column' }}>
                    {day.daydata.map((num) => {
                      return (
                        <Image
                          source={Imagespath.profile}
                          style={{ height: 28, width: 30 }}
                        />
                      )
                    })}
                  </TableWrapper>
                  <TouchableOpacity>
                    {
                      day.daydata.map((cell, j) => (
                        <TouchableOpacity key={j} onPress={() =>_showData(cell, j)}>
                          <Row data={cell} widthArr={day.widthArrdata} style={styles.row} textStyle={styles.text} />
                        </TouchableOpacity>
                      ))
                    }

                    {/* <Rows data={day.daydata} widthArr={day.widthArrdata} style={styles.row} textStyle={styles.text}/> */}
                  </TouchableOpacity>
                </TableWrapper>
              </Table>
            </View>
          </ScrollView>
        </ScrollView>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  tableviewStyle: { height: moderateScale(250), width: moderateScale(360), backgroundColor: 'lightgreen' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 28 },
  text: {
    textAlign: 'center',
    fontSize: scale(14),
    color: colors.black
  }


});

export default Example3