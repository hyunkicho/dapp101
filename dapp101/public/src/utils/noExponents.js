function noExponents(_number){
    var data= String(_number).split(/[eE]/);
    if(data.length== 1) return data[0];

    var  z= '', sign= _number<0? '-':'',
    str= data[0].replace('.', ''),
    mag= Number(data[1])+ 1;/*from w w  w.  ja v a  2  s . c  o  m*/

    if(mag<0){
        z= sign + '0.';
        while(mag++) z += '0';
        return z + str.replace(/^\-/,'');
    }
    mag -= str.length;
    while(mag--) z += '0';
    return str + z;
}

