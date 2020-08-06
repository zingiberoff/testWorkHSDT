<template>
   <div class="container">
      <section>
         <Topic :key="index"
                :topic="topic"
                class="theme"
                v-for="(topic, index) in sectionData.topics"></Topic>
      </section>
   </div>
</template>

<script lang="ts">
   import Vue, { PropType } from 'vue'
   import { IGraySectionData } from "@/components/GraySection/interfaces";
   import Topic from './Topic.vue'

   export default Vue.extend({
       components: { Topic },
       name: "Section",
       props: { sectionData: { type: Object as PropType<IGraySectionData> } },
   })
</script>

<style lang="scss" scoped>
   @media screen {
      .container {
         margin: auto;
         width: 100%;

         @media (min-width: 960px) and (max-width: 1366px) {
            width: 960px;
         }
         @media (min-width: 1367px) {
            width: 1288px;
         }
      }
      section {
         background: #F7F1FE;
         border-radius: 8px;
         margin: 32px 0;
         display: flex;
         justify-content: space-around;
         flex-wrap: wrap;
         padding-bottom: 24px;

         .theme {
            flex-basis: 100%;
            margin: 32px 8px 8px;

         }

         @media (min-width: 960px) and (max-width: 1366px) {
            .theme {
               flex-basis: 288px;
               margin: 32px 16px 8px;
            }
         }
         @media (min-width: 1367px) {
            padding: 0 32px 24px;
            .theme {
               flex-basis: 360px;
               margin: 32px 24px 8px;
            }
         }
      }
   }

</style>
