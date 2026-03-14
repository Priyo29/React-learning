import React from "react";
import ReactDOM from "react-dom/client";

const Title= ()=>(
  <h1>Nomo Nomo Dugga Thakur</h1>
);


// React Component   //- Functional -NEW way of writing code 
// Good practice to write the name of the component with capital letter
var xyz=90;
//Composing Components
const HeaderComponent =()=>{
  return (
    <div>
      <Title />   
      {Title()}  
      {xyz}
      {console.log("Priyabrata Mondal")}  { /*it is shown in the console of the inspect*/ }
      <h1>Functional Component</h1>
      <h2>Header with H2 tag</h2>
    </div>
  );
}

// const HeaderComponent2 =()=>(
//     <div>
//       <h1>Functional Component</h1>
//       <h2>Header with H2 tag</h2>
//     </div>
// );              // Both valid code 

const root = ReactDOM.createRoot(document.getElementById("root"));


//async defer
// root.render(heading); //React element
root.render(<HeaderComponent />);
// root.render(<HeaderComponent2 />);
