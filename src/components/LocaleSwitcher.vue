<template>
  <div class="toggle-switch" :class="{ 'is-active': isEnglish }" @click="toggleLanguage">
    <div class="toggle-switch-label toggle-switch-label-left">PTBR</div>
    <div class="toggle-switch-handle"></div>
    <div class="toggle-switch-label toggle-switch-label-right">EN</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LocaleSwitcher',
  data () {
    return {
      isEnglish: false
    }
  },
  methods: {
    toggleLanguage () {
      this.isEnglish = !this.isEnglish
      this.$i18n.locale = this.isEnglish ? 'en' : 'ptbr'
    }
  }
}
</script>

<style>
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 90px;
  height: 24px;
  border-radius: 12px;
  background-color: #7416dd;
  transition: background-color 0.3s;
  font-size: 14px;
}
.toggle-switch:hover {
  cursor: pointer;
}

.toggle-switch-label {
  position: absolute;
  top: 2px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  width: 40px;
  color: #fff;
}

.toggle-switch-label-left {
  left: 6px;
}

.toggle-switch-label-right {
  right: 6px;
}

.toggle-switch-handle {
  position: absolute;
  top: 2px;
  left: 46px;
  width: 38px;
  height: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  transition: left 0.3s;
}

.toggle-switch.is-active {
  background-color: #13c7e3;
}

.toggle-switch.is-active .toggle-switch-handle {
  left: 6px;
}
</style>
