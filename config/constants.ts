export const DEFAULT_CODE = `async function postJSON(data) {
  try {
    const response = await fetch("https://example.com/profile", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

const data = { username: "example" };
postJSON(data);
`

export const DEFAULT_BASE_SETUP = {
  foldGutter: false,
  highlightActiveLine: false,
  highlightActiveLineGutter: false,
  indentOnInput: true,
  lineNumbers: true,
  syntaxHighlighting: true,
  tabSize: 4,
}

export const THEMES: {
  id: string
  label: string
  isCustom?: boolean
}[] = [
  {
    id: "abcdef",
    label: "ABCDEF",
  },
  {
    id: "androidstudio",
    label: "Android Studio",
  },
  {
    id: "atomone",
    label: "Atom one",
  },
  {
    id: "aura",
    label: "Aura",
  },
  {
    id: "bbedit",
    label: "Bbedit",
  },
  {
    id: "bespin",
    label: "Bespin",
  },
  {
    id: "darcula",
    label: "Darcula",
  },

  {
    id: "duotoneDark",
    label: "Duotone Dark",
  },
  {
    id: "duotoneLight",
    label: "Duotone Light",
  },
  {
    id: "eclipse",
    label: "Eclipse",
  },
  {
    id: "githubDark",
    label: "Github Dark",
  },
  {
    id: "githubLight",
    label: "Github Light",
  },
  {
    id: "gruvboxDark",
    label: "Gruvbox Dark",
  },
  {
    id: "gruvboxLight",
    label: "Gruvbox Light",
  },
  {
    id: "material",
    label: "Material",
  },
  {
    id: "materialDark",
    label: "Material Dark",
  },
  {
    id: "materialLight",
    label: "Material Light",
  },
  {
    id: "noctisLilac",
    label: "Noctis Lilac",
  },
  {
    id: "nord",
    label: "Nord",
  },
  {
    id: "okaidia",
    label: "Okaidia",
  },
  {
    id: "solarizedDark",
    label: "Solarized Dark",
  },
  {
    id: "solarizedLight",
    label: "Solarized Light",
  },
  {
    id: "sublime",
    label: "Sublime",
  },
  {
    id: "tokyoNight",
    label: "Tokyo Night",
  },
  {
    id: "tokyoNightStorm",
    label: "Tokyo Night Storm",
  },
  {
    id: "tokyoNightDay",
    label: "Tokyo Night Day",
  },
  {
    id: "vscodeDark",
    label: "VS Code Dark",
  },
  {
    id: "xcodeDark",
    label: "xCode Dark",
  },
  {
    id: "xcodeLight",
    label: "xCode Light",
  },
]

