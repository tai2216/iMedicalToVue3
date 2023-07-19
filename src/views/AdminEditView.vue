<template>
    <TopNavBar></TopNavBar>

    <div class="container-all">
        <LeftNavBar></LeftNavBar>

        <div class="container-right" style="overflow: auto;">
            <div class="container-fluid">
                <div style="width: 100%; text-align: center;">
                    <h2><i class="fa-solid fa-pen-to-square"></i>編輯員工</h2>
                </div>

                <hr>

                <form action="" @submit="submitEdit" enctype="multipart/form-data" method="post">

                    <input type="hidden" name="id" :value="employeeDataToBeEdited.id" />
                    <br>
                    <div class="form-group">
                        <label for="employeePhoto">編輯員工照片:</label>
                        <br>
                        <img alt="圖片無法顯示" id="thumbnail" style="width: 150px;" name="employeePhoto" src="" />
                        <br>
                        <!-- ${someEmployee.get().employeePhoto } -->
                        <input id="fileImage" type="file" name="employeePic" class="form-control"
                            aria-describedby="employeePhotoHelp" />



                    </div>

                    <div class="form-group">
                        <label for="account">編輯員工帳號:</label>
                        <input name="employeeAccount" type="text" :value="employeeDataToBeEdited.employeeAccount"
                            class="form-control" id="account" aria-describedby="accountHelp" />
                    </div>
                    <!-- <form:errors path="name" cssClass="error" /> -->
                    <!-- 		<span id="name.errors" class="error">此帳號已有人使用</span> -->

                    <input name="employeePassword" type="hidden" :value="employeeDataToBeEdited.password"
                        class="form-control" id="password" aria-describedby="passwordHelp" />

                    <div class="form-group">
                        <label for="name">編輯員工姓名:</label>
                        <input name="employeeName" type="text" :value="employeeDataToBeEdited.employeeName"
                            class="form-control" id="name" aria-describedby="nameHelp" placeholder="ex: 王曉明" />
                    </div>
                    <div class="form-group">
                        <label for="phone">編輯員工電話號碼:</label>
                        <input name="employeePhone" type="number" :value="employeeDataToBeEdited.employeePhone"
                            class="form-control" id="phone" aria-describedby="phoneHelp" />
                    </div>

                    <div class="form-group">
                        <label for="email">編輯員工電子郵件:</label>
                        <input name="employeeEmail" type="email" :value="employeeDataToBeEdited.employeeEmail"
                            class="form-control" id="email" aria-describedby="emailHelp" placeholder="xxxxx@gmail.com" />
                    </div>

                    <div class="form-group">
                        <label for="address">編輯員工地址:</label>
                        <input name="employeeAddress" type="text" :value="employeeDataToBeEdited.employeeAddress"
                            class="form-control" id="address" aria-describedby="addressHelp" />
                    </div>
                    <div class="form-group">
                        <label for="birthday">編輯員工生日:</label>
                        <input name="employeeBirthday" type="date" :value="employeeDataToBeEdited.employeeBirthday"
                            class="form-control" id="birthday" aria-describedby="birthdayHelp"
                            placeholder="ex: 1998/08/08" />
                    </div>

                    <div class="form-group">
                        <label for="level">編輯員工職等:</label>
                        <select name="employeeRole" :value="employeeDataToBeEdited.employeeRole" required="required">
                            <option value="">選擇職等</option>
                            <option value="normal,ROLE_normal">一般員工</option>
                            <option value="admin,normal,ROLE_admin">主管</option>
                            <option value="admin_normal_ROLE_admin">no comma</option>
                        </select>

                    </div>

                    <div class="form-group">
                        <label for="salary">編輯員工薪資:</label>
                        <input name="employeeSalary" type="number" :value="employeeDataToBeEdited.employeeSalary"
                            class="form-control" id="salary" aria-describedby="salaryHelp" />
                    </div>

                    <div class="form-group">
                        <label for="onboard">編輯員工到職日期:</label>
                        <input name="employeeOnboard" type="date" :value="employeeDataToBeEdited.employeeOnboard"
                            class="form-control" id="onboard" aria-describedby="onboardHelp" placeholder="ex: 2020/03/04" />
                    </div>
                    <div style="text-align: center; margin-top: 50px;">
                        <button type="submit" class="btn btn-primary">送出</button>
                    </div>
                </form>



                <Footer></Footer>
            </div>
        </div>
    </div>
