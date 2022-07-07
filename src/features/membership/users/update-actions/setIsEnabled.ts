import { UpdateAction } from "../../../@common/UpdateAction";

export interface SetIsEnabledParameters {
  isEnabled: boolean;
}

export function setIsEnabled(
  parameters: SetIsEnabledParameters
): UpdateAction<SetIsEnabledParameters> {
  return {
    action: "setIsEnabled",
    ...parameters,
  };
}
