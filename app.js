const assets = "assets/pages";
const codeAssets = "assets/codes";

const categories = [
  ["all", "All codes"], ["start", "Get started"], ["interface", "Interface"],
  ["keyboard", "Keyboard"], ["behaviour", "Read behaviour"], ["output", "Output & suffixes"],
  ["symbology", "Barcode types"], ["advanced", "Advanced"], ["reset", "Reset & utilities"],
];

const crop = (file, label) => ({ src: `${codeAssets}/${file}.png`, label });

// Guide pages are numbered as printed in the manual. PDF pages begin twelve pages earlier.
const codes = [
  { title: "Activate custom defaults", category: "start", page: 5, tags: "restore saved configuration custom defaults recovery", description: "Restores your saved custom settings. If none were saved, it restores factory defaults.", crops: [crop("activate-custom-defaults", "Activate custom defaults")] },
  { title: "RS232 interface", category: "interface", page: 7, tags: "serial com port rs232 115200 baud cr lf manual trigger", description: "Sets 115,200 bps, 8 data bits, no parity, 1 stop bit, CR/LF, and manual trigger mode.", crops: [crop("rs232-interface", "RS232 interface")] },
  { title: "USB Keyboard (PC)", category: "interface", page: 8, tags: "usb windows hid keyboard wedge pc enter return default PAP124", description: "Makes scans type into a Windows PC like a keyboard. This is the factory default and adds CR/LF.", crops: [crop("usb-keyboard-pc", "USB Keyboard (PC)")] },
  { title: "USB Keyboard (Mac)", category: "interface", page: 8, tags: "usb mac macintosh keyboard wedge return PAP125", description: "Makes scans type into a Mac like a keyboard and adds CR/LF.", crops: [crop("usb-keyboard-mac", "USB Keyboard (Mac)")] },
  { title: "USB Japanese Keyboard (PC)", category: "interface", page: 8, tags: "usb japanese pc keyboard TERMID134", description: "Configures USB keyboard output for a Japanese PC layout.", crops: [crop("usb-keyboard-japanese", "USB Japanese Keyboard (PC)")] },
  { title: "USB HID barcode scanner", category: "interface", page: 9, tags: "usb hid pos host interface PAP131", description: "Configures the scanner as a USB HID barcode scanner.", crops: [crop("usb-hid", "USB HID barcode scanner")] },
  { title: "USB Serial", category: "interface", page: 9, tags: "usb virtual com port cdc serial windows driver mac TERMID130", description: "Emulates a regular RS232 COM port through USB. Windows needs Honeywell’s driver.", crops: [crop("usb-serial", "USB Serial")] },
  { title: "USB IBM SurePos", category: "interface", page: 8, tags: "cash register pos ibm handheld tabletop interface", description: "Choose the handheld or tabletop interface. Power-cycle the register afterwards.", crops: [crop("surepos-handheld", "Handheld scanner"), crop("surepos-tabletop", "Tabletop scanner")] },
  { title: "Secondary USB interface", category: "interface", page: 10, tags: "scanner management software secondary on off", description: "Controls communication with scanner-management software. The default is On.", crops: [crop("secondary-interface-on", "On - default"), crop("secondary-interface-off", "Off")] },
  { title: "United States keyboard layout", category: "keyboard", page: 10, tags: "country locale us united states qwerty default", description: "Restores the default United States keyboard country layout.", crops: [crop("keyboard-country-us", "United States - default")] },
  { title: "Other keyboard country layouts", category: "keyboard", page: 10, pages: [10, 16], tags: "country locale uk british english qwerty characters accents", description: "Browse country-specific keyboard layouts, including United Kingdom and European layouts." },
  { title: "Keyboard style and Caps Lock", category: "keyboard", page: 18, tags: "caps lock shift lock autocaps numlock case", description: "Sets regular, Caps Lock, Shift Lock, or AutoCaps keyboard behaviour." },
  { title: "Keyboard conversion", category: "keyboard", page: 19, tags: "uppercase lowercase capital letters case conversion", description: "Forces scanned alphabetic characters to upper or lower case." },
  { title: "Good-read beeper and LED", category: "behaviour", page: 29, pages: [29, 32], tags: "sound beep volume pitch led light feedback", description: "Adjusts the good-read beep, volume, pitch, LED, and visual feedback." },
  { title: "Presentation mode", category: "behaviour", page: 35, tags: "hands free automatic scanning stand trigger read mode TRGMOD3", description: "Enables the standard hands-free presentation read mode.", crops: [crop("presentation-mode", "Presentation mode")] },
  { title: "Read time-out and IR trigger", category: "behaviour", page: 33, pages: [33, 34], tags: "timeout trigger infrared ir illumination", description: "Adjusts the IR trigger mode, illumination, and read time-out." },
  { title: "Streaming presentation mode", category: "behaviour", page: 37, tags: "streaming continuous read presentation", description: "Configures streaming presentation behaviour and read mode." },
  { title: "Add a carriage return suffix", category: "output", page: 49, tags: "enter return cr suffix submit tab after scan VSUFCR", description: "Adds Enter after every scan by applying a carriage return suffix to all symbologies.", crops: [crop("add-cr-suffix", "Add CR suffix to all symbologies")] },
  { title: "Clear prefixes or suffixes", category: "output", page: 48, tags: "remove clear prefix suffix output data", description: "Clears one or all configured prefixes and suffixes." },
  { title: "Prefix and suffix selection", category: "output", page: 49, tags: "prepend append characters output data prefix suffix", description: "Choose prefix or suffix settings for more specific output changes." },
  { title: "Intercharacter delay", category: "output", page: 50, pages: [50, 51], tags: "slow typing delay timing serial keyboard", description: "Adds a delay for hosts that cannot keep up with scanner output." },
  { title: "Code 39 On or Off", category: "symbology", page: 71, tags: "enable disable symbology barcode linear code39", description: "Choose whether the scanner reads Code 39. The default is On.", crops: [crop("code39-on", "On - default"), crop("code39-off", "Off")] },
  { title: "Interleaved 2 of 5", category: "symbology", page: 75, pages: [75, 76], tags: "enable disable i25 itf symbology barcode linear", description: "Turn Interleaved 2 of 5 on or off, set its check digit, or change its length." },
  { title: "Code 128 On or Off", category: "symbology", page: 83, tags: "enable disable code128 symbology barcode linear", description: "Choose whether the scanner reads Code 128. The default is On.", crops: [crop("code128-on", "On - default"), crop("code128-off", "Off")] },
  { title: "UPC and EAN", category: "symbology", page: 85, pages: [85, 96], tags: "upc ean jan retail barcode enable disable addenda coupon", description: "Configure UPC-A, UPC-E, EAN/JAN-13, and EAN/JAN-8." },
  { title: "EAN/JAN-13 On or Off", category: "symbology", page: 92, tags: "ean13 jan13 retail enable disable", description: "Choose whether the scanner reads EAN/JAN-13. The default is On.", crops: [crop("ean13-on", "On - default"), crop("ean13-off", "Off")] },
  { title: "PDF417 On or Off", category: "symbology", page: 102, tags: "pdf417 2d barcode enable disable", description: "Choose whether the scanner reads PDF417. The default is On.", crops: [crop("pdf417-on", "On - default"), crop("pdf417-off", "Off")] },
  { title: "QR Code On or Off", category: "symbology", page: 106, tags: "qr qrcode micro qr 2d barcode enable disable", description: "Choose whether the scanner reads QR and Micro QR codes. The default is On.", crops: [crop("qr-on", "On - default"), crop("qr-off", "Off")] },
  { title: "Data Matrix On or Off", category: "symbology", page: 110, tags: "datamatrix data matrix 2d barcode enable disable", description: "Choose whether the scanner reads Data Matrix. The default is On.", crops: [crop("data-matrix-on", "On - default"), crop("data-matrix-off", "Off")] },
  { title: "Aztec Code On or Off", category: "symbology", page: 112, tags: "aztec 2d barcode enable disable", description: "Choose whether the scanner reads Aztec Code. The default is On.", crops: [crop("aztec-on", "On - default"), crop("aztec-off", "Off")] },
  { title: "Factory reset", category: "reset", page: 125, tags: "factory default reset erase remove custom settings DEFOVR", description: "Scan both codes in order. This removes custom defaults and restores the scanner’s factory settings.", crops: [crop("factory-reset-1-remove", "Step 1 - Remove custom defaults"), crop("factory-reset-2-activate", "Step 2 - Activate defaults")] },
  { title: "Show software revision", category: "reset", page: 123, tags: "firmware version software revision diagnostics REVINF", description: "Outputs the software revision, serial number, and other product information.", crops: [crop("show-software-revision", "Show software revision")] },
  { title: "Data format editor", category: "advanced", page: 53, pages: [53, 65], tags: "format data parser edit output advanced commands", description: "Advanced formatting commands for changing scanned data before it is sent to the host." },
  { title: "Serial programming commands", category: "advanced", page: 127, pages: [127, 147], tags: "serial command menu command query command configuration computer", description: "Configure the scanner from a serial connection instead of scanning a programming barcode." },
];

