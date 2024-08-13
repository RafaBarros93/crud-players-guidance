// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            name: "Name",
            age: "Age",
            position: "Position",
            team: "Team",
            nationality: "Nationality",
            height: "Height",
            weight: "Weight",
            goals: "Goals",
            assists: "Assists",
            appearances: "Appearances",
            yellowCards: "Yellow Cards",
            redCards: "Red Cards",
            birthdate: "Birthdate",
            contractEnd: "Contract End",
            injuries: "Injuries",
            salary: "Salary",
            marketValue: "Market Value",
            submit: "Submit",
            required: "{{field}} is required",
            positiveInteger: "{{field}} must be a positive integer",
            dateRequired: "{{field}} is required",
        },
    },
    pt: {
        translation: {
            name: "Nome",
            age: "Idade",
            position: "Posição",
            team: "Time",
            nationality: "Nacionalidade",
            height: "Altura",
            weight: "Peso",
            goals: "Gols",
            assists: "Assistências",
            appearances: "Aparições",
            yellowCards: "Cartões Amarelos",
            redCards: "Cartões Vermelhos",
            birthdate: "Data de Nascimento",
            contractEnd: "Fim do Contrato",
            injuries: "Lesões",
            salary: "Salário",
            marketValue: "Valor de Mercado",
            submit: "Enviar",
            required: "{{field}} é obrigatório",
            positiveInteger: "{{field}} deve ser um inteiro positivo",
            dateRequired: "{{field}} é obrigatório",
        },
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
