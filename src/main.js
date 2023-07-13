import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import vueRouter from 'vue-router'
import store from './store'
import VueCookies from 'vue-cookies'
console.log('start of main.js')
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const api = 'http://localhost:8081/iMedical/checkLogin'
        const token = VueCookies.get('login');
        console.log('Login Token: ', token);
        checkLogin();
        async function checkLogin() {
            await $.ajax({
                method: 'POST',
                url: api,
                data: {
                    login: token

                },
                dataType: "text",
                success: function (data) {
                    if (data === 'true') {
                        next();
                    } else {
                        console.log('未檢查到登入cookie');
                        next({
                            path: '/'
                        });
                        console.log('將導入至首頁登入');

                    }


                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log('Log in Fail, error: ', errorThrown)
                    next({
                        path: '/'

                    })

                }
            });
        }


    } else {
        next();
    }
})

const app = createApp(App).use(store).use(router).mount('#app');
console.log('end of main.js')

// //<!-- JQuery搜尋功能 -->
// $(document).ready(function () {

//     $("#myInput").on("keyup", function () {
//         //抓搜尋欄位的輸入值
//         var value = $(this).val().toLowerCase();
//         $("#myBody tr").filter(function () {
//             //toggle切換功能
//             //indexOf把輸入關鍵字切開 結果>-1就是有找到 結果小於-1就是沒有找到
//             $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//         });
//     });


// });