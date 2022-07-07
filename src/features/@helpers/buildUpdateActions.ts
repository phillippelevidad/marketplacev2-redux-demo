import { UpdateAction } from "../@common/UpdateAction";
import { UpdateMutationParameters } from "../@common/UpdateMutationParameters";

export function buildUpdateMutationParameters(
  id: string,
  version: number,
  actions: UpdateAction[]
): UpdateMutationParameters {
  return {
    id,
    version,
    actions,
  };
}
