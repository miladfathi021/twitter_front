<template>
    <div>
        <div class="home">
            <sidebar-left></sidebar-left>
                <div class="content">
                    <div class="component-name">
                        <h2>{{ this.$route.name }}</h2>
                    </div>
                    <create-tweet></create-tweet>
                    <div class="divider"></div>
                    <tweet></tweet>
                </div>
            <sidebar-right></sidebar-right>
        </div>
    </div>
</template>

<script>
    import CreateTweet from "@/components/CreateTweet";
    import SidebarRight from "@/components/SidebarRight";
    import SidebarLeft from "@/components/SidebarLeft";
    import Tweet from "@/components/Tweet";

    export default {
        name: "Home",
        components: {Tweet, SidebarLeft, SidebarRight, CreateTweet }
    }
</script>

<style lang="scss" scoped>
    .home {
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
                font-size: 2rem;
                color: $black-color;
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
</style>