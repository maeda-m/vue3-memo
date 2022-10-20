<template>
  <div class="position-fixed-top-right _padding:1">
    <Transition name="fade">
      <i-alert color="info" v-if="visible">
        <template #icon>
          <i-icon name="ink-info" />
        </template>
        <p>{{ props.message }}</p>
      </i-alert>
    </Transition>
  </div>
</template>

<script setup>
import { toRef, watch } from "vue";

const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  message: {
    type: String,
    required: true,
  },
});

const visible = toRef(props, "modelValue");
let timerId = null;
watch(visible, (value) => {
  if (value) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      emits("update:modelValue", false);
    }, 3000);
  }
});
</script>

<style scoped>
.position-fixed-top-right {
  position: absolute;
  right: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
