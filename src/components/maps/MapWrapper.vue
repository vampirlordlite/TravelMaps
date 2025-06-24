<script setup>
import { onMounted, ref } from 'vue';

const mapContainer = ref(null);

onMounted(() => {
  // Инициализация Яндекс.Карт
  if (window.ymaps) {
    ymaps.ready(() => {
      new ymaps.Map(mapContainer.value, {
        center: [55.76, 37.64],
        zoom: 10
      });
    });
  }
});
</script>

<template>
  <div id="map" ref="mapContainer" class="w-full h-[500px]"></div>
</template>