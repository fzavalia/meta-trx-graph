import { Count, MetaTransaction } from "../../generated/schema";
import { Address, BigInt } from "@graphprotocol/graph-ts";

export function handleMetaTransactionExecuted(
  contractName: string,
  userAddress: Address,
  blockTimestamp: BigInt
): void {
  let countId = "countId";

  let count = Count.load(countId);

  if (count == null) {
    count = new Count(countId);
    count.metaTransactions = BigInt.fromI32(0);
  }

  let metaTransaction = new MetaTransaction(count.metaTransactions.toString());

  metaTransaction.contractName = contractName;
  metaTransaction.userAddress = userAddress;
  metaTransaction.timestamp = blockTimestamp;

  metaTransaction.save();

  count.metaTransactions = count.metaTransactions.plus(BigInt.fromI32(1));

  count.save();
}
