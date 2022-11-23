 import React from "react";
 
const AvatarSrc = (props) => {
return (<img
          className="avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />)

 }

 export default AvatarSrc;