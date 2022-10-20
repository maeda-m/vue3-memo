<template>
  <i-list-group>
    <template v-for="(memo, id) in memos" v-bind:key="id">
      <i-list-group-item
        v-bind:active="isActive(id)"
        v-on:click="showConfirmNeeded(id)"
      >
        <p block class="_text:left">
          {{ memo.title }}
        </p>
      </i-list-group-item>
    </template>
  </i-list-group>

  <ConfirmModal
    v-bind="{
      visible: visibleConfirm,
      message: 'メモが変更されています。変更を破棄しますか？',
      okLabel: '破棄する',
    }"
    v-on:click-ok="
      emits('actionEdit', { id: focusMemoId });
      hideConfirm();
    "
    v-on:click-cancel="hideConfirm()"
  />
</template>

<script setup>
import { ref } from "vue";
import ConfirmModal from "@/components/ConfirmModal.vue";

const emits = defineEmits(["actionEdit"]);
const props = defineProps({
  memos: {
    type: Object,
  },
  activeMemoId: {
    type: String,
    default: "",
  },
  isNotSaved: {
    type: Boolean,
    required: true,
  },
});

const focusMemoId = ref("");
const isActive = (id) => {
  return props.activeMemoId === id;
};

const visibleConfirm = ref(false);
const showConfirmNeeded = (id) => {
  if (isActive(id)) {
    // Skip
  } else {
    focusMemoId.value = id;
    if (props.isNotSaved) {
      visibleConfirm.value = true;
    } else {
      emits("actionEdit", { id });
    }
  }
};
const hideConfirm = () => {
  visibleConfirm.value = false;
};
</script>

<style>
.list-group-item:not(.-active) {
  cursor: pointer;
}
</style>
