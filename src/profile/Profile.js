import React from "react";
import PropTypes from "prop-types";

const Profile = (props)  =>{

    
    return(
        
     <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        margin:"10px",
        padding:"15px",
        width:"250px",
        height:"370px",
        border:"1px solid white",
        borderRadius:"10px",
        backdropFilter: "blur(9px)",
        boxShadow:"1px 1px 20px green",
        }}>
           {/* Child profile picture  */}
        
        {props.children}
        {/* component texts */}
        <p style={{
            color:"white",
            fontFamily:"monospace",
            fontSize:"20px",
            textShadow: "0 0 3px #00FF00, 0 0 5px #90EE90",
        }}>Fullname: {props.fullName}</p>


        <p style={{
            color:"white",
            fontFamily:"monospace",
            fontSize:"15px",
            textShadow: "0 0 3px #00FF00, 0 0 5px #90EE90",
        }}>Bio: {props.bio}</p>
        
        
        <p style={{
            color:"white",
            fontFamily:"monospace",
            fontSize:"15px",
            textShadow: "0 0 3px #00FF00, 0 0 5px #90EE90",
        }}>Profession: {props.profession}</p>
    <button style={{backgroundColor:"green",color:"white"}}
    onClick={()=>props.handleName(props.fullName)}
    >click</button>
     </div>   

    )
}

Profile.defaultProps = {
    fullName:"insert Fullname",
    bio:"Type Bio",
    profession:"Type your profession"
}

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    
}

export default Profile;