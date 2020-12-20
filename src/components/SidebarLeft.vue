<template>
    <div class="sidebar">
        <img class="logo" src="../assets/logo.svg" alt="logo">
        <ul class="sidebar-list">
            <li class="sidebar-item">
                <a @click.prevent="routerPush('Home')"><i class="las la-home"></i> Home</a>
            </li>

            <li class="sidebar-item">
                <a @click.prevent="routerPush($event, 'Home')"><i class="las la-hashtag"></i> Explore</a>
            </li>

            <li class="sidebar-item">
                <a @click.prevent="routerPush($event, 'Home')"><i class="las la-bell"></i> Notification</a>
            </li>

            <li class="sidebar-item">
                <a @click.prevent="routerPush($event, 'Home')"><i class="las la-envelope"></i> Messages</a>
            </li>

            <li class="sidebar-item">
                <a @click.prevent="routerPush('Home')"><i class="las la-bookmark"></i> Bookmarks</a>
            </li>

            <li class="sidebar-item">
                <a @click.prevent="routerPush('Home')"><i class="las la-file-alt"></i> Lists</a>
            </li>

            <li class="sidebar-item">
                <a @click.prevent="routerPush('Home')"><i class="las la-user"></i> Profile</a>
            </li>
        </ul>

        <div class="create-tweet">Tweet</div>

        <div class="profile-box">
          <div class="avatar">
            <img class="logo" src="../assets/user.png" alt="avatar">
          </div>
            <div>
              <h1>{{ user.name }}</h1>
              <span>@{{ user.username }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "SidebarLeft",
        methods: {
            routerPush (event, name) {
                console.log(event.target)
                if (this.$router.currentRoute.name === name) {
                    return;
                }

                this.$router.push({name: name})
            },
            activeLink() {
                
            }
        },
        computed: {
            ...mapGetters({
                user: 'auth/user'
            })
        },
        beforeMount() {
            this.routerPush({target: 'Yes'}, 'Home')
        }
    }
</script>

<style lang="scss" scoped>
    .sidebar {
        border-right: .1rem solid rgba(0,0,0, .2);
        position: fixed;
        top: 0; bottom: 0; left: 0;
        padding: 1rem 2.7rem 1rem 9rem;
        z-index: 999;
        background-color: $white-color;
        width: 27%;

      &-list {
        padding-right: 7rem;
      }

        .logo {
            width: 3.5rem;
            height: 3.5rem;
            margin-bottom: 2rem;
        }

        .sidebar-item {
            font-size: 2.2rem;
            font-family: $robotoBold;
            cursor: pointer;
            transition: all .1s linear;
            margin-bottom: 2.5rem;

            &:hover {
                color: $dark-blue;
            }
        }

        i {
            font-size: 3rem;
            margin-right: 1rem;
        }
    }

    .create-tweet {
        width: 100%;
        background-color: $dark-blue;
        color: $white-color;
        padding: 1.5rem 2rem;
        border-radius: 3rem;
        text-align: center;
        font-size: 1.8rem;
        cursor: pointer;
    }

    .is-active {
        color: yellow;
    }

    .profile-box {
      position: absolute;
      bottom: 2rem;
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-gap: 1rem;

      span {
        font-size: 1.3rem;
        color: $black-color;
        opacity: .8;
      }

      .avatar {
        .logo {
          width: 4.5rem;
          height: 4.5rem;
          margin-bottom: 2rem;
        }
      }
    }
</style>