import React from "react";

const TotalHourComponent = ({ totalHour }) => {
  return (
    <div className="row">
      <div className="col">
        <div className="alert alert-info" role="alert">
          Total Hours : {totalHour} hour
        </div>
      </div>
    </div>
  );
};

export default TotalHourComponent;
