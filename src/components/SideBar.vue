<template>
  <div class="sidebar">
    here is our side bar
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      initialShow: true,
      header: "<h3>Sidebar</h3>",
      links: [
        {name: "Home", href: {name: "home"}, faIcon: ["fas", "home"]},
        {
          name: "Dropdown",
          faIcon: ["fas", "tint"],
          children: [
            {
              name: "Child Item 1",
              href: {
                name: "child-item-1",
              },
              faIcon: ["fas", "child"],
            },
            {
              name: "Child Item 2",
              href: {
                name: "child-item-2",
              },
              faIcon: ["fas", "child"],
            },
          ],
        },
        {name: "About", href: {name: "about"}, faIcon: "users"},
        {name: "Contact", href: {name: "contact"}, faIcon: "phone"},
      ],
    };
  },
  methods: {
    onSidebarChanged() {
    },
  },
};
</script>

<style scoped>

</style>