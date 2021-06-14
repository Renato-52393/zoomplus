import React from 'react';
import '../styles/Post.css';


const date = new Date();
const Post = (props) => (
 
  <div className="panel panel-default post-body">
    <div className="panel-body">
      <h6>{date.toLocaleString()}</h6>
      
      {
        props.postBody.map((postPart, idx) => (
          <div key={idx}>{postPart}</div>
        ))
      }
    </div>
  </div>
);

export default Post;

