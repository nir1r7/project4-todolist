import React, { Component } from 'react';

class ToDoList extends Component {
    render() { 
        return (
            <div>
                <List/>
            </div>
        );
    }
}

function List(props){

    return (
        <div>
            <p>Hello, World!</p>
        </div>
    );
}

export default ToDoList;
