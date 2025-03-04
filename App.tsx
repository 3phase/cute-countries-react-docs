import Flag, { Variants } from "cute-countries-react";
import * as React from "react";
import "./App.css";

const variants = ["rounded", "square", "circle"];

function App() {
  const [variant, setVariant] = React.useState<Variants>();
  const [size, setSize] = React.useState(84); // pixels
  const [country, setCountry] = React.useState<any>("bg");
  const previewCode = `<Flag ${
    !variant ? "" : `variant="${variant}" `
  }country="${country}" size={${size}} />`;

  const flags = [
    "abkhazia",
    "balearicIslands",
    "basque",
    "canary",
    "ceuta",
    "nato",
    "esMelilla",
    "frCorsica",
    "galapagos",
    "madeira",
    "ossetia",
    "easterIsland",
    "usHawaii",
    "somaliland",
    "stBarts",
    "azores",
    "sardinia",
    "sicily",
    "transnistria",
    "tibet",
    "wales",
    "en",
    "britishColumbia",
    "ad",
    "ae",
    "af",
    "ag",
    "ai",
    "al",
    "am",
    "ao",
    "ar",
    "as",
    "at",
    "au",
    "aw",
    "ax",
    "az",
    "ba",
    "bb",
    "bd",
    "be",
    "bf",
    "bg",
    "bh",
    "bi",
    "bj",
    "bm",
    "bn",
    "bo",
    "br",
    "bs",
    "bt",
    "bw",
    "by",
    "bz",
    "ca",
    "cc",
    "cd",
    "cf",
    "cg",
    "ch",
    "ci",
    "ck",
    "cl",
    "cm",
    "cn",
    "co",
    "cr",
    "cu",
    "cw",
    "cx",
    "cy",
    "cz",
    "de",
    "dj",
    "dk",
    "dm",
    "dz",
    "ec",
    "ee",
    "eg",
    "er",
    "es",
    "et",
    "fi",
    "fj",
    "fk",
    "fm",
    "fo",
    "fr",
    "ga",
    "gd",
    "ge",
    "gg",
    "gh",
    "gi",
    "gl",
    "gm",
    "gn",
    "gq",
    "gr",
    "gt",
    "gu",
    "gw",
    "gy",
    "hk",
    "hn",
    "hr",
    "ht",
    "hu",
    "id",
    "ie",
    "il",
    "im",
    "io",
    "iq",
    "ir",
    "is",
    "it",
    "je",
    "jm",
    "jo",
    "jp",
    "ke",
    "kg",
    "kh",
    "ki",
    "km",
    "kn",
    "kp",
    "kr",
    "kw",
    "ky",
    "kz",
    "la",
    "lb",
    "lc",
    "li",
    "lk",
    "lr",
    "ls",
    "lt",
    "lu",
    "lv",
    "ly",
    "ma",
    "mc",
    "md",
    "me",
    "mg",
    "mh",
    "mk",
    "ml",
    "mm",
    "mn",
    "mo",
    "mp",
    "mq",
    "mr",
    "ms",
    "mt",
    "mu",
    "mv",
    "mw",
    "mx",
    "my",
    "mz",
    "na",
    "nc",
    "ne",
    "nf",
    "ng",
    "ni",
    "nl",
    "no",
    "np",
    "nr",
    "nu",
    "nz",
    "om",
    "pa",
    "pe",
    "pf",
    "pg",
    "ph",
    "pk",
    "pl",
    "pn",
    "pr",
    "ps",
    "pt",
    "pw",
    "py",
    "qa",
    "ro",
    "rs",
    "ru",
    "rw",
    "sa",
    "sb",
    "sc",
    "sd",
    "se",
    "sg",
    "si",
    "sk",
    "sl",
    "sm",
    "sn",
    "so",
    "sr",
    "ss",
    "st",
    "sv",
    "sx",
    "sy",
    "sz",
    "tc",
    "td",
    "tg",
    "th",
    "tj",
    "tk",
    "tl",
    "tm",
    "tn",
    "to",
    "tr",
    "tt",
    "tv",
    "tw",
    "tz",
    "ua",
    "ug",
    "us",
    "uy",
    "uz",
    "va",
    "vc",
    "ve",
    "vg",
    "vi",
    "vn",
    "vu",
    "ws",
    "xk",
    "ye",
    "za",
    "zm",
    "zw",
    "eu",
    "uk",
  ];

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="App">
      <main className="App-main">
        <h1>
          <em>Cute Country Flags</em>
        </h1>

        <Flag country={country} size={size} variant={variant} />

        <div className="App-form">
          {/* <div className="App-field">
            <label htmlFor="variants">Variant</label>{" "}
            <select
              className="App-select"
              name="variants"
              onChange={(e) =>
                setVariant((e.target.value as Variants) || undefined)
              }
              value={variant}
            >
              <option value="">Choose...</option>
              {variants.map((s) => (
                <option key={s} value={s}>
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </option>
              ))}
            </select>
          </div> */}

          <div className="App-field">
            <label htmlFor="countries">Country</label>{" "}
            <select
              className="App-select"
              name="countries"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            >
              {flags.map((code) => {
                console.log(code);
                const labelWithCode = `${code}`;
                return (
                  <option key={code} value={code}>
                    {labelWithCode}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="App-field">
            <label htmlFor="size">Size</label>{" "}
            <input
              className="App-input"
              name="size"
              type="number"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              min={0}
              max={400}
            />
            px
          </div>
        </div>

        <code className="App-code">
          <button
            className="App-copy-btn"
            onClick={() => copyToClipboard(previewCode)}
          >
            📋
          </button>
          <pre>{previewCode}</pre>
        </code>
      </main>
    </div>
  );
}

export default App;
