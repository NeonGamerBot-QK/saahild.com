<script setup>
 let ring = [
{
    src: "foxmossbutton.png",
    link: "https://foxmoss.com/",
    friend: true,
},
{
    src: "prpl_wtf.gif",
    link: "https://prpl.wtf/",
    friend: true,
}, 
{
    src: "bomberfish.gif",
    link: "https://bomberfish.ca/",
    friend: true
}, {
    src: "3295d8e539f4804202871ce068f91b9a.gif"
}, {
    src: "760ce10482bf8260df45c50fd2d5571a.gif"
}, {
    src: "7f6c5065dc7ec10b6e1a2bb83fd4932e.png"
}, {
    src: "ec5c39b7eb8d6eacbcd3c93201804a92.png"
}, {
    src: "eda33e29b6003fb10121912b0fa6d89f.gif"
}
]
console.log(ring)
</script>
<template>
<div class="m-10">
        <h1 class="font-bold text-4xl">Webrings / 88x31's</h1>
    <p class="py-5">just look at the shiny buttons</p>
<div class="flex flex-wrap items-start p-0 m-0 gap-0">
  <a v-for="item in ring" :class="`p-0 m-1 ${item.friend ? 'border-[#cba6f71] border-2' : ''}`" :href="item.link || '#'">
    <img :src="item.src.startsWith('http') ? item.src : `https://saahild.com/buttons/${item.src}`" class="block align-top" />
  </a>
</div>



</div>
</template>
