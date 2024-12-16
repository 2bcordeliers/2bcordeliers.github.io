const fs = require("node:fs");
const terser = require("terser");
const postcss = require("postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const htmlMinifierTerser = require("html-minifier-terser")

if (!fs.existsSync("build")) {
    fs.mkdirSync("build");
}

async function buildJS() {
    let code = {
        "tools.js": fs.readFileSync("js/tools.js", "utf-8"),
        "data.js": fs.readFileSync("js/data.js", "utf-8"),
        "views.js": fs.readFileSync("js/views.js", "utf-8"),
        "script.js": fs.readFileSync("js/script.js", "utf-8")
    }

    let options = {
        mangle: {
            toplevel: true,
            properties: {
                reserved: ["dateStyle", "timeZone"]
            }
        }
    }

    fs.writeFileSync("build/script.js", (await terser.minify(code, options)).code, "utf-8");
}

async function buildCSS() {
    let code = fs.readFileSync("css/style.css", "utf-8")

    fs.writeFileSync("build/style.css", (await postcss([autoprefixer, cssnano])
    .process(code, {from: "css/style.css", to: "build/style.css", map: false}))
    .css, "utf-8");
}

async function buildHTML() {
    let code = fs.readFileSync("index.html", "utf-8")
        .replace(/css\/style.css/g, "style.css")
        .replace(/<script src="js\/.*.js"><\/script>/s, "<script src=\"script.js\"></script>");

    let options = {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
    }

    fs.writeFileSync("build/index.html", await htmlMinifierTerser.minify(code, options), "utf-8");
}

buildJS();
buildCSS();
buildHTML();