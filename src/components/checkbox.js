import React, { useState } from "react";
import data from "../cnstants/data";

const Checkbox = () => {
  const [item, setItem] = useState(data);
  const [showDelete, setShowDelete] = useState(Array(data.length).fill(false));
  const handleDelete = (val) => {
    const itemDeleted = item.filter((item) => item !== val);
    setItem(itemDeleted);
  };

  const handleCheckbox = (id) => {
    const itemhavecheckbox = [...showDelete];
    itemhavecheckbox[id] = !itemhavecheckbox[id];
    setShowDelete(itemhavecheckbox);
  };
  return (
    <div>
      {item.map((val, index) => (
        <div className="checkbox-section" key={index}>
          <input type="checkbox" onClick={() => handleCheckbox(index)} />
          <div>{val}</div>
          {showDelete[index] && (
            <div>
              <button onClick={() => handleDelete(val)}>delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
