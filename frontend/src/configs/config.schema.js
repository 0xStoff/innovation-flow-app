const Joi = require("joi");

export const schemaFeedback = {
    title: Joi.string()
        .required()
        .messages({ "string.empty": "Titel darf nicht leer sein" }),
    content: Joi.string()
        .required()
        .messages({ "string.empty": "Inhalt darf nicht leer sein" }),
};

export const schemaComments = {
    comment: Joi.string()
        .required()
        .messages({ "string.empty": "Kommentar darf nicht leer sein" }),
};

export const schemaUserLogin = {
    email: Joi.string()
        .required()
        .email({ tlds: { allow: false } })
        .message("Email ist ungütlig")
        .messages({ "string.empty": "Email darf nicht leer sein" }),
    password: Joi.string().required().messages({
        "string.empty": `Passwort darf nicht leer sein`,
    }),
};

const regExp =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,50}$/;

export const schemaUserRegister = {
    username: Joi.string()
        .required()
        .messages({ "string.empty": "Username darf nicht leer sein" }),
    email: Joi.string()
        .required()
        .email({ tlds: { allow: false } })
        .message("Email ist ungütlig")
        .messages({ "string.empty": "Email darf nicht leer sein" }),
    password: Joi.string()
        .required()
        .pattern(new RegExp(regExp))
        .message(
            "Passwort muss min. einen Grossbuchstaben, eine Zahl und ein Sonderzeichen enthalten."
        )
        .min(6)
        .max(50)
        .messages({
            "string.empty": `Passwort darf nicht leer sein`,
            "string.min": `Passwort muss min. 6 Zeichen lang sein`,
            "string.max": "Passwort darf höchstens 50 Zeichen lang sein",
        }),
    repeat_password: Joi.string()
        .messages({
            "string.empty": `Passwort darf nicht leer sein`,

            "any.only": "Passwörter müssen übereinstimmen",
        })
        .required()
        .valid(Joi.ref("password")),
};
