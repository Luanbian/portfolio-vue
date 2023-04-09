<template>
    <Mainn>
      <Present>
        <div>
          <Titlee>Luan Almeida</Titlee>
          <Bar/>
          <Subtitle>Desenvolvedor FullStack</Subtitle>
        </div>
        <PerfilPhoto src="../../assets/images/perfil.png" />
      </Present>
    </Mainn>
    <Square>
      <Phrase>
        "Conhecimento não é aquilo que você sabe, mas o que você faz com aquilo que sabe."
      </Phrase>
      <Buttonn @click="ScrolltoContact">
        Entre em contato
      </Buttonn>
    </Square>
</template>

<script lang="ts">
import { Titlee, Subtitle, Bar, Square, Buttonn, PerfilPhoto, Mainn, Phrase, Present } from '../styles/presentation-styled'

export default {
  methods: {
    ScrolltoContact () {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      })
    }
  },
  components: { Titlee, Subtitle, Bar, Square, Buttonn, PerfilPhoto, Mainn, Phrase, Present }
}
</script>
