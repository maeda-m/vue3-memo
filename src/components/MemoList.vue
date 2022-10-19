<template>
  <i-list-group>
    <template v-for="(memo, id) in memos" v-bind:key="id">
      <i-list-group-item v-on:click="emits('actionEdit', { id })">
        <i-button>{{ memo.title }}</i-button>
      </i-list-group-item>
    </template>
  </i-list-group>
</template>

<script setup>
const emits = defineEmits(["actionEdit"]);
const props = defineProps({
  memos: {
    type: Object,
  },
});
</script>
