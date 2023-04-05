<template>
    <section id="contact" class="contact-address p-2 bg-secondary">
        <h2 class="text-primary-color m-b-3">Contact</h2>
        <div class="contact-content-wrap">
            <div class="contact-content">
                <div v-for="addObj in fullAddress" class="post">
                    <img :src="addObj.imgSrc" :alt="addObj.imgAlt">
                    <span>{{ addObj.detail }}</span>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import postSign from '@/assets/img/post-sign.svg'
import geoSign from '@/assets/img/geo-sign.svg'
import telSign from '@/assets/img/tel-sign.svg'
import mailSign from '@/assets/img/mail-sign.svg'
import faxSign from '@/assets/img/fax-sign.svg'

export default {
    data() {
        return {
            'fullAddress': [
                {
                    'imgSrc': postSign,
                    'imgAlt': 'postSign',
                    'detail': '902-0066'
                }, {
                    'imgSrc': geoSign,
                    'imgAlt': 'geoSign',
                    'detail': '92-5 Oumichi, Naha City, Okinawa Prefecture'
                }, {
                    'imgSrc': telSign,
                    'imgAlt': 'telSign',
                    'detail': '080-4804-3043'
                }, {
                    'imgSrc': mailSign,
                    'imgAlt': 'mailSign',
                    'detail': 'htunmyatmaw1995ucsy@gmail.com'
                }, {
                    'imgSrc': faxSign,
                    'imgAlt': 'faxSign',
                    'detail': 'xxx-xxxx-xxxx'
                }
            ]
        }
    }
}
</script>
<style scoped>
.contact-content {
    margin: 0 auto;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem 2rem;
}

.contact-content>div {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.contact-content>div>img {
    width: 32px;
    height: 32px;
}

@media (max-width: 991.98px) {
    .contact-content {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>