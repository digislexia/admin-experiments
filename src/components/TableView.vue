<template>
    <table>
        <tr v-for="(dataEntity, index) in preparedData" :key="index">
            <td v-for="(field, fieldIndex) in entity.fields" :key="fieldIndex">
                <component
                        :is="field.tableComponent"
                        :value="dataEntity[fieldIndex]"
                        @input="updateField(fieldIndex, $event)"
                ></component>
            </td>
            <td v-for="(action, actionIndex) in entity.actions" :key="actionIndex">
                {{ dataEntity.id }}
                <button type="button" @click="dataEntity.blockUser"> {{ action.title }} </button>
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
            updateField(field, value) {
                console.log('updateField', field, value);

            }
        },
        computed: {
            preparedData() {
                return this.data.map((dataEntity) => {
                   return new this.entity(dataEntity);
                });
            }
        }
    }
</script>

<style scoped>

</style>