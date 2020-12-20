<template>
    <div class="tweets">
        <div v-for="tweet in tweets" :key="tweet.id" class="tweet">
            <span class="ellipsis"><i class="las la-ellipsis-v"></i></span>
            <div class="avatar">
                <img class="avatar-img" src="../assets/user.png" alt="avatar">
            </div>
                <div>
                  <div>
                    <span class="user-name">{{ tweet.profile.user.name}}</span>
                    <span class="user-username">@{{ tweet.profile.user.username }}</span>
                  </div>

                  <p class="body">{{ tweet.body }}</p>
               </div>
        </div>
      <span v-show="loading" class="spinner"><i class="las la-spinner spin"></i></span>
    </div>
</template>

<script>
export default {
    name: "Tweet",
    data () {
      return {
        tweets: [],
        pagination: [],
        loading: false
      }
    },
    async mounted () {
        await this.$store.dispatch('tweet/getAll');
        this.tweets = this.$store.state.tweet.all;
        this.pagination = this.$store.state.tweet.pagination;
        this.scroll();
    },
    methods : {
      scroll () {
        window.onscroll = () => {
          let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
          let self = this;
          if (bottomOfWindow && this.pagination.next != null) {
            // this.loading = true;
              this.$store.dispatch('tweet/getAllNextPage', this.pagination.next).then(function (res) {
                setTimeout(function () {
                  self.pagination = res.data.pagination;
                  for (let tweet of res.data.list) {
                    self.tweets.push(tweet);
                  }
                  self.loading = false;
                }, 300);
              }).catch(function () {
                self.loading = false;
              });
          }
        };
      }
    }
}
</script>

<style lang="scss" scoped>
    .tweets {
      padding: 0 1rem;
    }

    .tweet {
      display: grid;
      grid-template-columns: .5fr 4fr;
      align-items: center;
      padding: 1rem 1rem;
      border-bottom: .1rem solid rgba(0, 0, 0, .2);
    }

    .avatar {
      width: 5rem;
      height: 5rem;
        &-img {
          display: block;
          width: 5rem;
          height: 5rem;
          margin-bottom: 2rem;
        }
    }

    span {
      font-size: 1.3rem;
      color: $black-color;

      &.user-username {
        margin-left: 1rem;
        opacity: .7;
      }
    }

    p.body {
      font-family: $robotoRegular;
      font-size: 1.5rem;
      margin-top: .3rem;
    }

    .advance {
      position: absolute;
      right: 0;
    }

    span.ellipsis {
      position: absolute;
      right: 2rem;
      font-size: 2.3rem;
      font-family: $robotoBold;
      padding: .5rem;
      width: 2rem;
      height: 2rem;
      border-radius: 100%;
      cursor: pointer;
    }

    span.spinner {
      width: 100%;
      height: 100%;
      display: inline-block;
      font-size: 5rem;
      margin: 2rem auto;
      text-align: center;
      animation: spin 2s linear infinite;

      i {
        color: $dark-blue;
      }
    }

    @keyframes spin {
      from {
        transform:rotate(0deg);
      }
      to {
        transform:rotate(360deg);
      }
    }
</style>