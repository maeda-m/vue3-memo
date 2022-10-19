<template>
  <div class="_display:flex _justify-content:center _margin:1/2">
    <i-tooltip color="dark">
      <i-button circle size="lg" v-on:click="emits('actionCreate')">
        <i-icon name="ink-plus" />
        <!-- <i-loader /> -->
      </i-button>
      <template #body>新規メモを登録します。</template>
    </i-tooltip>
  </div>
</template>

<script setup>
const emits = defineEmits(["actionCreate"]);
</script>
