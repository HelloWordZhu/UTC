function randUtils(){
    var me = this;
    me.source = "abcdefghzklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-.~!@#$%^&*()_:<>?";
    me.letter = "abcdefghzklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    me.number = "0123456789";
    me.mark = "-.~!@#$%^&*()_:<>?";

    me.gPwd = function(){
        //var range = me.generatePassword(9, me.source);
        var lettval = me.generatePassword(9, me.letter);
        var numval = me.generatePassword(3, me.number);
        //var markval = me.generatePassword(1, me.mark);
        //var pwd = lettval + numval + markval + range;
        var pwd = lettval + numval;
        return pwd;
    };

    me.generatePassword = function(length,resource){
        length = length || 32;   
        var s = "";  
        for(var i = 0;i < length; i++)  {  
            s += resource.charAt(
                Math.ceil(Math.random()*1000)%resource.length
            );  
        }
        return s;  
    };
}