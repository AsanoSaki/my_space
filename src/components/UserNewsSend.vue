<template>
  <div class="card">
    <div class="card-body">
      <label for="input" class="form-label">发一条动态吧~</label>
      <textarea
        v-model="content"
        class="form-control"
        id="input"
        rows="3"
      ></textarea>
      <div class="text-end">
        <button
          @click="handleSend"
          type="button"
          class="btn btn-outline-primary"
        >
          发送
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "UserNewsSend",
  setup(props, context) {
    let content = ref("");

    const handleSend = () => {
      if (content.value) {  // 输入框不为空才发送动态
        context.emit("send", content.value); // 调用父组件的send函数
        content.value = ""; // 发送后输入框的内容应该清空
      }
    };

    return {
      content: content,
      handleSend: handleSend,
    };
  },
};
</script>

<style scoped>
button {
  margin-top: 15px;
  border-radius: 20px;
  width: 90px;
}
</style>
