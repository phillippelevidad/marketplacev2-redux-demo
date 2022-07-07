import { AggregateRoot } from "../../@core/AggregateRoot";
import { AdminProfile } from "./AdminProfile";
import { BuyerProfile } from "./BuyerProfile";
import { CompanyData } from "./CompanyData";
import { PersonData } from "./PersonData";
import { SellerProfile } from "./SellerProfile";
import { UserLanguage } from "./UserLanguage";

export interface User extends AggregateRoot {
  email: string;
  timezone: string;
  languages: UserLanguage[];
  personData: PersonData | null;
  companyData: CompanyData | null;
  adminProfile: AdminProfile | null;
  sellerProfile: SellerProfile | null;
  buyerProfile: BuyerProfile | null;
  isEnabled: boolean;
}
