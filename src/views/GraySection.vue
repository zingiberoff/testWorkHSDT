<template>
 <Section :sectionData="dataSet"></Section>
</template>
<script lang="ts">
   import Vue from 'vue'
   import Section from '../components/GraySection/Section.vue'
   import { IGraySectionData } from "@/components/GraySection/interfaces";

   const dataSet: IGraySectionData = {
       topics: [{
           title: 'Он и она',
           primaryNews: {
               title: '10 звезд, которые любили простых парней, но замуж за них не пошли',
               image: '',
               pictures: [
                   {
                       srcset: "",
                       media: ""
                   }
               ]
           },
           secondNews: [
               {
                   title: 'Кино и реальность: как бы развивались отношения на самом деле',
                   image: ' '
               },
               {
                   title: '7 привычек, которые важно воспитать в себе до замужества',
                   image: ' '
               }
           ]
       }, {
           title: 'дети',
           primaryNews: {
               title: 'И тату, и пирсинг: эксперименты со внешностью звездных детей',
               image: '',
               pictures: [
                   {
                       srcset: "",
                       media: ""
                   }
               ]
           },
           secondNews: [
               {
                   title: '5 навыков и качеств, которых гаджеты лишили наших детей',
                   image: ''
               },
               {
                   title: '7 самых вредных привычек молодых родителей',
                   image: ''
               },
           ]
       }, {
           title: 'Стиль жизни',
           primaryNews: {
               title: 'Стоит ли отказываться от социальных сетей на неделю',
               image: '',
               pictures: [
                   {
                       srcset: "",
                       media: ""
                   }
               ]
           },
           secondNews: [
               {
                   title: 'В России установили один из самых романтичных рекордов',
                   image: ''
               },
               {
                   title: 'Что подарить мужчине, чтобы ему это понравилось: 100+ идей',
                   image: ''
               },
           ]
       },
       ]
   };

   export default Vue.extend({
       components: { Section },
       data: () => {
           return {
               dataSet: dataSet
           }
       }

   })
</script>
