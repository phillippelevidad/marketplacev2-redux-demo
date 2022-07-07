import { useState } from "react";
import { UpdateAction } from "../@common/UpdateAction";

export function useUpdateActions() {
  const [updateActions, setUpdateActions] = useState<UpdateAction[]>([]);

  function addUpdateAction(updateAction: UpdateAction) {
    const baseUpdateActions = updateAction.isUnique
      ? updateActions.filter((a) => a.action !== updateAction.action)
      : updateActions;
    setUpdateActions([...baseUpdateActions, updateAction]);
  }

  function clearUpdateActions() {
    setUpdateActions([]);
  }

  return [updateActions, addUpdateAction, clearUpdateActions];
}
