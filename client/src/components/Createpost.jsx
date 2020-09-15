import React from "react";

function Createpost(){
    return (<div className="card create-card input-field">
        <input  type="text" placeholder="Add Caption"/>
        <div className="file-field input-field">
      <div className="btn blue darken-1">
        <span>Upload</span>
        <input type="file" />
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>
    </div>
    <button className="btn waves-effect waves-light blue darken-1">Submit Post</button>
    </div>)
}

export default Createpost;