<template>
    <table>
        <tr v-for="(dataEntity, index) in data" :key="index">
            <td v-for="(field, fieldIndex) in entity.fields" :key="fieldIndex">
                <component
                        :is="field.tableComponent"
                        :value="dataEntity[fieldIndex]"
                        @input="updateField(index, fieldIndex, $event)"
                ></component>
            </td>
            <td v-for="(action, actionIndex) in entity.actions" :key="actionIndex">
                <button type="button" @click="dataEntity[action.handler]()"> {{ action.title }} </button>
            </td>
        </tr>
    </table>
</template>

<script>
    export default {
        name: "TableView",
        props: {
            entity: {
                type: Function,
            },
            data: {
                type: Array,
                default() {
                    return [];
                },
            },
        },
        methods: {
            updateField(index, field, value) {
                console.log('updateField', field, value);
                this.data[index][field] = value;
            }
        },
    }
</script>

<style scoped>

</style>