
// const App = ()=> {


//     const [fullname , setFullname] = useState({fname : "" ,lname:"",email :"" ,number :"",image:""});




//     const onsubmit =(event)=>{
//         event.preventDefault();
//         alert("Form Submitted");  
        
//     }
    
//     const inputEvent= (event)=>{
//     //    const value = event.target.value;
//     //    const name = event.target.name; 
//        const {value ,name} =event.target;


//        setFullname((preValue) =>{
//            return{
//                ...preValue,
//                [name]:value
               
//         };

//        })

    
//     }



//     return(
//         <>
//         <form onSubmit={onsubmit}>
//         <div className='form'>
      
//         <h1>{fullname.fname}{fullname.lname}</h1>
//         <p>{fullname.email}{fullname.number}</p>
//         <p>{fullname.image}</p>
//         <input className='form-control' onChange={inputEvent}  placeholder="Enter First Name"  name="fname" />
//         <br/><br/>
//         <input className='form-control' onChange={inputEvent}  placeholder="Enter Last Name" type="text"  name="lname" />
//         <br/><br/>
//         <input className='form-control' onChange={inputEvent}  placeholder="Enter Email" autoComplete='not'  type="email"  name="email" />
//         <br/><br/>
//         <input className='form-control' onChange={inputEvent}  placeholder="Enter mobile number" type="number"  name="number" />
//         <br/><br/>
//         <input className='form-control image' onchange={inputEvent} placeholder="select image"  type="file" name='image' />
//         <br/><br/>
        
//         <button className='btn btn-primary' type='submit'>submit</button>
//         <div><img src={fullname.image} width="300" height={300}/></div>
//         </div>
//         </form>
//         </>
//     );
// }

// new project todo list



// import React,{useState} from 'react';
// import "./maching.css";
// import Todo_list from './Todo_list';
// //import Count from './Count';
// //import Slot from './Slot';

// const App = ()=> {
//     const [item, setItem] = useState("Buy Apple");
//     const [newItem , setNewItem] = useState([])


//     const changeHandle=(event)=>{
//         console.log(event);
//         setItem(event.target.value);
//     }
//     const clickhandle=()=>{
//         setNewItem((olditem)=>{
//             return [...olditem ,item]
//         });
//         setItem("");

        
//     }


//     const deleteItem=(id)=>{
        
//         setNewItem((olditem)=>{
        
//             return olditem.filter((arrElem,index)=>{
//                 return (index !==id)
//             })

//         });


        
//     }


//     return(
//         <>
   
//         <div className='form frame' >
//         <h1>ToDo List </h1>
//         <input type="text" placeholder='Add a items' value={item} onChange={changeHandle}/>
//         <button onClick={clickhandle}>+</button>
//         <br/><br/>
//        { newItem.map((Itemvalue , index)=>{
//             return    <Todo_list text={Itemvalue} key={index} id={index} select ={deleteItem}  />
//         })}
//         </div>
     
//         </>
//     );
// }
// export default App;




// increament and decreament pro


// import React from "react";
// import { useState } from "react";
// import "./maching.css";
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add'; 
// // import Todo_list from './Todo_list';
// //import Count from './Count';
// //import Slot from './Slot';

// const App = ()=> {
 
//     const [count ,setCount]= useState(0)
//     const increament=()=>{
//         setCount(count+1);
//     }
//     const decreament=()=>{
//         if(count >0 ){
//         setCount(count-1);
//         }else{
//             alert("this value is lessthen to 0")
//         }
//     }


//     return(
//         <>
   
//         <div className='form frame' >
//         <h1> {count}</h1>

//         <button className="incdnc" onClick={increament}> <AddIcon/></button>
//         <button className="incdnc" onClick={decreament}><DeleteIcon/></button>
//         <br/><br/>
       
//         </div>
     
//         </>
//     );
// }
// export default App;


// todo list delete linthrough





// import React,{useState} from 'react';
// import "./maching.css";
// import NewTodo from './NewTodo';



// const App = ()=> {
//     const [item , setItem] =useState("");
//     const [newitem , setNewItem] =useState([]);
//     const changeEvent=(event)=>{
//         setItem(event.target.value);
        
//     }  
//     const clickEvent=()=>{
//         setNewItem((olditem)=>{
//             console.log(olditem);
//             return [...olditem,item ];
//         })
//         setItem("");
        
//     }


//     return(
//         <>
   
//         <div className='form frame' >
//         <h1>ToDo List </h1>
//         <input type="text" placeholder='Add a items' value={item} onChange={changeEvent} />
//         <button onClick={clickEvent}>+</button>
//         <br/><br/>
//         {
//             newitem.map((val , index)=>{
//                 return <NewTodo text ={val}/>
//              })

//         }
       
//         </div>
     
//         </>
//     );
// }
// export default App;




///// accordian


// import React,{useState} from 'react';
// import Accordion from './accordian/Accordian';
// import "./maching.css";
// import NewTodo from './NewTodo';



// const App = ()=> {
//     return(
//         <>
//         <Accordion/>
//         </>
//         );
// }
// export default App;


//Keep card yogi



// import React, { useState } from "react"
// import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Card from "./Component/Card";
// import Header from "./Component/Header";
// import MainCard from "./Component/MainCard";
// import "./maching.css"

// const App =()=> {
//     const [addItem ,setAddItem]=useState([]);
//     const addNote=(note)=>{
//         setAddItem((preval)=>{
//             return [...preval,note];
//         });
//        console.log(note);  
//     };
//     const ondelete=(id)=>{
//         setAddItem((oldData)=>{
//             oldData.filter((currdata ,indx)=>{
//                 return indx!==id;       
//             })
//         })}
//     return(
//         <>
//         <Header/>
//         <MainCard passNote={addNote}/>
//         {addItem.map((val,index)=>{
//             return (<Card
//             key={index}
//             id={index}
//             title={val.title}
//             content={val.content} 
//             deleteItem={ondelete} 
//             />
//             );
//         })
//         }
      

//         </>

//         );
//     }
// export default App;


//new project

// <Menu/>
     
// <Switch>
// <Route exact path="/" component={Home} />
// <Route exact path="/contect" component={Contect} />
// <Route  path="Contect/Name" component={Name} />
// <Route component={Error}/>

// </Switch>
