import React, { useState } from "react";
import "./todolist.scss";
import { Droppable } from "react-beautiful-dnd";

function AddTodoLine(obj) {

    console.log(obj);
    return(
        <Droppable droppableId={obj.todo.name} index={obj.index}>
            {(provided) => (
                <li status={obj.todo.done ? "checked" : ""} 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <span onClick={obj.onClick}><p>o</p><span></span></span>
                    <p className="inputvalue" onClick={obj.onClick}>{obj.todo.name}</p>
                    <span id="cross" onClick={obj.clearlist}></span>
                </li>  
            )}
        </Droppable>
        
    );
}


function AddTodoList(obj) {
    console.log(obj.tdlist);

    return(
        <section className="showlists" >
            <Droppable droppableId="droppableZone">
                {provided => (
                        <ul ref={provided.innerRef} {...provided.droppableProps}>
                            {/* Import!!! a.map(), a must be an array. if not using Object.values(a) to convert into array  */}
                            {obj.tdlist.map((todo, i) => {
                                return (
                                <AddTodoLine key={i} todo={todo} onClick={ e => obj.toggleChange(i)} clearlist={e=> obj.clearlist(i)} index={i}></AddTodoLine>
                                )}
                            )}
                            {provided.placeholder}
                        </ul> 
                    )

                }
               
            </Droppable>
            
        </section>
    );
}



export default AddTodoList;