<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12" >
                        <h1
                          class="text-center display-2 indigo--text text--darken-4"
                        >Sign in to RASBet</h1>
                        <div class="mt-4" align="center">
                          <v-img 
                            src="../assets/logotipo.png"
                            contain
                            height="100px"
                            width="150px">                        
                            </v-img>
                        </div>
                        <h4 class="text-center mt-4">Ensure your email for registration</h4>
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
                        <v-btn @click="login" rounded color="indigo darken-4" dark>SIGN IN</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="indigo darken-4">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello, Friend!</h1>
                        <h5
                          class="text-center"
                        >Enter your personal details and start this journey with us</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="indigo darken-4">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Welcome Back!</h1>
                        <h5
                          class="text-center"
                        >To Keep connected with us, please login with your personnel info</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--">Sign in</v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 indigo--text text--darken-4">Create Account</h1>
                        <div class="mt-4" align="center">
                          <v-img 
                            src="../assets/logotipo.png"
                            contain
                            height="100px"
                            width="150px">                        
                            </v-img>
                        </div>
                        <h4 class="text-center mt-4">Ensure your email for registration</h4>
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
                        <v-btn @click="register" rounded color="indigo darken-4" dark>SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import axios from 'axios'
import Footer from '../components/Footer'

export default {
    components: { 
      Footer
    },
  data() {
      return{
          name: '',
          email: '',
          password: '',
          step: 1
      }
    
  },
  methods: {
      register(){
          let newUser = {
              username: this.name,
              email: this.email,
              password: this.password
          }
          axios.post(`http://localhost:8001/user`, newUser)
            .then(function(response){
              console.log(response)
            },(error) =>{
                console.log(error);
            }); 
      },

      login(){
          let loginUser = {
              email: this.email,
              password: this.password
          }

          axios.post(`http://localhost:8001/login`, loginUser)
            .then(response => {
              console.log(response)
              localStorage.setItem('token', response.data.token)
              this.$router.push('/detalhes')
            },(error) =>{
              console.log(error);
          }); 
      }
  }

};
</script>

<style scoped>
  #app {

      background: url('../assets/backgroundauth.jpg')
      no-repeat center center fixed !important;
      height: auto;
      min-height: 100vh;
    
  }
</style>
