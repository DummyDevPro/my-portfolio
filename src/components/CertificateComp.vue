<template>
    <section id="certificate" class="p-2 bg-secondary">
        <h2 class="text-primary-color m-b-3">Certificate</h2>
        <div class="certificate-list">
            <div v-for="(cert, index) in certificateList" class="item"
                :class="((index % 2) == 0) ? 'bg-white' : 'bg-tertiary'">
                {{ cert }}
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            certificateList: [
                'Japanese Language Proficiency Test (JLPT)',
                'Fundamental Information Technology Engineer Examination',
                'Java SE 8 Silver',
            ]
        }
    }
}
</script>
<style scoped>
.certificate-list {
    min-width: inherit;
    max-width: max-content;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.certificate-list div {
    padding: 1rem 2rem;
    border-radius: .5rem;
}
</style>