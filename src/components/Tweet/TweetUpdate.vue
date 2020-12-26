<template>
  <modal @closeModal="closeTweetUpdate">
    <div slot="modal-header">
      <h2>Update Tweet</h2>
    </div>

    <div slot="modal-body" class="text-box">
      <textarea placeholder="Whats happening?" v-model="tweet"></textarea>
    </div>

    <div slot="modal-footer" class="footer">
      <button class="btn btn-gray btn-height" @click="closeTweetUpdate">Cancel</button>
      <button class="btn btn-primary btn-height" @click="update">Update</button>
    </div>
  </modal>
</template>

<script>
import Modal from "@/components/Modal";
export default {
name: "TweetUpdate",
  components: {Modal},
  props: ['data'],
  data () {
      return {
        tweet: this.data.body
      }
  },
  methods: {
    closeTweetUpdate () {
      return this.$emit('closeTweetModal')
    },

    update () {
        this.$store.dispatch('tweet/update', {
          data: {
            body: this.tweet,
            id: this.data.id
          }
        }).then(() => {
          this.closeTweetUpdate();
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.text-box {
  width: 100%;

  textarea {
    display: inline-block;
    border: 1px solid rgba(112, 112, 112, .2);
    border-radius: .6rem;
    resize: none;
    min-width: 40rem;
    height: 12rem;
    padding: 1rem;
    font-family: $robotoRegular;
    font-size: 1.8rem;
    color: $black-color;

    &:focus {
      outline: none;
      transition: all .1s linear;
    }

    &::placeholder {
      color: rgba(112, 112, 112, .7);
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
</style>