<template>
  <i-modal
    v-bind="{
      modelValue: visible,
      hideOnClickOutside: false,
      showClose: false,
    }"
  >
    <template #header> 確認メッセージ </template>
    <div class="_display:flex _align-items:center">
      <i-icon name="ink-danger" class="h2 _margin-y:0 _margin-right:1" />
      {{ message }}
    </div>
    <template #footer>
      <div class="_display:flex _justify-content:space-between">
        <i-button color="danger" v-on:click="emits('clickOk')">
          {{ okLabel }}
        </i-button>
        <i-button color="light" v-on:click="emits('clickCancel')">
          {{ cancelLabel }}
        </i-button>
      </div>
    </template>
  </i-modal>
</template>

<script setup>
const emits = defineEmits(["clickOk", "clickCancel"]);
defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  okLabel: {
    type: String,
    required: true,
  },
  cancelLabel: {
    type: String,
    default: "キャンセル",
  },
});
</script>
