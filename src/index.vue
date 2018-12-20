<template>
<div class="wrapper">
    <div class="top-bar">
        <div class="logo">
            <image class="brand" src="http://shortology.ml/images/icons/Logo.png"></image>
        </div>
        <div class="nav-icon">
            <image class="icon" src="http://shortology.ml/images/icons/Profile.png"></image>
        </div>
    </div>
    <div class="main-template">
        <router-view></router-view>
    </div>
    <div class="bottom-bar">
        <div class="nav-icon">
            <image @click="goTo($event, '/')" class="icon" src="http://shortology.ml/images/icons/Home.png"></image>
        </div>
        <div class="nav-icon">
            <image @click="goTo($event, { name: 'ItsMonday' })" class="icon" src="http://shortology.ml/images/icons/Monday.png"></image>
        </div>
        <div class="nav-icon">
            <image @click="goTo($event, { name: 'ItsFriday' })" class="icon" src="http://shortology.ml/images/icons/Friday.png"></image>
        </div>
    </div>
</div>
</template>

<script>
import router from './router'

export default {
    name: 'App',
    data: function() {
        return {
        }
    },
    methods: {
        goTo: function(event, route) {
            console.log(event, route)
            router.push(route)
        }
    },
    beforeCreated: function() {
    },
    mounted: function() {
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
    flex-direction: row;
    justify-content: space-between;
    background-color: rgb(247, 249, 250);
    padding-top: 64px;
    padding-bottom: 64px;
    padding-right: 64px;
    padding-left: 64px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}

.bottom-bar {
    flex-direction: row;
    justify-content: space-between;
    align-self: stretch;
    background-color: red;
    padding-bottom: 96px;
    padding-top: 64px;
    padding-right: 64px;
    padding-left: 64px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}

.main-template {
    margin-top: 224px;
}

.nav-icon {
    width: 32px;
    justify-content: center;
    align-items: center;
}

.icon {
    color: rgb(37, 37, 37);
    width: 64px;
    height: 64px;
}

.brand {
    width: 114px;
    height: 77px;
}
</style>
