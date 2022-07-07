import { CreateMutationParameters } from "./CreateMutationParameters";

export function createMutationQuery(params: CreateMutationParameters): any {
  return {
    url: "",
    method: "POST",
    body: params,
  };
}
