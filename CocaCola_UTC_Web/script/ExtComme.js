var les_url = "";
var Repor_Url = "";
les_url = location.href;
var les_str = les_url.substr(0, 7);
les_url = les_url.substr(7);
var itemsPerPage = Math.floor((document.documentElement.clientHeight - 120) / 20);
var Grobalheight=document.documentElement.clientHeight;
var les_url = les_url.substr(0, les_url.indexOf("/"));
var IPurl = les_url.substr(0, les_url.indexOf(":"));

les_url = les_str + les_url;
var oa_url = "";
var oa_img = "";
if (les_url.indexOf("localhost:") > -1) {
    oa_url = les_url + "/LogicRoute .ashx";
    oa_img = les_url + "/Images/";
}
else {
    oa_url = les_url + "/LogicRoute .ashx";
    oa_img = les_url + "/Images/";
}
Ext.Ajax.on('requestcomplete', function (conn, response, options) {
    if (response && response.getResponseHeader && response.getResponseHeader('_timeout')) {
        
        if (top.location != this.location) {
           parent.Ext.Msg.alert('提示', '会话超时，请重新登录!', function () {
                top.location.replace(les_url + "/Index.aspx");
            });
        }
        else {
            Ext.Msg.alert('提示', '会话超时，请重新登录!', function () {
                window.location = les_url + "/Index.aspx";
            });
        }
    }
});
function SavePostSend(Menthod, MainStr,DetailStr,fun) {
    Ext.Ajax.request({
        url: oa_url,
        waitTitle: "系统提示",
        waitMSG: "数据正在处理中....",
        params: { Menthod: Menthod, MainStr: MainStr, DetailStr: DetailStr },
        method: 'POST',
        success: function (response, options) {
            var resultname = response.responseText.split("@")[0];
            var result = response.responseText.split("@")[1];
            Ext.example.msg('系统提示', resultname);
            if (result == "successful") {
                fun(resultname);
            }
        },
        failure: function (resp, opts) {
            var respText = Ext.util.JSON.decode(resp.responseText);
            Ext.example.msg('系统出错', respText.error);
        }
    });
}
function GetResultStr(Menthod, MainStr, fun) {
    Ext.Ajax.request({
        url: oa_url,
        waitTitle: "系统提示",
        waitMSG: "数据正在处理中....",
        params: { Menthod: Menthod, MainStr: MainStr },
        method: 'POST',
        success: function (response, options) {
            if (response.responseText != "") {
                var resultname = response.responseText;
                //Ext.example.msg('系统提示', "数据加载成功");
                fun(resultname);
            }
        },
        failure: function (resp, opts) {
            var respText = Ext.util.JSON.decode(resp.responseText);
            Ext.example.msg('系统出错', respText.error);
        }
    });
}
function GetResultStrText(Menthod, MainStr, fun) {

    Ext.Ajax.request({
        url: oa_url,
        waitTitle: "系统提示",
        waitMSG: "数据正在处理中....",
        params: { Menthod: Menthod, MainStr: MainStr },
        method: 'POST',
        success: function (response, options) {
            if (response.responseText!="") {
                var resultname =response.responseText;
                //Ext.example.msg('系统提示', "数据加载成功");
                fun(resultname);
            }
        },
        failure: function (resp, opts) {
            var respText = Ext.util.JSON.decode(resp.responseText);
            Ext.example.msg('系统出错', respText.error);
        }
    });
}
function GetStore(Model,Menthod, MainStr) {
    var store = Ext.create('Ext.data.Store', {
        model: Model,
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: oa_url, //获取json地址 
            //Reader 解码json数据 
            actionMethods: { read: 'post' },
            reader: {
                type: 'json',
                root: 'Table',
                totalProperty: 'Table1'
            }
        },
        listeners: {
            "beforeload": function (store) {
                Ext.apply(store.proxy.extraParams, { Menthod: Menthod, MainStr: MainStr });    //带参数
            }
        }
    });
    return store;
}
//获取下拉框数据集
function GetStoreSelect(Model, Menthod, MainStr) {
    var store = Ext.create('Ext.data.Store', {
        model: Model,
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: oa_url,
            actionMethods: { read: 'post' },
            reader: {
                type: 'json',
                root: 'Table'
            }
        },
        listeners: {
            "beforeload": function (store) {
                Ext.apply(store.proxy.extraParams, { Menthod: Menthod, MainStr: MainStr });    //带参数
            }
        }
    });
    return store;
}
function GetStoreGroup(Model, Menthod, GroupField,OrderByField, MainStr) {
    var store = Ext.create('Ext.data.Store', {
        model: Model,
        autoLoad: true,
        //pageSize: 15,
        groupField: GroupField,
        sorters: [OrderByField],
        proxy: {
            type: 'ajax',
            url: oa_url, //获取json地址 
            actionMethods: { read: 'post' },
            //Reader 解码json数据 
            reader: {
                type: 'json',
                root: 'Table'
                //totalProperty: 'Table1'
            }
        },
        listeners: {
            "beforeload": function (store) {
                Ext.apply(store.proxy.extraParams, { Menthod: Menthod, MainStr: MainStr });    //带参数
            }
        }
    });
    return store;
}


