<template>
  <i-modal
    size="sm"
    v-bind:modelValue="props.visible"
    v-bind:hideOnClickOutside="false"
    v-bind:showClose="false"
  >
    <template #header> 確認メッセージ </template>
    <div class="_display:flex _align-items:center">
      <i-icon name="ink-danger" class="h2 _margin-y:0 _margin-right:1" />
      {{ props.message }}
    </div>
    <template #footer>
      <div class="_display:flex _justify-content:space-between">
        <i-button color="danger" v-on:click="emits('clickOk')">{{
          props.okLabel
        }}</i-button>
        <i-button color="light" v-on:click="emits('clickCancel')">{{
          props.cancelLabel
        }}</i-button>
      </div>
    </template>
  </i-modal>
</template>

<script setup>
const emits = defineEmits(["clickOk", "clickCancel"]);
const props = defineProps({
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
