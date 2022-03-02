import React, { useState } from "react";
import { FormControl } from "@mui/material";
import Input from "./input";
import FormIcon from "./icons/form";
import { validate, validateProperty } from "../../utils/inputValidation";
import { useEffect } from "react";

const Joi = require("joi");

const Form = ({ doSubmit, inputFields, iconSize, schemaObj }) => {
  const schema = Joi.object(schemaObj);
  const [newData, setNewData] = useState(inputFields);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAddIcon, setShowAddIcon] = useState(false);

  // useEffect(() => {
  //   console.log(inputFields);
  //   setNewData(inputFields);
  // }, [newData]);

  const states = { errors, setErrors, showAddIcon, setShowAddIcon };

  const handleChange = ({ target: input }) => {
    let names = [];
    newData.filter((i, z) => (names[z] = i.name));
    const index = names.indexOf(input.name);
    const currentNewData = [...newData];
    currentNewData[index].value = input.value;
    setNewData(currentNewData);

    if (input.name !== "email" || input.value === "") {
      const error = validateProperty(schemaObj, input);
      setErrors({ [input.name]: error });
    }
    if (input.value.length > 0) setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {};
    newData.map((data) => {
      obj[data.name] = data.value;
    });

    const validateAll = validate(schema, obj);
    if (!validateAll) {
      newData.map((d) => (d.value = ""));

      setIsSubmitted(true);
      doSubmit(obj);
      setNewData(inputFields);
      setTimeout(() => {
        setIsSubmitted(false);
        setShowAddIcon(false);
      }, 2000);
    } else {
      setErrors(validateAll);
    }
  };

  const renderInputs = () => {
    return (
      <React.Fragment>
        {newData.map((input) => (
          <Input
            key={input.name}
            input={input}
            onChange={handleChange}
            states={states}
          />
        ))}
      </React.Fragment>
    );
  };

  const renderIcons = () => {
    return (
      <FormIcon
        showAddIcon={showAddIcon}
        isSubmitted={isSubmitted}
        iconSize={iconSize}
      />
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        sx={{
          maxWidth: 650,
          width: "75%",
          margin: "auto",
          marginTop: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {renderInputs()}
        {renderIcons()}
      </FormControl>
    </form>
  );
};

export default Form;
