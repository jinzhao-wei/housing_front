import Vue from 'vue';
import VueAMap from 'vue-amap';
Vue.use(VueAMap);

// 初始化vue-amap
if (!Vue.prototype.$isServer) {
    VueAMap.initAMapApiLoader({
        // 高德的key
        key: '3850cfc5914cabf0ac2475b0bb38ae26',
        // 插件集合
        plugin: ['AMap.Geolocation', 'AMap.Marker', 'AMap.ToolBar', 'AMap.Circle', 'AMap.PolyLine'],
        uiVersion: '1.0',
        // 高德 sdk 版本，默认为 1.4.4
        v: '1.4.8'
    });
}