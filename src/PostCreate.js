import React from "react";

const PostCreate = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" />
        </div>
        <button className="btn btn-primary">submitting</button>
      </form>
    </div>
  );
};

export default PostCreate;
