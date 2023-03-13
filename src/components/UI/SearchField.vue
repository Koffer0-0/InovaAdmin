<template>
    <b-nav-form right>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
            <b-input-group-prepend is-text>
                <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
            <b-form-input
                placeholder="Search..."
                type="search"
                v-model="searchQuery"
            >
            </b-form-input>
        </b-input-group>
    </b-nav-form>
</template>

<script>
export default {
    name: "SearchField",
    props: {
        data: Array,
        searchKey: String,
    },
    data() {
        return {
            searchQuery: "",
        };
    },

    watch: {
        searchQuery: function () {
            if (this.data?.length > 0 && this.searchQuery) {
                let filteredData = this.data.filter((item) =>
                    item[this.searchKey]
                        .toLowerCase()
                        .includes(this.searchQuery.toLowerCase())
                );
                this.$emit("search", filteredData);
            } else {
                this.$emit("search", this.data);
            }
        },
    },
};
</script>

<style scoped></style>
