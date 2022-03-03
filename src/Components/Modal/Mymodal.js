//import liraries
import React, {useState} from 'react';
import { View, Text, StyleSheet,Modal,Button,TouchableOpacity } from 'react-native';
import colors from '../../styles/colors';
import { moderateScale, scale } from '../../styles/responsiveSize';
import { Table, Row, Rows, TableWrapper, Col, Cell } from 'react-native-table-component';
import data from '../../Constants/data2';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../Redux/actions';
import { hide } from '../../Redux/actions/auth';
// create a component
const Mymodal = ({
    
}) => {
    const mystate=useSelector((state)=>state.auth.myState)
    const modaldata=useSelector((state2)=>state2.load_data.loadData)
    const modaldatawidthArr=useSelector((state)=>state.Table_data_selector.modaldatawidthArr)
    const modalheaderwidthArr=useSelector((state)=>state.Table_data_selector.modalheaderwidthArr)
    const dataheader1=useSelector((state)=>state.Table_data_selector.dataheader1)
    const dataheader2=useSelector((state)=>state.Table_data_selector.dataheader2)
    _hide = () => {
        actions.hide()
      }

    return (
        <Modal visible={mystate} transparent={true}>
            <View style={styles.modalStyle}>
            <View style={styles.modalouterStyle}>
                
                <View style={styles.modalflexStyle}>
                <ScrollView horizontal={true}>
                <ScrollView >
                    <Table borderStyle={{ borderWidth: 1 }}>
                    <Row data={dataheader1} widthArr={modalheaderwidthArr} style={styles.head} textStyle={styles.text} />
                    <Row data={dataheader2} widthArr={modalheaderwidthArr} style={styles.head} textStyle={styles.text} />
                    <Row data={modaldata} widthArr={modaldatawidthArr} style={styles.row} textStyle={styles.text} />
                    </Table>
                </ScrollView>
                </ScrollView>
                </View>
                
            <TouchableOpacity
            onPress={()=>_hide()}
            style={styles.buttonStyle}
            >
                <Text style={styles.textStyle}>Hide</Text>
            </TouchableOpacity>
            </View>
            </View>
        </Modal>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        
    },
    modalStyle:{
        flex:1,
        backgroundColor:'#000000aa',
        // height:moderateScale(50),
         //width:moderateScale(200)
    },
    modalouterStyle:{
        flex:0.5,
        backgroundColor:'white',
        marginTop:moderateScale(150),
        borderRadius:scale(20),
        //justifyContent:'flex-end',
        //alignContent:'center',
        
    },
    buttonStyle:{
        width:moderateScale(180),
        height:moderateScale(50),
        backgroundColor:colors.blue2,
        alignSelf:'center',
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        color:colors.white,
        fontSize:scale(25),
    },
    modalflexStyle:{
        flex:0.9,
        backgroundColor:'skyblue'
    },
    flatStyle:{
        flex:0.2,
        flexDirection:'row',
        backgroundColor:'yellow',
        justifyContent:'space-around'
        // marginLeft:moderateScale(7),
        // width:moderateScale(370),
    },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    row: { height: 40 },
    text: {
        textAlign: 'center',
        fontSize: scale(15),
        color: colors.black,
        fontWeight:'bold'
      }
    
});

//make this component available to the app
export default Mymodal;
