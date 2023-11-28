// babel.config.js
module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'], // Ajusta la raíz según la estructura de tu proyecto
      },
    ],
  ],
};