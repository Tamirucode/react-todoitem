import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import ToDoItem from "./ToDoItem";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";

import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";

function ToDoItemsPage({ message, filter = "" }) {
  const [todoitems, setToDoItems] = useState({ results: [] });
  
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchToDoItems = async () => {
      try {
        const { data } = await axiosReq.get(`/todoitems/?${filter}`);
        setToDoItems(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchToDoItems();
  }, [filter, pathname]);
  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles mobile</p>
        {hasLoaded ? (
          <>
            {todoitems.results.length ? (
              todoitems.results.map((todoitem) => (
                <ToDoItem key={todoitem.id} {...todoitem} setToDoLists={setToDoItems} />
              
              
                ))
           
            ): (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}

          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <p>Popular profiles for desktop</p>
      </Col>
    </Row>
  );
}

export default ToDoItemsPage;