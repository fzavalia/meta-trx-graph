import { MetaTransactionExecuted } from "../generated/Bid/Bid";
import { handleMetaTransactionExecuted as _handleMetaTransactionExecuted } from "./utils/handleMetaTransactionExecuted";

export function handleMetaTransactionExecuted(event: MetaTransactionExecuted): void {
  _handleMetaTransactionExecuted("Bid", event.params.userAddress, event.block.timestamp);
}
