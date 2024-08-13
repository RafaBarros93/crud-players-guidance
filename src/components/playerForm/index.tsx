import { FC } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Controller, Control, FieldValues, FieldErrors } from "react-hook-form";

import { IPlayer } from "../../interfaces";

interface PlayerFormProps {
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const PlayerForm: FC<PlayerFormProps> = ({ control, errors }) => {
  return (
    <Box as="form">
      <FormControl isInvalid={!!errors.name}>
        <FormLabel>Name</FormLabel>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.age}>
        <FormLabel>Age</FormLabel>
        <Controller
          name="age"
          control={control}
          render={({ field }) => <Input type="number" {...field} />}
        />
        <FormErrorMessage>{errors.age?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.position}>
        <FormLabel>Position</FormLabel>
        <Controller
          name="position"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        <FormErrorMessage>{errors.position?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.team}>
        <FormLabel>Team</FormLabel>
        <Controller
          name="team"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        <FormErrorMessage>{errors.team?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.nationality}>
        <FormLabel>Nationality</FormLabel>
        <Controller
          name="nationality"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        <FormErrorMessage>{errors.nationality?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.height}>
        <FormLabel>Height</FormLabel>
        <Controller
          name="height"
          control={control}
          render={({ field }) => <Input type="number" {...field} />}
        />
        <FormErrorMessage>{errors.height?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.weight}>
        <FormLabel>Weight</FormLabel>
        <Controller
          name="weight"
          control={control}
          render={({ field }) => <Input type="number" {...field} />}
        />
        <FormErrorMessage>{errors.weight?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.goals}>
        <FormLabel>Goals</FormLabel>
        <Controller
          name="goals"
          control={control}
          render={({ field }) => <Input type="number" {...field} />}
        />
        <FormErrorMessage>{errors.goals?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.assists}>
        <FormLabel>Assists</FormLabel>
        <Controller
          name="assists"
          control={control}
          render={({ field }) => <Input type="number" {...field} />}
        />
        <FormErrorMessage>{errors.assists?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.appearances}>
        <FormLabel>Appearances</FormLabel>
        <Controller
          name="appearances"
          control={control}
          render={({ field }) => <Input type="number" {...field} />}
        />
        <FormErrorMessage>{errors.appearances?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.yellowCards}>
        <FormLabel>Yellow Cards</FormLabel>
        <Controller
          name="yellowCards"
          control={control}
          render={({ field }) => <Input type="number" {...field} />}
        />
        <FormErrorMessage>{errors.yellowCards?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.redCards}>
        <FormLabel>Red Cards</FormLabel>
        <Controller
          name="redCards"
          control={control}
          render={({ field }) => <Input type="number" {...field} />}
        />
        <FormErrorMessage>{errors.redCards?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.birthdate}>
        <FormLabel>Birthdate</FormLabel>
        <Controller
          name="birthdate"
          control={control}
          render={({ field }) => <Input type="date" {...field} />}
        />
        <FormErrorMessage>{errors.birthdate?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.contractEnd}>
        <FormLabel>Contract End</FormLabel>
        <Controller
          name="contractEnd"
          control={control}
          render={({ field }) => <Input type="date" {...field} />}
        />
        <FormErrorMessage>{errors.contractEnd?.message}</FormErrorMessage>
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
        <FormErrorMessage>{errors.salary?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.marketValue}>
        <FormLabel>Market Value</FormLabel>
        <Controller
          name="marketValue"
          control={control}
          render={({ field }) => <Input type="number" {...field} />}
        />
        <FormErrorMessage>{errors.marketValue?.message}</FormErrorMessage>
      </FormControl>
    </Box>
  );
};

export default PlayerForm;
