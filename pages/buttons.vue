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
    friend: true,
  },
  {
    src: "alexp.png",
    link: "https://parkalex.dev/",
    friend: true,
  },
  {
    src: "temp_3kh0.png",
    link: "https://3kh0.net",
    friend: true,
  },
  {
    src: "bunnyguy.gif",
    link: "https://bunnyguy.foo",
    friend: true,
  },
  {
    src: "3295d8e539f4804202871ce068f91b9a.gif",
  },
  {
    src: "760ce10482bf8260df45c50fd2d5571a.gif",
  },
  {
    src: "7f6c5065dc7ec10b6e1a2bb83fd4932e.png",
  },
  {
    src: "ec5c39b7eb8d6eacbcd3c93201804a92.png",
  },
  {
    src: "eda33e29b6003fb10121912b0fa6d89f.gif",
  },
  {
    src: "e804ed358079c369c8a22ffba0fde767.png",
  },
  {
    src: "b205a193de9187eceaf8348796ce86d1.gif",
  },
  {
    src: "3bc210df467fe80421d30cb536c6d920.png",
  },
  {
    src: "3f9ef562257abbb413b2825b0672d0bc.gif",
  },
  {
    src: "1cb7a342492654ef51557ed1e062b27a.gif",
  },
  {
    src: "3aa04774fa5151af0bd475a6ca85aac1.gif",
  },
  {
    src: "2b6fce503527ec98ab2e671368e4972f.png",
  },
  {
    src: "288b3b77cdaf5880cf3c6dce022c786e.gif",
  },
  {
    src: "notbysarah.png",
  },
  {
    src: "179523bb11e45538e1f86e638c1fb100.gif",
  },
  {
    src: "2a56fd4c7a1572ca12a5d576e048ef51.gif",
  },
  {
    src: "cc34d54961941d7dfe96543eb5ffb0a3.gif",
  },
  {
    src: "f6a41b3db69855d67ca3b71a71c77084.gif",
  },
  {
    src: "19fc1abb7ef7a1a11c3c5482831566ae.gif",
  },
  {
    src: "9f8ab115ef02930271169683bf610e5c.gif",
  },
  {
    src: "vibri-button.gif",
  },
  {
    src: "417faf804598dc04c1ce02d928f99f8e.gif",
  },
  {
    src: "99794cb48a82bffc83879708c8b02e4f.gif",
  },
  {
    src: "babe71d6de7cdf4fbd49cecde0c2458a.png",
  },
  {
    src: "72aa513be325f3a5764f3e56996611f7.gif",
  },
  {
    src: "0fac86695e04eac4ab3cdf0e6e8ae3e1.gif", // DOWNLOAD THIS
  },
  {
    src: "30f0d5532eea43b10464e4c927b16ba4.png",
  },
  {
    src: "fbbbb6b4a3f54f35ab8fac40d9aa6b7c.png",
  },
  {
    src: "61fcab82536020d630a360055c830eb1.png",
  },
  {
    src: "2cb27ef319ab1211d2a286a5cfeed179.gif",
  },
  {
    src: "7b5f60e8e0c184642cbd0d02d3ae105b.gif",
  },
  {
    src: "df6ddc19c1214b2b4909ad730e55ab09.gif",
  },
  {
    src: "bec485b9ceb26cd372fa51ad7a8b6962.gif",
  },
  {
    src: "a1b70ea20aa89370a2f0d48f2c1bcb0e.gif",
  },
  {
    src: "dd2cff4f815d9f10f7d762b9989439de.gif",
  },
  {
    src: "d6ffa37f50d94295ee720640caaa6410.gif",
  },
  {
    src: "ed2b8b6877008883d804f0ac95aa8769.gif",
  },
  {
    src: "6fab3b4fa0232c9eb25d898edc54405f.png",
  },
  {
    src: "hackclub.png",
  },
  {
    src: "fc9a3bf4cbfe7f9831fbd3c1485890b4.gif",
  },
  {
    src: "922a9f7700a81a7f2eef329870afa934.gif",
  },
  {
    src: "653d8c992fe0190456286de2b4877f9e.gif"
  }
];
console.log(ring);
</script>
<template>
  <div class="m-10">
    <h1 class="font-bold text-4xl">Webrings / 88x31's</h1>
    <p class="py-5">just look at the shiny buttons</p>
    <div class="flex flex-wrap items-start p-0 m-0 gap-0 max-w-xl">
      <a
        v-for="item in ring"
        :class="`p-0 m-1 ${item.friend ? 'border-[#cba6f71] border-2' : ''}`"
        :href="item.link || '#'"
      >
        <img
          :src="
            item.src.startsWith('http')
              ? item.src
              : `https://saahild.com/buttons/${item.src}`
          "
          class="block align-top"
        />
      </a>
    </div>
  </div>
</template>
