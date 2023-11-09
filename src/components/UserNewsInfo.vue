<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-md-4">
          <img
            class="img-fluid"
            src="https://cdn.acwing.com/media/user/profile/photo/82581_lg_e9bdbcb8aa.jpg"
          />
        </div>
        <div class="col-md-8">
          <div class="username">{{ user.username }}</div>
          <div class="fans">粉丝：{{ user.fansCount }}</div>
          <button @click="handleFollow" v-if="!user.is_followed" type="button" class="btn btn-secondary btn-sm">+关注</button>
          <button @click="handleUnfollow" v-if="user.is_followed" type="button" class="btn btn-secondary btn-sm">取消关注</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: "UserNewsInfo",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    let doubleFansCount = computed(() => props.user.fansCount * 2);

    const handleFollow = () => {
      context.emit("follow");
    };

    const handleUnfollow = () => {
      context.emit("unfollow");
    };

    return {
      doubleFansCount: doubleFansCount,
      handleFollow: handleFollow,
      handleUnfollow: handleUnfollow,
    }
  },
};
</script>

<style scoped>
img {
  border-radius: 50%;
}

button {
  padding: 2px 4px;
  font-size: 14px;
  width: 70px;
}

.username {
  font-size: 20px;
  font-weight: bold;
}

.fans {
  font-size: 14px;
  color: gray;
}
</style>
