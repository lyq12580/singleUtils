
//时间戳函数 
function DateToStr(flag){
    var dt = new Date();
    dt.setDate(dt.getDate());
    if (dt.getFullYear) {
        var y, m, d, str , h ,min ,sec;
        y = dt.getFullYear();
        m = dt.getMonth() + 1; //1-12
        d = dt.getDate();
        h = dt.getHours() ;
        min = dt.getMinutes();
        sec = dt.getSeconds();
        m = m < 10 ? '0' + m : m + '';
        d = d < 10 ? '0' + d : d + '';
        min = min < 10 ? '0' + min : min + '';
        h = h < 10 ? '0' + h : h + '';
        sec = sec < 10 ? '0' + sec : sec + '';
        // str = y + "年" + m + "月" + d + "日 " + h + ":" + min + ":" + sec;
        if(flag === "1"){
            str = y + m +d;
        }else if(flag === "2"){
            str = y + m +d + " " + h + ':' +  min + ':' + sec;
        }
    }
    return str;
}
