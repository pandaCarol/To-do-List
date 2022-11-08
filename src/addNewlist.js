import React from "react";
import "./addNewlist.scss";

function NewList(obj) {
    console.log(obj)
    return(
        <section className="addlist">
          <div onClick={(e) => obj.handelClick(e)}><p>o</p></div>
          <input type="text" onChange={obj.handelChange} placeholder={"Create a new to do..."} value={obj.tdnew} onKeyUp={(e) => obj.enterhandel(e)}></input>
        </section>
    );
}

export default NewList;






