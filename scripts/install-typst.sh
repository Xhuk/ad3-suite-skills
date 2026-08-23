#!/usr/bin/env bash
set -euo pipefail

# Official Typst CLI for this pack. Do not install ReportLab, FPDF, or a TeX live.
# https://github.com/typst/typst/releases

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VERSION="${TYPST_VERSION:-0.15.1}"
ARCH="$(uname -m)"
OS="$(uname -s)"
DEST="$ROOT/bin"
mkdir -p "$DEST"

case "$OS-$ARCH" in
  Linux-x86_64)   TARGET="x86_64-unknown-linux-musl" ;;
  Linux-aarch64)  TARGET="aarch64-unknown-linux-musl" ;;
  Darwin-arm64)   TARGET="aarch64-apple-darwin" ;;
  Darwin-x86_64)  TARGET="x86_64-apple-darwin" ;;
  *)
    echo "Unsupported platform: $OS $ARCH. Download a binary from https://github.com/typst/typst/releases" >&2
    exit 1
    ;;
esac

ARCHIVE="typst-${TARGET}.tar.xz"
URL="https://github.com/typst/typst/releases/download/v${VERSION}/${ARCHIVE}"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "Downloading Typst ${VERSION} (${TARGET})"
curl -fsSL "$URL" -o "$TMP/$ARCHIVE"
tar -xJf "$TMP/$ARCHIVE" -C "$TMP"
find "$TMP" -type f -name typst -exec cp {} "$DEST/typst" \;
chmod +x "$DEST/typst"
"$DEST/typst" --version
