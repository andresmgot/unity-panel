import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'loaderUrl',
      name: 'Loader URL',
      description: 'URL to the build loader.js',
    })
    .addTextInput({
      path: 'dataUrl',
      name: 'Data URL',
      description: 'URL to the build data',
    })
    .addTextInput({
      path: 'frameworkUrl',
      name: 'Framework URL',
      description: 'URL to the build framework.js',
    })
    .addTextInput({
      path: 'codeUrl',
      name: 'Code URL',
      description: 'URL to the build wasm',
    });
});
