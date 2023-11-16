import {
  NewRelayer as NewRelayerEvent,
  RelayerUpdated as RelayerUpdatedEvent
} from "../generated/PermissionlessIntentBasedRelayer/PermissionlessIntentBasedRelayer"
import { NewRelayer, RelayerUpdated } from "../generated/schema"

export function handleNewRelayer(event: NewRelayerEvent): void {
  let entity = new NewRelayer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.relayer = event.params.relayer
  entity.relayerMetadataUri = event.params.relayerMetadataUri

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRelayerUpdated(event: RelayerUpdatedEvent): void {
  let entity = new RelayerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.relayer = event.params.relayer
  entity.newRelayerMetadataUri = event.params.newRelayerMetadataUri

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
