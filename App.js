import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// const content="Hello World from React!";
// const heading = React.createElement("h1",{id:"heading"},content);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log(heading);
// ************
// React.createElement returns an object
// It has 3 args
// 1st args --> element to be created
// 2nd args --> props
// 3rd args --> textContent of the element created or the child
// *************

// nested html
// <div id="parent">
//   <div id="child">
//     <h1>Nested HTML Content</h1>
//   </div>
// </div>
// ********

// const parent = React.createElement("div",{id:"parent"},
//               React.createElement("div",{id:"child"},
//               [React.createElement("h1",{id:"child1"},"Nested HTML Content"),
//               React.createElement("h2",{id:"child2"},"Sibling")]));
// root.render(parent);
// // if my root has already html content it will be replaced by root.render()
// // root.render() replace the content of the root and not append to it

// console.log(parent);

//Functional components

const Class = ()=>{
  return (
    <>
      <h1>Class 5</h1>
      <p>Section A</p>
      <p> Number of Students = 50</p>
    </>
  )
}

const Classroom =()=>(
    <>
      <h1>Classes</h1>
      <Class/>
      <Class/>
    </>
);

const heading = <h1 id='heading'>Hello! Namaste React 🚀</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Classroom/>);

// Assignment-03

const container = React.createElement("div",{className:"title"},
  [
    React.createElement("h1",{},"This is header1"),
    React.createElement("h2",{},"This is header2"),
    React.createElement("h3",{},"This is header3")
  ]
);

const containerJSX = (
<div className='title'>
  <h1>This is header1</h1>
  <h2>This is header2</h2>
  <h3>This is header3</h3>
</div>
);

const TitleComponent = ()=>{
  return (
    <div className='title'>
      <h1>This is header1</h1>
      <h2>This is header2</h2>
      <h3>This is header3</h3>
    </div>
  );
}

const ParaComponeny = ()=>{
  return (
    <p>This is a para</p>
  );
}

const TitleComponentTag = ({header1,header2,header3})=>{
  return (
    <div className='title'>
      <h1>{header1}</h1>
      <h2>{header2}</h2>
      <h3>{header3}</h3>
      <ParaComponeny/>
    </div>
  );
}

// root.render(<TitleComponentTag
//             header1="This is header1 with tag"
//             header2="This is header2 with tag"
//             header3="This is header3 with tag"/>);


const HeaderComponent = ()=>{
  return(
    <div className='header'>
      <img src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg' alt='bird' className='logo'/>
      <input type='text' placeholder='Search...' className='searchBar' />
      <img src='https://cdn-icons-png.flaticon.com/128/260/260236.png' alt='person' className='icon'/>
    </div>
  );
}

root.render(<HeaderComponent/>);