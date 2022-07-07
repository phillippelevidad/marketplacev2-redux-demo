import { UpdateAction } from "../../../@common/UpdateAction";
import { UserLanguage } from "../UserLanguage";

export interface SetUserLanguageParameters {
  languages: UserLanguage[];
}

export function setUserLanguages(
  parameters: SetUserLanguageParameters
): UpdateAction<SetUserLanguageParameters> {
  return {
    action: "setUserLanguages",
    ...parameters,
  };
}
