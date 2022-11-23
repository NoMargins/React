import React from "react";
import "./index.scss";
import moment from "moment";

const formatDate = date => moment(date).format("DD MMM YYYY");


const Profile = (props) => {
    return (
        <div className="profile">
        <div className="profile__name" name={props.user.firstName}>
            {props.user.firstName} {props.user.lastName}
        </div>
        <div className="profile__birth">
            Was born {formatDate(new Date(props.user.birthDate))} in {props.user.birthPlace}
        </div>
        </div>
    )
}

export default Profile;