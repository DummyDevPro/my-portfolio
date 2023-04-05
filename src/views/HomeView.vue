<template>
  <div class="section-wrap">
    <about-comp />
    <contact-address-comp />
    <edu-comp />
    <expertise-comp />
    <skill-comp />
    <experience-comp />
    <language-comp />
    <certificate-comp />
    <footer-comp />
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
import FooterComp from '@/components/FooterComp.vue'

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
    'footer-comp': FooterComp,
  }
}
</script>

<style scoped>
.section-wrap {
  display: flex;
  flex-direction: column;
}
</style>
