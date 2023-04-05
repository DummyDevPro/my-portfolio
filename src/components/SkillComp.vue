<template>
    <section id="skill" class="p-2 bg-secondary">
        <h2 class="text-primary-color m-b-3">Skill</h2>
        <div class="skill-list">
            <div v-for="(skill, index) in skillList" :class="((index % 2) == 0) ? 'bg-white' : 'bg-tertiary'">
                <div v-for="(obj, key) in skill" class="skill p-1">
                    <h3>{{ key }}</h3>
                    <div v-for="inObj in obj" class="p-1">
                        <p>{{ inObj.lang }}</p>
                        <progress id="file" max="100" :value="inObj.level">
                            {{ inObj.level }}
                        </progress>
                        {{ inObj.level + '%' }}
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
            'skillList': [
                {
                    'Frontend Development': [
                        {
                            'lang': 'HTML',
                            'level': 90
                        },
                        {
                            'lang': 'CSS',
                            'level': 70
                        },
                        {
                            'lang': 'JavaScript',
                            'level': 70
                        },
                        {
                            'lang': 'JQuery',
                            'level': 50
                        },
                        {
                            'lang': 'AngularJS',
                            'level': 30
                        },
                        {
                            'lang': 'PHP',
                            'level': 20
                        },
                    ]
                },
                {
                    'Backend Development': [
                        {
                            'lang': 'Java',
                            'level': 70
                        },
                        {
                            'lang': 'Dart',
                            'level': 70
                        }
                    ]
                },
                {
                    'Mobile Application Development': [
                        {
                            'lang': 'Java Android',
                            'level': 50
                        },
                        {
                            'lang': 'Flutter Mobile',
                            'level': 70
                        }
                    ]
                },
                {
                    'Web Application Development': [
                        {
                            'lang': 'Servlet Framework',
                            'level': 50
                        },
                        {
                            'lang': 'Spring Framework',
                            'level': 50
                        },
                        {
                            'lang': 'Vue JS',
                            'level': 50
                        }
                    ]
                },
                {
                    'Database': [
                        {
                            'lang': 'Postgre SQL',
                            'level': 50
                        },
                        {
                            'lang': 'MySQL',
                            'level': 50
                        },
                        {
                            'lang': 'Firebase NoSQL',
                            'level': 50
                        }
                    ]
                },
                {
                    'Google Service': [
                        {
                            'lang': 'Google AppScript',
                            'level': 50
                        },
                        {
                            'lang': 'Firebase',
                            'level': 50
                        },
                        {
                            'lang': 'Google Map',
                            'level': 50
                        }
                    ]
                }
            ]
        }
    }
}
</script>
<style scoped>
.skill-list {
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    gap: 2rem .5rem;
}

.skill-list>div {
    border-radius: .5rem;
    height: fit-content;
}
</style>