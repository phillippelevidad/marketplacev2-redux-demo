export function setEntityProperty<T>(
  entity: any,
  property: string,
  value: any
): T {
  const altered = { ...entity, [property]: value };
  return altered as T;
}

export function setEntityProperties<T>(
  entity: any,
  newValues: Record<string, any>
): T {
  const altered = { ...entity, ...newValues };
  return altered as T;
}
