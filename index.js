import resolve from '@rollup/plugin-node-resolve';

export default {
  // otras configuraciones
  plugins: [
    resolve({
      moduleDirectories: ['node_modules']
    })
  ]
};
