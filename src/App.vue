<template>
  <i-layout vertical class="_height:100vh">
    <i-layout-aside>
      <MemoList v-bind:memos="memos" v-on:action-edit="edit($event.id)" />
      <MemoCreator v-on:action-create="create()" />
    </i-layout-aside>

    <i-layout>
      <MemoEditor
        v-bind:memo="editMemo"
        v-on:action-update="update($event.id, $event.attrs)"
        v-on:action-destroy="destroy($event.id)"
      />
    </i-layout>
  </i-layout>
</template>

<script setup>
import MemoList from "@/components/MemoList.vue";
import MemoCreator from "@/components/MemoCreator.vue";
import MemoEditor from "@/components/MemoEditor.vue";

import { reactive, onMounted } from "vue";
import Memo from "@/models/Memo.js";

const editMemo = reactive({});
const create = () => {
  const memo = Memo.create();
  memos[memo.id] = memo;
  Object.assign(editMemo, memo.attrs);

  console.log("create", editMemo);
};

const edit = (memoId) => {
  const memo = memos[memoId];
  Object.assign(editMemo, memo.attrs);

  console.log("edit", editMemo);
};

const update = (memoId, attrs) => {
  const memo = memos[memoId];
  memo.update(attrs);
  Object.assign(editMemo, attrs);

  console.log("update", editMemo);
};

const destroy = (memoId) => {
  const memo = memos[memoId];
  memo.destroy();
  Object.assign(editMemo, {
    id: "",
    content: "",
  });

  console.log("destroy", memo);
};

const memos = reactive({});
onMounted(() => {
  Memo.all().forEach((memo) => {
    memos[memo.id] = memo;
  });
});
</script>
