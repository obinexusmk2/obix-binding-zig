export type { SchemaMode, InvocationEnvelope, BindingInvokeError, BindingAbiInvoker, ZigVersion, ZigBuildMode, ZigCompileTarget, ZigFFIDescriptor, ZigBindingConfig, ZigBindingBridge, ZigArenaStats, ArenaAllocatorAPI, ComptimeEntry, ComptimeCacheStats, ComptimeCacheAPI, ZigSchemaResolverConfig, ZigResolvedSchema, ZigSchemaResolverAPI, FFITransportConfig, FFITransportAPI, } from './types.js';
export { createFFITransport, normalizeFunctionIdentifier } from './ffi-transport.js';
export { createArenaAllocator } from './arena-allocator.js';
export { createComptimeCache } from './comptime-cache.js';
export { createSchemaResolver } from './schema-resolver.js';
import type { ZigBindingBridge, ZigBindingConfig } from './types.js';
export declare function createZigBinding(config: ZigBindingConfig): ZigBindingBridge;
//# sourceMappingURL=index.d.ts.map