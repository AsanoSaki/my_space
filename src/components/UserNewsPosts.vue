<template>
  <div class="card">
    <div class="card-header text-center">历史动态</div>
    <div class="card-body">
      <div v-for="post in posts.posts" :key="post.id">
        <div class="card post">
          <div class="card-body">{{ post.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserNewsPosts",
  props: {
    posts: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  margin: 10px 0;
}
</style>
