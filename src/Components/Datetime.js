const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let date1 = new Date();
    let date2=new Date()
    date2.setDate(date1.getDate()-7)
    let current_date = date1.getDate();
    let year1 = date1.getFullYear();
    let month1 = month[date1.getMonth()];
    let finale_date1=`${month1} ${current_date}, ${year1}`

    let past_date = date2.getDate();
    let year2 = date2.getFullYear();
    let month2 = month[date2.getMonth()];
    let finale_date2=`${month2} ${past_date}, ${year2}`

    let finale_weak=`${finale_date2} | ${finale_date1}`