#!/usr/bin/env bash
set -euo pipefail

OWNER="${1:-}"
NAME="${2:-ad3-suite-skills}"

if [[ -z "$OWNER" ]]; then
  echo "Uso: ./scripts/publish-github.sh TU_USUARIO [nombre-del-repo]"
  echo "Ejemplo: ./scripts/publish-github.sh don-gadgeto ad3-suite-skills"
  exit 1
fi

if ! command -v gh >/dev/null 2>&1; then
  echo "Falta GitHub CLI. Instálalo: https://cli.github.com/"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "No hay sesión de GitHub. Corre: gh auth login"
  exit 1
fi

if gh repo view "$OWNER/$NAME" >/dev/null 2>&1; then
  echo "El repo $OWNER/$NAME ya existe. Haciendo push a github..."
else
  gh repo create "$OWNER/$NAME" \
    --public \
    --description "AD3 suite skills — complementary craft layer for any host. Does not replace other skills." \
    --source=. \
    --remote=github \
    --push
  echo "Creado https://github.com/$OWNER/$NAME"
  exit 0
fi

if ! git remote get-url github >/dev/null 2>&1; then
  git remote add github "https://github.com/$OWNER/$NAME.git"
fi

git push -u github HEAD:main
echo "Publicado https://github.com/$OWNER/$NAME"
