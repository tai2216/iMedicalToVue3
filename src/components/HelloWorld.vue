<template>
  <div class="login" id="login">


    <div class="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Header -->
          <div class="modal-header">
            <h3><i class="fa-solid fa-user-gear"></i>後台管理登入</h3>

            <br>
          </div>

          <!-- Body -->
          <div class="modal-body">
            <!-- 登入表單 -->
            <form id="login-form" method="post">
              <div class="form-group">
                <label><i class="fas fa-user-tie" aria-hidden="true"></i><b>帳號:</b></label>
                <hr>
                <!-- <el-input v-model="loginForm.username1" type="text" placeholder="Username" data-space-bottom="0.5rem" />
                <el-input v-model="loginForm.password1" type="password" placeholder="Password" />
                <el-button type="primary" @click="handleLogin">Login</el-button> -->

                <input id="login-account" class="account form-control" type="text" placeholder="Administrator's Account"
                  name="username" required="required">
              </div>

              <label><i class="fa-solid fa-lock"></i><b>密碼:</b></label>
              <hr>
              <input id="login-password" class="password form-control" type="password"
                placeholder="Administrator's Password" name="password" required="required">

              <!--<sec:csrfInput />-->
              <span style="font-size: large; line-height: 45px;">
                <input type="checkbox" name="remember-me">記住我
              </span>
              <div style="width: 100%; text-align: center;">
                <p id="login-message" style="color: red; font: bold;">
                  <!-- <c:if test="${param.error}">
                    <c:out value="帳號密碼輸入錯誤，請重新輸入" />
                  </c:if>
                  <c:if test="${param.logout}">
                    <c:out value="您已登出，請重新登入" />
                  </c:if> -->
                </p>
                <button class="btn btn-info" type="submit">登入</button>
              </div>


            </form>


          </div>

          <!-- Footer -->
          <div class="modal-footer">
            <div class="signup">
              <a href="">回首頁</a>
            </div>

          </div>



        </div>
      </div>
    </div>









  </div>
</template>

<script>
console.log('start of HelloWorld.vue')
import router from '@/router';
import { createHydrationRenderer } from 'vue';
import cookies from 'vue-cookies'
import axios from 'axios';
export default {

  data() {
    return {
      loginUser: {},
    };
  },
  methods: {

  },
  async created() {
    $(document).ready(function () {
      $("#loginModal").modal('show');
      $('#login-form').submit(function () {
        let username = $('#login-account').val();
        let password = $('#login-password').val();
        $.ajax({
          method: 'POST',
          url: 'http://localhost:8081/iMedical/login',
          data: {
            username,
            password
          },
          dataType: 'json',
          success: function (data) {
            console.log(data.message);
            cookies.set('login', 'true');
            this.loginUser = data.loginEmployee[0];
            console.log('Login User: ', this.loginUser);
            $('#login-message').html(data.message)
            router.push('/admin')
          },
          error: function (jqXHR, textStatus, errorThrowm) {
            $('#login-message').html(
              `<span class="color-red">textStatus=${textStatus};
             errorThrown=${errorThrown}</span>`
            );
          }
        })
        return false;
      })
    });

  }

};







console.log('end of HelloWorld.vue')
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
