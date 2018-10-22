<template>
  <div id="main-div"></div>
</template>
<script>
  /* eslint-disable */
  import * as d3 from 'd3';
  import axios from 'axios';

  const go_map = {
    'GO:0005794': '.golgi',
    'GO:0005768': '.endosome',
    'GO:0005777': '.peroxisome',
  };

  export default {
    name: 'CellComp',
    data() {
      return {};
    },
    props: ['goTerm'],
    methods: {
      loadSVG: function () {
        const mainDiv = d3.select('#main-div');
        const svg = d3.select("mainDiv").append("svg")
          .attr("width", 960)
          .attr("height", 500);
        const path = d3.geo.path();
    },
    mounted() {
      this.loadSVG();
    //   this.get_ontology_parents(this.goTerm);
    //   console.log(go_map[this.goTerm]);
    //
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  svg {
    margin: 25px;
    pathfill: none;
    stroke: #76BF8A;
    stroke-width: 3px;
  }
</style>
