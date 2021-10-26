<template>
  <h1 style="margin-left: 28px">Sign Up</h1>
  <main>
    <ul id="cards">
      <li class="card" id="card_1">
        <div class="card__content">
          <div>
            <div class="col-md-12">
              <img
                id="profile-img"
                src="@/assets/images/kemo.gif"
                class="profile-img-card"
                style="margin-top:30px"
              />
              <Form @submit="handleRegister" :validation-schema="schema">
                <div v-if="!successful">
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
                    <label for="firstname">Firstname</label>
                    <Field name="firstname" type="text" class="form-control" />
                    <ErrorMessage name="firstname" class="error-feedback" />
                  </div>
                  <div class="form-group">
                    <label for="lastname">Lastname</label>
                    <Field name="lastname" type="text" class="form-control" />
                    <ErrorMessage name="lastname" class="error-feedback" />
                  </div>
                  <div class="form-group">
                    <label for="age">Age</label>
                    <Field name="age" type="number" class="form-control" />
                    <ErrorMessage name="age" class="error-feedback" />
                  </div>
                  <div class="form-group">
                    <label for="gender">Gender (Male/Female)</label>
                    <Field name="gender" type="text" class="form-control" />
                    <ErrorMessage name="gender" class="error-feedback" />
                  </div>
                  <div class="form-group">
                    <label for="hometown">Home town</label>
                    <Field name="hometown" type="text" class="form-control" />
                    <ErrorMessage name="hometown" class="error-feedback" />
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
                      Sign Up
                    </button>
                  </div>
                </div>
              </Form>

              <div
                v-if="message"
                class="alert"
                :class="successful ? 'alert-success' : 'alert-danger'"
              >
                {{ message }}
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
// eslint-disable-next-line
import AuthService from '@/services/AuthService.js'

export default {
  name: 'Register',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  // eslint-disable-next-line
  inject: ['GStore'],
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required('Username is required!')
        .min(3, 'Must be at least 3 characters!')
        .max(20, 'Must be maximum 20 characters!'),
      firstname: yup
        .string()
        .required('Firstname is required!')
        .min(3, 'Must be at least 3 characters!')
        .max(20, 'Must be maximum 20 characters!'),
      password: yup
        .string()
        .required('Password is required!')
        .min(6, 'Must be at least 6 characters!')
        .max(40, 'Must be maximum 40 characters!'),
      lastname: yup
        .string()
        .required('Lastname is required!')
        .min(3, 'Must be at least 3 characters!')
        .max(30, 'Must be maximum 30 characters!'),
      age: yup
        .string()
        .required('Age is required!')
        .min(1, 'Must be at least 1 characters!')
        .max(3, 'Must be maximum 3 characters!'),
      gender: yup
        .string()
        .required('Gender is required!')
        .min(4, 'Must be male or female')
        .max(6, 'Must be male or female'),
      hometown: yup
        .string()
        .required('Home town is required!')
        .min(3, 'Must be at least 3 characters!')
        .max(30, 'Must be maximum 30 characters!')
    })

    return {
      successful: false,
      loading: false,
      message: '',
      schema
    }
  },
  mounted() {
    if (this.GStore.currentUser) {
      this.$router.push('/plist')
    }
  },
  methods: {
    // eslint-disable-next-line
    handleRegister(user) {
      AuthService.registerUser(user)
        .then(() => {
          this.$router.push({ name: 'Login' })
        })
        .catch(() => {
          this.message = 'could not register'
        })
      this.message = ''
      this.successful = false
      this.loading = true
    }
  }
}
</script>

<style scoped>
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
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.error-feedback {
  color: red;
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
