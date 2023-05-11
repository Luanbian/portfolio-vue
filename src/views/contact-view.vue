<template>
    <Touch>
        <GetIn>{{ $t('message.touch') }}!</GetIn>
        <Card>
            <Block>
                <img src="/images/phone.svg" style="width: 70px;"/>
                <Phone>(15)98180.6866</Phone>
            </Block>
            <Block>
                <img src="/images/email.svg" style="width: 70px;"/>
                <Phone>luanalmeidadev@gmail.com</Phone>
            </Block>
            <BlockIcons>
                <a href="https://www.linkedin.com/in/luan--almeida/" target="_blank">
                    <img src="/images/linkedin.svg">
                </a>
                <a href="https://www.instagram.com/bianchiniluan/" target="_blank">
                    <img src="/images/instagram.svg" style="margin-top: 7%; margin-left: 6%;">
                </a>
                <a href="https://github.com/Luanbian" target="_blank">
                    <img src="/images/github.svg" style="margin-top: 7%;">
                </a>
            </BlockIcons>
        </Card>
    </Touch>
</template>

<script setup lang="ts">
import { Touch, GetIn, Phone, Card, BlockIcons, Block } from '../styles/contact-style'

</script>
