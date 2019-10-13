<template>
  <div>
    <tree-menu
      :label="label"
      :nodes="nodes"
      :depth="0"
    ></tree-menu>
  </div>
</template>

<script>
  import TreeMenu from "./tree-menu";
  export default {
    name: "test2",
    data() {
      return {
        label: 'root',

        nodes: [
          {
            label: 'item1',
            nodes: [
              {
                label: 'item1.1'
              },
              {
                label: 'item1.2',
                nodes: [
                  {
                    label: 'item1.2.1'
                  }
                ]
              }
            ]
          },
          {
            label: 'item2'
          }
        ]
      }
    },
    components: {TreeMenu}
  }
</script>

<style scoped>

</style>
