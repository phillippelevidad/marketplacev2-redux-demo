import { useEffect, useState } from "react";
import { buildUpdateMutationParameters } from "../../../features/@helpers/buildUpdateActions";
import { setEntityProperty } from "../../../features/@helpers/setEntityProperty";
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

  useEffect(() => {
    setBuyerGroup(data);
  }, [data]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setBuyerGroup(setEntityProperty(buyerGroup, name, value));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (buyerGroup)
      updateBuyerGroup(
        buildUpdateMutationParameters(buyerGroup.id, buyerGroup.version, [
          setName({ name: buyerGroup.name }),
        ])
      );
  }

  useEffect(() => {
    result.isSuccess && onUpdate && onUpdate(result.data);
  }, [result, onUpdate]);

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
          onChange={handleChange}
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
