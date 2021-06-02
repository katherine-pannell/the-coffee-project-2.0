<template>
  <div class="lnav">
  <router-link :to="{name: parent, hash: chapter[0]}">{{title[0]}}</router-link>
  <router-link :to="{name: parent, hash: chapter[1]}">{{title[1]}}</router-link>
  <router-link :to="{name: parent, hash: chapter[2]}">{{title[2]}}</router-link>
  <router-link :to="{name: parent, hash: chapter[3]}">{{title[3]}}</router-link>
  <router-link :to="{name: parent, hash: chapter[3]}">{{title[4]}}</router-link>
  <router-link :to="{name: parent, hash: chapter[3]}">{{title[5]}}</router-link>
  <router-link :to="{name: parent, hash: chapter[3]}">{{title[6]}}</router-link>
</div>
<router-view/>
</template>

<script>

export default {
    name: 'LNav',
    props: {
      parent: String,
      chapter: [],
      title: []
    },
}
</script>
