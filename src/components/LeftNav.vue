<template>
    <aside>
        <ul>
            <li v-for="menu in menuList">
                <a :href="'#' + menu.id">
                    <!-- <img src="@/assets/img/post-sign.svg" alt=""> -->
                    <span>{{ menu.name }}</span>
                </a>
            </li>
        </ul>
    </aside>
</template>
<script>
export default {
    data() {
        return {
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
            ]
        }
    }
}
</script>
<style scoped>
aside {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    left: 0;
    min-height: fit-content;
    height: 100vh;
    overflow-y: scroll;
    background-color: ghostwhite;
    padding: 1rem 0;
}

ul {
    padding: 0 .5rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: .25rem;
}

ul li {
    width: 100%;
    border: 1px solid var(--hmm-secondary-color);
    border-radius: .5rem;
    transition: all .3s ease-in;
}

ul li:hover {
    border-color: transparent;
}

ul li a {
    display: flex;
    align-items: center;

    position: relative;
    top: 0;
    left: 0;

    color: var(--hmm-primary-color);
    font-weight: bold;
    width: inherit;
    height: inherit;
    text-decoration: none;
    padding: 1rem;
    border-radius: .5rem;

    transition: all .3s ease-out, background-color 2s ease;
}

ul li a img {
    width: 32px;
    height: 32px;
    filter: brightness(0) invert(1);
}

ul li a:hover {
    top: 0;
    /* left: 2rem; */
    color: var(--color-white);
    background-color: var(--hmm-primary-color);
}

ul li a:hover img {
    filter: brightness(0) invert(1);
}
</style>