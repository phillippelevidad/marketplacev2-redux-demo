import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UpdateMutationParameters } from "../../@common/UpdateMutationParameters";
import { GetQueryParameters } from "../../@common/GetQueryParameters";
import { ListQueryParameters } from "../../@common/ListQueryParameters";
import { PaginatedResults } from "../../@common/PaginatedResults";
import { config } from "../../../config";
import { prepareHeaders } from "../../@common/prepareHeaders";
import { BuyerGroup, NewBuyerGroup } from "./BuyerGroup";
import { DeleteMutationParameters } from "../../@common/DeleteMutationParameters";
import { updateMutationQuery } from "../../@common/updateMutationQuery";
import { deleteMutationQuery } from "../../@common/deleteMutationQuery";
import { getQuery, listQuery } from "../../@common/listQuery";
import { CreateMutationParameters } from "../../@common/CreateMutationParameters";
import { createMutationQuery } from "../../@common/createMutationQuery";

export const buyerGroupsSlice = createApi({
  reducerPath: "pricing/buyer-groups",
  baseQuery: fetchBaseQuery({
    baseUrl: config.api.pricingBaseUrl + "/buyer-groups",
    prepareHeaders: prepareHeaders,
  }),
  tagTypes: ["BuyerGroup"],
  endpoints(builder) {
    return {
      // ### QUERIES ###
      getBuyerGroup: builder.query<BuyerGroup, GetQueryParameters>({
        query: getQuery,
      }),
      listBuyerGroups: builder.query<
        PaginatedResults<BuyerGroup>,
        ListQueryParameters | void
      >({
        query: listQuery,
      }),
      // ### MUTATIONS ###
      createBuyerGroup: builder.mutation<
        BuyerGroup,
        CreateMutationParameters<NewBuyerGroup>
      >({
        invalidatesTags: ["BuyerGroup"],
        query: createMutationQuery,
      }),
      updateBuyerGroup: builder.mutation<BuyerGroup, UpdateMutationParameters>({
        invalidatesTags: ["BuyerGroup"],
        query: updateMutationQuery,
      }),
      deleteBuyerGroup: builder.mutation<null, DeleteMutationParameters>({
        invalidatesTags: ["BuyerGroup"],
        query: deleteMutationQuery,
      }),
    };
  },
});

export const {
  useGetBuyerGroupQuery,
  useListBuyerGroupsQuery,
  useCreateBuyerGroupMutation,
  useUpdateBuyerGroupMutation,
  useDeleteBuyerGroupMutation,
} = buyerGroupsSlice;
