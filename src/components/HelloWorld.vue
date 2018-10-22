<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      message2: 'Hi Fisher',
      list1: ['thing1', 'thing2', 'thing3'],
      url1: 'http://chlambase.org',
    }
  },

  props: {
    msg: {
      type: String,
      required: false,
      default: "default message"

    }
  },
  computed :{
    newMsg() {
      return this.msg.length;
    },
  },
  methods: {
    doSomething(n, i) {
      return n + i;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
