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
            <div class="form login-form">
                <div class="form-group">
                    <label class="label" for="username">Username/Email</label>
                    <input type="text" class="inputs" v-model="loginData.username" id="username">
                </div>

                <div class="form-group">
                    <label class="label" for="password">Password</label>
                    <input type="password" class="inputs" v-model="loginData.password" id="password">
                </div>

                <div class="form-group">
                    <button class="btn btn-primary" @click="login">Log in</button>
                </div>
            </div>

            <div class="login-box">
                <img class="logo" src="../../assets/logo.svg" alt="logo">
                <p>See what’s happening in the world right now</p>
                <p class="label">Join Twitter today.</p>

                <button class="btn sign-up" @click="signUpForm">Sign up</button>
                <button class="btn sign-up log-in" @click="loginForm">Log in</button>
            </div>
        </div>

        <modal class="login-modal" v-if="showLoginForm" @closeModal="closeLoginForm">
            <div slot="modal-header">
                <h2>Log in</h2>
            </div>

            <div slot="modal-body">
                <div class="form login-form">
                    <div class="form-group">
                        <label for="username1" class="label">Username/Email</label>
                        <input type="text" class="inputs" id="username1" v-model="loginData.username">
                    </div>

                    <div class="form-group">
                        <label for="password1" class="label">Password</label>
                        <input type="password" class="inputs" id="password1" v-model="loginData.password">
                    </div>
                </div>
            </div>
            <div slot="modal-footer">
                <div class="form-group">
                    <button class="btn btn-primary" @click="login">Log in</button>
                </div>
            </div>
        </modal>

        <modal class="login-modal" v-if="showSignUpForm" @closeModal="closeSignUpForm">
            <div slot="modal-header">
                <h2>Sign in</h2>
            </div>

            <div slot="modal-body">
                <div class="form login-form">
                    <div class="form-group">
                        <label for="name" class="label">Name</label>
                        <input type="text" class="inputs" id="name" v-model="signUpData.name">
                    </div>

                    <div class="form-group">
                        <label for="email" class="label">Email</label>
                        <input type="email" class="inputs" id="email" v-model="signUpData.email">
                    </div>

                    <div class="form-group">
                        <label for="password2" class="label">Password</label>
                        <input type="password" class="inputs" id="password2" v-model="signUpData.password">
                    </div>

                    <div class="form-group">
                        <label for="password3" class="label">Confirmation Password</label>
                        <input type="password" class="inputs" id="password3" v-model="signUpData.passwordConfirmation">
                    </div>
                </div>
            </div>
            <div slot="modal-footer">
                <div class="form-group">
                    <button class="btn btn-primary" @click="signUp">Sign up</button>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
    import Modal from "../../components/Modal";

    export default {
        name: "Welcome",
        components: { Modal },

        data () {
            return {
                loginData: {
                    username: null,
                    password: null,
                },

                signUpData: {
                    name: null,
                    email: null,
                    password: null,
                    passwordConfirmation: null,
                },

                showLoginForm: false,
                showSignUpForm: false,
            }
        },

        methods: {
            login () {
                this.$store.dispatch('auth/login', {data: this.loginData});
            },

            loginForm () {
                setTimeout(() => this.showLoginForm = true, 100);
            },

            closeLoginForm () {
                this.showLoginForm = false;
            },

            signUp () {
                this.$store.dispatch('auth/signUp', {data: this.signUpData});
            },

            signUpForm () {
                setTimeout(() => this.showSignUpForm = true, 100);
            },

            closeSignUpForm () {
                this.showSignUpForm = false;
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

        .login-form {
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

    .login-modal {
        &:first-child {
            width: 100% !important;
        }
        .btn-primary {
            width: 100% !important;
            height: 4rem;
        }
    }
</style>