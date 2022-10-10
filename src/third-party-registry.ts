import { MetaTransactionExecuted } from "../generated/ThirdPartyRegistry/ThirdPartyRegistry";
import { handleMetaTransactionExecuted as _handleMetaTransactionExecuted } from "./utils/handleMetaTransactionExecuted";

export function handleMetaTransactionExecuted(event: MetaTransactionExecuted): void {
  _handleMetaTransactionExecuted("ThirdPartyRegistry", event.params.userAddress, event.block.timestamp);
}
