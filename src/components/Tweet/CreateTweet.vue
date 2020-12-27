<template>
  <div style="width: 100%; position:relative;">
    <div class="create-tweet">
      <div class="avatar">
        <img class="avatar-img" src="../../assets/user.png" alt="avatar">
      </div>
      <div class="text-box">
        <textarea placeholder="Whats happening?" v-model="tweet"></textarea>
      </div>
    </div>
    <div class="create-tweet-advance">
      <button class="btn btn-primary" @click="send">Tweet</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "CreateTweet",
    data () {
        return {
            tweet: ''
        }
    },
    methods: {
        send () {
            let self = this;
            this.$store.dispatch('tweet/create', {data: this.tweet}).then(function () {
                self.tweet = '';
            }).catch();
        }
    }
}
</script>

<style lang="scss" scoped>
  .create-tweet {
    display: flex;
    padding: .5rem 1.5rem 0 1.5rem;
  }

  .create-tweet-advance {
    width: 100%;
    height: 5rem;
    position: relative;
    margin-top: 1rem;

    button {
      position: absolute;
      right: 1rem;
      display: inline-block;
      padding: 1rem 2rem;
      border-radius: 3rem;
    }
  }

  .avatar {
    margin-right: 1.5rem;
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    &-img {
      width: 5rem;
      height: 5rem;
      margin-bottom: 2rem;
    }
  }

  .text-box {
    width: 100%;

    textarea {
      display: inline-block;
      border: none;
      resize: none;
      width: 100%;
      height: 5rem;
      padding-top: 1rem;
      font-family: $robotoRegular;
      color: $black-color;

      &:focus {
        outline: none;
        height: 10rem;
        border-bottom: .1rem solid rgba(0, 0, 0, .1);
        transition: all .1s linear;
      }

      &::placeholder {
        color: rgba(112, 112, 112, .7);
        opacity: .8;
        font-size: 2.1rem;
      }
    }
  }
</style>