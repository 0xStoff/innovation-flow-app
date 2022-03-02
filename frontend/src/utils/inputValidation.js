const Joi = require("joi");

export const validate = (schema, obj) => {
    const { error } = schema.validate(obj, { abortEarly: false });
    const errorsObj = {};

    if (!error) return null;

    error.details.map((item) => (errorsObj[item.path[0]] = item.message));
    return errorsObj;
};

export const validateProperty = (schemaObj, { name, value }) => {
    const obj = { [name]: value };
    const newSchemaObj = Joi.object({ [name]: schemaObj[name] });
    const { error } = newSchemaObj.validate(obj);
    // ${name} darf nicht leer sein`
    return error ? error.details[0].message : null;
};
