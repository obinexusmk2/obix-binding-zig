/**
 * OBIX Zig Binding
 * Systems programming, compile-time optimization
 * Connects libpolycall FFI/polyglot bridge to Zig runtime
 */
export type { SchemaMode, InvocationEnvelope, BindingInvokeError, BindingAbiInvoker, ZigVersion, ZigBuildMode, ZigCompileTarget, ZigFFIDescriptor, ZigBindingConfig, ZigBindingBridge, ZigArenaStats, ArenaAllocatorAPI, ComptimeEntry, ComptimeCacheStats, ComptimeCacheAPI, ZigSchemaResolverConfig, ZigResolvedSchema, ZigSchemaResolverAPI, FFITransportConfig, FFITransportAPI, } from './types.js';
export { createFFITransport, normalizeFunctionIdentifier } from './ffi-transport.js';
export { createArenaAllocator } from './arena-allocator.js';
export { createComptimeCache } from './comptime-cache.js';
export { createSchemaResolver } from './schema-resolver.js';
import type { ZigBindingBridge, ZigBindingConfig } from './types.js';
/**
 * Create a Zig binding to libpolycall
 * @param config Configuration for the binding
 * @returns Bridge for invoking polyglot functions and managing Zig runtime state
 */
export declare function createZigBinding(config: ZigBindingConfig): ZigBindingBridge;
//# sourceMappingURL=index.d.ts.map