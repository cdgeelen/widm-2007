/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  return {
    build: {
      environment: 'production',
      outputPath: deployTarget ==='firebase' ? 'firebase-deployment' : 'dist'
    }
  };
};
