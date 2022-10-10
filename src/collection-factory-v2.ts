import { ProxyCreated } from "../generated/CollectionFactoryV2/CollectionFactoryV2";
import { CollectionV2 } from "../generated/templates";

export function handleProxyCreated(event: ProxyCreated): void {
  CollectionV2.create(event.params._address);
}
