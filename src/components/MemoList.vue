<template>
  <i-list-group>
    <template v-for="(memo, id) in memos" v-bind:key="id">
      <i-list-group-item
        v-bind:active="activate === id"
        v-on:click="actionEdit(id)"
      >
        <p block class="_text:left">
          {{ memo.title }}
        </p>
      </i-list-group-item>
    </template>
  </i-list-group>
</template>

<script setup>
import { ref } from "vue";

const emits = defineEmits(["actionEdit"]);
defineProps({
  memos: {
    type: Object,
  },
});

const activate = ref("");
const actionEdit = (id) => {
  if (activate.value === id) {
    // Skip
  } else {
    activate.value = id;
    emits("actionEdit", { id });
  }
};
</script>

<style>
.list-group-item:not(.-active) {
  cursor: pointer;
}
</style>
