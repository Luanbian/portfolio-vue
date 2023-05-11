<template>
    <Principal>
        <Titlee>
            {{ $t('message.About') }}
        </Titlee>
        <Bar/>
    </Principal>
    <Mainn>
        <PerfilPhoto src="/images/perfil.png" />
        <BoxAbout>
            <p style="font-family: 'Subtitle'; text-indent: 1.5rem;">
                {{ $t('message.AboutText') }}
            </p>
        </BoxAbout>
    </Mainn>
</template>

<script setup lang="ts">
import { Principal } from '../styles/habilities-styled'
import { Bar, Titlee, Mainn, PerfilPhoto, BoxAbout } from '../styles/presentation-styled'

</script>
