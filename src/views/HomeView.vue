<template>
  <div class="section-wrap">
    <about-comp class="mandatory-scroll-snapping" />
    <contact-address-comp class="mandatory-scroll-snapping" />
    <edu-comp class="mandatory-scroll-snapping" />
    <expertise-comp class="mandatory-scroll-snapping" />
    <skill-comp class="mandatory-scroll-snapping" />
    <experience-comp class="mandatory-scroll-snapping" />
    <language-comp class="mandatory-scroll-snapping" />
    <certificate-comp class="mandatory-scroll-snapping" />
  </div>
</template>

<script>
import AboutComp from '@/components/AboutComp.vue'
import ContactAddressComp from '@/components/ContactAddressComp.vue'
import EduComp from '@/components/EduComp.vue'
import ExpertiseComp from '@/components/ExpertiseComp.vue'
import SkillComp from '@/components/SkillComp.vue'
import ExperienceComp from '@/components/ExperienceComp.vue'
import LanguageComp from '@/components/LanguageComp.vue'
import CertificateComp from '@/components/CertificateComp.vue'

export default {
  components: {
    'about-comp': AboutComp,
    'contact-address-comp': ContactAddressComp,
    'edu-comp': EduComp,
    'expertise-comp': ExpertiseComp,
    'skill-comp': SkillComp,
    'experience-comp': ExperienceComp,
    'language-comp': LanguageComp,
    'certificate-comp': CertificateComp,
  }
}
</script>

<style scoped>
.section-wrap {
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
}

.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}
</style>
