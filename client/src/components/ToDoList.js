import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid'

class ToDoList extends Component {
    state = {
        items: [
            {
                id: uuid(),
                name: 'Eggs'
            },
            {
                id: uuid(),
                name: 'Milk'
            },
            {
                id: uuid(),
                name: 'Butter'
            },
            {
                id: uuid(),
                name: 'Water'
            },
        ]
    }

    render() {
        const { items } = this.state;

        return(
            <Container>
                <Button 
                    color="dark" 
                    style={{marginBottom: "2rem"}} 
                    onClick={() => {
                        const name = prompt('Enter task to do'); 
                        if(name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name }]
                            }));
                        }
                    }}>
                    Add Task
                </Button>

                <ListGroup>
                    <TransitionGroup className="todo-list">
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={250} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                items: state.items.filter(item => item.id !== id)
                                            }));
                                        }}
                                        >
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default ToDoList;