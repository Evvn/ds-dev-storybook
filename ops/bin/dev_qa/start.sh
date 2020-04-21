#!/bin/bash -eu

echo "--- Fetching latest DSM styles and writing to _dsmStyles.scss"
curl https://vaultintel.invisionapp.com/dsm-export/vault-intel-dsm/vault-dsm/_style-params.scss?key=ryeijWNWB -o src/_dsmStyles.scss

echo "--- Copying .env.dev.qa to .env"
cp environments/.env.qa .env

echo "--- Start development server locally"
npm start