const pageTitles = [
  [5, "Custom defaults"], [7, "Interfaces"], [8, "USB interfaces"], [9, "USB serial and handshake"], [10, "Keyboard layouts"], [17, "Keyboard modifiers"], [18, "Keyboard style"], [19, "Keyboard conversion"], [20, "Control characters"], [22, "RS232 settings"], [29, "Beeper and LED"], [33, "Trigger and read time-out"], [35, "Presentation mode"], [37, "Read mode"], [39, "Read quality and reread delay"], [41, "Character activation"], [43, "Illumination and video"], [45, "Working orientation"], [47, "Prefix and suffix overview"], [48, "Clear prefixes and suffixes"], [49, "CR suffix"], [50, "Delays"], [53, "Data format editor"], [67, "Codabar"], [71, "Code 39"], [75, "Interleaved 2 of 5"], [83, "Code 128"], [85, "UPC-A"], [89, "UPC-E0"], [92, "EAN/JAN-13"], [94, "EAN/JAN-8"], [98, "GS1 DataBar"], [100, "Codablock"], [102, "PDF417"], [103, "MicroPDF417"], [106, "QR Code"], [110, "Data Matrix"], [111, "MaxiCode"], [112, "Aztec Code"], [115, "Han Xin and postal"], [119, "China Post"], [121, "Korea Post"], [123, "Utilities"], [125, "Factory defaults"], [127, "Serial programming commands"], [135, "Command reference"],
];

