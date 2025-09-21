import { boot } from 'quasar/wrappers';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default boot(({ app }) => {
  app.config.globalProperties.$maplibre = maplibregl;
});

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $maplibre: typeof maplibregl;
  }
}
