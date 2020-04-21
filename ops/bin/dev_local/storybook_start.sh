#!/bin/bash -eu
echo "--- Fetching latest DSM styles and writing to _dsmStyles.scss"
curl https://vaultintel.invisionapp.com/dsm-export/vault-intel-dsm/vault-dsm/_style-params.scss?key=ryeijWNWB -o src/_dsmStyles.scss

echo "--- Copying .env.dev.local to .env"
cp environments/.env.dev.local .env

echo "--- Start storybook locally"
npm run storybook