let activeCategory = "all";
let query = "";
const categoryLabel = Object.fromEntries(categories);
const imageFor = (guidePage) => `${assets}/guide-${String(guidePage + 12).padStart(3, "0")}.jpg`;
const searchInput = document.querySelector("#code-search");
const grid = document.querySelector("#results-grid");
const count = document.querySelector("#result-count");
const chips = document.querySelector("#category-chips");
const dialog = document.querySelector("#code-dialog");
const imageDialog = document.querySelector("#image-dialog");

function renderChips() {
  chips.innerHTML = categories.map(([id, label]) => `<button class="chip" type="button" data-category="${id}" aria-pressed="${id === activeCategory}">${label}</button>`).join("");
}

function filteredCodes() {
  const needle = query.trim().toLowerCase();
  return codes.filter((code) => {
    const categoryMatch = activeCategory === "all" || code.category === activeCategory;
    const searchText = `${code.title} ${code.category} ${code.tags} ${code.description}`.toLowerCase();
    return categoryMatch && (!needle || searchText.includes(needle));
  });
}

function renderResults() {
  const matches = filteredCodes();
  count.textContent = `${matches.length} ${matches.length === 1 ? "result" : "results"}`;
  grid.innerHTML = matches.length ? matches.map((code) => {
    const preview = code.crops?.[0];
    return `<button class="code-card" type="button" data-index="${codes.indexOf(code)}">
      <p class="card-category">${categoryLabel[code.category]}</p>
      <h3>${code.title}</h3>
      ${preview ? `<span class="card-barcode"><img src="${preview.src}" alt="" loading="lazy" /></span>` : ""}
      ${code.crops?.length > 1 ? `<span class="choice-count">${code.crops.length} choices</span>` : ""}
      <p>${code.description}</p>
      <span class="card-footer"><span>${preview ? "Open scannable code" : `Guide page ${code.page}${code.pages ? `-${code.pages[1]}` : ""}`}</span><span class="card-arrow" aria-hidden="true">→</span></span>
    </button>`;
  }).join("") : `<p class="empty">No code matches that search. Try a barcode type, connection, keyboard, suffix, reset, or browse every programming page below.</p>`;
}

