import React from 'react'


const Answer=({name,place,infox={a:6,b:5}})=>{
   return (
   <div>
      Hello from {name}, I'm from  {place}({infox.a} || {infox.b})

      
      </div>
      );
   };
   




 export default Answer;
 
 