# youch-redist

> [!IMPORTANT]
> Please do not use this package directly. It had been made as a temporary solution for Nitro v2 / Nuxt v3 with Node.js 18 support.

Nitro v2 and Nuxt v3 support Node.js 18 however for using [youch](https://github.com/poppinss/youch) has a hard [engines](https://docs.npmjs.com/cli/v11/configuring-npm/package-json#engines) field that requires Node.js 20+.

To avoid failing CIs, this package is a small redist of youch v4 beta until we find a better solution or youch to possibly lower engines field ([poppinss/youch#69](https://github.com/poppinss/youch/pull/69)) and migrate to direct dependency in next major versions.

⭐ Please give a star to [poppinss/youch](https://github.com/poppinss/youch) made by [Harminder Virk](https://github.com/thetutlage).
