import { UpdateAction } from "./UpdateAction";

export interface UpdateMutationParameters {
  id: string;
  version: number;
  actions: UpdateAction[];
}
