<template>
   <div class="container">
      <section>
         <div :key="index"
              v-for="(topic, index) in sectionData.topics">{{topic.title}}</div>
      </section>
   </div>
</template>

<script lang="ts">
   import Vue from 'vue'

   export default Vue.extend({
       name: "Section",
   })
</script>

<style lang="scss" scoped>

</style>
