<template>
    <div class="tweets">
        <div v-for="tweet in tweets" :key="tweet.id" class="tweet">
            <div class="ellipsis">
              <i class="las la-ellipsis-v" id="la-ellipsis-v" @click="showBox(tweet.id)"></i>
              <div class="options" v-if="tweet.id == optionsId" v-click-outside="{ ref: 'la-ellipsis-v', method: 'hideOptions' }">
                <ul>
                  <li @click="toggleTweetUpdate(tweet)"><i class="las la-edit"></i>Edit</li>
                  <li @click="deleteTweetModal(tweet.id)"><i class="las la-trash"></i>Delete</li>
                </ul>
              </div>
            </div>

            <div class="avatar">
                <img class="avatar-img" src="../../assets/user.png" alt="avatar">
            </div>
            <div>
                <div>
                    <span class="user-name"><a :href="tweet.profile.username">{{ tweet.profile.user.name}}</a></span>
                    <span class="user-username"><a :href="tweet.profile.username">@{{ tweet.profile.user.username }}</a></span>
                </div>

                <p class="body">{{ tweet.body }}</p>
            </div>
        </div>
      <tweet-update :data="updateTweet" v-if="showTweetUpdate" @closeTweetModal="toggleTweetUpdate"></tweet-update>
      <modal v-if="showDeleteModal" @closeModal="toggleDeleteModal">
          <div slot="modal-header">
            <h2>Delete Tweet?</h2>
          </div>
          <div slot="modal-body" class="modal-body">
              <p>This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from Twitter search results. </p>
          </div>
          <div slot="modal-footer" class="footer">
              <button class="btn btn-gray btn-height" @click="toggleDeleteModal">Cancel</button>
              <button class="btn btn-danger btn-height" @click="deleteTweet(tweetId)">Delete</button>
          </div>
      </modal>
      <span v-show="loading" class="spinner"><i class="las la-spinner spin"></i></span>
    </div>
</template>

<script>
import TweetUpdate from "@/components/Tweet/TweetUpdate";
import Modal from "@/components/Modal";
export default {
    name: "Tweet",
  components: {Modal, TweetUpdate},
  data () {
      return {
        tweets: [],
        showTweetUpdate: false,
        pagination: [],
        loading: false,
        optionsId: null,
        updateTweet: null,
        tweetId: null,
        showDeleteModal: false
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
      },
      showBox (id) {
        this.optionsId = this.optionsId === null ? id : null;
      },
      hideOptions () {
        this.optionsId = null;
      },
      toggleTweetUpdate (tweet = null) {
          this.showTweetUpdate = !this.showTweetUpdate;

          if (tweet != null) {
              this.updateTweet = tweet;
          }
      },
      toggleDeleteModal () {
        this.showDeleteModal = !this.showDeleteModal;
      },
      deleteTweet (id) {
          this.$store.dispatch('tweet/delete', {
            data: id
          }).then(() => {
            this.tweets = this.tweets.filter(tweet => tweet.id !== id);
            this.hideOptions();
            this.toggleDeleteModal();
          })
      },
      deleteTweetModal (id) {
        this.toggleDeleteModal();
        this.tweetId = id;
      }
    }
}
</script>

<style lang="scss" scoped>
    .tweet {
      display: grid;
      grid-template-columns: .5fr 4fr;
      align-items: center;
      padding: 1rem 2rem;
      border-bottom: .1rem solid rgba(0, 0, 0, .2);

      &:hover {
          background-color: rgba(112, 112, 112, .1);
        cursor: pointer;
      }
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
      a {
        font-size: 1.3rem;
        color: $black-color;
      }

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

    div.ellipsis {
      position: absolute;
      right: 2rem;
      font-size: 2.3rem;
      font-family: $robotoBold;
      padding: .5rem;
      width: 2rem;
      height: 2rem;
      border-radius: 100%;
      cursor: pointer;

      i#la-ellipsis-v {
        transform: rotate(90deg);
      }
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

    .options {
      border: .1rem solid rgba(0, 0, 0, .3);
      border-radius: .5rem;
      display: block;
      position: absolute;
      background-color: $white-color;
      z-index: 999;
      right: -1rem;
      top: 0;
      box-shadow: 0 0 1rem rgba(0, 0, 0, .3);
      overflow: hidden;
      opacity: 0;
      animation: options .2s linear forwards;

      ul li {
        font-size: 1.5rem;
        color: $black-color;
        font-family: $robotoRegular;
        padding: .8rem 1.4rem;
        display: grid;
        grid-template-columns: 1fr 4fr;
        grid-gap: .7rem;
        align-items: center;

        i {
          font-size: 1.9rem;
        }

        &:not(:last-child) {
          border-bottom: .1rem solid rgba(0, 0, 0, .3);
        }

        &:hover {
          background-color: rgba(112, 112, 112, 0.1);
        }
      }
    }

    .footer {
      display: grid !important;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;

      .btn-height {
        height: 4rem !important;
      }
    }

    .modal-body {
        width: 30rem !important;
    }

    @keyframes spin {
      from {
        transform:rotate(0deg);
      }
      to {
        transform:rotate(360deg);
      }
    }

    @keyframes options {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
</style>