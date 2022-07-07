import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { usersSlice } from "../features/membership/users/@usersSlice";
import counterReducer from "../features/counter/counterSlice";
import { buyerGroupsSlice } from "../features/pricing/buyer-groups/@buyerGroupsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [usersSlice.reducerPath]: usersSlice.reducer,
    [buyerGroupsSlice.reducerPath]: buyerGroupsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersSlice.middleware)
      .concat(buyerGroupsSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
