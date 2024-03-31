import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
	entryPoints: ["common/index.ts"],
	clean: true,
	format: ["cjs"],
	...options,
}));
