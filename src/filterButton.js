import React from "react";
import "./filterbar.scss";

function CreateFilterButton(obj) {
    const buttonContents = ["All", "Active", "Completed", "Clear Completed"];

    return(
        buttonContents.map((content) => {
            return(<li key={content}><input type="button" value={content} onClick={e => obj.filterList(e)} ></input></li>);
        })  
    )
}



export default CreateFilterButton;