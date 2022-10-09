import { ProxyCreated } from "../generated/ERC721CollectionFactoryV3/ERC721CollectionFactoryV3";
import { ERC721CollectionV2 } from "../generated/templates";

export function handleProxyCreated(event: ProxyCreated): void {
  ERC721CollectionV2.create(event.params._address);
}
