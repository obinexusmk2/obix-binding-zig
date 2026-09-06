const VALID_MODES = ['monoglot', 'polyglot', 'hybrid'];
export function createSchemaResolver(config) {
    const mode = config.schemaMode;
    return {
        resolve() {
            return {
                mode,
                zigVersion: config.zigVersion ?? 'unknown',
                supportsMultiLanguage: mode === 'polyglot' || mode === 'hybrid',
                wasmEnabled: mode !== 'monoglot',
                cImportEnabled: mode === 'polyglot' || mode === 'hybrid',
                comptimeEvalEnabled: true,
            };
        },
        validate(m) {
            return VALID_MODES.includes(m);
        },
        getMode() {
            return mode;
        },
        destroy() {
        },
    };
}
//# sourceMappingURL=schema-resolver.js.map