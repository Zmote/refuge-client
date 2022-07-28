<template>
  <div class="container-fluid">
    <div class="col-md-6 mx-auto">
      <div class="row mt-2">
        <div class="col-md-12">
          <b-card no-body>
            <b-tabs card>
              <b-tab title="Sign In" active>
                <b-card-text>
                  <sign-in></sign-in>
                </b-card-text>
              </b-tab>
              <b-tab title="Sign Up">
                <b-card-text>
                  <sign-up></sign-up>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";

export default {
  name: "AuthApp",
  components: { SignIn, SignUp },
};
</script>

<style scoped></style>
