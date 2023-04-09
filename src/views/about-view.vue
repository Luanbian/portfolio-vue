<template>
    <Principal>
        <Titlee>
            Sobre mim
        </Titlee>
        <Bar/>
    </Principal>
    <Mainn>
        <PerfilPhoto src="/images/perfil.png" />
        <BoxAbout>
            <p style="font-family: 'Subtitle'; text-indent: 1.5rem;">
                Eu vejo a programação como um transformador de realidades, programador Javascript com mais de 2 anos de experiência, e agora passando para o Typescript, muita bagagem em React.js e Node.js. Transformar uma tela em branco em um site funcional que pode gerar renda para uma empresa e solucionar diversos problemas é uma arte que só programadores conseguem produzir.
            </p>
        </BoxAbout>
    </Mainn>
</template>

<script setup lang="ts">
import { Principal } from '../styles/habilities-styled'
import { Bar, Titlee, Mainn, PerfilPhoto, BoxAbout } from '../styles/presentation-styled'

</script>
