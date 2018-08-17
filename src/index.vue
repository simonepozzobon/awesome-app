<template>
  <div class="wrapper">
    <div class="top-bar">
      <div class="nav-icon">
        <text class="icon">{{ ico.profile }}</text>
      </div>
    </div>
    <router-view/>
    <div class="bottom-bar">
      <div class="nav-icon">
        <router-link to="/">
          <image src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/65-512.png"></image>
        </router-link>
      </div>
      <div class="nav-icon">
        <router-link to="/its-monday">
          <text class="icon">{{ ico.sad }}</text>
        </router-link>
      </div>
      <div class="nav-icon">
        <router-link to="/its-friday">
          <text class="icon">{{ ico.happy }}</text>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
const domModule = weex.requireModule('dom')

export default {
  name: 'App',
  data () {
    return {
      ico: {
        profile: '\uf419',
        home: '\uf448',
        sad: '\uf4d7',
        happy: '\uf31c',
      }
    }
  },
  beforeCreated () {
    domModule.addRule('fontFace', {
        'fontFamily': "Ionicons",
        'src': "url('https://github.com/AnandChowdhary/ionicons-3-cdn/blob/master/ionicons.ttf?raw=true')"
    })
  },
  mounted () {
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(to bottom, rgb(201, 219, 228) 0%, rgb(246, 235, 228) 100%);
  }

  .top-bar {
    width: 100;
    flex-direction: row;
    justify-content: flex-end;
    background-color: rgb(247, 249, 250);
  }

  .bottom-bar {
    width: 100;
    flex-direction: row;
    justify-content: space-around;
    background-color: rgb(247, 249, 250);
  }

  .nav-icon {
    width: 33;
    justify-content: center;
    align-items: center;
  }

  .icon {
    font-family: Ionicons;
    font-size: 64px;
    color: rgb(37, 37, 37);
    padding: 32px;
  }
</style>
