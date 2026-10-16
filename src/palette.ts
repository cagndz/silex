/**
 * Silex — single source of truth.
 *
 * Rule of the theme: five hues, each on its own slice of the color wheel,
 * for the tokens worth telling apart; neutral grays for everything else.
 * Every editor port is generated from these values; never hand-edit the JSON.
 */

/** Raw palette. Hex values are sRGB, opaque. */
export const base = {
  // Surfaces (neutral, Vesper's near-black)
  bg: "#101010", // editor
  surface: "#0c0c0c", // panels, title bar, tab bar, status bar
  elevated: "#161616", // popovers, menus, modals
  line: "#171717", // active line
  lineStrong: "#1c1c1c",
  border: "#1f1f1f",
  borderSoft: "#191919",
  borderStrong: "#2a2a2a",

  // Neutral grays (UI + secondary syntax)
  gray50: "#f2f2f2",
  gray100: "#c8c8c8", // text
  gray200: "#b0b0b0",
  gray300: "#8a8a8a",
  gray400: "#7d7d7d",
  gray500: "#787878", // muted UI text, inlay hints (4.5:1 on panels)
  gray600: "#575757", // comments
  gray700: "#444444",
  gray800: "#505050", // line numbers (same as Vesper)
  gray900: "#2a2a2a",

  // Cool grays — UI highlights (search, hints)
  coolLight: "#97a7b7",
  cool: "#8391a0",
  coolDim: "#646c75",

  // Syntax grays
  keyword: "#8a8a8a",
  punctuation: "#6b6f75",
  coolWhite: "#e9f3fe", // types

  // Syntax hues — each one owns a slice of the color wheel (OKLCH)
  orange: "#ffa95c", // 60°  functions, components, escapes, cursor
  cream: "#f3d392", // 85°  numbers, booleans, null, this, regex
  mint: "#8ef5d6", // 165° strings
  blue: "#95c3eb", // 245° properties, attributes
  purple: "#b99bde", // 305° operators

  // States
  red: "#ed8c84",
  amber: "#edbf71",
  info: "#5ecad6", // cyan, kept apart from the property blue
  green: "#8ccfb1",
  violet: "#cb9fd5", // git conflicts
  modified: "#e0b67b",
} as const;

/** Terminal ANSI — same lightness and chroma per hue (OKLCH). */
export const ansi = {
  black: "#1a1a1a",
  red: "#f19e97",
  green: "#7bcba1",
  yellow: "#d9b06b",
  blue: "#7fbef3",
  magenta: "#d4a3df",
  cyan: "#5ecbcb",
  white: "#cfcfcf",
  brightBlack: "#6e6e6e",
  brightRed: "#ffbfb8",
  brightGreen: "#a3e6c1",
  brightYellow: "#f2cf94",
  brightBlue: "#a5dbff",
  brightMagenta: "#eec3f7",
  brightCyan: "#8ee6e5",
  brightWhite: "#f2f2f2",
  dimBlack: "#121212",
  dimRed: "#ab6d68",
  dimGreen: "#538f70",
  dimYellow: "#997b46",
  dimBlue: "#5685ad",
  dimMagenta: "#96719e",
  dimCyan: "#3c8f8f",
  dimWhite: "#8a8a8a",
} as const;

/** Syntax roles. Ports map their own scopes/captures onto these. */
export const syntax = {
  text: base.gray100,
  comment: base.gray600,
  commentDoc: base.gray600,
  punctuation: base.punctuation,
  operator: base.purple,
  keyword: base.keyword,
  keywordControl: base.keyword,
  tag: base.keyword,
  type: base.coolWhite,
  function: base.orange,
  component: base.orange,
  string: base.mint,
  escape: base.orange,
  literal: base.cream,
  property: base.blue,
  link: base.orange,
  heading: base.coolWhite,
} as const;

/** Muted versions of the syntax hues for rainbow brackets / indent guides. */
export const brackets = ["#5c85a8", "#8a76a2", "#a08d65", "#659d85", "#aa7b54"] as const;

/** Append an alpha channel (0–1) to an opaque hex. */
export const alpha = (hex: string, a: number) =>
  hex + Math.round(a * 255).toString(16).padStart(2, "0");
