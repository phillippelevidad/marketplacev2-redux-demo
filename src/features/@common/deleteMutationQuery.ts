import { DeleteMutationParameters } from "./DeleteMutationParameters";

export function deleteMutationQuery(params: DeleteMutationParameters): any {
  return { url: `/${params.id}`, method: "DELETE" };
}
