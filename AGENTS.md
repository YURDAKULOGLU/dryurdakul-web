# Dr. Yurdakul website

Edit this repository directly. This is the canonical website source; the Ajans
business folder is for briefs/research, not an alternative implementation.
Use factual, restrained professional language in Turkish and English.
Do not add invented credentials, publications or treatment claims.
Do not link the personal profile to Genetikon or add a schema bridge.

`npm run build:preview` generates the noindex portfolio copy in `dist-preview`.
The `YURDAKULOGLU/yurdakul-net-tr` repository consumes this repo as a Git
submodule. Never edit generated portfolio HTML by hand. Commit/push reviewed
source changes here; the host updates the submodule and rebuilds the preview.
Production domains and contact email stay unchanged by preview builds.
