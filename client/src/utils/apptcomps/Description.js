import React from "react";

const Description = (props) => {
  return (
    <div>
      <br />
      <form onSubmit={props.setDesc}>
        <input id="description"
          name="description"
          type="text" required placeholder="Enter Your Full Name" />
        <button type="submit" name="saveDesc">Save</button>
      </form>
      <br />
      <br />
    </div>
  )
};


export default Description;