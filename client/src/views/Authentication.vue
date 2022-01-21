<template>
  <v-app>
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="12" md="6" v-for="k in 2" :key="k">
        <!--Image on left side-->
        <v-card v-if="k == 1" color="transparent" height="100vh" tile>
          <v-img src="../assets/signIn.png" height="100vh">
            <v-overlay color="#E2B887" opacity=".4" absolute></v-overlay
          ></v-img>
        </v-card>

        <!--Actual sign in part-->
        <v-card v-if="k == 2" color="white" height="100vh" tile>
          <v-card-text class="text-center my-auto title-prop"
            >Bem vindo de volta!
          </v-card-text>
          <v-card class="form-prop px-auto" flat>
            <v-form>
              <v-text-field
                v-model="email"
                label="Email"
                type="text"
                color="#00302e"
                outlined
              />

              <v-text-field
                v-model="password"
                label="Palavra-passe"
                color="#00302e"
                outlined
                :append-icon="show ? 'visibility' : 'visibility_off'"
                @click:append="() => (show = !show)"
                :type="show ? 'password' : 'text'"
              /> </v-form
          ></v-card>

          <v-btn class="aut-btn text-none" @click="login" depressed
            >Autenticar</v-btn
          >

          <v-btn class="pass-prop text-none" text plain>
            Esqueci-me da password
          </v-btn>

          <v-btn
            class="create-acc-prop text-none"
            text
            id="no-background-hover"
            plain
            to="/criar"
          >
            Criar uma conta
          </v-btn>
        </v-card>

        <!--
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="
                            text-center
                            display-2
                            indigo--text
                            text--darken-4
                          "
                        >
                          Sign in to RASBet
                        </h1>
                        <div class="mt-4" align="center">
                          <v-img
                            src="../assets/logotipo.png"
                            contain
                            height="100px"
                            width="150px"
                          >
                          </v-img>
                        </div>
                        <h4 class="text-center mt-4">
                          Ensure your email for registration
                        </h4>
                        <v-form>
                          <v-text-field
                            v-model="email"
                            label="Email"
                            prepend-icon="email"
                            type="text"
                            color="indigo darken-4"
                          />

                          <v-text-field
                            v-model="password"
                            label="Password"
                            prepend-icon="lock"
                            type="password"
                            color="indigo darken-4"
                          />
                        </v-form>
                        <h3 class="text-center mt-4">Forgot your password?</h3>
                      </v-card-text>
                      <div class="text-center mt-3 mb-4">
                        <v-btn
                          @click="login"
                          rounded
                          color="indigo darken-4"
                          dark
                          >SIGN IN</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="indigo darken-4">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello, Friend!</h1>
                        <h5 class="text-center">
                          Enter your personal details and start this journey
                          with us
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++"
                          >SIGN UP</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="indigo darken-4">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Welcome Back!</h1>
                        <h5 class="text-center">
                          To Keep connected with us, please login with your
                          personnel info
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--"
                          >Sign in</v-btn
                        >
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="
                            text-center
                            display-2
                            indigo--text
                            text--darken-4
                          "
                        >
                          Create Account
                        </h1>
                        <div class="mt-4" align="center">
                          <v-img
                            src="../assets/logotipo.png"
                            contain
                            height="100px"
                            width="150px"
                          >
                          </v-img>
                        </div>
                        <h4 class="text-center mt-4">
                          Ensure your email for registration
                        </h4>
                        <v-form>
                          <v-text-field
                            v-model="name"
                            label="Name"
                            prepend-icon="person"
                            type="text"
                            color="indigo darken-4"
                          />
                          <v-text-field
                            v-model="email"
                            label="Email"
                            prepend-icon="email"
                            type="text"
                            color="indigo darken-4"
                          />

                          <v-text-field
                            v-model="password"
                            label="Password"
                            prepend-icon="lock"
                            type="password"
                            color="indigo darken-4"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5 mb-5">
                        <v-btn
                          @click="register"
                          rounded
                          color="indigo darken-4"
                          dark
                          >SIGN UP</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>-->
      </v-col>
    </v-row>
    <Footer />
  </v-app>
</template>

<script>
import axios from "axios";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Footer,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      step: 1,
      show: true,
    };
  },
  methods: {
    login() {
      let loginUser = {
        email: this.email,
        password: this.password,
      };

      axios.post(`http://localhost:8001/login`, loginUser).then(
        (response) => {
          console.log(response);
          localStorage.setItem("token", response.data.token);
          //mudar aqui o estado de login
          this.$router.push("/");
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>

<style scoped>
#app {
  background-color: #00302e;

  height: auto;
  min-height: 100vh;
}

.title-prop {
  color: #00302e !important;
  font-size: 5vh;
  font-weight: 600;
  position: absolute;
  top: 20%;
}

.form-prop {
  position: absolute;
  top: 45%;
  width: 30vw;
  left: 50%;
  transform: translate(-50%, -50%);
}

.aut-btn {
  background-color: #00302e !important;
  color: #dfdcd7 !important;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3vh;
  height: 7vh !important;
  width: 30vw;
}

.pass-prop {
  color: #00302e !important;
  position: absolute;
  top: 67%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5vh;
  width: 30vw;
}

.create-acc-prop {
  color: #00302e !important;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5vh;
  width: 30vw;
}
</style>
