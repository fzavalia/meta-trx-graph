import { BigInt } from "@graphprotocol/graph-ts";
import { ForwardMetaTxCall } from "../generated/MetaTxForwarder/MetaTxForwarder";
import { Count, MetaTransaction } from "../generated/schema";

export function handleForwardMetaTx(call: ForwardMetaTxCall): void {
  let metaTransactionId = call.transaction.hash.toString();

  let metaTransaction = new MetaTransaction(metaTransactionId);

  metaTransaction.timestamp = call.block.timestamp;

  metaTransaction.save();

  let countId = "countId";

  let count = Count.load(countId);

  if (count == null) {
    count = new Count(countId);
    count.metaTransactions = BigInt.fromI32(1);
  } else {
    count.metaTransactions = count.metaTransactions.plus(BigInt.fromI32(1));
  }

  count.save();
}
