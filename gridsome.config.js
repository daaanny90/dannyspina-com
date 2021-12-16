// Changes here require a server restart.

module.exports = {
  siteName: 'Danny Spina',
  plugins: [
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: {
        resources: ['@/global/variables.scss', '@/global/global.scss'],
      }
    }
  ],
}