//function PostSend(Form, Menthod, fun) {
//    Form.submit({
//        url: 'Handler.ashx',
//        method: 'post',
//        waitTitle: "提示",
//        submitEmptyText: false,
//        waitMSG: "正在登入中",
//        params: { Menthod: Menthod },
//        success: function (Form, action) { fun(action) },
//        failure: function (Form, action) { Ext.Msg.alert('系统提示', action.result ? action.result.msg : "登录失败，请重试"); }
//    })
//}
//function SavePostSend(Form, Menthod, fun) {
//    Form.submit({
//        url: '../Handler.ashx',
//        method: 'post',
//        waitTitle: "提示",
//        submitEmptyText: false,
//        waitMSG: "保存数据中",
//        params: { Menthod: Menthod },
//        success: function (Form, action) { fun(action) },
//        failure: function (Form, action) { Ext.Msg.alert('系统提示', action.result ? action.result.msg : "保存失败，请重试"); }
//    })
//}
//function AjaxSend(str, func) {
//    alert(str);
//    var par = str.split("&");
//    Ext.Ajax.request({
//        url: oa_url,
//        params: {
//            Menthod: par[0].substring(par[0].indexOf("=") + 1),
//            j: par[1].substring(par[1].indexOf("=") + 1),
//            x: par[2].substring(par[2].indexOf("=") + 1),
//            y: par[3].substring(par[3].indexOf("=") + 1)
//        },
//        method: 'POST',
//        success: function (response, options) {
//            alert("123");
//            var result = Ext.JSON.decode(response.responseText).Table[0];
//            func(result);
//        }
//    });
//}
function getvl(name) {
    var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
    if (reg.test(location.href)) return unescape(RegExp.$2.replace(/\+/g, " "));
    return "";
};
function Check(ChkGrp, index) {
    if (ChkGrp.items.itemAt(index).checked) {
        for (var i = 0; i < ChkGrp.items.length; i++) {
            if (i != index) {
                if (ChkGrp.items.itemAt(i).checked) {
                    var id = ChkGrp.items.itemAt(i).id;
                    ChkGrp.setValue(id, false)
                }
            }
        }
    }
}
function getnowdate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    var time =month + "-" + day + "-" + year;
    return time;
}
function getnowfirstdate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    //var day = now.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    var day = "01";
    var time = month + "-" + day + "-" + year;
    return time;
}
function getnowenddate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = new Date(year, month, 0).getDate();;
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    var time = month + "-" + day + "-" + year;
    return time;
}
function setCookie(name, value) {
    var today = new Date();
    var expires = new Date();
    expires.setTime(today.getTime() + 1000 * 60*6*60);
    document.cookie = name + "=" + escape(value) + "; expires=" + expires.toGMTString();
}
function setLoginType(name, value) {
    var today = new Date();
    var expires = new Date();
    expires.setTime(today.getTime() + 1000 * 10);
    document.cookie = name + "=" + escape(value) + "; expires=" + expires.toGMTString();
}
function getCookie(Name) {
    var search = Name + "=";
    var offset, end;
    if (document.cookie.length) {
        offset = document.cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = document.cookie.indexOf(";", offset);
            if (end == -1)
                end = document.cookie.length;
            return unescape(document.cookie.substring(offset, end));
        }
        else return ("");
    }
    else return ("");
} 
