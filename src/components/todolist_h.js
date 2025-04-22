import React, { useEffect, useState } from 'react';
import CreateTask from '../modals/CreateTask' // ✅ Case-sensitive import
import Card from './Card'

const TodolistH = () => {
    const [modal, setModal] = useState(false);
    const[tasklist, setTasklist] =useState([])

    useEffect(() => {
        let arr = localStorage.getItem("taskList")
        
        if(arr){
            let obj = JSON.parse(arr);
            setTasklist(obj);
        } 
     },[]);

     const deleteTask = (index) =>{
        const tempList = [...tasklist];
        tempList.splice(index, 1);
        localStorage.setItem("taskList",JSON.stringify(tempList));
        setTasklist(tempList);
        
     }
     const updateListArray =(obj,index) => {
        let tempList = [...tasklist]
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTasklist(tempList)
    
     }



   
    const toggle = () => {
        setModal(!modal);
    }
    
    const saveTask =(taskObj) => {
        const tempList = [...tasklist,taskObj];

        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTasklist(tempList)
        setModal(false)
    }
    return (
       <>
        <div className="header text-center">
            <h1>TO_DO_LIST</h1>
            <button className="btn btn-primary mt-3" onClick={toggle}>
                Create Task
            </button>
        </div>
        
        <div className="task-container">
            {tasklist.map((obj,index) => <Card taskObj = {obj} index ={index} deleteTask = {deleteTask} updateListArray={updateListArray}/>)}

        </div>

        <CreateTask toggle={toggle} modal={modal} save = {saveTask}/> {/* ✅ Fixed here */}
       </>
    );
};

export default TodolistH;
