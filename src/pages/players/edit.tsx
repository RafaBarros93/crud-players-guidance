import { Edit } from "@refinedev/chakra-ui";

import { useForm } from "@refinedev/react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "../../validators/schemaValidator";
import PlayerForm from "../../components/playerForm";
import { IPlayer } from "../../interfaces";

export const PostEdit = () => {
  const {
    saveButtonProps,
    control,
    formState: { errors },
    refineCore: { formLoading },
  } = useForm<IPlayer>({
    resolver: yupResolver(schema),
  });

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <PlayerForm control={control} errors={errors} />
    </Edit>
  );
};
