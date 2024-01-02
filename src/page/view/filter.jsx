import React from "react";
import Select from "react-select";

const Filter = ({ sendDataToParent, status }) => {
  const options = [
    { value: "All", label: "All" },
    { value: "Active", label: "Active" },
    { value: "Non-active", label: "Non-active" },
  ];
  console.log(status);
  return (
    <Select
      options={options}
      placeholder="All"
      defaultValue={status}
      // value={status}
      onChange={(selectedOption) => {
        // setChoice(selectedOption.value);
        sendDataToParent(selectedOption.value);
      }}
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
          width: "150px",
          height: "50px",
          borderRadius: "5px",
          padding: "5px",
        }),
        control: (baseStyles) => ({
          ...baseStyles,
          outline: "none",
          border: "2px solid #FFFFFF",
          height: "100%",
        }),
        valueContainer: (baseStyles) => ({
          ...baseStyles,
          border: "#1d2836",
          width: "max-content",
          // border: "2px solid blue",
          // padding: "0px",
          fontSize: "15px",
          padding: "0px",
          fontSize: "15px",
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

export default Filter;
