import { CreateMutationParameters } from "../@common/CreateMutationParameters";

export function createMutationQuery(params: CreateMutationParameters): any {
  return {
    url: "",
    method: "POST",
    body: params,
  };
}
