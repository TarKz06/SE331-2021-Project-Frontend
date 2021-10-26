@@ -0,0 +1,98 @@
<template>
  <h1 style="margin-left: 28px">Login Page</h1>
  <main>
    <ul id="cards">
      <li class="card" id="card_1">
        <div class="card__content">
          <div>
            <div class="col-md-12">
              <div class="card card-container">
                <img
                  id="profile-img"
                  src="@/assets/images/kemo.gif"
                  class="profile-img-card"
                />
                <Form @submit="handleLogin" :validation-schema="schema">
                  <div class="form-group">
                    <label for="username">Username</label>
                    <Field name="username" type="text" class="form-control" />
                    <ErrorMessage name="username" class="error-feedback" />
                  </div>

                  <div class="form-group">
                    <label for="password">Password</label>
                    <Field
                      name="password"
                      type="password"
                      class="form-control"
                    />
                    <ErrorMessage name="password" class="error-feedback" />
                  </div>

                  <div class="form-group">
                    <button
                      class="btn btn-primary btn-block"
                      :disabled="loading"
                    >
                      <span
                        v-show="loading"
                        class="spinner-border spinner-border-sm"
                      ></span>
                      <span>Login</span>
                    </button>
                  </div>

                  <div class="form-group">
                    <div v-if="message" class="alert alert-danger" role="alert">
                      {{ message }}
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <figure>
            <img src="@/assets/images/img-1.jpg" alt="Image description" />
          </figure>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import AuthService from '@/services/AuthService.js'

export default {
  inject: ['GStore'],
  name: 'Login',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required('Username is required!'),
      password: yup.string().required('Password is required!')
    })
    return {
      loading: false,
      message: '',
      schema
    }
  },
  computed: {
    currentUser(){
      return localStorage.getItem('user')
    },
    isAdmin(){
      return AuthService.hasRoles('ROLE_ADMIN')
    },
    isDoctor(){
      return AuthService.hasRoles('ROLE_DOCTOR')
    },
    isPatient(){
      return AuthService.hasRoles('ROLE_PATIENT')
    }
  },
  methods: {
    handleLogin(user) {
      AuthService.login(user)
        .then((response) => {
          console.log(response)
          console.log(user + 'has login')
          if(this.isAdmin){
            this.$router.push({name: 'PatientList'})
          }else if(this.isPatient){
            this.$router.push({
              name: 'Layout',
              params: {id: this.GStore.currentUser.id}
            })
          }else if(this.isDoctor){
            this.$router.push({ name: 'PatientList' })
          }else{
            this.$router.push({name: 'PatientList'})
          }
          
        })
        .catch(() => {
          this.message = 'Could not login please check your username and password again.'
          setTimeout(()=>{this.message = ''}, 2000)
        })
    }
  }
}
</script>

<style scoped>
.test {
  background-color: aqua;
}
label {
  display: block;
  margin-top: 10px;
}
.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}
.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
.profile-img-card {
  width: 100px;
  height: 100px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
.error-feedback {
  color: red;
}
.card {
  border: 10px;
  border-radius: 20px;
}

.card {
  padding-top: calc(var(--index) * var(--card-top-offset));
}

header,
main {
  width: 78vw;
  margin: 0 auto;
}

.card__content {
  box-shadow: 0 0.2em 1em rgba(0, 0, 0, 0.1), 0 1em 2em rgba(0, 0, 0, 0.1);
  background: rgb(255, 255, 255);
  color: rgb(10, 5, 7);
  border-radius: 1em;
  overflow: hidden;

  display: grid;
  grid-template-areas: 'text img';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  align-items: stretch;
  outline: var(--outline-width) solid lime;
}

.card__content > div {
  grid-area: text;
  width: 80%;
  place-self: center;
  text-align: left;

  display: grid;
  gap: 1em;
  place-items: start;
}

.card__content > figure {
  grid-area: img;
  overflow: hidden;
}

.card__content > figure > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1 {
  font-weight: 300;
  font-size: 3.5em;
}

h2 {
  font-weight: 300;
  font-size: 2.5em;
}

p {
  font-family: sans-serif;
  font-weight: 300;
  line-height: 1.42;
}

.btn {
  margin-top: 10px;
}
</style>
