<template>
  <div class="home">
    <h3>this is the home page</h3>
    <div>{{inputObject}}</div>
    <parent-childmodel :facet-object="inputObject"></parent-childmodel>
    <cell-comp goTerm="GO:0005794"></cell-comp>
  </div>
</template>

<script>
import ParentChildmodel from "@/components/ParentChildmodel";
import CellComp from "@/components/CellComp";

export default {
  name: 'home',
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
    'cell-comp': CellComp,
  }
}
</script>
