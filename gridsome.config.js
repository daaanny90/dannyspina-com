// Changes here require a server restart.

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: {
        resources: ['@/global/variables.scss', '@/global/global.scss'],
      }
    }
  ],
}