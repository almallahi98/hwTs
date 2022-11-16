let fun=(str)=>{
    str=str.toLocaleUpperCase();
    console.log(str);
    str=[...str];
    let arr=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let finel=[];
    str.forEach((elm,i) => {
        finel.push(arr[arr.findIndex(e=>e===elm)+1]);  
    });
    console.log(finel);

}