import React from "react";
import { Link } from "react-router-dom";

const NewsDiv = (props) => {
  const {highlighted, img, title, watched, category} = props.item;
  return(
    <div className ="news_div">
      <img className = {highlighted? "highlighted": null} src = {img}/>
      <div className ="text" >
        <h3 style={{maxWidth: 800}}>{title}</h3>
        <p>Category: {category}
          <Link 
            to = {"/articleDetails?id=" + props.i} 
            className ="btn btn-primary" 
            style={{marginLeft: 20}} 
            onClick = {() => props.WATCHED(props.i)}>
            More Details
          </Link>
          </p>
          <p>{watched !== 0? `Viewed ${watched}` : null}</p>
      </div>
    </div>
  )
};

export default NewsDiv;









            