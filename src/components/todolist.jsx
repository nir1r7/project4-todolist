import React, { Component } from 'react';

class ToDoList extends Component(){
    render(){
        return (
            <div>
                <MyList />
            </div>
        );
    }
}

function MyList(){

    return (
        <div>
            <p>Hello</p>
        </div>
    );
}

export default ToDoList;