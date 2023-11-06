 let value="Shital manohar padole"
 let newString =""
cl = console.log;
function reverseString(value)
{
    for(i=0;i<value.length;i++)
    {
        newString = value[i] + newString;
    }    
    
    return newString

}
console.log(reverseString(value))

