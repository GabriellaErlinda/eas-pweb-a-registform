<template>
    <div class="container-fluid" style="display:inline;">
      <div class="card">
      <h2 class="card-header text-center text-warning">Registration Form</h2>
        <div class="card-body" style="margin-left: 1rem; margin-right: 1rem;">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name" class="form-label"><strong>Nama:</strong></label>
              <input type="text" class="form-control" id="name" v-model="formData.name" placeholder="Enter your name" required />
            </div>
            <br>
  
            <div class="form-group">
              <label for="email" class="form-label"><strong>Email:</strong></label>
              <input type="email" class="form-control" id="email" v-model="formData.email" placeholder="Enter email" required />
            </div>
            <br>
  
            <div class="form-group">
              <label for="Tanggal_Lahir" class="form-label"><strong>Tanggal Lahir:</strong></label>
              <input type="date" class="form-control" id="Tanggal_Lahir" v-model="formData.Tanggal_Lahir" required />
            </div>
            <br>
  
            <div class="form-group">
              <label for="Asal_Sekolah" class="form-label"><strong>Asal Sekolah:</strong></label>
              <input type="text" class="form-control" id="Asal_Sekolah" v-model="formData.Asal_Sekolah" placeholder="Enter your school" required />
            </div>
            <br>
  
            <div class="form-group">
              <label class="form-label"><strong>Gender:</strong></label>
              <div class="form-check">
                <input type="radio" class="form-check-input" id="LakiLaki" v-model="formData.Gender" value="Laki-laki" />
                <label for="LakiLaki" class="form-check-label">Laki-laki</label>
              </div>
              <div class="form-check">
                <input type="radio" class="form-check-input" id="Perempuan" v-model="formData.Gender" value="Perempuan" />
                <label for="Perempuan" class="form-check-label">Perempuan</label>
              </div>
            </div>
            <br>
  
            <div class="form-group">
              <label for="Tanggal_Pendaftaran" class="form-label"><strong>Tanggal Pendaftaran:</strong></label>
              <input type="date" class="form-control" v-model="formData.Tanggal_Pendaftaran" id="Tanggal_Pendaftaran" required />
            </div>
            <br>
  
            <button type="submit" class="btn btn-primary">Submit Registration</button>
            <router-link to="/status" class="btn btn-warning" style="margin-left: 10px;">Check Status</router-link>
  
          </form>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
      data() {
          return {
              formData: {
                  name: "",
                  email: "",
                  Tanggal_Lahir: "",
                  Asal_Sekolah: "",
                  Gender: "",
                  Tanggal_Pendaftaran: "",
              },
          };
      },
      methods: {
      async submitForm() {
        try {
          const apiUrl = "http://localhost:3100/api/Pendaftaran";
  
          const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.formData),
          });
  
          const responseData = await response.json();
  
          console.log("Registration Successfully Submitted:", responseData);
  
          // Reset form after submission
          this.formData = { 
            name: "",
            email: "",
            Tanggal_Lahir: "",
            Asal_Sekolah: "",
            Gender: "",
            Tanggal_Pendaftaran: "",
          };
          this.$router.push('/status');
        } catch (error) {
          console.error("Submission Error", error);
        }
      },
    },
  };
  </script>
  