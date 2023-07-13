<template>
    <TopNavBar></TopNavBar>


    <div class="container-all">
        <LeftNavBar></LeftNavBar>

        <div class="container-right" style="overflow: auto;">
            <div class="container-fluid">
                <div style="width: 100%; text-align: center;">
                    <h2><i class="fa-solid fa-pen-to-square"></i>管理員工</h2>
                </div>

                <hr>

                <div style="width: 100%; text-align: center; margin-top: 20px; margin-bottom: 30px;">
                    <form action="" class="search">
                        <input class="" style="width:80%; border-radius: 4px;" type="text" id="myInput" placeholder="搜尋...">
                    </form>
                </div>




                <div id="contentBody"
                    style="border: 2px groove; width:100%; background-color:highlighttext; border-radius: 2em; padding: 30px 30px 30px 30px; text-align: center;">
                    <div class="">
                        <h1>員工清單
                            <a class="btn btn-primary" style="border-right: 0px;"
                                href="http://localhost:8081/iMedical/Employee/PDF">匯出PDF</a>
                            <a class="btn btn-primary" style="border-right: 0px;"
                                href="http://localhost:8081/iMedical/Employee/Excel">匯出EXCEL</a>
                        </h1>
                    </div>


                    <div class="table-responsive">
                        <table id="myTable" class="table table-hover"
                            style="background-color: white;border-width: 2px; border-radius: 3px; ">
                            <tr style="background-color: silver; ">
                                <th scope="col">員工編號</th>
                                <th scope="col">員工照片</th>
                                <th scope="col">員工帳號</th>
                                <th scope="col">員工姓名</th>
                                <th scope="col">員工電話</th>
                                <th scope="col">員工信箱</th>
                                <th scope="col">員工地址</th>
                                <th scope="col">員工生日</th>
                                <th scope="col">員工薪資</th>
                                <th scope="col">員工到職日</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>

                            <tbody id="myBody">
                                <tr v-for="li in list ">
                                    <td>{{ li.id }}</td>
                                    <td> <img style="width: 150px; max-width: 50%;" alt="尚未上傳照片"
                                            :src="`data:image/jpeg;base64,` + li.employeePhoto">
                                    </td>
                                    <td>{{ li.employeeAccount }}</td>
                                    <td>{{ li.employeeName }}</td>
                                    <td>{{ li.employeePhone }}</td>
                                    <td>{{ li.employeeEmail }}</td>
                                    <td>{{ li.employeeAddress }}</td>
                                    <td>{{ li.employeeBirthday }}</td>
                                    <td>{{ li.employeeSalary }}</td>
                                    <td>{{ li.employeeOnboard }}</td>
                                    <td><a href="">編輯</a>
                                    </td>
                                    <td><a href="" onclick="return confirm('確認刪除嗎?')">刪除</a></td>
                                </tr>
                            </tbody>


                        </table>
                    </div>


                    <div class="row justify-content-center" style="text-align: center;">
                        <div class="col-9">

                        </div>
                    </div>
                </div>

                <Footer></Footer>

            </div>
        </div>
    </div>
</template>

<script>



import App from '../App.vue';
import '@/assets/css/mySideBarCSS.css';
import '@/assets/js/mySideBarJS';
import axios from 'axios';
import loginView from './LoginView.vue'
import VueCookies from 'vue-cookies'
import router from '@/router';
import TopNavBar from '../components/AdminPageTopNav.vue';
import LeftNavBar from '../components/AdminPageLeftNav.vue';
import Footer from '../components/AdminPageFooter.vue';
//import loginView from './views/LoginView.vue'
import { createApp, computed, reactive, ref, createHydrationRenderer } from "vue";
export default {
    data() {
        return {
            list: [{}],
            employeePhoto: '',
            loginUser: VueCookies.get('loginUserName')
        };
    },
    components: {
        TopNavBar,
        LeftNavBar,
        Footer
    },
    methods: {

    },
    async created() {
        console.log('login user name: ', this.loginUser)
        await axios.get('http://localhost:8081/iMedical/empList')
            .then(response => { this.list = response.data; })
            .catch(error => { console.log('error:', error); })

    }


};
// console.log('AdminView exists loginUser: ', loginUser.adminAccount)

//<!-- JQuery搜尋功能 -->
$(document).ready(function () {

    $("#myInput").on("keyup", function () {
        //抓搜尋欄位的輸入值
        var value = $(this).val().toLowerCase();
        $("#myBody tr").filter(function () {
            //toggle切換功能
            //indexOf把輸入關鍵字切開 結果>-1就是有找到 結果小於-1就是沒有找到
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });


});
</script>
