<template>
    <Main>
      <div>
        <Title>Luan Almeida</Title>
        <Bar/>
        <Subtitle>Desenvolvedor FullStack</Subtitle>
      </div>
      <PerfilPhoto src="../../assets/images/perfil.png" />
    </Main>
    <Square>
      <Phrase>
        "Conhecimento não é aquilo que você sabe, mas o que você faz com aquilo que sabe."
      </Phrase>
      <Button>
        Entre em contato
      </Button>
    </Square>
</template>

<script setup lang="ts">
import { Title, Subtitle, Bar, Square, Button, PerfilPhoto, Main, Phrase } from '../styles/presentation-styled'
</script>
