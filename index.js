setInterval(()=>{
    let date=new Date()
    
    let hours=date.getHours()>12? date.getHours()-12: date.getHours()
    let am_pm=date.getHours()>12?" PM":" AM"
    let minutes=date.getMinutes()<10?"0"+date.getMinutes(): date.getMinutes()
    let seconds=date.getSeconds()<10?"0"+date.getSeconds(): date.getSeconds()

    // let currentTime=hours+":"+minutes+":"+ seconds +" "+ am_pm
    // time.innerHTML=currentTime
    hrs.innerHTML=hours
    mins.innerHTML=minutes
    sec.innerHTML=seconds
    am.innerHTML=am_pm

    // let day=date.getDate()
    // let month=date.getMonth()
    // let year=date.getFullYear()

    // let currentDate=day+"-"+month+"-"+year
    // document.getElementById("date").innerHTML=currentDate
    // date.innerHTML=currentDate

},1000)






