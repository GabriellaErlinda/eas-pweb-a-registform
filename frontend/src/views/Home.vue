<template>
  <div>
    <h1 class="mb-4">Registration Form</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">Nama:</label>
        <input type="text" class="form-control" v-model="formData.name" required />
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input type="email" class="form-control" v-model="formData.email" required />
      </div>

      <div class="mb-3">
        <label for="birthdate" class="form-label">Tanggal Lahir:</label>
        <input type="date" class="form-control" v-model="formData.birthdate" required />
      </div>

      <div class="mb-3">
        <label for="school" class="form-label">Asal Sekolah:</label>
        <input type="text" class="form-control" v-model="formData.school" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Gender:</label>
        <div>
          <label class="form-check-label">
            <input type="radio" class="form-check-input" v-model="formData.gender" value="Laki-laki" />
            Laki-laki
          </label>
        </div>
        <div>
          <label class="form-check-label">
            <input type="radio" class="form-check-input" v-model="formData.gender" value="Perempuan" />
            Perempuan
          </label>
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label">Status:</label>
        <div>
          <label class="form-check-label">
            <input type="radio" class="form-check-input" v-model="formData.status" value="Waiting" />
            Waiting
          </label>
        </div>
        <div>
          <label class="form-check-label">
            <input type="radio" class="form-check-input" v-model="formData.status" value="Rejected" />
            Rejected
          </label>
        </div>
        <div>
          <label class="form-check-label">
            <input type="radio" class="form-check-input" v-model="formData.status" value="Accepted" />
            Accepted
          </label>
        </div>
      </div>

      <div class="mb-3">
        <label for="registrationDate" class="form-label">Tanggal Pendaftaran:</label>
        <input type="date" class="form-control" v-model="formData.registrationDate" required />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        birthdate: '',
        school: '',
        gender: '',
        status: 'Waiting',
        registrationDate: '',
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:3000/api/Pendaftaran', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log('Registration successful', responseData);
      } catch (error) {
        console.error('Error submitting registration form', error.message);
      }
    },
  },
};
</script>
