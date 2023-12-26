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
      <img :src='hability.desc.item4'/>
      <img :src='hability.desc.item5'/>
      <img :src='hability.desc.item6'/>
      <img :src='hability.desc.item7'/>
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
          icon: '/images/monitor.svg',
          title: 'Frontend',
          desc: {
            item1: '/images/vue-icon.svg',
            item2: '/images/react-icon.svg',
            item3: '/images/javascript-icon.svg'
          }
        },
        {
          id: 2,
          middle: true,
          icon: '/images/database.svg',
          title: 'Backend',
          desc: {
            item1: '/images/node-icon.svg',
            item2: '/images/mysql-icon.svg',
            item3: '/images/typescript-icon.svg',
            item4: '/images/java-icon.svg',
            item5: '/images/spring-icon.svg',
            item6: '/images/csharp-icon.svg',
            item7: '/images/dot-net-icon.svg'
          }
        },
        {
          id: 3,
          icon: '/images/code.svg',
          title: 'Extras  ',
          desc: {
            item1: '/images/jest-icon.svg',
            item2: '/images/git-icon.svg',
            item3: '/images/mongo-icon.svg',
            item4: '/images/graphql-icon.svg'
          }
        }
      ]
    }
  },
  components: { All, BoxIcon, Card, Subtitle }
})
</script>
