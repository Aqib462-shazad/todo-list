import React,{useEffect, useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; // ✅ Fixed 'Model' to 'Modal'

const EditTaskPopup= ({ modal, toggle, updateTask, taskObj }) => { // ✅ Fixed prop from model → modal
    const[taskName, setTaskName]= useState('');
    const[description, setDescription ] =useState('');

    const handleChange = (e) => {
        const {name, value} = e.target

        if( name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }

    }
    useEffect(() => {
        if (modal) {
            setTaskName(taskObj.Name || '');
            setDescription(taskObj.Description || '');
        }
    }, [modal, taskObj.Name, taskObj.Description]);
    
    
   
   const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = taskName;
    tempObj["Description"] = description;
    //let tempObj ={
      //  Name:taskName,
        //Description:description};
    
    
    updateTask(tempObj);
    toggle();
   }
   
   return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Edit your Task</ModalHeader>
            <ModalBody>
               <form>
                  <div className="form-goup">
                     <label>Task Name</label>
                    <input type="text" className="form-control" value={taskName} onChange={handleChange} name = "taskName"/>
                    
                  </div>
                  <div className="form-goup"> 
                    <label> Description</label>
                    <textarea rows="5" className="form-control" value={description} onChange={handleChange} name = "description"></textarea>
                  </div>

               </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate} >update</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditTaskPopup; // ✅ Don't forget to export
