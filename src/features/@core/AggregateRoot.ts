import { Entity } from "./Entity";
import { IsoDateTimeString } from "./IsoDateTimeString";

/**
 * The prime entity of the subdomain.
 */
export interface AggregateRoot extends Entity {
  marketplaceId: IsoDateTimeString;
  ownerId: IsoDateTimeString;
  version: number;
  createdAt: IsoDateTimeString;
  createdBy: IsoDateTimeString;
  updatedAt: IsoDateTimeString | null;
  updatedBy: IsoDateTimeString | null;
}
