<template>
  <Display>
    <Principal v-for="hability in habilities" :key="hability.id">
      <IconTitle :src='hability.icon'/>
      <div>
        {{ hability.title }}
      </div>
      <DescImage :src='hability.desc.item1'/>
      <DescImage :src='hability.desc.item2'/>
      <DescImage :src='hability.desc.item3'/>
    </Principal>
  </Display>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Principal, Display, DescImage, IconTitle } from '../styles/habilities-styled'

export default defineComponent({
  name: 'Card-section',
  data () {
    return {
      habilities: [
        {
          id: 1,
          icon: '../../assets/images/monitor.svg',
          title: 'Frontend',
          desc: {
            item1: '../../assets/images/vue-icon.svg',
            item2: '../../assets/images/react-icon.svg',
            item3: '../../assets/images/typescript-icon.svg'
          }
        }
        // { id: 2, icon: 'ts', title: 'Backend', desc: 'Cool' },
        // { id: 3, icon: 'ts', title: 'Extras', desc: 'Cool' }
      ]
    }
  },
  components: {
    Principal, Display, DescImage, IconTitle
  }
})
</script>
