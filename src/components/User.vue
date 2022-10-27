<script>
export default {
  data() {
    return {
      createForm: {
        firstname: "",
        lastname: "",
      },
      updateForm: {
        firstname: "Eliott",
        lastname: "Geoffroy",
      },
    };
  },
  methods: {
    submitForm(type) {
      console.log(type === "update" ? this.updateForm : this.createForm);
    },
  },
};
</script>
<template>
  <div class="user-bloc">
    <h2>User</h2>
    <form>
      <h3>Create user:</h3>
      <input
        class="form-control"
        placeholder="firstname"
        type="text"
        name="firstname"
        v-model="createForm.firstname"
      />
      <input
        class="form-control"
        placeholder="lastname"
        type="text"
        name="lastname"
        v-model="createForm.lastname"
      />
      <button
        v-on:click="submitForm('create')"
        type="button"
        class="btn btn-primary"
      >
        Submit
      </button>
    </form>
    <form>
      <h3>Update user:</h3>
      <input
        class="form-control"
        placeholder="firstname"
        v-model="updateForm.firstname"
        type="text"
        name="firstname"
      />
      <input
        class="form-control"
        placeholder="lastname"
        v-model="updateForm.lastname"
        type="text"
        name="lastname"
      />
      <button
        v-on:click="submitForm('update')"
        type="button"
        class="btn btn-primary"
      >
        Submit
      </button>
    </form>
  </div>
</template>
<style>
.user-bloc {
  margin: 10px;
  width: 340px;
  border: 2px solid rgb(171, 171, 171);
  border-bottom: 4px solid rgb(171, 171, 171);
  border-radius: 10px;
  padding: 20px;
}
</style>
