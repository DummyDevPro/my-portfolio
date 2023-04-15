<template>
    <div class="bot-nav bg-quaternary">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#education">Education</a>
        <a href="#expertise">Expertise</a>
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
    created() {
        this.lastIndex = this.menuList.length - 1
    },
    methods: {
        changeIndex(num) {
            setTimeout(() => {
                let calIndex = this.currentIndex + num;
                if ((calIndex >= 0) || (calIndex <= this.lastIndex)) {
                    this.currentIndex += num

                    // Prev
                    if (calIndex != 0) {
                        this.prevIndex = calIndex - 1
                    }

                    // Next
                    if (calIndex != this.lastIndex) {
                        this.nexIndex = calIndex + 1
                    }
                }
            }, 500);
        }
    }
}
</script>
<style scoped>
.bot-nav {
    display: none;
}

.bot-nav {
    /* padding: .5rem; */
    position: sticky;
    bottom: 0;
    left: 0;
}

.bot-nav>a {
    color: white;
}

.bot-nav>ul::-webkit-scrollbar {
    display: none !important;
}

ul {
    width: 100%;
    list-style: none;
    overflow-x: scroll;
    display: flex;
    padding: 1rem .5rem;
    border-bottom: 1px solid var(--color-white);
}

ul li {
    font-size: 1.125rem;
    align-items: center;
    color: white;
    gap: .5rem;
}

/* ul li>a {
    text-decoration: none;
    color: white;
    padding: .5rem;
    border-radius: .5rem;
}

ul li>*:nth-child(2) {
    display: inline-block;
    width: 100%;
    flex: 1;
    text-align: center;
}

ul li>*:nth-child(2):hover {
    background-color: #415c78;
}

ul li>*:not(:nth-child(2))>span {
    display: flex;
    flex-direction: column;
    align-items: center;
} */

@media (max-width: 575.98px) {
    .bot-nav {
        display: flex;
        gap: 1rem;
    }
}
</style>