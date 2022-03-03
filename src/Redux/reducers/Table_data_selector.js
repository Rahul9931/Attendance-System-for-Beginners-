import data from "../../Constants/data2";
import types from "../types";
const initial_state = {
    data1: data.daydata,
    datawidthArr: data.daydatawidthArr,
    dataheader1: data.dayheaderdata,
    dataheader2: data.dayheaderdata2,
    dataheaderwidthArr: data.dayheaderwidthArr,
    modaldatawidthArr: data.daymodaldatawidthArr,
    modalheaderwidthArr: data.dayheaderwidthArr,
}

export default function (state = initial_state, action) {
    switch (action.type) {
        case types.DAY_DATA:
            return {
                data1: data.daydata,
                datawidthArr: data.daydatawidthArr,
                dataheader1: data.dayheaderdata,
                dataheader2: data.dayheaderdata2,
                dataheaderwidthArr: data.dayheaderwidthArr,
                modaldatawidthArr: data.daymodaldatawidthArr,
                modalheaderwidthArr: data.dayheaderwidthArr,
            }
        case types.WEAK_DATA:
            return {
                data1: data.weakdata,
                datawidthArr: data.weakdatawidthArr,
                dataheader1: data.weakheaderdata,
                dataheader2: data.weakheaderdata2,
                dataheaderwidthArr: data.weakheaderwidthArr,
                modaldatawidthArr: data.weakmodaldatawidthArr,
                modalheaderwidthArr: data.weakmodalheaderwidthArr,
            }
        case types.MONTH_DATA:
            return {
                data1: data.monthdata,
                datawidthArr: data.monthwidthArr,
                dataheader1: data.monthheaderdata,
                dataheader2: data.monthheaderdata2,
                dataheaderwidthArr: data.monthwidthArrheader,
                modaldatawidthArr: data.monthmodalwidthArrdata,
                modalheaderwidthArr: data.monthmodalwidthArrheader,
            }
        default:
            return { ...state }
    }
}