<template>
    <div class="bot-nav bg-quaternary">

        <b-icon-back />
        <div class="nav-item-list">
            <div v-for="menu in menuList" class="nav-item">
                <a :href="'#' + menu.id">{{ menu.name }}</a>
            </div>
        </div>
        <b-icon-forward />
        <!-- <router-link to="#about">
            About
        </router-link>
        <router-link to="#contact">
            Contact
        </router-link>
        <router-link to="#education">
            Education
        </router-link>
        <router-link to="#expertise">
            Expertise
        </router-link> -->
        <!-- <ul>
            <li class="prevHref">
                <a v-show="currentIndex != 0" :href="'#' + menuList[prevIndex].id">
                    <span @click="changeIndex(-1)">
                        <b-icon-back />
                        <span>{{ menuList[prevIndex].name }}</span>
                    </span>
                </a>
            </li>

            <li class="currentHref">
                <a :href="'#' + menuList[currentIndex].id">
                    <img src="@/assets/img/post-sign.svg" alt="">
                    <span>{{ menuList[currentIndex].name }}</span>
                </a>
            </li>

            <li class="nextHref">
                <a v-show="currentIndex != lastIndex" :href="'#' + menuList[nexIndex].id">
                    <span @click="changeIndex(1)">
                        <b-icon-forward />
                        <span>{{ menuList[nexIndex].name }}</span>
                    </span>
                </a>
            </li>
        </ul> -->
    </div>
</template>
<script>
import { BIconArrowLeft, BIconArrowRight } from 'bootstrap-icons-vue'

export default {
    data() {
        return {
            currentIndex: 0,
            lastIndex: 0,
            nexIndex: 1,
            prevIndex: 0,
            'menuList': [
                {
                    'icon': '',
                    'name': 'About Me',
                    'id': 'about'
                },
                {
                    'icon': '',
                    'name': 'Contact',
                    'id': 'contact'
                },
                {
                    'icon': '',
                    'name': 'Education',
                    'id': 'education'
                },
                {
                    'icon': '',
                    'name': 'Expertise',
                    'id': 'expertise'
                },
                {
                    'icon': '',
                    'name': 'Skill',
                    'id': 'skill'
                },
                {
                    'icon': '',
                    'name': 'Experience',
                    'id': 'experience'
                },
                {
                    'icon': '',
                    'name': 'Language',
                    'id': 'language'
                },
                {
                    'icon': '',
                    'name': 'Certificate',
                    'id': 'certificate'
                }
            ],
        }
    },
    components: {
        'b-icon-back': BIconArrowLeft,
        'b-icon-forward': BIconArrowRight,
    },
    methods: {
    }
}
</script>
<style scoped>
.bot-nav {
    display: none;
}

.bot-nav {
    position: sticky;
    bottom: 0;
    left: 0;
    display: flex;

    height: 4rem;
    align-items: center;
    overflow-y: hidden;
}

.bot-nav svg {
    width: 2rem;
    height: 2rem;
    color: aliceblue;
}

.bot-nav a {
    text-decoration: none;
    font-size: 1.25rem;
    color: var(--color-white);
}

.nav-item-list {
    flex: 1;
    text-align: center;
    height: inherit;
    overflow-y: scroll;
}

.nav-item-list::-webkit-scrollbar {
    display: none;
}

.nav-item {
}

@media (max-width: 575.98px) {
    .bot-nav {
        display: flex;
        gap: 1rem;
    }
}
</style>