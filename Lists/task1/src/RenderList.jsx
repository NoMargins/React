import React from "react";

const renderList = (list) => {
     return list.map((el) => {
        return (
            <li>{el}</li>
        )
     })
}

export default renderList;