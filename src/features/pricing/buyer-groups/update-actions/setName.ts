import { UpdateAction } from "../../../@common/UpdateAction";

export interface SetNameParameters {
  name: string;
}

export function setName(
  parameters: SetNameParameters
): UpdateAction<SetNameParameters> {
  return {
    action: "setName",
    isUnique: true,
    ...parameters,
  };
}
