import { UpdateAction } from "../../../@common/UpdateAction";

export interface SetEmailParameters {
  email: string;
}

export function setEmail(
  parameters: SetEmailParameters
): UpdateAction<SetEmailParameters> {
  return {
    action: "setEmail",
    ...parameters,
  };
}
