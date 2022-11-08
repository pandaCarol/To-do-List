import './App.scss';
import React, { useEffect, useState } from 'react';
import Headers from './headers';
import AddTodoList from './todolist';
import NewList from './addNewlist';
import CreateFilterButton from './filterButton';
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [tdlist, setTdlist] = useState([]);
  const [tdnew, setTdnew] = useState("");
  const itemLeft = tdlist.filter(item => {return(item.done === false)});
  const [togMode, setTogMode] = useState("light");
  useEffect(() => {
    const bodyEle = document.querySelector("body");
    const bgColor = togMode === "light" ? "hsl(236, 33%, 92%)" : "hsl(235, 21%, 11%)";
    bodyEle.style.backgroundColor = bgColor;
  });
 

  const handelClick = () => {
    if(!tdnew) {
      return;
    }
    const newObje = [{name:tdnew, done:false }];
    const newlists = newObje.concat(tdlist);
    setTdlist(newlists);
    setTdnew("");
  };

  const enterhandel = (e) => {
    const eKeycode = e.keyCode;
    if (eKeycode === 13) {
      handelClick();
    }
  }

  const handelChange = (e) => {
    const newTodo = e.target.value;
    setTdnew(newTodo);
  };

  const toggleChange = (index) => {
    for (let i=0; i<tdlist.length; i++ ) {
      if (i === index) {
        const checkedObj = {name:tdlist[i].name, done: !tdlist[i].done};
        const lists = [].concat(tdlist.slice(0, i)).concat(tdlist.slice(i+1));
        if (checkedObj.done === true) {
          let newlists = lists.concat(checkedObj);
          setTdlist(newlists);
          console.log(newlists);
          break;
        }
        if (checkedObj.done === false) {
          let newlists = [].concat(checkedObj).concat(lists);
          setTdlist(newlists);
          break;
        }
      }
    }

    /*
    const newlists = tdlist.map((item, i) => {
      if(i !== index) {
        return item;
      }
      return {name:item.name, done: !item.done};
    });

    setTdlist(newlists);*/
  };

  const clearlist = (index) => {
    const curlist = tdlist.concat();
    curlist.splice(index,1);
    const newlists = curlist;
    setTdlist(newlists);
  }

  const leftDeamnds = (left, all) => {
    const completeds = all.length - left.length;
    if (left.length > 1) {
      return(`${left.length} items left, ${completeds} completed.`);
    }
    return(`${left.length} item left, ${completeds} completed.`);
  }

  const filterList = (e) => {
    const filterName = e.target.value;
    console.log(filterName);

    /* reset the color of filter button */
    const filterbar = document.querySelector(".filterbar").querySelector("ul").querySelectorAll("li");
    for (let i = 0; i<filterbar.length; i++ ) {
      const target = filterbar[i].querySelector("input");
      target.style.color = "hsl(236, 9%, 61%)";
    };

    /* update the selected button's color to blue */
    e.target.style.color = "hsl(220, 98%, 61%)";

    /* according the function of cliced button to update to do list */
    const todolist = document.querySelector(".showlists").querySelector("ul").querySelectorAll("li");
    if (filterName === "All") {
      for(let i=0; i<todolist.length; i++)
      todolist[i].style.display = "list-item";
    }
    if (filterName === "Completed") {
      for (let i = 0; i<todolist.length; i++ ) {
        console.log("completed run");
        if (todolist[i].getAttribute("status") !== "checked") {
          todolist[i].style.display = "none";
        } else {
          todolist[i].style.display = "list-item";
        };
      };
    } 
    if (filterName === "Active") {
      for (let i = 0; i<todolist.length; i++ ) {
        if (todolist[i].getAttribute("status") === "checked") {
          todolist[i].style.display = "none";
        } else {
          todolist[i].style.display = "list-item";
        };
      };
    } 
    if(filterName === "Clear Completed") {
      setTdlist(itemLeft);
    }
    
  }

  const changeIcon = () => {
    const updatedIcon = togMode === "light" ? "dark" : "light";
    setTogMode(updatedIcon);
  }

  const onDragEnd = () => {
    //*todo later 
  }

  return (
    <div className="container" value={togMode}>
      <Headers changeIcon={changeIcon}/>
      <section>
        <NewList handelChange={handelChange} handelClick={handelClick} enterhandel={(e) => enterhandel(e)} tdnew={tdnew}/>
        
        <DragDropContext onDragEnd={onDragEnd}>
          <AddTodoList tdlist={tdlist} toggleChange={(i) => toggleChange(i)} clearlist={i=>clearlist(i)}></AddTodoList>
        </DragDropContext>
        
        <section className='filterbar'>
          <p>{leftDeamnds(itemLeft, tdlist)}</p>
          <ul>
            <CreateFilterButton filterList={(e)=>filterList(e)}/>
          </ul>
        </section>
      </section>
      
      {/*<footer>Drag and drop to reorder list</footer>*/}
    </div>
  );
}

export default App;
