// module.exports = {
//     parser: 'sugarss',
//     plugins: {
//       'postcss-import': {},
//       'postcss-cssnext': {},
//       'cssnano': {}
//     }
//   }


  module.exports = ({ file, options, env }) => ({
     parser: file.extname === '.sss' ? 'sugarss' : false, // Handles `.css` && '.sss' files dynamically
        plugins: {
          'postcss-cssnext': {},
          'autoprefixer': {},
          'cssnano':  env === 'production'  ? {} : false
        }
    })