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
               image: '/img/t1n1_360.png',
               pictures: [
                   {
                       srcset: '/img/t1n1_360.png',
                       media: '(min-width: 1388px)'
                   },
                   {
                       srcset: '/img/t1n1_288.png',
                       media: '(min-width: 904px)'
                   },
                   {
                       srcset: '/img/t1n1_304.png',
                       media: '(max-width: 904px)'
                   }
               ]
           },
           secondNews: [
               {
                   title: 'Кино и реальность: как бы развивались отношения на самом деле',
                   image: '/img/t1n2.png'
               },
               {
                   title: '7 привычек, которые важно воспитать в себе до замужества',
                   image: '/img/t1n3.png'
               }
           ]
       }, {
           title: 'дети',
           primaryNews: {
               title: 'И тату, и пирсинг: эксперименты со внешностью звездных детей',
               image: '/img/t2n1_360.png',
               pictures: [
                   {
                       srcset: '/img/t2n1_360.png',
                       media: '(min-width: 1388px)'
                   },
                   {
                       srcset: '/img/t2n1_288.png',
                       media: '(min-width: 904px)'
                   },
                   {
                       srcset: '/img/t2n1_304.png',
                       media: '(max-width: 904px)'
                   }
               ]
           },
           secondNews: [
               {
                   title: '5 навыков и качеств, которых гаджеты лишили наших детей',
                   image: '/img/t2n2.png'
               },
               {
                   title: '7 самых вредных привычек молодых родителей',
                   image: '/img/t2n3.png'
               },
           ]
       }, {
           title: 'Стиль жизни',
           primaryNews: {
               title: 'Стоит ли отказываться от социальных сетей на неделю',
               image: '/img/t3n1_360.png',
               pictures: [
                   {
                       srcset: '/img/t3n1_360.png',
                       media: '(min-width: 1388px)'
                   },
                   {
                       srcset: '/img/t3n1_288.png',
                       media: '(min-width: 904px)'
                   },
                   {
                       srcset: '/img/t3n1_304.png',
                       media: '(max-width: 904px)'
                   }
               ]
           },
           secondNews: [
               {
                   title: 'В России установили один из самых романтичных рекордов',
                   image: '/img/t3n2.png'
               },
               {
                   title: 'Что подарить мужчине, чтобы ему это понравилось: 100+ идей',
                   image: '/img/t3n3.png'
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
