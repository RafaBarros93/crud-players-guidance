import { useTranslation } from "react-i18next";
import * as yup from "yup";

export const useSchema = () => {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    name: yup.string().required(t("required", { field: t("name") })),
    age: yup
      .number()
      .required(t("required", { field: t("age") }))
      .positive()
      .integer(),
    position: yup.string().required(t("required", { field: t("position") })),
    team: yup.string().required(t("required", { field: t("team") })),
    nationality: yup
      .string()
      .required(t("required", { field: t("nationality") })),
    height: yup.number().required(t("required", { field: t("height") })),
    weight: yup.number().required(t("required", { field: t("weight") })),
    goals: yup.number().required(t("required", { field: t("goals") })),
    assists: yup.number().required(t("required", { field: t("assists") })),
    appearances: yup
      .number()
      .required(t("required", { field: t("appearances") })),
    yellowCards: yup
      .number()
      .required(t("required", { field: t("yellowCards") })),
    redCards: yup.number().required(t("required", { field: t("redCards") })),
    birthdate: yup
      .date()
      .required(t("dateRequired", { field: t("birthdate") })),
    contractEnd: yup
      .date()
      .required(t("dateRequired", { field: t("contractEnd") })),
    injuries: yup.string(),
    salary: yup.number().required(t("required", { field: t("salary") })),
    marketValue: yup
      .number()
      .required(t("required", { field: t("marketValue") })),
  });

  return {
    schema,
  };
};
