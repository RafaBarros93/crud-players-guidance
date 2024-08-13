import { FC, useEffect } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Controller, Control, FieldValues, FieldErrors } from "react-hook-form";

import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import { CurrencyInput } from "react-currency-mask";

interface PlayerFormProps {
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const PlayerForm: FC<PlayerFormProps> = ({ control, errors }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng);
    };

    changeLanguage("pt");
  }, []);

  return (
    <Box as="form">
      <FormControl isInvalid={!!errors.name}>
        <FormLabel>{t("name")}</FormLabel>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.age}>
        <FormLabel>{t("age")}</FormLabel>
        <Controller
          name="age"
          control={control}
          render={({ field }) => <Input type="number" {...field} />}
        />
        <FormErrorMessage>{errors.age?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.position}>
        <FormLabel>{t("position")}</FormLabel>
        <Controller
          name="position"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        <FormErrorMessage>{errors.position?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.team}>
        <FormLabel>{t("team")}</FormLabel>
        <Controller
          name="team"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        <FormErrorMessage>{errors.team?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.nationality}>
        <FormLabel>{t("nationality")}</FormLabel>
        <Controller
          name="nationality"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        <FormErrorMessage>{errors.nationality?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.height}>
        <FormLabel>{t("height")}</FormLabel>
        <Controller
          name="height"
          control={control}
          render={({ field }) => <Input type="number" {...field} />}
        />
        <FormErrorMessage>{errors.height?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.weight}>
        <FormLabel>{t("weight")}</FormLabel>
        <Controller
          name="weight"
          control={control}
          render={({ field }) => <Input type="number" {...field} />}
        />
        <FormErrorMessage>{errors.weight?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.goals}>
        <FormLabel>{t("goals")}</FormLabel>
        <Controller
          name="goals"
          control={control}
          render={({ field }) => <Input type="number" {...field} />}
        />
        <FormErrorMessage>{errors.goals?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.assists}>
        <FormLabel>{t("assists")}</FormLabel>
        <Controller
          name="assists"
          control={control}
          render={({ field }) => <Input type="number" {...field} />}
        />
        <FormErrorMessage>{errors.assists?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.appearances}>
        <FormLabel>{t("appearances")}</FormLabel>
        <Controller
          name="appearances"
          control={control}
          render={({ field }) => <Input type="number" {...field} />}
        />
        <FormErrorMessage>{errors.appearances?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.yellowCards}>
        <FormLabel>{t("yellowCards")}</FormLabel>
        <Controller
          name="yellowCards"
          control={control}
          render={({ field }) => <Input type="number" {...field} />}
        />
        <FormErrorMessage>{errors.yellowCards?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.redCards}>
        <FormLabel>{t("redCards")}</FormLabel>
        <Controller
          name="redCards"
          control={control}
          render={({ field }) => <Input type="number" {...field} />}
        />
        <FormErrorMessage>{errors.redCards?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.birthdate}>
        <FormLabel>{t("birthdate")}</FormLabel>
        <Controller
          name="birthdate"
          control={control}
          render={({ field }) => <Input type="date" {...field} />}
        />
        <FormErrorMessage>{errors.birthdate?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.contractEnd}>
        <FormLabel>{t("contractEnd")}</FormLabel>
        <Controller
          name="contractEnd"
          control={control}
          render={({ field }) => <Input type="date" {...field} />}
        />
        <FormErrorMessage>{errors.contractEnd?.message}</FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>{t("injuries")}</FormLabel>
        <Controller
          name="injuries"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.salary}>
        <FormLabel>{t("salary")}</FormLabel>
        <Controller
          name="salary"
          control={control}
          render={({ field }) => (
            <CurrencyInput
              value={field.value}
              onChangeValue={(_, value) => {
                field.onChange(value);
              }}
              InputElement={<Input {...field} />}
            />
          )}
        />
        <FormErrorMessage>{errors.salary?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.marketValue}>
        <FormLabel>{t("marketValue")}</FormLabel>
        <Controller
          name="marketValue"
          control={control}
          render={({ field }) => (
            <CurrencyInput
              value={field.value}
              onChangeValue={(_, value) => {
                field.onChange(value);
              }}
              InputElement={<Input {...field} />}
            />
          )}
        />
        <FormErrorMessage>{errors.marketValue?.message}</FormErrorMessage>
      </FormControl>
    </Box>
  );
};

export default PlayerForm;
