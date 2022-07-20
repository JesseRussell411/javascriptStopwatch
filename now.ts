const now: () => number = (() => {
    if (
        typeof window !== "undefined" &&
        window?.document !== undefined &&
        typeof window?.performance?.now === "function"
    ) {
        return () => window?.performance?.now();
    } else {
        try {
            const { performance } = require("perf_hooks");
            return () => performance.now();
        } catch (e) {
            console.error(e);
            return () => Date.now();
        }
    }
})();

export default now;
