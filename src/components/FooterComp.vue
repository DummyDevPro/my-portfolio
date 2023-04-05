<template>
    <footer class="bg-quaternary">
        <div class="social-site text-white p-1">
            <a class="p-1" href="https://www.facebook.com/htetwai.yansoe.98" target="_blank">
                <b-icon-fb />
                <span>Facebook</span>
            </a>
            <a class="p-1" href="https://www.instagram.com/" target="_blank">
                <b-icon-ig />
                <span>Instagram</span>
            </a>
        </div>

        <div class="develop-site p-1 text-white">
            <a class="p-1" href="https://github.com/" target="_blank">
                <b-icon-gh />
                <span>GitHub</span>
            </a>
        </div>

        <p class="p-1 text-white bg-black">
            <small>CopyRight &copy; {{ currentYear }} DummyDevPro. All rights reserved.</small>
        </p>
    </footer>
</template>
<script>
import { BIconFacebook, BIconInstagram, BIconGithub } from 'bootstrap-icons-vue'

const date = new Date()
export default {
    data() {
        return {
            'currentYear': date.getFullYear()
        }
    },
    components: {
        'b-icon-fb': BIconFacebook,
        'b-icon-ig': BIconInstagram,
        'b-icon-gh': BIconGithub,
    }
}
</script>
<style scoped>
.develop-site>a,
.social-site>a {
    text-decoration: none;
    display: flex;
    gap: .5rem;
    align-items: center;
    color: var(--color-white);
}
</style>