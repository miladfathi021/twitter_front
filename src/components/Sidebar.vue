<template>
    <div class="sidebar">
        <img class="logo" src="../assets/logo.svg" alt="logo">
        <ul class="sidebar-list">
            <li class="sidebar-item">
                <a @click.prevent="routerPush('Home')"><i class="las la-home"></i> Home</a>
            </li>

            <li class="sidebar-item">
                <a @click.prevent="routerPush('Home')"><i class="las la-hashtag"></i> Explore</a>
            </li>

            <li class="sidebar-item">
                <a @click.prevent="routerPush('Home')"><i class="las la-bell"></i> Notification</a>
            </li>

            <li class="sidebar-item">
                <a @click.prevent="routerPush('Home')"><i class="las la-envelope"></i> Messages</a>
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
            <h1>{{ user }}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        methods: {
            routerPush (name) {
                if (this.$router.currentRoute.name === name) {
                    return;
                }

                this.$router.push({name: name})
            }
        },
        computed: {
            user () {
                return this.$store.getters['auth/user']
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sidebar {
        border-right: .1rem solid rgba(0,0,0, .2);
        position: fixed;
        top: 0; bottom: 0; left: 0;
        padding: 1rem 9rem;

        .logo {
            width: 3.5rem;
            height: 3.5rem;
            margin-bottom: 2rem;
        }

        .sidebar-list {

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
</style>