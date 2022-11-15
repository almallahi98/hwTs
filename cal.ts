const prompt =require('prompt');

prompt.start();

prompt.get(['num1','num2','opration'],function(err,res)
{
    if(res.opration ==='-')
    {console.log(Number(res.num1) - Number(res.num2));}
    else if(res.opration ==='+')
    {console.log(Number(res.num1) + Number(res.num2));}
    else if(res.opration ==='*')
    {console.log(Number(res.num1) * Number(res.num2));}
    else if(res.opration ==='/')
    {console.log(Number(res.num1) / Number(res.num2));}


    console.log('enter 1st number',res.num1);
    console.log('enter 2nd number',res.num2);
    console.log('enter opration + - / *',res.opration)
    
});