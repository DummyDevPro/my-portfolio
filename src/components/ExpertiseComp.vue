<template>
    <section id="expertise" class="p-2">
        <h2 class="text-primary-color m-b-3">Expertise</h2>
        <div class="expertise-list">
            <div v-for="(exp, index) in expertiseList" class="expertise-item"
                :class="((index % 2) == 0) ? 'bg-tertiary' : 'bg-secondary'">
                {{ exp }}
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            'expertiseList': [
                'Frontend Development',
                'Backend Development',
                'Mobile Application Development',
                'Web Application Development',
                'Database',
                'Google Service'
            ]
        }
    }
}
</script>
<style scoped>
.expertise-list {
    width: max-content;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.expertise-list div {
    padding: 1rem 2rem;
    border-radius: .5rem;
}
</style>