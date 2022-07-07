export interface PaginatedResults<TEntity> {
  data: TEntity[];
  total: number;
  offset: number;
  limit: number;
}
