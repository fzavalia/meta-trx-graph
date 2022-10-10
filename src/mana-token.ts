import { MetaTransactionExecuted } from "../generated/MANAToken/MANAToken";
import { handleMetaTransactionExecuted as _handleMetaTransactionExecuted } from "./utils/handleMetaTransactionExecuted";

export function handleMetaTransactionExecuted(event: MetaTransactionExecuted): void {
  _handleMetaTransactionExecuted("MANAToken", event.params.userAddress, event.block.timestamp);
}
