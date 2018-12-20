<template>
    <div class="page-container">
        <list class="general-list">
            <cell class="item-single" v-for="post in this.posts" :key="post.id">
                <div class="post-single">
                    <text>{{ post.img }}</text>
                </div>
            </cell>
        </list>
        <!-- <scroller class="scroller">
            <div class="post-list-single" v-for="(post, i) in this.posts">
                <text>{{ i }}</text>
            </div>
        </scroller> -->
    </div>
</template>

<script>
var stream = weex.requireModule('stream')

export default {
    name: 'ItsMonday',
    data: function() {
        return {
            base: 'http://shortology.ml',
            message: '',
            message2: '',
            posts: [],
            url: 'http://shortology.ml/api/app/monday',
        }
    },
    computed: {

    },
    methods: {
        getFullUrl: function(url) {
            return this.base + url
        }
    },
    created: function() {
        stream.fetch({
            method: 'GET',
            url: this.url,
            type: 'jsonp',
        }, ret => {
            if (ret.ok) {
                this.message = 'Successo' + JSON.stringify(ret.data)
                for (var i = 0; i < ret.data.length; i++) {
                    var item = ret.data[i]
                    item.img = base + ret.data[i].img
                    this.posts[i] = item
                    console.log(item)
                }
            } else {
                this.message = 'Fallita' + JSON.stringify(ret.data)
            }
        }, response => {
            this.message2 = response
        })
    }
}
</script>

<style scoped>
.page-container {
    flex-direction: row;
    justify-content: center;
    max-width: 100%;
}

.general-list {
    flex-direction: row;
    justify-content: center;
    width: 600px;
    height: 800;
}
/* .scroller, .item-list {
    top: 0;
    left: 32px;
    right: 0;
    bottom: 0;
    width: 800px;
    height: 800px;
} */
.post-list-single {
    width: 600px;
    height: 300px;
    background-color: #ffffff;
}
</style>
