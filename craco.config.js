const path = require('path')

const resolvePath = (p) => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      ui: resolvePath('./src/components/ui'),
      common: resolvePath('./src/components/common')
    }
  }
}
