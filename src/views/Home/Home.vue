<template>
    <div>
        <div class="container">
            <div class="home">
                <sidebar></sidebar>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from "../../components/Sidebar";

    export default {
        name: "Home",
        components: { Sidebar }
    }
</script>

<style lang="scss" scoped>
    .container {
        width: 120rem;
        margin: 0 auto;
    }

    .home {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
    }
</style>