function number(str){
    let x=document.getElementById(str).innerHTML;
    let y=document.getElementById("display").innerHTML;
    if(y!='0')
        x=y+x;
    document.getElementById("display").innerHTML = x;
    // document.write(str);
}

function clearAll(){
    document.getElementById("display").innerHTML = "0";
}

function clear1(){
    let str = document.getElementById("display").innerHTML;
    let l = str.length;
    let newstr = str;
    if(l===1)
        newstr="0";
    else
        newstr = str.slice(0, l-1);
    document.getElementById("display").innerHTML = newstr;
}

function evaluate(){
    
}