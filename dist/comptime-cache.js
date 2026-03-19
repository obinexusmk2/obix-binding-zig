const DEFAULT_MAX_SIZE = 256;
export function createComptimeCache(maxSize = DEFAULT_MAX_SIZE) {
    // Insertion-ordered map — keys at the front are oldest (LRU eviction target)
    const entries = new Map();
    let hitCount = 0;
    let missCount = 0;
    let evictionCount = 0;
    function evictLRU() {
        const oldestKey = entries.keys().next().value;
        if (oldestKey !== undefined) {
            entries.delete(oldestKey);
            evictionCount++;
        }
    }
    const api = {
        set(key, value) {
            if (entries.has(key)) {
                // Refresh: remove then re-insert to move to end (most-recently-used)
                entries.delete(key);
            }
            else if (entries.size >= maxSize) {
                evictLRU();
            }
            entries.set(key, { key, value, computedAtMs: Date.now() });
        },
        get(key) {
            const entry = entries.get(key);
            if (entry === undefined) {
                missCount++;
                return undefined;
            }
            hitCount++;
            // Move to end (most-recently-used)
            entries.delete(key);
            entries.set(key, entry);
            return entry.value;
        },
        has(key) {
            return entries.has(key);
        },
        delete(key) {
            entries.delete(key);
        },
        listKeys() {
            return Array.from(entries.keys());
        },
        getStats() {
            return {
                entryCount: entries.size,
                hitCount,
                missCount,
                evictionCount,
            };
        },
        destroy() {
            entries.clear();
        },
    };
    return api;
}
//# sourceMappingURL=comptime-cache.js.map