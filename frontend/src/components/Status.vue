<template>
  <div class="card text-center" style="display:flex;">
    <h2 class="card-header">Check Your Registration Status</h2>
    <form @submit.prevent="checkStatus" class="card-body">
      <div class="form-group">
        <label for="email" class="form-label">Email address</label>
        <input type="email" id="email" v-model="email" required class="form-control form-control-sm" placeholder="Enter email" />
      </div>
      <br>
      <button type="submit" class="btn btn-info">
        Check Status
      </button>
    </form>

    <div v-if="status !== null">
      <h3 class="card-body" style="font-size: large;">Registration Status:</h3>
      <p v-html="status"></p>
    </div>
    <br>

    <router-link to="/" class="btn btn-warning">Back to home</router-link>

  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      status: null,
    };
  },
  computed: {
    status() {
      switch (this.status) {
        case 'Waiting':
          return '--WAITING-- <br> Your form has been submitted, please wait for further approval';
        case 'Accepted':
          return '--ACCEPTED-- <br> Registration successful, your registration form has been approved';
        case 'Rejected':
          return '--REJECTED-- <br> Registration failed, your registration form has been rejected, please re-check your registration data';
        default:
          return '';
      }
    },
  },
  methods: {
    async checkStatus() {
      try {
        const apiUrl = `http://localhost:3100/api/Pendaftaran?email=${this.email}`;
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log("API Response:", responseData);

          if (responseData.docs && responseData.docs.length > 0) {
            const userDocument = responseData.docs.find(
              (doc) => doc.email === this.email
            );

            if (userDocument) {
              this.status = userDocument.status;
            } else {
              console.error("Error: Email not found in the API response.");
            }
          } else {
            console.error("Error: No documents found in the API response.");
          }
        } else {
          console.error(
            "Failed to fetch status. Status code:",
            response.status
          );
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>