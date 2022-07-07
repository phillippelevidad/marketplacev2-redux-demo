import { UpdateAction } from "../../../@common/UpdateAction";

export interface SetTimezoneParameters {
  timezone: string;
}

export function setTimezone(
  parameters: SetTimezoneParameters
): UpdateAction<SetTimezoneParameters> {
  return {
    action: "setTimezone",
    ...parameters,
  };
}
