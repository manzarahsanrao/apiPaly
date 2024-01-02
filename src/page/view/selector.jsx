import React, { useState } from "react";
import Select from "react-select";

const Selector = ({ sendDataToParent }) => {
  const options = [5, 10, 15, 20];
  const [itemsCount, setItemsCount] = useState(null);
  console.log(itemsCount);
  return (
    <Select
      options={options.map((count) => ({ value: count, label: count }))}
      placeholder="Items Count"
      defaultValue={itemsCount}
      onChange={(selectedOption) => {
        sendDataToParent(selectedOption.value);
        setItemsCount(selectedOption.value);
      }}
      isSearchable
      noOptionsMessage={() => "No location found"}
      styles={{
        placeholder: (baseStyles) => ({
          ...baseStyles,
          color: "black",
          fontSize: "18px",
        }),
        menuList: () => ({
          color: "#1d2836",
          fontSize: "15px",
        }),
        container: (baseStyles) => ({
          ...baseStyles,
          borderRadius: "5px",
          width: "150px",
          height: "50px",
          padding: "5px",
          // border: "2px solid black",
        }),
        control: (baseStyles) => ({
          ...baseStyles,
          border: "2px solid #FFFFFF",
          height: "100%",
          outline: "none",
        }),
        valueContainer: (baseStyles) => ({
          ...baseStyles,
          width: "max-content",
          height: "20px",
          // border: "2px solid blue",
          padding: "0px",
          fontSize: "150px",
          height: "100%",
          outline: "none",
        }),
        input: (baseStyles) => ({
          ...baseStyles,
          fontSize: "16px",
          //   border: "2px solid green",
          width: "100%",
          height: "100%",
          margin: "0px",
        }),
        indicatorsContainer: () => ({
          cursor: "pointer",
        }),
      }}
    />
  );
};

export default Selector;
