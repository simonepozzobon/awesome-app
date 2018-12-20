<template>
  <text class="message">
    Qui ci saranno tutte le news
  </text>
</template>
<script>
const stream = weex.requireModule('stream')

export default {
  name: 'App',
  data () {
    return {
      count: 'Fetching'
    }
  },
  created () {
    stream.fetch({
        method: 'GET',
        type: 'json',
        url: 'https://api.github.com/repos/vuejs/vue'
      }, res => {
        if (res.ok) {
          this.count = res.data.stargazers_count
        } else {
          this.count = '- unknown -'
        }
      })
  },
  mounted () {
  }
}
</script>
