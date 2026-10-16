import { alpha, ansi, base as c, brackets, syntax as s } from "./palette.ts";

type Style = { color: string; font_style: null | "italic"; font_weight: null | number };
const st = (color: string, font_weight: number | null = null): Style => ({ color, font_style: null, font_weight });

const status = (color: string) => ({ fg: color, bg: alpha(color, 0.1), border: alpha(color, 0.35) });
const err = status(c.red);
const warn = status(c.amber);
const info = status(c.info);
const ok = status(c.green);
const mod = status(c.modified);
const conflict = status(c.violet);
const muted = status(c.gray600);

export const zedTheme = {
  $schema: "https://zed.dev/schema/themes/v0.2.0.json",
  name: "Silex",
  author: "Carlos Agundez",
  themes: [
    {
      name: "Silex",
      appearance: "dark",
      style: {
        // Borders
        border: c.border,
        "border.variant": c.borderSoft,
        "border.focused": alpha(c.orange, 0.45),
        "border.selected": alpha(c.orange, 0.3),
        "border.transparent": "#00000000",
        "border.disabled": c.borderSoft,

        // Surfaces
        background: c.surface,
        "surface.background": c.surface,
        "elevated_surface.background": c.elevated,
        "panel.background": c.surface,
        "panel.focused_border": null,
        "pane.focused_border": null,
        "drop_target.background": alpha(c.orange, 0.08),

        // Elements (buttons, inputs, list items)
        "element.background": c.elevated,
        "element.hover": alpha("#ffffff", 0.05),
        "element.active": alpha("#ffffff", 0.08),
        "element.selected": alpha("#ffffff", 0.07),
        "element.disabled": c.surface,
        "ghost_element.background": "#00000000",
        "ghost_element.hover": alpha("#ffffff", 0.04),
        "ghost_element.active": alpha("#ffffff", 0.07),
        "ghost_element.selected": alpha("#ffffff", 0.06),
        "ghost_element.disabled": "#00000000",

        // Text & icons
        text: c.gray100,
        "text.muted": c.gray300,
        "text.placeholder": c.gray500,
        "text.disabled": c.gray700,
        "text.accent": c.orange,
        icon: c.gray200,
        "icon.muted": c.gray500,
        "icon.disabled": c.gray700,
        "icon.placeholder": c.gray500,
        "icon.accent": c.orange,
        "link_text.hover": c.orange,

        // Chrome
        "title_bar.background": c.surface,
        "title_bar.inactive_background": c.surface,
        "status_bar.background": c.surface,
        "toolbar.background": c.bg,
        "tab_bar.background": c.surface,
        "tab.inactive_background": c.surface,
        "tab.active_background": c.bg,

        // Search
        "search.match_background": alpha(c.coolLight, 0.22),
        "search.active_match_background": alpha(c.orange, 0.32),

        // Scrollbar
        "scrollbar.thumb.background": alpha("#ffffff", 0.07),
        "scrollbar.thumb.hover_background": alpha("#ffffff", 0.14),
        "scrollbar.thumb.active_background": alpha("#ffffff", 0.18),
        "scrollbar.thumb.border": "#00000000",
        "scrollbar.track.background": "#00000000",
        "scrollbar.track.border": "#00000000",

        // Editor
        "editor.foreground": c.gray100,
        "editor.background": c.bg,
        "editor.gutter.background": c.bg,
        "editor.subheader.background": c.surface,
        "editor.active_line.background": c.line,
        "editor.highlighted_line.background": c.lineStrong,
        "editor.line_number": c.gray800,
        "editor.active_line_number": c.gray200,
        "editor.hover_line_number": c.gray500,
        "editor.invisible": "#2e2e2e",
        "editor.wrap_guide": c.borderSoft,
        "editor.active_wrap_guide": c.borderStrong,
        "editor.indent_guide": "#1b1b1b",
        "editor.indent_guide_active": "#2e2e2e",
        "editor.document_highlight.read_background": alpha(c.coolLight, 0.14),
        "editor.document_highlight.write_background": alpha(c.orange, 0.14),
        "panel.indent_guide": "#1b1b1b",
        "panel.indent_guide_active": "#2e2e2e",
        "panel.indent_guide_hover": "#3a3a3a",

        // Terminal
        "terminal.background": c.bg,
        "terminal.foreground": c.gray100,
        "terminal.bright_foreground": c.gray50,
        "terminal.dim_foreground": c.gray400,
        "terminal.ansi.black": ansi.black,
        "terminal.ansi.red": ansi.red,
        "terminal.ansi.green": ansi.green,
        "terminal.ansi.yellow": ansi.yellow,
        "terminal.ansi.blue": ansi.blue,
        "terminal.ansi.magenta": ansi.magenta,
        "terminal.ansi.cyan": ansi.cyan,
        "terminal.ansi.white": ansi.white,
        "terminal.ansi.bright_black": ansi.brightBlack,
        "terminal.ansi.bright_red": ansi.brightRed,
        "terminal.ansi.bright_green": ansi.brightGreen,
        "terminal.ansi.bright_yellow": ansi.brightYellow,
        "terminal.ansi.bright_blue": ansi.brightBlue,
        "terminal.ansi.bright_magenta": ansi.brightMagenta,
        "terminal.ansi.bright_cyan": ansi.brightCyan,
        "terminal.ansi.bright_white": ansi.brightWhite,
        "terminal.ansi.dim_black": ansi.dimBlack,
        "terminal.ansi.dim_red": ansi.dimRed,
        "terminal.ansi.dim_green": ansi.dimGreen,
        "terminal.ansi.dim_yellow": ansi.dimYellow,
        "terminal.ansi.dim_blue": ansi.dimBlue,
        "terminal.ansi.dim_magenta": ansi.dimMagenta,
        "terminal.ansi.dim_cyan": ansi.dimCyan,
        "terminal.ansi.dim_white": ansi.dimWhite,

        // Version control
        "version_control.added": c.green,
        "version_control.modified": c.modified,
        "version_control.deleted": c.red,
        "version_control.word_added": alpha(c.green, 0.2),
        "version_control.word_deleted": alpha(c.red, 0.2),
        "version_control.conflict_marker.ours": alpha(c.green, 0.12),
        "version_control.conflict_marker.theirs": alpha(c.info, 0.12),

        // Diagnostics & statuses
        error: err.fg, "error.background": err.bg, "error.border": err.border,
        warning: warn.fg, "warning.background": warn.bg, "warning.border": warn.border,
        info: info.fg, "info.background": info.bg, "info.border": info.border,
        hint: c.cool, "hint.background": alpha(c.cool, 0.1), "hint.border": alpha(c.cool, 0.35),
        success: ok.fg, "success.background": ok.bg, "success.border": ok.border,
        created: ok.fg, "created.background": ok.bg, "created.border": ok.border,
        modified: mod.fg, "modified.background": mod.bg, "modified.border": mod.border,
        deleted: err.fg, "deleted.background": err.bg, "deleted.border": err.border,
        renamed: info.fg, "renamed.background": info.bg, "renamed.border": info.border,
        conflict: conflict.fg, "conflict.background": conflict.bg, "conflict.border": conflict.border,
        ignored: muted.fg, "ignored.background": muted.bg, "ignored.border": muted.border,
        hidden: muted.fg, "hidden.background": muted.bg, "hidden.border": muted.border,
        unreachable: muted.fg, "unreachable.background": muted.bg, "unreachable.border": muted.border,
        predictive: c.gray500, "predictive.background": alpha(c.gray500, 0.1), "predictive.border": alpha(c.gray500, 0.35),

        // Collaborators: you are always the orange cursor
        players: [c.orange, c.blue, c.mint, c.purple, c.cream, c.red, c.info, c.amber].map((color, i) => ({
          cursor: color,
          background: color,
          selection: alpha(color, i === 0 ? 0.14 : 0.16),
        })),

        // Rainbow brackets / indent guides (muted on purpose)
        accents: [...brackets],

        syntax: {
          // Text & variables
          primary: st(s.text),
          variable: st(s.text),
          "variable.parameter": st(s.text),
          "variable.special": st(s.literal), // this, super, self
          embedded: st(s.text),
          namespace: st(s.text),

          // Structure (cool)
          keyword: st(s.keyword),
          "keyword.control": st(s.keywordControl),
          preproc: st(s.keyword),
          tag: st(s.tag),
          "tag.component": st(s.component),
          type: st(s.type),
          "type.builtin": st(s.type),
          enum: st(s.type),
          constructor: st(s.type),
          punctuation: st(s.punctuation),
          "punctuation.bracket": st(s.punctuation),
          "punctuation.delimiter": st(s.punctuation),
          "punctuation.special": st(s.keyword),
          "punctuation.markup": st(s.punctuation),
          "punctuation.list_marker": st(s.keyword),
          operator: st(s.operator),
          label: st(s.keywordControl),
          hint: st(s.keyword),
          "selector.pseudo": st(s.keywordControl),

          // Accent & data (warm)
          function: st(s.function),
          selector: st(s.function),
          property: st(s.property),
          attribute: st(s.property),
          number: st(s.literal),
          boolean: st(s.literal),
          constant: st(s.literal),
          "constant.builtin": st(s.literal),
          variant: st(s.literal),
          "string.regex": st(s.literal),
          "string.special": st(s.literal),
          "string.special.symbol": st(s.literal),
          "string.escape": st(s.escape),
          string: st(s.string),
          "text.literal": st(s.string),

          // Comments & ghost text
          comment: st(s.comment),
          "comment.doc": st(s.commentDoc),
          predictive: st(c.gray500),

          // Markup
          title: st(s.heading, 600),
          emphasis: st(s.text),
          "emphasis.strong": st(s.text, 700),
          link_text: st(s.link),
          link_uri: st(s.string),

          // Diffs
          "diff.plus": st(c.green),
          "diff.minus": st(c.red),
        },
      },
    },
  ],
};
