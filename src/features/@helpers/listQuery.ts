import { GetQueryParameters } from "../@common/GetQueryParameters";
import { ListQueryParameters } from "../@common/ListQueryParameters";

export function listQuery(params: void | ListQueryParameters): any {
  return `?limit=${params?.limit ?? 10}&offset=${params?.offset ?? 0}&where=${
    params?.where ?? ""
  }`;
}

export function getQuery({ id }: GetQueryParameters): any {
  return `/${id}`;
}
