<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <a class="navbar-brand" href="http://localhost:8081/Backstage"> <img alt="" src="@/assets/img/icon.png" width="30"
                height="30"> iMedical長照醫療後台管理</a>

        <div style="margin-left: auto; margin-right: 30px;">

            <div class="navbar" id="navbarNav">
                <!-- <img alt="尚未上傳照片" style="width: 40px; height: 40px; margin-right: 10px; font-size: xx-small;"
                    src="http://localhost:8081/iMedical/Backstage/downloadImage/${loginSession[0].id}"><img /> -->
                <ul class=navbar-nav>
                    <ins v-if="loginUser != ''" style="vertical-align:bottom; margin-right: 20px;">您好! :
                        <b style="color: red; font: bolder;">
                            {{ loginUser }}
                            <!-- <sec:authentication property="name" /> -->
                        </b> </ins>
                    <li class="nav-item">
                        <form method="post" name="logout" action="http://localhost:8081/iMedical/Backstage/logout">
                            <!-- <sec:csrfInput /> -->
                            <button type="submit" class="btn btn-outline-dark " @click.prevent="logOut">登出</button>
                        </form>
                    </li>
                </ul>


            </div>


        </div>
    </nav>






    <div class="container-all">
        <!-- 左邊 -->
        <div class="container-left">
            <!-- 導覽列 -->
            <nav id="sidebar">
                <!-- 展往左邊/縮起來 按鈕 -->
                <button type="button" id="collapse" class="collapse-btn">
                    <i class="fa-solid fa-align-left"></i>
                </button>


                <!-- List 列表 -->
                <ul class="list-unstyled">
                    <p>後台管理</p>
                    <li>
                        <a href="http://localhost:8081/iMedical/Backstage">首頁<i class="fa-solid fa-house"></i> </a>
                    </li>
                    <li>
                        <a href="#sublist" data-bs-toggle="collapse" id="dropdown">管理<i
                                class="fa-solid fa-list-check"></i></a>
                        <!-- 子連結列表 -->
                        <ul id="sublist" class="list-unstyled collapse">
                            <li>
                                <a href="http://localhost:8081/iMedical/Backstage/getallEmployee">管理員工</a>
                            </li>
                            <li>
                                <a href="http://localhost:8081/iMedical/Backstage/getAllMember">管理會員</a>
                            </li>
                            <li>
                                <a href="http://localhost:8081/iMedical/Backstage/getAllRealAssistiveDevice">管理輔具</a>
                            </li>
                            <li>
                                <a
                                    href="http://localhost:8081/iMedical/Backstage/getAllAssistiveDeviceApplicationForm">管理輔具表單</a>
                            </li>
                            <li>
                                <a href="http://localhost:8081/iMedical/Backstage/getAllAgency">管理機構</a>
                            </li>
                            <li>
                                <a href="http://localhost:8081/iMedical/Backstage/getAllCommodities">管理商品</a>
                            </li>
                            <li>
                                <a href="http://localhost:8081/iMedical/Backstage/searchAllNews">管理公告</a>
                            </li>

                        </ul>
                    </li>

                    <li>
                        <a href="#sublist2" data-bs-toggle="collapse" id="dropdown">表單<i
                                class="fa-brands fa-wpforms"></i></a>
                        <ul id="sublist2" class="list-unstyled collapse">
                            <li>
                                <a class="dropdown-item"
                                    href="http://localhost:8081/iMedical/Backstage/goAddEmployee">新進員工表單</a>
                                <a class="dropdown-item"
                                    href="http://localhost:8081/iMedical/Backstage/goAddMember">新進會員表單</a>
                                <a class="dropdown-item"
                                    href="http://localhost:8081/iMedical/Backstage/goAddRealAssistiveDevice">輔具表單</a>
                                <a class="dropdown-item"
                                    href="http://localhost:8081/iMedical/Backstage/goAddAgency">機構表單</a>
                                <a class="dropdown-item"
                                    href="http://localhost:8081/iMedical/Backstage/goAddCommodities">商品表單</a>
                                <a class="dropdown-item"
                                    href="http://localhost:8081/iMedical/Backstage/addNewsMessage">公告表單</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="http://localhost:8081/iMedical/Backstage/getAllEditLog">編輯紀錄<i
                                class="fa-brands fa-wpforms"></i></a>
                    </li>

                </ul>


            </nav>
        </div>


        <div class="container-right" style="overflow: auto;">
            <div class="container-fluid">
                <div style="width: 100%; text-align: center;">
                    <h2><i class="fa-solid fa-pen-to-square"></i>管理員工</h2>
                </div>

                <hr>

                <div style="width: 100%; text-align: center; margin-top: 20px; margin-bottom: 30px;">
                    <form action="http://localhost:8081/iMedical/Backstage/searchEmployee">
                        <!-- 			<input name="id" type="search" required="required" -->
                        <!-- 				style="border-radius: 10px; width: 50%;" placeholder=""> -->
                        <!-- 			<input type="submit" value="查詢"  -->
                        <!-- 				style="border-style: groove; border-radius: 5px;"> -->

                    </form>
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


                <footer class="main-footer" style="margin-top: 100px;">
                    <div class="container" style="width: 100%; text-align: center;">
                        <div class="pull-right hidden-xs">
                            <b>Version</b> 1.0.01
                        </div>
                        <strong>Copyright © 2022-2025 <a href="">iMedical</a>.
                        </strong> All rights reserved.
                    </div>

                </footer>




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
    methods: {
        logOut: function () {
            let ans = confirm('確認登出嗎?');
            // console.log('log out answer: ', ans)
            if (ans) {
                VueCookies.remove('login');
                VueCookies.remove('loginUserID');
                VueCookies.remove('loginUserName');
                VueCookies.remove('loginUserRole');
                console.log('已清除Cookie');
                router.push('/');
                alert('登出成功，若需再度使用請重新登入')
            } else {
                return false;
            }

        }
    },
    async created() {
        console.log('admi logi', this.loginUser)
        await axios.get('http://localhost:8081/iMedical/empList')
            .then(response => { this.list = response.data; })
            .catch(error => { console.log('error:', error); })

    }

};
// console.log('AdminView exists loginUser: ', loginUser.adminAccount)


</script>
