import { MetaTransactionExecuted } from "../generated/CollectionManager/CollectionManager";
import { handleMetaTransactionExecuted as _handleMetaTransactionExecuted } from "./utils/handleMetaTransactionExecuted";

export function handleMetaTransactionExecuted(event: MetaTransactionExecuted): void {
  _handleMetaTransactionExecuted("CollectionManager", event.params.userAddress, event.block.timestamp);
}
