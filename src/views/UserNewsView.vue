<template>
  <Card title="用户动态">
    <div class="row">
      <div class="col-md-3">
        <UserNewsInfo @follow="follow" @unfollow="unfollow" :user="user" />
        <hr />
        <UserNewsSend @send="send" />
      </div>
      <div class="col-md-9">
        <UserNewsPosts :posts="posts" />
      </div>
    </div>
  </Card>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import UserNewsInfo from "@/components/UserNewsInfo.vue";
import UserNewsPosts from "@/components/UserNewsPosts.vue";
import UserNewsSend from "@/components/UserNewsSend.vue";
import { reactive } from "vue";

export default {
  name: "UserNewsView",
  components: {
    Card: Card,
    UserNewsInfo: UserNewsInfo,
    UserNewsPosts: UserNewsPosts,
    UserNewsSend: UserNewsSend,
  },
  setup() {
    const user = reactive({
      id: 1,  // 给每个用户一个唯一编号
      username: "AsanoSaki",
      fansCount: 1,
      is_followed: false,  // 是否关注这个用户
    });

    const posts = reactive({
      count: 3,
      posts: [
        {
          id: 1,
          userId: 1,
          content: "今天天气真好！",
        },
        {
          id: 2,
          userId: 1,
          content: "随便发个动态",
        },
        {
          id: 3,
          userId: 1,
          content: "今天吃些什么？",
        },
      ],
    });

    const follow = () => {
      if (user.is_followed) return;
      user.is_followed = true;
      user.fansCount++;
    };

    const unfollow = () => {
      if (!user.is_followed) return;
      user.is_followed = false;
      user.fansCount--;
    };

    const send = (content) => {
      posts.count++;
      posts.posts.unshift({  // 在数组末尾加元素是push()，在首部加元素是unshift()
        id: posts.count,
        userId: 1,
        content: content,
      });
    }

    return {
      user: user,
      follow: follow,
      unfollow: unfollow,
      posts: posts,
      send: send,
    }
  },
};
</script>
