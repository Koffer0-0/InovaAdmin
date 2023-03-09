<template>
    <div class="breadcrumbs">
        <b-breadcrumb>
            <b-breadcrumb-item
                v-for="(breadcrumb, idx) in breadcrumbList"
                :key="idx"
                @click="routeTo(idx)"
                :class="{ linked: !!breadcrumb.link }"
            >
                {{ breadcrumb.name }}
            </b-breadcrumb-item>
        </b-breadcrumb>
    </div>
</template>

<script>
import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Breadcrumb",
    components: { BBreadcrumbItem, BBreadcrumb },
    data() {
        return {
            breadcrumbList: [],
        };
    },

    mounted() {
        this.updateList();
    },

    watch: {
        $route() {
            this.updateList();
        },
    },

    methods: {
        routeTo(pRouteTo) {
            if (this.breadcrumbList[pRouteTo].link) {
                this.$router.push(this.breadcrumbList[pRouteTo].link);
            }
        },

        updateList() {
            this.breadcrumbList = this.$route.meta.breadcrumb;
        },
    },
};
</script>

<style scoped>
.breadcrumb {
    background-color: #fff;
    border-bottom: 1px solid #dee2e6;
    border-radius: 0%;
    padding: 1.5rem 0;
}

.breadcrumb-item a {
    color: #515251;
    text-decoration: none;
}

.breadcrumb-item:first-child {
    font-weight: 700;
}

.breadcrumb-item:nth-child(2) a {
    color: #f9bc2e !important;
}

.breadcrumb-item::before {
    content: none !important;
}

.breadcrumb-item:not(:last-child):after {
    display: inline-block;
    content: "";
    margin: 0 5px;
    width: 10px;
    height: 10px;
    background-image: url("../assets/icon.svg");
    background-repeat: no-repeat;
    background-size: contain;
}
</style>
