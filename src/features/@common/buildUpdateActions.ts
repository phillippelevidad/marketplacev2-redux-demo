import { UpdateAction } from "./UpdateAction";
import { UpdateMutationParameters } from "./UpdateMutationParameters";

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
