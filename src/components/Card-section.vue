<template>
  <Display>
    <Principal v-for="hability in habilities" :key="hability.id">
      <div>
        {{ hability.icon }}
      </div>
      <div>
        {{ hability.title }}
      </div>
      <div>
        {{ hability.desc }}
      </div>
    </Principal>
  </Display>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Principal, Display } from '../styles/habilities-styled'

export default defineComponent({
  name: 'Card-section',
  data () {
    return {
      habilities: [
        { id: 1, icon: 'js', title: 'Javascript', desc: 'Cool' },
        { id: 2, icon: 'ts', title: 'typescript', desc: 'Cool' },
        { id: 3, icon: 'ts', title: 'typescript', desc: 'Cool' }
      ]
    }
  },
  components: {
    Principal, Display
  }
})
</script>
