import React from "react";
import styles from "../../styles/ToDoList.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import { useHistory } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
const ToDoItem = (props) => {
  const {
    id,
    owner,
    
    title,
   
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/todoitems/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/todoitems/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };


  return (
    
   <>
        
      <ul>
      <li to={`/todoitems/${id}`}>{title}<span className={styles.ToDoList} onClick = {handleEdit}> 
        <i  className="fas fa-edit" /> </span> <span className={styles.ToDoList} onClick = {handleDelete}>                             
        <i  className="fas fa-trash-alt" />
                                        </span> </li>
            </ul>
      
      
      </>
  );
};

export default ToDoItem;