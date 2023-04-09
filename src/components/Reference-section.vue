<template>
  <All>
    <SquareRefe v-for="reference in references" :key="reference.id">
      <div style="display: flex;">
        <div style="z-index: 1;">
          <img :src="reference.image" />
        </div>
        <TextRefe>{{ reference.text }}</TextRefe>
      </div>
      <Refe>{{ reference.refe }}</Refe>
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
          text: 'Nosso guru Luan, em seu último dia de trabalho colaborou com os projetos desde o início dos trabalhos. Hoje se despede dos alunos para partir para novos desafios em uma carreira de tecnologia. Obrigado pela ajuda Luan e sucesso!!!',
          refe: 'Alexsandro Sunaga, Coordenador de Tecnologias Educacionais'
        },
        {
          id: 2,
          image: '/images/double-quote.svg',
          text: 'Nosso guru Luan, em seu último dia de trabalho colaborou com os projetos desde o início dos trabalhos. Hoje se despede dos alunos para partir para novos desafios em uma carreira de tecnologia. Obrigado pela ajuda Luan e sucesso!!!',
          refe: 'Alexsandro Sunaga, Coordenador de Tecnologias Educacionais'
        }
      ]
    }
  },
  components: { All, Refe, TextRefe, SquareRefe }
})
</script>
