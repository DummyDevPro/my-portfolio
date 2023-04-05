<template>
    <section class="first-impression" id="about">
        <div class="introduction">
            <div class="profile-img">
                <img src="@/assets/img/profile-computer-in-hand.png" alt="">
            </div>

            <div class="profile-introduction">
                <p class="font-large text-primary-color m-b-1 first-letter-big">
                    <span v-for="token in nameIntro.split(' ')">{{ token }}</span>
                </p>
                <p class="font-large text-primary-color m-b-3 first-letter-big">
                    <span v-for="token in carrier.split(' ')">{{ token }}</span>
                </p>

                <h2 class="text-primary-color m-b-half">About Me</h2>
                <p class="about-me text-align-justify p-1 bg-tertiary">
                    {{ aboutMe }}
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            'nameIntro': "I'm Htun Myat Maw",
            'carrier': 'Web Developer',
            'aboutMe': "I'd graduated from University Of Computer Studies Yangon. After graduation, I worked at Japan Offshore Company about 3.5 years in Myanmar and after that I directly joined IT Company at Japan Country. In there I worked about 2 years. But now, I've been working in IT College Okinawa as a Teacher since 2021 March 27."
        }
    }
}
</script>

<style scoped>
.first-impression {
    padding: 4rem 0px;
}

.introduction {
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}

.profile-img {
    height: 30rem;
    overflow: hidden;
    border-radius: .5rem;
    background: linear-gradient(to bottom right, rgb(244, 234, 221), black);
    box-shadow: .5rem .5rem 0 var(--color-black);
}

.profile-img>img {
    height: inherit;
    object-fit: contain;
    object-position: center 1.25rem;
}

.first-letter-big {
    display: flex;
    gap: .5rem;
}

.first-letter-big>span::first-letter {
    font-size: 3rem;
    text-decoration: underline;
}

.about-me {
    width: 25rem;
    border-radius: .5rem;
}
</style>