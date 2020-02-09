<template>
    <div id="employee-form">
        <v-form v-on:submit.prevent="handleSubmit">
            <v-text-field     :class="{ 'has-error': submitting && invalidName }"
                              type="text"  ref="first" label="name" v-model="employee.name" @focus="clearStatus"
                              @keypress="clearStatus"/>
            <v-text-field     :class="{ 'has-error': submitting && invalidEmail }"
                               type="text" label="email" v-model="employee.email" @focus="clearStatus"/>

            <p v-if="error && submitting" class="error-message">
                ❗Please fill out all required fields
            </p>
            <p v-if="success" class="success-message">
                ✅ Employee successfully added
            </p>

            <button>Add Employee</button>
        </v-form>
    </div>
</template>

<script>
    export default {
        name: "EmployeeForm",
        data() {
            return {
                submitting: false,
                error: false,
                success: false,
                employee: {
                    name: '',
                    email: '',
                },
            }
        },
        methods: {
            handleSubmit() {
                this.submitting = true
                this.clearStatus()
                if (this.invalidName || this.invalidEmail) {
                    this.error = true
                    return
                }
                this.$emit('add:employee', this.employee)
                this.$refs.first.focus()

                this.employee = {
                    name: '',
                    email: '',
                }
                this.error = false
                this.success = true
                this.submitting = false
            },
            clearStatus() {
                this.success = false
                this.error = false
            }

        },
        computed: {
            invalidName() {
                return this.employee.name === ''
            },
            invalidEmail() {
                return this.employee.email === ''
            },
        },
    }
</script>

<style scoped>
    form {
        margin-bottom: 2rem;
        padding-right: 40px;
    }
    button {
        background: #009435;
        border: 1px solid #009435;
    }
    [class*='-message'] {
        font-weight: 500;
    }
    .error-message {
        color: #d33c40;
    }
    .success-message {
        color: #32a95d;
    }
</style>