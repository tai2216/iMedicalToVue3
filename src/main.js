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
                        console.log('已登入')
                        next();
                    } else {
                        console.log('未登入');
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
