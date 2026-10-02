#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
SOURCE_PDF="$PROJECT_DIR/sps-ppr-hf680-2g-en-ug.pdf"
OUTPUT_DIR="$PROJECT_DIR/assets/codes"
TEMP_DIR="$(mktemp -d /private/tmp/hf680-code-crops.XXXXXX)"
trap 'rm -rf "$TEMP_DIR"' EXIT

mkdir -p "$OUTPUT_DIR"

crop_code() {
  local name="$1" page="$2" x="$3" y="$4" width="$5" height="$6"
  local rendered="$TEMP_DIR/page-$page.png"
  if [[ ! -f "$rendered" ]]; then
    pdftoppm -f "$page" -l "$page" -singlefile -r 288 -png "$SOURCE_PDF" "$TEMP_DIR/page-$page"
  fi
  magick "$rendered" -crop "$((width * 2))x$((height * 2))+$((x * 2))+$((y * 2))" +repage -strip "$OUTPUT_DIR/$name.png"
}

crop_code activate-custom-defaults 17 514 914 363 140
crop_code rs232-interface 19 514 1125 361 135
crop_code surepos-handheld 20 220 298 361 145
crop_code surepos-tabletop 20 837 434 361 145
crop_code usb-keyboard-pc 20 219 946 361 145
crop_code usb-keyboard-mac 20 837 1051 361 145
crop_code usb-keyboard-japanese 20 217 1155 417 150
crop_code usb-hid 21 515 199 361 140
crop_code usb-serial 21 487 553 417 150
crop_code secondary-interface-off 22 219 276 378 145
crop_code secondary-interface-on 22 820 382 378 145
crop_code keyboard-country-us 22 220 850 396 135
crop_code presentation-mode 47 504 316 383 120
crop_code add-cr-suffix 61 515 461 361 150
crop_code code39-on 83 206 793 378 145
crop_code code39-off 83 807 898 378 145
crop_code code128-on 95 206 385 378 145
crop_code code128-off 95 807 490 378 145
crop_code ean13-on 104 219 531 378 145
crop_code ean13-off 104 820 633 378 145
crop_code pdf417-on 114 219 377 378 145
crop_code pdf417-off 114 820 479 378 145
crop_code qr-on 118 219 944 378 145
crop_code qr-off 118 820 1050 378 145
crop_code data-matrix-on 122 219 380 378 145
crop_code data-matrix-off 122 820 486 378 145
crop_code aztec-on 124 219 790 378 145
crop_code aztec-off 124 820 898 378 145
crop_code show-software-revision 135 514 951 362 135
crop_code factory-reset-1-remove 137 207 907 361 145
crop_code factory-reset-2-activate 137 823 1009 363 125

printf 'Created %s barcode crops in %s\n' "$(find "$OUTPUT_DIR" -name '*.png' -type f | wc -l | tr -d ' ')" "$OUTPUT_DIR"
