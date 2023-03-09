import React, { Component } from 'react';
import Emoji from './emoji';

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
    let [inpValue, setInpValue] = React.useState("");
    let [list, setList] = React.useState([]);

    function addTask(inp){
        setInpValue(inp)

        list.push(
            <li key={inp} >
                {inp}{" "}
                <button onClick={handleBtn(inp)}><Emoji symbol="🗑️" label="delete"/></button>
            </li>
        );

        console.log(list);
    }

    function handleBtn(id){
        console.log(id);
    }

    function handleInpChange(event){
        if (event.key === 'Enter'){
            addTask(event.target.value);
            event.target.value = "";
        }
    }

    return (
        <div>
            <input id="inpBox" type="text" onKeyDown={handleInpChange}></input>
            <ul>
                {list}
            </ul>
        </div>
    );
}

export default ToDoList;
