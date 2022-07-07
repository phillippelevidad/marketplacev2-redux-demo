import { useState } from "react";
import { useListBuyerGroupsQuery } from "../../../features/pricing/buyer-groups/@buyerGroupsSlice";
import BuyerGroupsList from "./BuyerGroupsList";
import NewBuyerGroupForm from "./NewBuyerGroupForm";
import UpdateBuyerGroupForm from "./UpdateBuyerGroupForm";

export default function MarketplaceHomePage(): JSX.Element {
  const [idForEditing, setIdForEditing] = useState<string | null>(null);
  const { data, isFetching, isLoading, refetch } = useListBuyerGroupsQuery();

  function handleEdit(id: string) {
    setIdForEditing(id);
  }

  function renderBuyerGroupsList() {
    if (isLoading) return <div>Loading...</div>;
    if (!data) return <div>No data</div>;
    return <BuyerGroupsList data={data} onEdit={handleEdit} />;
  }

  return (
    <>
      <h1>Buyer Groups</h1>
      <button onClick={refetch} disabled={isFetching}>
        Refresh
      </button>
      {renderBuyerGroupsList()}
      <hr />
      <NewBuyerGroupForm onCreate={refetch} />
      <hr />
      {idForEditing && <UpdateBuyerGroupForm id={idForEditing} />}
    </>
  );
}
