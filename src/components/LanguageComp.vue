<template>
    <section id="language" class="p-2">
        <h2 class="text-primary-color m-b-3">Language</h2>
        <div class="language-list">
            <div v-for="(lan, index) in languageList" class="item p-1"
                :class="((index % 2) == 0) ? 'bg-secondary' : 'bg-tertiary'">
                <h3 class="">{{ lan.lang }}</h3>
                <div class="item-content">
                    <div class="p-1">
                        <p>Reading</p>
                        <progress id="file" max="100" :value="lan.reading">
                            {{ lan.reading }}
                        </progress>
                        {{ lan.reading + '%' }}
                    </div>

                    <div class="p-1">
                        <p>Writing</p>
                        <progress id="file" max="100" :value="lan.writing">
                            {{ lan.writing }}
                        </progress>
                        {{ lan.writing + '%' }}
                    </div>

                    <div class="p-1">
                        <p>Communication</p>
                        <progress id="file" max="100" :value="lan.communication">
                            {{ lan.communication }}
                        </progress>
                        {{ lan.communication + '%' }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            'languageList': [
                {
                    'lang': 'Japan',
                    'reading': 75,
                    'writing': 75,
                    'communication': 75
                },
                {
                    'lang': 'English',
                    'reading': 75,
                    'writing': 75,
                    'communication': 25
                }
            ]
        }
    }
}
</script>
<style scoped>
.language-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.item {
    border-radius: .5rem;
}
</style>