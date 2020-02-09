<template>
    <div id="employee-table">
        <p v-if="employees.length < 1" class="empty-table" >
            No employees
        </p>
        <v-simple-table v-else>

            <thead>
            <tr>
                <th class="">email</th>
                <th class="">name</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="employee in employees" :key="employee.id">
                <td v-if="editing === employee.id">
                    <v-text-field type="text" v-model="cachedEmployee.name"/>
                </td>
                <td v-else>{{employee.name}}</td>
                <td v-if="editing === employee.id">
                    <v-text-field type="text" v-model="cachedEmployee.email" />
                </td>
                <td v-else>{{employee.email}}</td>
                <td v-if="editing === employee.id">
                    <v-btn @click="editEmployee(employee)">Save</v-btn>
                    <v-btn class="" @click="cancelEdit(employee)">Cancel</v-btn>
                </td>
                <td v-else>
                    <v-btn class="v-btn-edit" @click="editMode(employee)">Edit</v-btn>
                    <v-btn class="v-btn-delete" @click="$emit('delete:employee', employee.id)">Delete</v-btn>
                </td>
            </tr>
            </tbody>
        </v-simple-table>
    </div>
</template>
<script>
    export default {
        name: 'EmployeeTable',
        props: {
            employees: Array,
            cachedEmployee:null
        },
        data(){
            return{
                editing: null,
                cachedEmployee: {
                    name: '',
                    email: '',
                },
            }
        },
    methods: {
        editMode(employee) {
            this.cachedEmployee = Object.assign({}, employee)
            this.editing = employee.id
        },
        editEmployee(employee) {
            Object.assign(employee, this.cachedEmployee)
            this.editing = null;
        },
        cancelEdit(employee) {
            Object.assign(employee, this.cachedEmployee)
            this.editing = null;
        }
    }
    }
</script>
<style scoped>
    .table-employee{
        padding-right: 60px;
    }
    .v-btn-delete {
        background-color: #e71952;
        border: 1px solid #e71952;
    }
    .v-btn-edit {
        background-color: #6b74ff;
        border: 1px solid #6b74ff;
    }
</style>
