import React from "react";
import PropTypes from "prop-types";

const ProfilePic = (props) =>{
    return(
    <img style={{
        width: 200,
        borderRadius:"10%",
        marginLeft:"10%",
        border:"1px solid white",
        boxShadow: "0 0 2px #00FF00, 0 0 30px #90EE90",
    }} src={props.imagePath}alt="0"/>
    )
}
ProfilePic.propTypes = {
    imagePath: PropTypes.string,
}
export default ProfilePic