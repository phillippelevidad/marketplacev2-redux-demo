import { UpdateMutationParameters } from "./UpdateMutationParameters";

export function updateMutationQuery(params: UpdateMutationParameters): any {
  return {
    url: `/${params.id}`,
    method: "PATCH",
    body: params,
  };
}
