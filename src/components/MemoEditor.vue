<template>
  <i-layout-content>
    <i-textarea
      v-bind:disabled="!isActive"
      v-bind:placeholder="
        isActive
          ? 'メモの内容を入力してください。'
          : '新規メモを登録するか、編集するメモを選んでください。'
      "
      v-model="content"
      v-on:input="emits('inputting', $event.target.value)"
      style="height: 90vh"
    />
  </i-layout-content>
  <i-layout-footer>
    <div class="_display:flex _margin:1/2">
      <div class="_flex-grow:1">
        <i-button
          v-bind:disabled="!isActive"
          color="primary"
          class="_width:100%"
          v-on:click="emits('actionUpdate', { id, attrs: { content } })"
        >
          更新する
        </i-button>
      </div>
      <div class="_margin-x:1/2"></div>
      <div>
        <i-button
          v-bind:disabled="!isActive"
          outline
          color="danger"
          v-on:click="showConfirm()"
        >
          削除する
        </i-button>
      </div>
    </div>
  </i-layout-footer>

  <ConfirmModal
    v-model="visibleConfirm"
    v-bind="{
      message: 'メモを削除します。よろしいでしょうか？',
      okLabel: '削除する',
    }"
    v-on:click-ok="emits('actionDestroy', { id })"
  />
</template>

<script setup>
import { ref, toRef, computed } from "vue";
import ConfirmModal from "@/components/ConfirmModal.vue";

const emits = defineEmits(["actionUpdate", "actionDestroy", "inputting"]);
const props = defineProps({
  memo: {
    type: Object,
    required: true,
  },
});

const id = toRef(props.memo, "id");
const content = toRef(props.memo, "content");

const isActive = computed(() => {
  return !!id.value;
});

const visibleConfirm = ref(false);
const showConfirm = () => {
  visibleConfirm.value = true;
};
</script>

<style scoped>
button.-disabled {
  ----opacity--disabled: 0.7;
}
</style>
