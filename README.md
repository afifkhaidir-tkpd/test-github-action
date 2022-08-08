# 🐧 lite-test-skipper-actions

This is a web project bootstrapped with [create-skipper-app](https://github.com/tokopedia/skipper-web-framework/packages/1089406).

![By Tokopedia](https://img.shields.io/badge/WPE-Tokopedia-brightgreen.svg) [![CodeQL](https://github.com/tokopedia/tokopedia-lite-test-skipper-actions/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/tokopedia/tokopedia-lite-test-skipper-actions/actions/workflows/codeql-analysis.yml)
![Coverage](https://img.shields.io/badge/coverage-10%25-brightgreen)

## Getting Started

Prerequisites:

```
node: >=14.17 <15
pnpm: >=6 <7
```

Install dependencies:

```bash
pnpm i
```

Run on your local:

```bash
pnpm run dev
```

Test build process:

```bash
pnpm run build
```

Run unit test:

```bash
pnpm test
```

Analyze the bundle:

```bash
# analyze client bundle
pnpm run analyze-client
# analyze client server
pnpm run analyze-server
```

## GSM development

Please get the latest development.json file from:

https://tokopedia.atlassian.net/wiki/spaces/SA/pages/831624598/Google+Secret+Manager+for+Engineer

and copy the content to `config/gsm-dev.txt`

> **IMPORTANT**: `config/gsm-dev.txt` should be gitignored!

## Learn more about Skipper Framework

Read on our [Confluence](https://tokopedia.atlassian.net/wiki/spaces/PL/pages/1810076096/Skipper+-+Web+Framework)

---

Maintained by WPE, generated on 8/8/2022
