<template>
  <div id="app">
    <div>
      <div>
        {{ $t("greet.你好") }}
      </div>
      <LangSelect />
    </div>
  </div>
</template>

<script>
import LangSelect from './components/langSelect.vue';

export default {
  name: 'app',
  components: {
    LangSelect
  }
}
</script>

<style>

</style>
