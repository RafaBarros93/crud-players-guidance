import { Create } from "@refinedev/chakra-ui";
import { useForm } from "@refinedev/react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useSchema } from "../../hooks/useSchema";
import PlayerForm from "../../components/playerForm";
import { IPlayer } from "../../interfaces";

export const PlayerCreate = () => {
  const { schema } = useSchema();

  const {
    control,
    saveButtonProps,
    formState: { errors },
    refineCore: { formLoading },
  } = useForm<IPlayer>({
    resolver: yupResolver(schema),
  });

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <PlayerForm control={control} errors={errors} />
    </Create>
  );
};
