function get_pan_name(url,db) {

    if (url.indexOf("main.aspx/GetMembersMbinfo") != -1) {
        db.IDC = url;
    }
    // if (url.indexOf("report/getBetBills.do") != -1) {
    //     db.ELC16 = url;
    // }
    // else if (url.indexOf("member/ajax.php") != -1 && url.indexOf("action=header_data") != -1 && url.indexOf("uid") != -1) {
    //     var  _url = url.substring(0, url.indexOf("report/getBetBills.do"));
    //     db.OA1 = url;
    // }
    if (url.indexOf("/member/Game_v2/gxpl") != -1) {
        db.CC = url;
    }

    if (url.indexOf("user/Ad_Xml.aspx?u=") != -1) {
        db.OAXML = url;
    }
    if (url.search(/\/User\/Bet\?gt=[\s\S]*\&UID=/) !=-1 ) {
        db.BW = url;
    }

    if (url.indexOf("member/accounts?_") != -1) {
        db.SGWIN = url;
    }

    if (url.indexOf("member/account?_") != -1) {
        db.SGWIN_NEW = url;
    }

    if (url.indexOf("/order/leftInfo/?&_=") != -1) {
        db.WS = url;
    }

    if (url.search(/\/game\/get_user_info.do\?game_type=[A-Z]+/i) != -1) {
        db.MOA = url;
    }

    return db;

}


//查找当前打开页面的URL
function getPanPath(_url, remote_type_start) {
    var url;
    switch (remote_type_start) {
        case 'IDC':
            url = _url.substring(0, _url.indexOf('/ch/main.aspx/GetMembersMbinfo')) + "/";
            break;
        case 'SGWIN':
            url = _url.substring(0, _url.indexOf("/member/accounts?_")) + "/";
            break;
        case 'SGWIN_NEW':
            url = _url.substring(0, _url.indexOf("/member/account?_")) + "/";
            break;
        case 'OAXML':
            url = _url.substring(0, _url.indexOf("/user/Ad_Xml.aspx?u=")) + "/";
            break;
        case 'BW':
            var remote_uid=_url.match(/UID=[\w]*/)[0];
            url = _url.substring(0, _url.indexOf("/User")) + "/remote_uid=" + remote_uid.replace(/UID=/,'');
            break;
        case 'CC':
            url = _url.substring(0, _url.indexOf("/member/Game_v2/gxpl")) + "/";
            break;
        case 'WS':
            url = _url.substring(0, _url.search("(\/pk\/)|(\/ssc\/)|(\/klc\/)|(\/nc\/)|(\/kb\/)")) + "/";
            break;
        case 'MOA':
            var url = _url.substring(0, _url.indexOf("/game"))+ "/";
            break;
    }
    var pre_http = url.substring(0, 4);
    if (pre_http != 'http') {
        url = '';
        consoleLog(remote_type_start + ' 获取大盘地址错误,请重新登录大盘', 'log_head', 'error', 1);
        return false;
    }

    return url;
}

setInterval(function () {
    var game_start= localStorage.getItem('game_start');  
    doTask();    
},120000) //每2分钟请求一次
