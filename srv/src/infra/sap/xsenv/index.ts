import xsenvLibrary from '@sap/xsenv';

const xsenv = (xsenvModule = xsenvLibrary) => ({
  loadEnv() {
    xsenvModule.loadEnv();
  },

  getServices() {
    return xsenvModule.getServices({ xsuaa: { tag: 'xsuaa' } });
  }
});

export default xsenv();