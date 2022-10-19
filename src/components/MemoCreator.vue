<template>
  <div class="_display:flex _justify-content:center _margin:1/2">
    <i-tooltip color="dark">
      <i-button circle size="lg" v-on:click="showConfirmNeeded()">
        <i-icon name="ink-plus" />
        <!-- <i-loader /> -->
      </i-button>
      <template #body>新規メモを登録します。</template>
    </i-tooltip>
  </div>

  <i-modal size="sm" v-model="visibleConfirm">
    <template #header> 確認メッセージ </template>
    <div class="_display:flex _align-items:center">
      <i-icon name="ink-danger" class="h2 _margin-y:0 _margin-right:1" />
      メモが変更されています変更を破棄しますか？
    </div>
    <template #footer>
      <div class="_display:flex _justify-content:space-between">
        <i-button
          color="danger"
          v-on:click="
            hideConfirm();
            emits('actionCreate');
          "
          >破棄する</i-button
        >
        <i-button color="light" v-on:click="hideConfirm()">キャンセル</i-button>
      </div>
    </template>
  </i-modal>
</template>

<script setup>
import { ref } from "vue";

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
    emits("actionCreate");
  }
};
const hideConfirm = () => {
  visibleConfirm.value = false;
};
</script>
