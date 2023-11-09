<template>
  <Card title="首页">
    这是首页内容
  </Card>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue"

export default {
  name: "HomeView",
  components: {
    Card: Card,
  },
};
</script>
