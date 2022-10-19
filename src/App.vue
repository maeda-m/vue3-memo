<template>
  <i-layout vertical class="_height:100vh">
    <i-layout-aside>
      <i-list-group>
        <i-list-group-item href="#">メモ１</i-list-group-item>
        <i-list-group-item active>メモ２</i-list-group-item>
        <i-list-group-item>メモ３</i-list-group-item>
        <i-list-group-item disabled>メモ４</i-list-group-item>
      </i-list-group>

      <div class="_display:flex _justify-content:center _margin:1/2">
        <i-tooltip color="dark">
          <i-button circle size="lg">
            <i-icon name="ink-plus" />
            <!-- <i-loader /> -->
          </i-button>
          <template #body>新規メモを登録します。</template>
        </i-tooltip>
      </div>
    </i-layout-aside>

    <i-layout>
      <i-layout-content>
        <i-textarea
          v-model="value"
          placeholder="メモの内容を入力してください。"
          style="height: 90vh"
        />
      </i-layout-content>

      <i-layout-footer>
        <div class="_display:flex _margin:1/2">
          <div class="_flex-grow:1">
            <i-button color="primary" class="_width:100%">
              <!-- <i-loader /> -->
              更新する
            </i-button>
          </div>
          <div class="_margin-x:1/2"></div>
          <div>
            <i-button outline color="danger">
              <!-- <i-loader /> -->
              削除する
            </i-button>
          </div>
        </div>
      </i-layout-footer>
    </i-layout>
  </i-layout>
</template>

<script setup></script>
