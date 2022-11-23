import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment.jsx";
import "./styles.scss";


const rootElem = document.querySelector('#root');

const user= {
    name: "Andrew", 
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzP7f_N_r-tJ6zgSOsylbKlGUUIGrs8jNjQ&usqp=CAU"
}

ReactDOM.render(<Comment text="You can do it!" user={user} date={new Date()}/>, rootElem);