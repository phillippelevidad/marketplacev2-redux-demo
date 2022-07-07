import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UpdateMutationParameters as UpdateMutationParameters } from "../../@common/UpdateMutationParameters";
import { GetQueryParameters } from "../../@common/GetQueryParameters";
import { ListQueryParameters } from "../../@common/ListQueryParameters";
import { AuthenticateUserParameters as AuthenticateUserMutationParameters } from "./AuthenticateUserParameters";
import { User } from "./User";
import { PaginatedResults } from "../../@common/PaginatedResults";
import { config } from "../../../config";
import { prepareHeaders } from "../../@helpers/prepareHeaders";
import { getQuery, listQuery } from "../../@common/listQuery";
import { updateMutationQuery } from "../../@common/updateMutationQuery";

export const usersSlice = createApi({
  reducerPath: "membership/users",
  baseQuery: fetchBaseQuery({
    baseUrl: config.api.membershipBaseUrl + "/users",
    prepareHeaders: prepareHeaders,
  }),
  tagTypes: ["User"],
  endpoints(builder) {
    return {
      // ### QUERIES ###
      getUser: builder.query<User, GetQueryParameters>({
        query: getQuery,
      }),
      listUsers: builder.query<
        PaginatedResults<User>,
        ListQueryParameters | void
      >({
        query: listQuery,
      }),
      // ### MUTATIONS ###
      authenticateUser: builder.mutation<
        User,
        AuthenticateUserMutationParameters
      >({
        query: (params) => ({
          url: "/authenticate",
          method: "POST",
          body: params,
        }),
      }),
      updateUser: builder.mutation<User, UpdateMutationParameters>({
        invalidatesTags: ["User"],
        query: updateMutationQuery,
      }),
    };
  },
});

export const {
  useGetUserQuery,
  useListUsersQuery,
  useAuthenticateUserMutation,
  useUpdateUserMutation,
} = usersSlice;
