export type UpdateAction<T = any> = {
  action: string;
  isUnique?: boolean;
} & T;
