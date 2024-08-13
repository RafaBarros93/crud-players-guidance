import { Edit } from "@refinedev/chakra-ui";
import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "@refinedev/react-hook-form";

import { Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useShow } from "@refinedev/core";
import { schema } from "../../validators/schemaValidator";

export const PostEdit = () => {
  const {
    handleSubmit,
    saveButtonProps,
    control,
    formState: { errors },
    refineCore: { formLoading },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { data: playerData } = useShow("players");

  if (playerData) {
    Object.keys(playerData).forEach((key) => setValue(key, playerData[key]));
  }

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box /* as="form" onSubmit={handleSubmit(onSubmit)} */>
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
    </Edit>
  );
};
