import {
  NewRelayer as NewRelayerEvent,
  RelayerUpdated as RelayerUpdatedEvent,
} from "../generated/PermissionlessIntentBasedRelayer/PermissionlessIntentBasedRelayer";
import { NewRelayer } from "../generated/schema";

export function handleNewRelayer(event: NewRelayerEvent): void {
  const relayer = event.params.relayer;
  let entity = NewRelayer.load(relayer)
  if (entity == null) {
    entity = new NewRelayer(relayer)
  }

  entity.relayer = event.params.relayer;
  entity.relayerMetadataUri = event.params.relayerMetadataUri;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRelayerUpdated(event: RelayerUpdatedEvent): void {
  const relayer = event.params.relayer;
  let entity = NewRelayer.load(relayer)
  if (entity == null) {
    entity = new NewRelayer(relayer)
  }

  entity.relayerMetadataUri = event.params.newRelayerMetadataUri;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
