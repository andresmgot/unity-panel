import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { Unity, useUnityContext } from 'react-unity-webgl';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height, fieldConfig, id }) => {
  const { loaderUrl, dataUrl, frameworkUrl, codeUrl } = options;
  const { unityProvider } = useUnityContext({
    loaderUrl,
    dataUrl,
    frameworkUrl,
    codeUrl,
  });

  return (
    <div>
      <Unity style={{ width: width, height: height }} unityProvider={unityProvider} tabIndex={1} />
    </div>
  );
};
