import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import ToDoList from "./ToDoList";


function ToDoListPage() {
  const { id } = useParams();
  const [todolist, setToDoList] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: todolist }] = await Promise.all([
          axiosReq.get(`/todolists/${id}`),
        ]);
        setToDoList({ results: [todolist] });
        console.log(todolist);
      } catch (err) {
        console.log(err);
      }
    };


    handleMount();
  }, [id]);
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles for mobile</p>
        <ToDoList {...todolist.results[0]} setToDoLists={setToDoList} ToDoListPage />
        
      </Col>
      
    </Row>
  );
}

export default ToDoListPage;