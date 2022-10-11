import { MetaTransactionExecuted } from "../generated/CollectionStore/CollectionStore";
import { handleMetaTransactionExecuted as _handleMetaTransactionExecuted } from "./utils/handleMetaTransactionExecuted";

export function handleMetaTransactionExecuted(event: MetaTransactionExecuted): void {
  _handleMetaTransactionExecuted("CollectionStore", event.params.userAddress, event.block.timestamp);
}
