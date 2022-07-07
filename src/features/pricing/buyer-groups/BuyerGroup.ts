import { AggregateRoot } from "../../@core/AggregateRoot";

export interface BuyerGroup extends AggregateRoot {
  name: string;
}

export type NewBuyerGroup = Omit<BuyerGroup, keyof AggregateRoot>;
