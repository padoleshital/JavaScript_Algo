// Write a program fizz at division of 3 , buzz division of 5, fizzbuzz on divison of both 

function fizzbuzz(x,y)
{
   for( let i=x;i<=y;i++)
   {
    if(i%3===0 && i%5===0)
    {
        console.log("fizzbuzz")
    }
    else if(i%3 === 0)
    {
        console.log("fizz");
    }
    else if(i%5 === 0)
    {
        console.log("buzz");
    }
    else{
    console.log(i)
    }
   } 

}
fizzbuzz(1,50)