</template>


<script>
import '@/assets/css/mySideBarCSS.css';
import '@/assets/js/mySideBarJS';
import App from '../App.vue'
import axios from 'axios';
import VueCookies from 'vue-cookies'
import router from '@/router';
import TopNavBar from '../components/AdminPageTopNav.vue';
import LeftNavBar from '../components/AdminPageLeftNav.vue';
import Footer from '../components/AdminPageFooter.vue';
export default {
    data() {
        return {
            loginUser: VueCookies.get('loginUserName'),
            employeeDataToBeEdited: {},
        };
    },
    methods: {
        getImg(e) {
            console.log('進入getImg')
            e.preventDefault();
            axios.post('http://localhost:8081/iMedical/Backstage/downloadImage?id=' + idParam)
                .then(response => {
                    console.log('看看成功得到的東西: ' + response.data);
                })
                .catch(error => {
                    console.log('error message: ' + error);
                });
        },
        submitEdit(e) {
            e.preventDefault();
            axios.post('http://localhost:8081/iMedical/editEmployeeData', {

                id: parseInt(e.target.id.value),
                employeePhoto: e.target.employeePhoto.value,
                employeeAccount: e.target.employeeAccount.value,
                employeePassword: e.target.employeePassword.value,
                employeeName: e.target.employeeName.value,
                employeeRole: e.target.employeeRole.value,
                employeePhone: e.target.employeePhone.value,
                employeeEmail: e.target.employeeEmail.value,
                employeeAddress: e.target.employeeAddress.value,
                employeeBirthday: e.target.employeeBirthday.value,
                employeeSalary: e.target.employeeSalary.value,
                employeeOnboard: e.target.employeeOnboard.value

            })
                .then(response => {
                    if (response.data == "編輯成功") {
                        console.log('編輯成功');
                        alert(response.data);
                        router.push('/admin');
                    } else {
                        console.log('其他情況: ' + response.data);
                        alert('預期外訊息: ' + response.data);
                    }
                })
                .catch(error => {
                    console.log('error message:', error);
                    alert('錯誤訊息: ' + error);
                })
        }
    },

    components: {
        TopNavBar,
        LeftNavBar,
        Footer,
    },
    async created() {
        const idParam = this.$route.params.id;
        axios.defaults.headers.common['Authorization'] = VueCookies.get('jwtToken');
        await axios.get('http://localhost:8081/iMedical/getEmployeeDataToEdit', { params: { id: idParam } })
            .then(response => {
                this.employeeDataToBeEdited = response.data;
                console.log('now the value of id is: ' + this.employeeDataToBeEdited.id)
                this.employeeDataToBeEdited.id = parseInt(this.employeeDataToBeEdited.id);
                console.log('next the type of id is: ' + typeof (this.employeeDataToBeEdited.id))
            })
            .catch(error => { console.log('error message:', error); })

        axios({
            method: 'POST',
            url: 'http://localhost:8081/iMedical/Backstage/downloadImage?id=' + idParam,
            responseType: 'blob'
        })
            .then(response => {
                console.log('download img success');
                let file = response.data;
                let reader = new FileReader();

                reader.onload = function (e) {
                    $('#thumbnail').attr('src', e.target.result);
                }

                reader.readAsDataURL(file);
            })
            .catch(error => {
                console.log('downoload img failed, error message: ' + error);
            });


    }



};



$(document).ready(function () {
    $('#fileImage').change(function () {
        showImageThumbnail(this);
    });

    //$('#fileImage').attr('src', axios.post('http://localhost:8081/iMedical/Backstage/downloadImage?id=' + idParam));


});

function showImageThumbnail(fileInput) {
    let file = fileInput.files[0];
    let reader = new FileReader();

    reader.onload = function (e) {
        $('#thumbnail').attr('src', e.target.result);
    };

    reader.readAsDataURL(file);
}

</script>