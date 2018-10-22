<template>
  <div>
    <div
        v-for="(value, key) in facetObject"
        :key="key">
      <label>
        <input
            v-model="facetObject[key]"
            type="checkbox"
        >
        <i>{{ key }}</i>
      </label>
    </div>
  </div>
</template>
<script>
  export default {
    model: {
      prop: 'facetObject'
    },
    /* eslint vue/require-default-prop: 0 */
    props: {
      facetObject: {
        type: Object,
        required: true,
      }
    }
  };
</script>
<style>
</style>
