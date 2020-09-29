<template>
    <div class="welcome">
        <div class="description">
            <img class="logo" src="../../assets/logo.svg" alt="logo">

            <ul class="slogan">
                <li>Follow your interests.</li>
                <li>Hear what people are talking about.</li>
                <li>Join the conversation.</li>
            </ul>
        </div>

        <div class="authenticate">
            <div class="form login_form">
                <div class="form-group">
                    <label class="label" for="username">Username/Email</label>
                    <input type="text" class="inputs" v-model="username" id="username">
                </div>

                <div class="form-group">
                    <label class="label" for="password">Password</label>
                    <input type="password" class="inputs" v-model="password" id="password">
                </div>

                <div class="form-group">
                    <button class="btn btn-primary" @click="login">Log in</button>
                </div>
            </div>

            <div class="login-box">
                <img class="logo" src="../../assets/logo.svg" alt="logo">
                <p>See what’s happening in the world right now</p>
                <p class="label">Join Twitter today.</p>

                <button class="btn sign-up">Sign up</button>
                <button class="btn sign-up log-in">Log in</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Welcome",

        data () {
            return {
                username: null,
                password: null
            }
        },

        methods: {
            login () {
                this.$store.dispatch('auth/login', {username: this.username, password: this.password});
            }
        }
    }
</script>

<style lang="scss" scoped>
    .welcome {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 100vh;
    }
    .description {
        background-color: $light-blue;
        width: 100%;
        position: relative;
        overflow: hidden;

        .logo {
            width: 150%;
            height: 140%;
            position: absolute;
            left: -50px;
            top: -90px;
        }

        .slogan {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            li {
                color: $white-color;
                font-size: 2.2rem;
                font-family: $robotoMedium;

                &:not(:last-child) {
                    margin-bottom: 3rem;
                }
            }
        }
    }

    .authenticate {
        width: 100%;
        position: relative;
        overflow: hidden;
        padding: 3rem 7rem;

        .login_form {
            display: grid;
            grid-template-columns: 2fr 2fr 1fr;
            align-items: center;
            justify-items: center;
            grid-gap: 2rem;
        }

        .form-group {
            margin-bottom: 0 !important;

            &:last-child {
                align-self: end;
            }
        }

        .inputs {
            padding: 1.4rem 1.2rem !important;
        }

        .btn-primary {
            border-radius: 4rem;
            background-color: transparent;
            color: $dark-blue;
            border: .2rem solid $dark-blue;
            font-size: 1.6rem;
            font-family: $robotoBold;
            padding: 1.2rem 1.9rem;
        }

        .login-box {
            padding-right: 8rem;
            padding-left: 8rem;
            margin-top: 15rem;

            p {
                font-size: 3rem;
                font-family: $robotoBold;
            }

            .logo {
                width: 4rem;
                height: 4rem;
                margin-bottom: 2rem;
            }

            p.label {
                font-size: 1.6rem;
                font-family: $robotoMedium;
                margin-top: 7.5rem;
                margin-bottom: 2rem;
            }

            .sign-up {
                width: 100%;
                height: 5rem;
                border-radius: 4rem;
                background-color: $dark-blue;
                color: $white-color;
                font-size: 1.8rem;
                margin-bottom: 1.7rem;
            }

            .log-in {
                background-color: transparent;
                border: .2rem solid $dark-blue;
                color: $dark-blue;
            }
        }
    }
</style>