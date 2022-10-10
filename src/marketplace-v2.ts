import { MetaTransactionExecuted } from "../generated/MarketplaceV2/MarketplaceV2";
import { handleMetaTransactionExecuted as _handleMetaTransactionExecuted } from "./utils/handleMetaTransactionExecuted";

export function handleMetaTransactionExecuted(event: MetaTransactionExecuted): void {
  _handleMetaTransactionExecuted("MarketplaceV2", event.params.userAddress, event.block.timestamp);
}
