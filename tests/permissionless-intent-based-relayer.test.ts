import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { NewRelayer } from "../generated/schema"
import { NewRelayer as NewRelayerEvent } from "../generated/PermissionlessIntentBasedRelayer/PermissionlessIntentBasedRelayer"
import { handleNewRelayer } from "../src/permissionless-intent-based-relayer"
import { createNewRelayerEvent } from "./permissionless-intent-based-relayer-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let relayer = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let relayerMetadataUri = "Example string value"
    let newNewRelayerEvent = createNewRelayerEvent(relayer, relayerMetadataUri)
    handleNewRelayer(newNewRelayerEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("NewRelayer created and stored", () => {
    assert.entityCount("NewRelayer", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "NewRelayer",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "relayer",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "NewRelayer",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "relayerMetadataUri",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
