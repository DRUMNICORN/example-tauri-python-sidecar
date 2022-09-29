# Tauri Python Sidecar

This template should help you get started with Tauri and Python.

## Getting Started

1. Clone this repo
2. Run `yarn` to install dependencies
3. Run `yarn start` to start the dev server
     -> `yarn build_py` will build the python sidecar and will run automatically when you start the dev server

     that is configured in `tauri.conf.json` under `beforeDevCommand`

     ```json
    "beforeDevCommand": {
      "script": "yarn build_py",
      "wait": true
    }
    ```