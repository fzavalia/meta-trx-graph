import { MetaTransactionExecuted } from "../generated/templates/CollectionV2/CollectionV2";
import { handleMetaTransactionExecuted as _handleMetaTransactionExecuted } from "./utils/handleMetaTransactionExecuted";

export function handleMetaTransactionExecuted(event: MetaTransactionExecuted): void {
  _handleMetaTransactionExecuted("CollectionV2", event.params.userAddress, event.block.timestamp);
}
