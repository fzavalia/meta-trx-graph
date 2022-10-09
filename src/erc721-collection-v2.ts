import { MetaTransactionExecuted } from "../generated/templates/ERC721CollectionV2/ERC721CollectionV2";
import { Count, MetaTransaction } from "../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";

export function handleMetaTransactionExecuted(event: MetaTransactionExecuted): void {
  let countId = "countId";

  let count = Count.load(countId);

  if (count == null) {
    count = new Count(countId);
    count.metaTransactions = BigInt.fromI32(0);
  }

  let metaTransaction = new MetaTransaction(count.metaTransactions.toString());

  metaTransaction.userAddress = event.params.userAddress;
  metaTransaction.timestamp = event.block.timestamp;

  metaTransaction.save();

  count.metaTransactions = count.metaTransactions.plus(BigInt.fromI32(1));

  count.save();
}
