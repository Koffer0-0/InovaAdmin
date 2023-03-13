<template>
    <b-nav-form right>
        <b-form-input
            size="sm"
            placeholder="Search"
            type="search"
            v-model="searchQuery"
        >
        </b-form-input>
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
                let filteredData = this.data.filter((item) => {
                    let match = false;
                    this.searchKey.forEach((key) => {
                        if (
                            item[key] &&
                            item[key]
                                .toLowerCase()
                                .includes(this.searchQuery.toLowerCase())
                        ) {
                            match = true;
                        }
                    });
                    return match;
                });
                this.$emit("search", filteredData);
            } else {
                this.$emit("search", this.data);
            }
        },
    },
    // watch: {
    //     searchQuery: function () {
    //         if (this.data?.length > 0 && this.searchQuery) {
    //             let filteredData = this.data.filter(
    //                 (item) =>
    //                     item[this.searchKey]
    //                         .toLowerCase()
    //                         .includes(this.searchQuery.toLowerCase()) ||
    //                     ["id", "name"].some((key) =>
    //                         item[key]
    //                             .toLowerCase()
    //                             .includes(this.searchQuery.toLowerCase())
    //                     )
    //             );
    //             this.$emit("search", filteredData);
    //         } else {
    //             this.$emit("search", this.data);
    //         }
    //     },
    // },
};
</script>

<style scoped></style>
