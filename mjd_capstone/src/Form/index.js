import React from "react";

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="Make and Model">Make and Model</label>
        <input 
        className="form-control" 
        id="make_model"
        placeholder="Audi A4 (2012)"
         />
      </div>
      <div className="form-group">
        <label htmlFor="email">VIN</label>
        <input
          className="form-control"
          id="vin"
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          className="form-control"
          id="location"
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
