import React from "react";
import delete_img from "../../dist/icons/delete.png";
import { Link } from "react-router-dom";

const WatchLater = (props) => {
  return(
    <div className = "thumbnail watch_later_div">
        <img src = {props.img} className = "pull-left"/>
        <h4>{props.title}</h4>
        <Link 
            to = {"/articleDetails?id=" + props.i} 
            className ="btn btn-primary btn-xs pull-right"
            onClick = {() => props.WATCHED(props.i)}
            >
            More Details
        </Link>
        <img className = "pull-right delete_icon" src = {delete_img} onClick= {() => props.WATCH_LATER(props.i, false)}/>
    </div>
  )
};

export default WatchLater;


