<template>
    <All>
        <div v-for="reference in references" :key="reference.id">
            <div style="display: flex">
                <div style="z-index: 1;">
                    <img :src="reference.image" />
                </div>
                <TextRefe>{{ reference.text }}</TextRefe>
            </div>
            <Refe>{{ reference.refe }}</Refe>
        </div>
    </All>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { All, Refe, TextRefe } from '../styles/references-style'

export default defineComponent({
  name: 'Reference-section',
  data () {
    return {
      references: [
        {
          id: 1,
          image: '../../assets/images/double-quote.svg',
          text: 'Esse cara ai é fera meu',
          refe: 'Faustão'
        },
        {
          id: 2,
          image: '../../assets/images/double-quote.svg',
          text: 'Esse cara ai é fera meu',
          refe: 'Faustão'
        }
      ]
    }
  },
  components: { All, Refe, TextRefe }
})
</script>
