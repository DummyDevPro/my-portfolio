<template>
    <section id="experience" class="p-2 bg-tertiary">
        <h2 class="text-primary-color m-b-3">Experience</h2>
        <div class="experience-list">
            <div v-for="(exp, index) in experienceList" class="p-1"
                :class="((index % 2) == 0) ? 'bg-white' : 'bg-secondary'">
                <div v-for="obj in exp">
                    <h3>{{ obj.title }}</h3>
                    <div v-if="Array.isArray(obj.value)" class="items p-1">
                        <span v-for="val in obj.value" :class="((index % 2) == 0) ? 'bg-tertiary' : 'bg-white'">
                            {{ val }}
                        </span>
                    </div>
                    <div v-else-if="typeof obj.value === 'string'" class="items p-1">
                        <span :class="((index % 2) == 0) ? 'bg-tertiary' : 'bg-white'">{{ obj.value }}</span>
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
            'experienceList': [
                [

                    {
                        'title': 'Company Name',
                        'value': 'CyberMission Myanmar'
                    },
                    {
                        'title': 'Company Type',
                        'value': 'Off-Shore'
                    },
                    {
                        'title': 'Start Date',
                        'value': '2016-03'
                    },
                    {
                        'title': 'End Date',
                        'value': '2018-03'
                    },
                    {
                        'title': 'Position',
                        'value': ['Junior System Engineer', 'Senior System Engineer']
                    }
                ],
                [
                    {
                        'title': 'Company Name',
                        'value': 'OmniAsia'
                    },
                    {
                        'title': 'Company Type',
                        'value': 'Off-Shore'
                    },
                    {
                        'title': 'Start Date',
                        'value': '2018-04'
                    },
                    {
                        'title': 'End Date',
                        'value': '2018-06'
                    },
                    {
                        'title': 'Job Type',
                        'value': ['PHP Development']
                    },
                    {
                        'title': 'Position',
                        'value': ['System Engineer']
                    }
                ],
                [

                    {
                        'title': 'Company Name',
                        'value': 'StarSE'
                    },
                    {
                        'title': 'Company Type',
                        'value': 'Japan Job Agency'
                    },
                    {
                        'title': 'Start Date',
                        'value': '2018-10'
                    },
                    {
                        'title': 'End Date',
                        'value': '2021-03'
                    },
                    {
                        'title': 'Job Type',
                        'value': ['Android Development', 'Web Development', 'Flutter Development']
                    },
                    {
                        'title': 'Position',
                        'value': ['System Engineer']
                    }
                ],
                [

                    {
                        'title': 'Company Name',
                        'value': 'IT College Okinawa'
                    },
                    {
                        'title': 'Company Type',
                        'value': 'School/College'
                    },
                    {
                        'title': 'Start Date',
                        'value': '2021-04'
                    },
                    {
                        'title': 'End Date',
                        'value': 'xxxx-xx'
                    },
                    {
                        'title': 'Job Type',
                        'value': ['Lecturing']
                    },
                    {
                        'title': 'Position',
                        'value': ['IT Teacher']
                    }
                ],
            ]
        }
    }
}
</script>
<style scoped>
.experience-list {
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    gap: 1rem .5rem;
}

.experience-list>div {
    border-radius: .5rem;
}

.items {
    display: flex;
    gap: .25rem;
}

.items span {
    padding: .5rem;
    border-radius: .25rem;
}
</style>