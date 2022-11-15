interface IUserFrinds{
    fuser?:string;
    age?: number;
    Specialization?:string;
};

const userFrinds={fuser:'',age:0,Specialization:''}
const arr:IUserFrinds[]=[
    {fuser:'mohamme',age:20,Specialization:'dd'},
    {fuser:'ali',age:33,Specialization:'es'},
    {fuser:'makki',age:63,Specialization:'Bs'}];

    console.log(arr);