import React, { useState } from "react";
import data from "../cnstants/data";

const Checkbox = () => {
  const [item, setItem] = useState(data);
  const [showEdit, setShowEdit] = useState(null);
  const [showDelete, setShowDelete] = useState(Array(data.length).fill(false));
  const [values, setVal] = useState(null);
  const handleDelete = (val) => {
    const itemDeleted = item.filter((item) => item !== val);
    setItem(itemDeleted);
  };

  const handleEdit = (id, val) => {
    setVal(val);
    setShowEdit(id);
  };

  const handleCheckbox = (id) => {
    const itemhavecheckbox = [...showDelete];
    itemhavecheckbox[id] = !itemhavecheckbox[id];
    setShowDelete(itemhavecheckbox);
  };

  const handleSaveEdit = (id) => {
    const updatedItem = [...item];
    updatedItem[id] = values;
    setItem(updatedItem);
    setShowEdit(null);
  };

  return (
    <div>
      {item.map((val, index) => (
        <div className="checkbox-section" key={index}>
          <input type="checkbox" onClick={() => handleCheckbox(index)} />
          <div>
            {showEdit === index ? (
              <input
                value={values}
                type="text"
                onChange={(e) => setVal(e.target.value)}
              />
            ) : (
              <div>{val}</div>
            )}
          </div>
          {showDelete[index] && (
            <div>
              {showEdit === index ? (
                <button onClick={() => handleSaveEdit(index)}>Save</button>
              ) : (
                <button onClick={() => handleEdit(index, val)}>edit</button>
              )}
              <button onClick={() => handleDelete(val)}>delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
