function cal (stry1)
{
    let arr=['zero','one', 'two', 'three','four','five','six','seven','eight','nine','multiple','add','sub','dividend'];
    let x = stry1.split(" ");
    let xToString=[];
    arr.map((elm,i)=>{
        x.forEach(element => {
            if(element==elm){
                xToString.push(i) 

            }
        });
    });
    console.log(xToString);
    switch (xToString[2]){
        case 11: return xToString[0]+xToString[1];
        break;
        case 12:return xToString[0]-xToString[1];
        break;
        case 13:return xToString[0]*xToString[1];
        break;
        case 14:return xToString[0]/xToString[1];
        break;
    }



}
console.log(cal('one sub one'));