export const LANGUAGES = [
  {
    label: "Auto",
    id: "auto",
  },
  {
    label: "Apache",
    id: "apache",
    custom: true,
  },
  {
    label: "Bash",
    id: "shell",
  },
  {
    label: "Plain Text",
    id: "text",
  },
  {
    label: "C",
    id: "c",
  },
  {
    label: "C++",
    id: "cpp",
  },
  {
    label: "C#",
    id: "csharp",
  },
  {
    label: "Clojure",
    id: "clojure",
  },
  {
    label: "COBOL",
    id: "cobol",
  },
  {
    label: "CoffeeScript",
    id: "coffeescript",
  },
  {
    label: "Crystal",
    id: "crystal",
  },
  {
    label: "CSS",
    id: "css",
  },
  {
    label: "D",
    id: "d",
  },
  {
    label: "Dart",
    id: "dart",
  },
  {
    label: "Diff",
    id: "diff",
  },
  {
    label: "Django",
    id: "django",
  },
  {
    label: "Docker",
    id: "dockerfile",
  },
  {
    label: "Elixir",
    id: "elixir",
    custom: true,
  },
  {
    label: "Elm",
    id: "elm",
  },
  {
    label: "Erlang",
    id: "erlang",
  },

  {
    label: "Fortran",
    id: "fortran",
  },
  {
    label: "Gherkin",
    id: "gherkin",
  },
  {
    label: "GraphQL",
    id: "graphql",
    custom: true,
  },
  {
    label: "Go",
    id: "go",
  },
  {
    label: "Groovy",
    id: "groovy",
  },
  {
    label: "Handlebars",
    id: "handlebars",
  },
  {
    label: "Haskell",
    id: "haskell",
  },
  {
    label: "HTML/XML",
    id: "htmlmixed",
  },
  {
    label: "Java",
    id: "java",
  },
  {
    label: "JavaScript",
    id: "javascript",
  },
  {
    label: "JSON",
    id: "json",
  },
  {
    label: "JSX",
    id: "jsx",
  },
  {
    label: "Julia",
    id: "julia",
  },
  {
    label: "Kotlin",
    id: "kotlin",
  },
  {
    label: "LaTeX",
    id: "stex",
  },
  {
    label: "Lisp",
    id: "commonlisp",
  },
  {
    label: "Lua",
    id: "lua",
  },
  {
    label: "Markdown",
    id: "markdown",
  },
  {
    label: "Mathematica",
    id: "mathematica",
  },
  {
    label: "MATLAB/Octave",
    id: "octave",
  },
  {
    label: "MySQL",
    id: "mysql",
  },
  {
    label: "N-Triples",
    id: "ntriples",
  },
  {
    label: "NGINX",
    id: "nginx",
  },
  {
    label: "Nim",
    id: "nim",
    custom: true,
  },
  {
    label: "Nix",
    id: "nix",
  },
  {
    label: "Objective C",
    id: "objectiveC",
  },
  {
    label: "Pascal",
    id: "pascal",
  },
  {
    label: "Perl",
    id: "perl",
  },
  {
    label: "PHP",
    id: "php",
  },
  {
    label: "PowerShell",
    id: "powershell",
  },
  {
    label: "Protocol Buffer",
    id: "protobuf",
  },
  {
    label: "Python",
    id: "python",
  },
  {
    label: "R",
    id: "r",
  },
  {
    label: "RISC-V",
    id: "riscv",
    custom: true,
  },
  {
    label: "Ruby",
    id: "ruby",
  },
  {
    label: "Rust",
    id: "rust",
  },
  {
    label: "Sass",
    id: "sass",
  },
  {
    label: "Scala",
    id: "scala",
  },
  {
    label: "Smalltalk",
    id: "smalltalk",
  },
  {
    label: "Solidity",
    id: "solidity",
    custom: true,
  },
  {
    label: "SPARQL",
    id: "sparql",
  },
  {
    label: "SQL",
    id: "sql",
  },
  {
    label: "Stan",
    id: "stan",
  },
  {
    label: "Stylus",
    id: "stylus",
  },
  {
    label: "Swift",
    id: "swift",
  },
  {
    label: "TCL",
    id: "tcl",
  },
  {
    label: "TOML",
    id: "toml",
  },
  {
    label: "Turtle",
    id: "turtle",
  },
  {
    label: "TypeScript",
    id: "typescript",
  },
  {
    label: "TSX",
    id: "tsx",
  },
  {
    label: "Twig",
    id: "twig",
  },
  {
    label: "VB.NET",
    id: "vb",
  },
  {
    label: "Verilog",
    id: "verilog",
  },
  {
    label: "VHDL",
    id: "vhdl",
  },
  {
    label: "Vue",
    id: "vue",
  },
  {
    label: "XQuery",
    id: "xquery",
  },
  {
    label: "YAML",
    id: "yaml",
  },
]

