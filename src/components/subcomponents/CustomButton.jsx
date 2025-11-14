import React from "react";

function CustomButton({ lucideIcon, rotationDegree }) {
  return (
    <div
      style={{
        transform: `rotate(${rotationDegree}deg)`,
      }}
      className={`bg-blue-800 p-3  rounded-xl flex flex-col items-center justify-center `}
    >
      {lucideIcon}
    </div>
  );
}

export default CustomButton;
