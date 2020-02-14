function number(str){
    let x=document.getElementById(str).innerHTML;
    let y=document.getElementById("display").innerHTML;
    if(y!='0'){
        if(x=='+' || x=='-' || x=='/' || x=='*' || x=='%'){
            let l =y.length;
            let last = y[l-1];
            if(last=='+' || last=='-' || last=='/' || last=='*' || last=='%'){
                let s = y.slice(0, l-1) + x;
                x=s;
            }
            else
                x=y+x;
        }
        else
            x=y+x;
        
    }
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

function evaluate1(){
    var str = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = eval(str);
}