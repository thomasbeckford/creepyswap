export type BreakpointsProp = Array<string> & {
	sm?: string;
	md?: string;
	lg?: string;
	xl?: string;
};

const breakpoints: BreakpointsProp = ['30em', '40em', '50em', '80em'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
