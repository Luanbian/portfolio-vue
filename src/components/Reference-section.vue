<template>
  <All>
    <SquareRefe v-for="reference in references" :key="reference.id">
      <div style="display: flex;">
        <div style="z-index: 1;">
          <img :src="reference.image" />
        </div>
        <TextRefe>{{ $t(reference.text) }}</TextRefe>
      </div>
      <Refe>{{ $t(reference.refe) }}</Refe>
    </SquareRefe>
  </All>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { All, Refe, TextRefe, SquareRefe } from '../styles/references-style'

export default defineComponent({
  name: 'Reference-section',
  data () {
    return {
      references: [
        {
          id: 1,
          image: '/images/double-quote.svg',
          text: 'message.referenceOne.referenceOneText',
          refe: 'message.referenceOne.referenceOneRefe'
        },
        {
          id: 2,
          image: '/images/double-quote.svg',
          text: 'message.referenceTwo.referenceTwoText',
          refe: 'message.referenceTwo.referenceTwoRefe'
        }
      ]
    }
  },
  components: { All, Refe, TextRefe, SquareRefe }
})
</script>
