<template>
    <transition name="fade">
        <div class="modal-backdrop">
            <div class="modal" v-click-outside="{ ref: 'modal-backdrop', method: 'close' }">
                <span class="close-modal" @click="close"><i class="las la-times-circle"></i></span>
                <div class="modal-header">
                    <slot name="modal-header"></slot>
                </div>
                <div class="modal-body">
                    <slot name="modal-body"></slot>
                </div>
                <div class="modal-footer">
                    <slot name="modal-footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Modal",

        methods: {
            close () {
                return this.$emit('closeModal');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal-backdrop {
        position: fixed;
        top: 0; left: 0; bottom: 0; right: 0;
        background-color: rgba(0,0,0, .6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99999;
    }

    .modal {
        min-width: 25%;
        position: relative;
        background-color: $white-color;
        padding: 2rem 4rem;
        box-shadow: .2rem .2rem 2rem .1rem;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        border-radius: 1rem;
        font-size: 1.5rem;
    }
    .close-modal {
        position: absolute;
        right: 1rem;
        top: 1rem;
        padding: .2rem;
        cursor: pointer;
        color: $dark-blue;

        .la-times-circle {
          font-size: 2.7rem;
          transition: all .4s linear;

          &:hover {
            color: $white-color;
            background-color: $dark-blue;
            border-radius: 100%;
          }
        }
    }

    .modal-body {
        margin-top: 3rem;
    }

    .modal-footer {
        margin-top: 3rem;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>