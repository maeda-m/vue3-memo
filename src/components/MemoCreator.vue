<template>
  <div class="_display:flex _justify-content:center _margin:1/2">
    <i-tooltip color="dark">
      <i-button circle size="lg" v-on:click="showConfirmNeeded()">
        <i-icon name="ink-plus" />
      </i-button>
      <template #body>新規メモを登録します。</template>
    </i-tooltip>
  </div>

  <ConfirmModal
    v-model="visibleConfirm"
    v-bind="{
      message: 'メモが変更されています。変更を破棄しますか？',
      okLabel: '破棄する',
    }"
    v-on:click-ok="dispatchCreateAction()"
  />
</template>

<script setup>
import { ref } from "vue";
import ConfirmModal from "@/components/ConfirmModal.vue";

const emits = defineEmits(["actionCreate"]);
const props = defineProps({
  isNotSaved: {
    type: Boolean,
    required: true,
  },
});

const visibleConfirm = ref(false);
const showConfirmNeeded = () => {
  if (props.isNotSaved) {
    visibleConfirm.value = true;
  } else {
    dispatchCreateAction();
  }
};
const dispatchCreateAction = () => {
  emits("actionCreate");
};
</script>
