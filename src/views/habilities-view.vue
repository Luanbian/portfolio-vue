<template>
    <Principal>
        <Titlee>
            {{ $t('message.talents') }}
        </Titlee>
        <Bar/>
    </Principal>
    <CardSection/>
    <div style="display: flex; justify-content: center;">
        <ButtonAbout @click="scrolltoAbout">
            {{ $t('message.readAbout') }}
        </ButtonAbout>
    </div>
</template>

<script lang="ts">
import { Principal, ButtonAbout } from '../styles/habilities-styled'
import { Bar, Titlee } from '../styles/presentation-styled'
import CardSection from '../components/Card-section.vue'

export default {
  methods: {
    scrolltoAbout () {
      const heightOfPage = 3.3
      window.scrollTo({
        top: window.innerHeight * heightOfPage,
        behavior: 'smooth'
      })
    }
  },
  components: { Principal, ButtonAbout, Bar, Titlee, CardSection }
}
</script>
