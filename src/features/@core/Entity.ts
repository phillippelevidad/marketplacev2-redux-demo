import { IsoDateTimeString } from "./IsoDateTimeString";

/**
 * An object that is not defined by its attributes,
 * but by clues of continuity and identity.
 *
 * Must be owned by an Aggregate Root.
 */

export interface Entity {
  id: IsoDateTimeString;
}
