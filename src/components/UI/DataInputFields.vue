<template>
    <div class="data_input">
        <b-form-input
            v-model="formData.name"
            :placeholder="name"
            class="name_input"
            @input="emit('update:name', $event.target.value)"
        >
        </b-form-input>
        <b-form-textarea
            v-model="formData.description"
            :placeholder="description"
            class="description"
            @input="emit('update:description', $event.target.value)"
        >
        </b-form-textarea>
    </div>
</template>

<script>
export default {
    name: "DataInputFields",
    props: {
        name: {
            type: String,
            default: "Name",
        },
        description: {
            type: String,
            default: "Description",
        },
        formType: {
            type: String,
            required: true,
            validator: (value) => ["lab", "lecture"].includes(value),
        },
    },
    data() {
        return {
            formData: {
                name: "",
                description: "",
            },
        };
    },
};
</script>

<style scoped>
.name_input {
    background-color: #e5e5e5;
}
.description {
    background-color: #e5e5e5;
    resize: none;
}
.data_input input,
textarea {
    margin-bottom: 20px;
}
</style>
