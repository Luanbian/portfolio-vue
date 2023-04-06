<template>
  <All>
    <Card v-for="hability in habilities" :key="hability.id">
      <BoxIcon v-bind:style="{ backgroundColor: hability.middle ? 'var(--square-color)' : 'var(--light-color)'}">
        <img :src='hability.icon'/>
      </BoxIcon>
      <Subtitle>
        {{ hability.title }}
      </Subtitle>
      <div style="display: flex;">
        <img :src='hability.desc.item1'/>
        <img :src='hability.desc.item2'/>
      </div>
      <img :src='hability.desc.item3'/>
    </Card>
  </All>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import '../styles/variables.css'
import { All, BoxIcon, Card } from '../styles/habilities-styled'
import { Subtitle } from '../styles/presentation-styled'

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
            item3: '../../assets/images/javascript-icon.svg'
          }
        },
        {
          id: 2,
          middle: true,
          icon: '../../assets/images/database.svg',
          title: 'Backend',
          desc: {
            item1: '../../assets/images/node-icon.svg',
            item2: '../../assets/images/mysql-icon.svg',
            item3: '../../assets/images/typescript-icon.svg'
          }
        },
        {
          id: 3,
          icon: '../../assets/images/code.svg',
          title: 'Extras  ',
          desc: {
            item1: '../../assets/images/jest-icon.svg',
            item2: '../../assets/images/git-icon.svg',
            item3: '../../assets/images/mongo-icon.svg'
          }
        }
      ]
    }
  },
  components: { All, BoxIcon, Card, Subtitle }
})
</script>
