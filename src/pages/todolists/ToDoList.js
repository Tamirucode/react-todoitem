import React from "react";
import styles from "../../styles/ToDoList.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card,Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { useHistory } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
const ToDoList = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    created_at,
    title,
    
    
    
   todolistPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/todolists/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/todolists/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };


  return (
    
      <>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{created_at}</span>
            {is_owner && todolistPage && "..."}
          </div>
        </Media>
        
      <ul>
      <li to={`/todolists/${id}`}>
      
        <h3>{title} </h3>
        <span className={styles.ToDoList} onClick = {handleEdit}> 
        <i  className="fas fa-edit" /> 
        </span> <span className={styles.ToDoList} onClick = {handleDelete}>                             
        <i  className="fas fa-trash-alt" />
                                        </span> </li>
     
      <Link to="/todoitems"> Add todoitem</Link>
      </ul>
      </>
      
  );
};

export default ToDoList;