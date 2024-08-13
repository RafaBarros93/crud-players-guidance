import * as yup from "yup";

export const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    age: yup.number().required("Age is required").positive().integer(),
    position: yup.string().required("Position is required"),
    team: yup.string().required("Team is required"),
    nationality: yup.string().required("Nationality is required"),
    height: yup.number().required("Height is required"),
    weight: yup.number().required("Weight is required"),
    goals: yup.number().required("Goals are required"),
    assists: yup.number().required("Assists are required"),
    appearances: yup.number().required("Appearances are required"),
    yellowCards: yup.number().required("Yellow Cards are required"),
    redCards: yup.number().required("Red Cards are required"),
    birthdate: yup.date().required("Birthdate is required"),
    contractEnd: yup.date().required("Contract End is required"),
    injuries: yup.string(),
    salary: yup.number().required("Salary is required"),
    marketValue: yup.number().required("Market Value is required"),
});


