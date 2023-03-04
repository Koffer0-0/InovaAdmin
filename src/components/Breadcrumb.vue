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
.breadcrumb-item::before {
    content: none !important;
}

.breadcrumb-item:not(:last-child):after {
    content: ">";
    margin: 5px;
}
</style>
