import { useEffect, useState } from "react";
import { buildUpdateMutationParameters } from "../../../features/@helpers/buildUpdateActions";
import { useUpdateActions } from "../../../features/@helpers/useUpdateActions";
import {
  useGetBuyerGroupQuery,
  useUpdateBuyerGroupMutation,
} from "../../../features/pricing/buyer-groups/@buyerGroupsSlice";
import { BuyerGroup } from "../../../features/pricing/buyer-groups/BuyerGroup";
import { setName } from "../../../features/pricing/buyer-groups/update-actions/setName";

export interface UpdateBuyerGroupFormProps {
  id: string;
  onUpdate?: (buyerGroup: BuyerGroup) => void;
}

export default function UpdateBuyerGroupForm({
  id,
  onUpdate,
}: UpdateBuyerGroupFormProps): JSX.Element {
  const { data, isLoading } = useGetBuyerGroupQuery({
    id,
  });
  const [updateBuyerGroup, result] = useUpdateBuyerGroupMutation();
  const [buyerGroup, setBuyerGroup] = useState<BuyerGroup | undefined>();
  const [updateActions, addUpdateAction, clearUpdateActions] =
    useUpdateActions();

  useEffect(() => {
    setBuyerGroup(data);
  }, [data]);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    addUpdateAction(setName({ name: event.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (buyerGroup) {
      updateBuyerGroup(
        buildUpdateMutationParameters(
          buyerGroup.id,
          buyerGroup.version,
          updateActions
        )
      );
    }
  }

  useEffect(() => {
    if (result.isSuccess) {
      clearUpdateActions();
      onUpdate && onUpdate(result.data);
    }
  }, [result, clearUpdateActions, onUpdate]);

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <h3>New Buyer Group</h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={buyerGroup?.name}
          onChange={handleNameChange}
        />
        <br />
        <button type="submit">Update</button>
      </form>
      <div>
        {result.error && <p>🚫 error: {JSON.stringify(result.error)}</p>}
      </div>
      <div>
        {result.isSuccess && <p>✅ success: "{buyerGroup?.name}" updated</p>}
      </div>
    </>
  );
}
