import React from "react";
import { Redirect } from 'react-router';
import watch_later_icon from "../../dist/icons/watch_later.png";


const ArticleDetails = (props) => {
    let id = new URLSearchParams(props.location.search).get("id");
    let article = props.articles[id];
        return (
        props.articles[0] === undefined? 
        <Redirect to="/"/> :
        <div className = "articleDetails container" style = {{backgroundColor: "white", borderRadius: 20}}>
             <div>
                 <div className="text-center">
                    <h1>{article.title}</h1>
                    <p>Category - {article.category}
                        <img 
                        className="watch_later_icon" 
                        data-toggle="tooltip" 
                        title="Watch Later" 
                        src = {watch_later_icon}
                        onClick={ () => {props.WATCH_LATER(id, true); props.history.push('/')}}
                         />
                    </p>
                    <img src = {article.img} style = {{borderRadius: 20}} />
                </div>
                <br/>
                <div dangerouslySetInnerHTML={{__html: article.html_text}}></div>
             </div>
        </div>
        )
};

export default ArticleDetails;