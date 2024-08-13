import React from "react";
import { Create } from "@refinedev/chakra-ui";
import { FormControl, FormLabel, Input, Box } from "@chakra-ui/react";

import { useForm } from "@refinedev/react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller } from "react-hook-form";

const schema = yup.object().shape({
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

export const PlayerCreate = () => {
  const {
    handleSubmit,
    control,
    saveButtonProps,
    formState: { errors },
    refineCore: { formLoading },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box as="form">
        <FormControl isInvalid={!!errors.name}>
          <FormLabel>Name</FormLabel>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.age}>
          <FormLabel>Age</FormLabel>
          <Controller
            name="age"
            control={control}
            render={({ field }) => <Input type="number" {...field} />}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.position}>
          <FormLabel>Position</FormLabel>
          <Controller
            name="position"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.team}>
          <FormLabel>Team</FormLabel>
          <Controller
            name="team"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.nationality}>
          <FormLabel>Nationality</FormLabel>
          <Controller
            name="nationality"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.height}>
          <FormLabel>Height</FormLabel>
          <Controller
            name="height"
            control={control}
            render={({ field }) => <Input type="number" {...field} />}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.weight}>
          <FormLabel>Weight</FormLabel>
          <Controller
            name="weight"
            control={control}
            render={({ field }) => <Input type="number" {...field} />}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.goals}>
          <FormLabel>Goals</FormLabel>
          <Controller
            name="goals"
            control={control}
            render={({ field }) => <Input type="number" {...field} />}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.assists}>
          <FormLabel>Assists</FormLabel>
          <Controller
            name="assists"
            control={control}
            render={({ field }) => <Input type="number" {...field} />}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.appearances}>
          <FormLabel>Appearances</FormLabel>
          <Controller
            name="appearances"
            control={control}
            render={({ field }) => <Input type="number" {...field} />}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.yellowCards}>
          <FormLabel>Yellow Cards</FormLabel>
          <Controller
            name="yellowCards"
            control={control}
            render={({ field }) => <Input type="number" {...field} />}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.redCards}>
          <FormLabel>Red Cards</FormLabel>
          <Controller
            name="redCards"
            control={control}
            render={({ field }) => <Input type="number" {...field} />}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.birthdate}>
          <FormLabel>Birthdate</FormLabel>
          <Controller
            name="birthdate"
            control={control}
            render={({ field }) => <Input type="date" {...field} />}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.contractEnd}>
          <FormLabel>Contract End</FormLabel>
          <Controller
            name="contractEnd"
            control={control}
            render={({ field }) => <Input type="date" {...field} />}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Injuries</FormLabel>
          <Controller
            name="injuries"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.salary}>
          <FormLabel>Salary</FormLabel>
          <Controller
            name="salary"
            control={control}
            render={({ field }) => <Input type="number" {...field} />}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.marketValue}>
          <FormLabel>Market Value</FormLabel>
          <Controller
            name="marketValue"
            control={control}
            render={({ field }) => <Input type="number" {...field} />}
          />
        </FormControl>
      </Box>
    </Create>
  );
};
