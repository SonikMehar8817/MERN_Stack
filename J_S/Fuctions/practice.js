let a = "sonik";

function vovel(a){
    res = [];
    for(i=0;i<a.length;i++){
        if(a[i]=="a"||"e"||"i"||"o"||"u"){
            res.push(a[i]);
        }
    }
    return res;

}

let result = vovel(a)
console.log(result);