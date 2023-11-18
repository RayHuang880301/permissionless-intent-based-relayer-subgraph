import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  NewRelayer,
  RelayerUpdated
} from "../generated/PermissionlessIntentBasedRelayer/PermissionlessIntentBasedRelayer"

export function createNewRelayerEvent(
  relayer: Address,
  relayerMetadataUri: string
): NewRelayer {
  let newRelayerEvent = changetype<NewRelayer>(newMockEvent())

  newRelayerEvent.parameters = new Array()

  newRelayerEvent.parameters.push(
    new ethereum.EventParam("relayer", ethereum.Value.fromAddress(relayer))
  )
  newRelayerEvent.parameters.push(
    new ethereum.EventParam(
      "relayerMetadataUri",
      ethereum.Value.fromString(relayerMetadataUri)
    )
  )

  return newRelayerEvent
}

export function createRelayerUpdatedEvent(
  relayer: Address,
  newRelayerMetadataUri: string
): RelayerUpdated {
  let relayerUpdatedEvent = changetype<RelayerUpdated>(newMockEvent())

  relayerUpdatedEvent.parameters = new Array()

  relayerUpdatedEvent.parameters.push(
    new ethereum.EventParam("relayer", ethereum.Value.fromAddress(relayer))
  )
  relayerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newRelayerMetadataUri",
      ethereum.Value.fromString(newRelayerMetadataUri)
    )
  )

  return relayerUpdatedEvent
}
