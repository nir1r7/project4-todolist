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

function List(){
    const [inpValue, setInpValue] = React.useState("");
    const [list, setList] = React.useState([]);

    function addTask(inp){
        setInpValue(inp)

        list.push(
            <li key={inpValue} >
                <button onClick={() => delTask(inpValue)}> <Emoji symbol="🗑️"/> </button>
                {" " + inp}
            </li>
        );
    }

    function delTask(id){
        
        setList(l => {
            for (let i = 0; i < l.length; i++){
                if (id === l[i].key){
                    let newList = [...l];
                    newList.splice(i,1);
                    return newList;
                }
            }
        })
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