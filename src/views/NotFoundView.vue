<template>
  <Card title="404 Not Found">
    您要访问的页面丢失了呢~
  </Card>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue"

export default {
  name: "NotFoundView",
  components: {
    Card: Card,
  },
};
</script>
