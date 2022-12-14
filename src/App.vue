<template>
  <i-layout vertical class="_height:100vh">
    <i-layout-aside>
      <MemoList
        v-bind="{
          memos,
          isNotSaved,
          activeMemoId: editMemo.id,
        }"
        v-on:action-edit="edit($event.id)"
      />
      <MemoCreator
        v-bind:isNotSaved="isNotSaved"
        v-on:action-create="create()"
      />
    </i-layout-aside>

    <i-layout>
      <MemoEditor
        v-bind:memo="editMemo"
        v-on:inputting="inputting($event)"
        v-on:action-update="update($event.id, $event.attrs)"
        v-on:action-destroy="destroy($event.id)"
      />
    </i-layout>

    <ToastMessage
      v-model="isDestroyed"
      v-bind:message="'メモを削除しました。'"
    />
    <ToastMessage
      v-model="isUpdated"
      v-bind:message="'メモを更新しました。'"
    />
  </i-layout>
</template>

<script setup>
import MemoList from "@/components/MemoList.vue";
import MemoCreator from "@/components/MemoCreator.vue";
import MemoEditor from "@/components/MemoEditor.vue";
import ToastMessage from "@/components/ToastMessage.vue";

import { ref, reactive, onMounted } from "vue";
import Memo from "@/models/Memo.js";

const create = () => {
  const memo = Memo.create({ content: "新規メモ" });
  memos[memo.id] = memo;
  syncEditor(memo.attrs);
};

const edit = (memoId) => {
  const memo = memos[memoId];
  syncEditor(memo.attrs);
};

const isUpdated = ref(false);
const update = (memoId, attrs) => {
  const memo = memos[memoId];
  memo.update(attrs);
  syncEditor(memo.attrs);
  isUpdated.value = true;
};

const isDestroyed = ref(false);
const destroy = (memoId) => {
  const memo = memos[memoId];
  memo.destroy();
  delete memos[memoId];
  syncEditor(null);
  isDestroyed.value = true;
};

const memos = reactive({});
onMounted(() => {
  Memo.all().forEach((memo) => {
    memos[memo.id] = memo;
  });
});

const editMemo = reactive({});
const isNotSaved = ref(false);
let wasContent = "";
const syncEditor = (attrs = {}) => {
  Object.keys(editMemo).forEach((key) => {
    editMemo[key] = "";
  });
  Object.assign(editMemo, attrs);
  isNotSaved.value = false;
  wasContent = editMemo.content;
};
const inputting = (newContent) => {
  const isChanged = wasContent !== newContent;
  isNotSaved.value = isChanged;
};
</script>
