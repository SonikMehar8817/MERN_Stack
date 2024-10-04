

      
     function get(arr){
        let res=[]
        for(let item of arr){
            if(typeof item === 'boolean'){
                res.push(item)
            }
           
        }
        return res
     }
     console.log(get(arr));

    let arr = [1, 2, 3, 4, 5, true, false, "hello", "hiiiii"];

    function getString(item){
        return typeof item==='string'
    }
    function getNumber(item) {
      return typeof item === 'number';
    }
    function getBool(item) {
      return typeof item === 'boolean';
    }

    function get(arr, fn) {
      let res = [];
      for (let item of arr) {
        if (fn(item)) {
          res.push(item);
        }
      }
      return res;
    }
 
    console.log(get(arr,getString));
    console.log(get(arr,getNumber));
    console.log(get(arr,getBool));
    

    //call back function 

    function callback (num,fn)
{
    return fn(num)
}
    function boolean(num){
        return typeof num==='boolean'
    }
    console.log(callback(true,boolean))


    function outer(){
        let user = 'hello'
        function inner(){
            console.log(user);
        }
        return inner
    }

    let inner = outer()
    inner()