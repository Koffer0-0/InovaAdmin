<template>
  <div class="sidebar">
    <div class="flex-shrink-0 p-3 bg-white" style="width: 280px;">
      <a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
        <svg class="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-5 fw-semibold">Collapsible</span>
      </a>
      <ul class="list-unstyled ps-0">
        <li class="mb-1">
          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
            Home
          </button>
          <div class="collapse" id="home-collapse" style="">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded">Overview</a></li>
              <li><a href="#" class="link-dark rounded">Updates</a></li>
              <li><a href="#" class="link-dark rounded">Reports</a></li>
            </ul>
          </div>
        </li>
        <li class="mb-1">
          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
            Dashboard
          </button>
          <div class="collapse" id="dashboard-collapse" style="">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded">Overview</a></li>
              <li><a href="#" class="link-dark rounded">Weekly</a></li>
              <li><a href="#" class="link-dark rounded">Monthly</a></li>
              <li><a href="#" class="link-dark rounded">Annually</a></li>
            </ul>
          </div>
        </li>
        <li class="mb-1">
          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
            Orders
          </button>
          <div class="collapse" id="orders-collapse" style="">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded">New</a></li>
              <li><a href="#" class="link-dark rounded">Processed</a></li>
              <li><a href="#" class="link-dark rounded">Shipped</a></li>
              <li><a href="#" class="link-dark rounded">Returned</a></li>
            </ul>
          </div>
        </li>
        <li class="border-top my-3"></li>
        <li class="mb-1">
          <button class="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="true">
            Account
          </button>
          <div class="collapse show" id="account-collapse" style="">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded">New...</a></li>
              <li><a href="#" class="link-dark rounded">Profile</a></li>
              <li><a href="#" class="link-dark rounded">Settings</a></li>
              <li><a href="#" class="link-dark rounded">Sign out</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
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