export const GRADIENTS = [
  {
    id: "1",
    name: "Hyper",
    code: "linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))",
  },
  {
    id: "2",
    name: "Oceanic",
    code: "linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))",
  },
  {
    id: "3",
    name: "Cotton Candy",
    code: "linear-gradient(to right, rgb(249, 168, 212), rgb(216, 180, 254), rgb(129, 140, 248))",
  },
  {
    id: "4",
    name: "Sunset",
    code: "linear-gradient(to right, rgb(199, 210, 254), rgb(254, 202, 202), rgb(254, 249, 195))",
  },
  {
    id: "5",
    name: "Mojave",
    code: "linear-gradient(to right, rgb(254, 249, 195), rgb(253, 224, 71), rgb(234, 179, 8))",
  },
  {
    id: "6",
    name: "BeachSide",
    code: "linear-gradient(to right, rgb(254, 240, 138), rgb(187, 247, 208), rgb(34, 197, 94))",
  },
  {
    id: "7",
    name: "Peachy",
    code: "linear-gradient(to right, rgb(254, 202, 202), rgb(252, 165, 165), rgb(254, 240, 138))",
  },
  {
    id: "8",
    name: "SeaFoam",
    code: "linear-gradient(to right, rgb(187, 247, 208), rgb(134, 239, 172), rgb(59, 130, 246))",
  },
  {
    id: "9",
    name: "Pumpkin",
    code: "linear-gradient(to right, rgb(254, 240, 138), rgb(250, 204, 21), rgb(161, 98, 7))",
  },
  {
    id: "10",
    name: "Pandora",
    code: "linear-gradient(to right, rgb(187, 247, 208), rgb(74, 222, 128), rgb(126, 34, 206))",
  },
  {
    id: "11",
    name: "Valentine",
    code: "linear-gradient(to right, rgb(254, 202, 202), rgb(220, 38, 38))",
  },
  {
    id: "12",
    name: "Hawaii",
    code: "linear-gradient(to right, rgb(134, 239, 172), rgb(253, 224, 71), rgb(249, 168, 212))",
  },
  {
    id: "13",
    name: "Lavender",
    code: "linear-gradient(to right, rgb(165, 180, 252), rgb(192, 132, 252))",
  },
  {
    id: "14",
    name: "WinterGreen",
    code: "linear-gradient(to right, rgb(187, 247, 208), rgb(34, 197, 94))",
  },
  {
    id: "15",
    name: "Huckleberry",
    code: "linear-gradient(to right, rgb(233, 213, 255), rgb(192, 132, 252), rgb(107, 33, 168))",
  },
  {
    id: "16",
    name: "MineSota",
    code: "linear-gradient(to right, rgb(192, 132, 252), rgb(250, 204, 21))",
  },
  {
    id: "17",
    name: "Arrendelle",
    code: "linear-gradient(to right, rgb(219, 234, 254), rgb(147, 197, 253), rgb(59, 130, 246))",
  },
  {
    id: "18",
    name: "Burnt Sand",
    code: "conic-gradient(at left center, rgb(254, 240, 138), rgb(239, 68, 68), rgb(217, 70, 239))",
  },
  {
    id: "19",
    name: "Purple Beam",
    code: "linear-gradient(to left bottom, rgb(49, 46, 129), rgb(129, 140, 248), rgb(49, 46, 129))",
  },
  {
    id: "20",
    name: "Spearmint",
    code: "linear-gradient(to right, rgb(187, 247, 208), rgb(74, 222, 128), rgb(34, 197, 94))",
  },
  {
    id: "21",
    name: "Sonora",
    code: "linear-gradient(to right, rgb(254, 240, 138), rgb(234, 179, 8))",
  },
  {
    id: "22",
    name: "Siearra Mist",
    code: "linear-gradient(to right, rgb(254, 240, 138), rgb(187, 247, 208), rgb(134, 239, 172))",
  },
  {
    id: "23",
    name: "Creamcicle",
    code: "linear-gradient(to right, rgb(254, 240, 138), rgb(253, 224, 71), rgb(250, 204, 21))",
  },
  {
    id: "24",
    name: "Midnight",
    code: "linear-gradient(to right, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39))",
  },
  {
    id: "25",
    name: "Burning Sunrise",
    code: "linear-gradient(to right, rgb(202, 138, 4), rgb(220, 38, 38))",
  },
  {
    id: "26",
    name: "Sublime",
    code: "linear-gradient(to right, rgb(251, 113, 133), rgb(217, 70, 239), rgb(99, 102, 241))",
  },
  {
    id: "27",
    name: "Witch",
    code: "linear-gradient(to right, rgb(15, 23, 42), rgb(88, 28, 135), rgb(15, 23, 42))",
  },
  {
    id: "28",
    name: "Blue Flame",
    code: "radial-gradient(at center bottom, rgb(253, 230, 138), rgb(124, 58, 237), rgb(12, 74, 110))",
  },
  {
    id: "29",
    name: "Rocket Power",
    code: "radial-gradient(at center top, rgb(180, 83, 9), rgb(253, 186, 116), rgb(159, 18, 57))",
  },
  {
    id: "30",
    name: "Warm Glow",
    code: "radial-gradient(at center top, rgb(209, 213, 219), rgb(192, 38, 211), rgb(234, 88, 12))",
  },
]
