import { MetaTransactionExecuted } from "../generated/Committee/Committee";
import { handleMetaTransactionExecuted as _handleMetaTransactionExecuted } from "./utils/handleMetaTransactionExecuted";

export function handleMetaTransactionExecuted(event: MetaTransactionExecuted): void {
  _handleMetaTransactionExecuted("Committee", event.params.userAddress, event.block.timestamp);
}
