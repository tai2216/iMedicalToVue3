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
</template>


<script>
import VueCookies from 'vue-cookies'
import router from '@/router';
export default {
    data() {
        return {
            loginUser: VueCookies.get('loginUserName')
        }
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
                alert('登出成功，若需再度使用請重新登入');
                router.push('/');
            } else {
                return false;
            }

        }
    }
}

</script>