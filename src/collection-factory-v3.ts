import { ProxyCreated } from "../generated/CollectionFactoryV3/CollectionFactoryV3";
import { CollectionV2 } from "../generated/templates";

export function handleProxyCreated(event: ProxyCreated): void {
  CollectionV2.create(event.params._address);
}
