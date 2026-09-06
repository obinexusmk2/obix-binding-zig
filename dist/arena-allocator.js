export function createArenaAllocator() {
    let arenaBytes = 0;
    let peakArenaBytes = 0;
    let resetCount = 0;
    let allocCount = 0;
    let freeCount = 0;
    const api = {
        recordAlloc(bytes) {
            arenaBytes += bytes;
            allocCount++;
            if (arenaBytes > peakArenaBytes) {
                peakArenaBytes = arenaBytes;
            }
        },
        recordFree(bytes) {
            freeCount++;
            arenaBytes = Math.max(0, arenaBytes - bytes);
        },
        reset() {
            arenaBytes = 0;
            resetCount++;
        },
        snapshot() {
            return {
                arenaBytes,
                peakArenaBytes,
                resetCount,
                allocCount,
                freeCount,
            };
        },
        destroy() {
            api.reset();
        },
    };
    return api;
}
//# sourceMappingURL=arena-allocator.js.map