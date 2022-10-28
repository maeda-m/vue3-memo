<template>
  <i-list-group>
    <template v-for="(memo, id) in memos" v-bind:key="id">
      <i-list-group-item
        v-bind:active="isActive(id)"
        v-on:click="showConfirmNeeded(id)"
      >
        <p block class="_text:left">
          {{ memo.title }}
          &nbsp;
          <i-icon
            name="ink-circle"
            size="sm"
            v-if="isActive(id) && props.isNotSaved"
          />
        </p>
      </i-list-group-item>
    </template>
  </i-list-group>

  <ConfirmModal
    v-model="visibleConfirm"
    v-bind="{
      message: 'メモが変更されています。変更を破棄しますか？',
      okLabel: '破棄する',
    }"
    v-on:click-ok="dispatchEditAction(focusMemoId)"
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
      dispatchEditAction(id);
    }
  }
};
const dispatchEditAction = (id) => {
  emits("actionEdit", { id });
};
</script>

<style>
.list-group-item:not(.-active) {
  cursor: pointer;
}
</style>
