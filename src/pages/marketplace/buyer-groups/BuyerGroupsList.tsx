import { PaginatedResults } from "../../../features/@common/PaginatedResults";
import { BuyerGroup } from "../../../features/pricing/buyer-groups/BuyerGroup";

export interface BuyerGroupsListProps {
  data: PaginatedResults<BuyerGroup>;
  onEdit?: (id: string) => void;
}

export default function BuyerGroupsList({
  data,
  onEdit,
}: BuyerGroupsListProps): JSX.Element {
  function handleEdit(id: string) {
    onEdit && onEdit(id);
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Created at</td>
            <td>Created by</td>
            <td>Updated at</td>
            <td>Updated by</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {data.data.map((buyerGroup) => (
            <tr key={buyerGroup.id}>
              <td>{buyerGroup.id}</td>
              <td>{buyerGroup.name}</td>
              <td>{buyerGroup.createdAt}</td>
              <td>{buyerGroup.createdBy}</td>
              <td>{buyerGroup.updatedAt}</td>
              <td>{buyerGroup.updatedBy}</td>
              <td>
                <button onClick={() => handleEdit(buyerGroup.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <span>
        Showing up to {data.limit} of {data.total} results
      </span>
    </>
  );
}
