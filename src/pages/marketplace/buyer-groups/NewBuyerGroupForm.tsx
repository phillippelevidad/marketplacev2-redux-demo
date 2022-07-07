import { useEffect, useState } from "react";
import { useCreateBuyerGroupMutation } from "../../../features/pricing/buyer-groups/@buyerGroupsSlice";
import { NewBuyerGroup } from "../../../features/pricing/buyer-groups/BuyerGroup";

export interface NewBuyerGroupFormProps {
  onCreate?: (buyerGroup: NewBuyerGroup) => void;
}

export default function NewBuyerGroupForm({
  onCreate,
}: NewBuyerGroupFormProps): JSX.Element {
  const [createBuyerGroup, result] = useCreateBuyerGroupMutation();

  const [newBuyerGroup, setNewBuyerGroup] = useState<NewBuyerGroup>({
    name: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setNewBuyerGroup({ ...newBuyerGroup, [name]: value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createBuyerGroup(newBuyerGroup);
  }

  useEffect(() => {
    result.isSuccess && onCreate && onCreate(result.data);
  }, [result, onCreate]);

  return (
    <>
      <h3>New Buyer Group</h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} />
        <br />
        <button type="submit">Create</button>
      </form>
      <div>
        {result.error && <p>🚫 error: {JSON.stringify(result.error)}</p>}
      </div>
      <div>
        {result.isSuccess && <p>✅ success: "{newBuyerGroup.name}" created</p>}
      </div>
    </>
  );
}
