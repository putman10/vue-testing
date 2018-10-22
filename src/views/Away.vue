<template>
  <div class="away">
    <h3>this is the away view</h3>
    <div>{{inputObject}}</div>
    <parent-childmodel :facet-object="inputObject"></parent-childmodel>
  </div>
</template>

<script>
  import ParentChildmodel from "../components/ParentChildmodel";

  export default {
    name: 'away',
    data() {
      return {
        inputObject: {
          'thing1': true,
          'thing2': true,
          'thing3': true,
          'thing4': true,
        }
      };
    },
    components: {
      'parent-childmodel': ParentChildmodel,
    }
  }
</script>
