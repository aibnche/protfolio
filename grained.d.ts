declare module 'grained' {
	interface GrainedOptions {
		animate?: boolean;
		patternWidth?: number;
		patternHeight?: number;
		grainOpacity?: number;
		grainDensity?: number;
		grainWidth?: number;
		grainHeight?: number;
		grainChaos?: number;
		grainSpeed?: number;
	}

	function grained(elementId: string, options: GrainedOptions): void;
	export default grained;
}