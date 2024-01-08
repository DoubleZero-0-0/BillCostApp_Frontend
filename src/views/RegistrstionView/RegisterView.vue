<script>
import {
    validateEmail,
    RegisterPost,
    validateName
} from "@/views/RegistrstionView/RegisterMethod.js";

export default {
    data() {
        return {
            registerForm: {
                name: "",
                email: "",
                password: "",
            },
        };
    },
    methods: {
        validateNameCheck() {
            validateName;
        },

        validateEmailCheck() {
            validateEmail;
        },

        RegisterPostCheck() {
            RegisterPost(this.registerForm.name, this.registerForm.email, this.registerForm.password);
        },
    },
};
</script>

<template>
    <div class="RegisterViewBody">
        <el-row justify="center" align="middle" id="el-row">
            <el-col :md="{ span: '6' }" :sm="{ span: '12' }" id="el-col">
                <el-form ref="registerForm" :model="registerForm" label-width="80px" rules="rules" style="padding: 20px">
                    <h2 class="text-center headLineFont">BillCostApp</h2>
                    <hr />
                    <h3 class="">Registration</h3>
                    <el-form-item label="Name" prop="name" :rules="[
                        {
                            required: true,
                            message: 'Please Write Your Name',
                            trigger: 'blur',
                        },
                        { validator: validateName, trigger: 'blur' },
                    ]">
                        <el-input v-model="registerForm.name" type="text" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Email" prop="email" :rules="[
                        {
                            required: true,
                            message: 'Please Write Your Email',
                            trigger: 'blur',
                        },
                        { validator: validateEmail, trigger: 'blur' },
                    ]">
                        <el-input v-model="registerForm.email" type="text" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Password" prop="password" :rules="[
                        {
                            required: true,
                            message: 'Please Enter Password',
                            trigger: 'blur',
                        },
                        { validator: validatePassword, trigger: 'blur' },
                    ]">
                        <el-input v-model="registerForm.password" type="password" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-button class="btn" type="primary" @click="RegisterPostCheck">Registration</el-button>
                    <p>
                        Account Have，Please
                        <router-link to="/login" @click.prevent>Login</router-link>
                    </p>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<style>
.RegisterViewBody {
    width: 100%;
    height: 100%;
    background: url("public/money.png");
    background-size: cover;
}

#el-row {
    height: 100vh;
}

#el-col {
    box-shadow: 10px 10px 10px 10px lightblue;
    padding: 10px;
    border: 1px solid black;
    background: rgba(255, 255, 255, 0.76);
}

.btn {
    margin: 3px;
}

p {
    margin: 5px 5px;
}
</style>