function openCode(code) {
  document.querySelector("#dialog-category").textContent = categoryLabel[code.category];
  document.querySelector("#dialog-title").textContent = code.title;
  document.querySelector("#dialog-description").textContent = code.description;
  const guidePages = code.pages ? `${code.pages[0]}-${code.pages[1]}` : String(code.page);
  document.querySelector("#page-reference").textContent = `HF680 guide page ${guidePages}`;
  const images = code.crops?.length ? code.crops : [{ src: imageFor(code.page), label: "Full guide page" }];
  document.querySelector("#code-images").innerHTML = images.map((item, index) => `
    <button class="code-image-button" type="button" data-image="${item.src}" aria-label="Enlarge ${item.label}">
      <span class="crop-label">${item.label}</span>
      <img src="${item.src}" alt="${code.title}: ${item.label}" ${index ? "loading=\"lazy\"" : ""} />
    </button>`).join("");
  document.querySelector("#guide-link").href = `assets/HF680-user-guide.pdf#page=${code.page + 12}`;
  dialog.showModal();
}

function openPage(page) {
  const title = pageTitles.find(([number]) => number === page)?.[1] ?? "Programming reference";
  openCode({ title, category: "advanced", page, description: `HF680 guide page ${page}. Tap the page to enlarge it.` });
}

function renderLibrary() {
  const pages = Array.from({ length: 143 }, (_, index) => index + 5);
  document.querySelector("#page-library").innerHTML = pages.map((page) => {
    const title = pageTitles.find(([number]) => number === page)?.[1] ?? "Programming reference";
    return `<button class="page-button" type="button" data-page="${page}"><span>p${page}</span><br />${title}</button>`;
  }).join("");
}

chips.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderChips();
  renderResults();
});
searchInput.addEventListener("input", () => { query = searchInput.value; renderResults(); });
grid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-index]");
  if (card) openCode(codes[Number(card.dataset.index)]);
});
document.querySelector("#page-library").addEventListener("click", (event) => {
  const button = event.target.closest("[data-page]");
  if (button) openPage(Number(button.dataset.page));
});
document.querySelector("#code-images").addEventListener("click", (event) => {
  const button = event.target.closest("[data-image]");
  if (!button) return;
  document.querySelector("#enlarged-image").src = button.dataset.image;
  imageDialog.showModal();
});
document.querySelector("#close-dialog").addEventListener("click", () => dialog.close());
document.querySelector("#close-image-dialog").addEventListener("click", () => imageDialog.close());
[dialog, imageDialog].forEach((item) => item.addEventListener("click", (event) => { if (event.target === item) item.close(); }));

renderChips();
renderResults();
renderLibrary();
