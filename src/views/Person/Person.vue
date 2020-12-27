<template>
    <div>
        <div class="person">
          <sidebar-left></sidebar-left>
            <div class="content">
                <div class="component-name">
                    <h2>{{ person.name }}</h2>
                    <p>{{ tweets.length }} Tweets</p>
                </div>
              <div class="profile">
                  <img class="bg" src="../../assets/bg.jpg" alt="">
                  <div class="info">
                      <div class="person-info">
                          <img class="avatar" src="../../assets/user.png" alt="">
                          <h3>{{ person.name }}</h3>
                          <p>@{{ person.username }}</p>
                      </div>
                      <div class="person-advance">
                          <div class="btn btn-primary">Follow</div>
                      </div>
                  </div>
              </div>
            </div>
            <sidebar-right></sidebar-right>
        </div>
    </div>
</template>

<script>
import SidebarRight from "@/components/SidebarRight";
import SidebarLeft from "@/components/SidebarLeft";

export default {
    name: "Person",
    components: {SidebarLeft, SidebarRight },
    data () {
      return {
        person: {
          name: '...'
        },
        tweets: {},
      }
    },
    async mounted() {
        await this.$store.dispatch(
            'person/get',
            {data: this.$route.params.username}
            ).then(res => {
              this.person = res.data.data.user;
              this.tweets = res.data.data.tweets.list;
            }).catch(e => {
              console.log(e.response.status)
            }
        );
    }
}
</script>

<style lang="scss" scoped>
.person {
  width: 46%;
  margin: 0 auto;

  .content {
    overflow: hidden;
    position: relative;
  }

  .component-name {
    border-bottom: .1rem solid rgba(0,0,0, .2);
    padding: 1rem 2rem;
    h2 {
      font-family: $robotoBold;
      font-size: 1.8rem;
      color: $black-color;
    }
    p {
      font-family: $robotoRegular;
      font-size: 1.3rem;
      color: $gray-color-a;
    }
  }
}
.divider {
  width: 100%;
  height: 1.3rem;
  background-color: rgba(113, 201, 248, .02);
  border-top: .1rem solid rgba(0, 0, 0, .1);
  border-bottom: .1rem solid rgba(0, 0, 0, .1);
}

.profile {
  img.bg {
    width: 100%;
    height: 20rem;
    background-size: cover;
  }

  .info {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }

  .person-info {
    width: 15rem;
    height: 15rem;
    display: block;
    position: relative;
    top: -6rem;
    left: 1rem;
    text-align: center;

    img.avatar {
      width: 12rem;
      height: 12rem;
      border-radius: 100%;
      border: .4rem solid $white-color;
    }

    h3 {
      font-family: $robotoBold;
      font-size: 1.8rem;
    }

    p {
      font-family: $robotoRegular;
      font-size: 1.4rem;
      color: $gray-color-a;
    }
  }

  .person-advance {
    justify-self: end;
    padding-right: 2rem;
    padding-top: 2rem;

    .btn {
      padding: 1rem 3rem;
      border-radius: 5rem;
    }
  }
}
</style>