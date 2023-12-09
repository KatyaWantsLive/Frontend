import React from 'react';
import { WebView } from 'react-native-webview';

const Map = () => {
  const runFirst = `
    window.isNativeApp = true;
    true;
  `;

  return (
    <WebView
      source={require('../../../map/custom_map.html')}
      injectedJavaScript={runFirst}
    />
  );
};

export default Map;