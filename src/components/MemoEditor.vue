<template>
  <i-layout-content>
    <i-textarea
      v-bind:disable="content"
      v-model="content"
      placeholder="メモの内容を入力してください。"
      style="height: 90vh"
    />
  </i-layout-content>
  <i-layout-footer>
    <div class="_display:flex _margin:1/2">
      <div class="_flex-grow:1">
        <i-button
          color="primary"
          class="_width:100%"
          v-on:click="
            emits('actionUpdate', { id, attrs: { content } })
          "
        >
          <!-- <i-loader /> -->
          更新する
        </i-button>
      </div>
      <div class="_margin-x:1/2"></div>
      <div>
        <i-button
          outline
          color="danger"
          v-on:click="emits('actionDestroy', { id })"
        >
          <!-- <i-loader /> -->
          削除する
        </i-button>
      </div>
    </div>
  </i-layout-footer>
</template>

<script setup>
import { toRef } from "vue";

const emits = defineEmits(["actionUpdate", "actionDestroy"]);
const props = defineProps({
  memo: {
    type: Object,
    required: true,
  },
});

const id = toRef(props.memo, 'id');
const content = toRef(props.memo, 'content');
</script>
