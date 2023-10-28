import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import ToDoItem from "./ToDoItem";
import btnStyles from "../../styles/Button.module.css";

function ToDoItemPage() {
  const { id } = useParams();
  const [todoitem, setToDoItem] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: todoitem }] = await Promise.all([
          axiosReq.get(`/todoitems/${id}`),
        ]);
        setToDoItem({ results: [todoitem] });
        console.log(todoitem);
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
        <ToDoItem {...todoitem.results[0]} setToDoItems={setToDoItem} ToDoItemPage />
        
      </Col>
      
    </Row>
  );
}

export default ToDoItemPage;