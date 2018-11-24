<template>
  <form @submit.prevent="save">
    <div class="row">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6 offset-sm-1 offset-md-2 offset-lg-3">
        <h2>
          <router-link to="/" class="mr-4 btn btn-outline-secondary">&lt;</router-link>
          <span v-if="!editMode">New</span>
          <span v-if="editMode">Edit</span>
          Contact
        </h2>
        <hr>
        <div class="mb-3">
          <label>Name</label>
          <input class="form-control" type="text" required v-model="name">
        </div>
        <div class="mb-3">
          <label>Phone</label>
          <input class="form-control" type="text" v-model="phone">
        </div>
        <div class="mb-3">
          <label>Email</label>
          <input class="form-control" type="email" v-model="email">
        </div>
        <div class="mb-3 clearfix">
          <div class="float-left">
            <button type="submit" class="btn btn-primary">Save</button>
            <span v-if="error" class="text-danger">{{ error }}</span>
          </div>
          <div class="float-right">
            <button v-if="editMode" type="button" @click="remove" class="btn btn-block btn-outline-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {

  computed: {
    editMode() {
      return !!this.$route.params.id
    }
  },

  data() {
    return {
      error: null,
      name: '',
      phone: '',
      email: '',
    }
  },

  async mounted() {
    this.initialize()
  },

  methods: {

    async initialize() {
      try {
        if (this.editMode) {
          const id = this.$route.params.id
          const {data} = await axios.get(`/contacts/${id}`)
          this.name = data.name
          this.phone = data.phone
          this.email = data.email
        }
      } catch (e) {
        console.error(e)
        this.error = e.message
      }
    },

    async remove() {
      try {
        if (confirm('Are you sure?')) {
          const id = this.$route.params.id
          await axios.delete(`/contacts/${id}`)
          this.$router.replace('/')
        }
      } catch(e) {
        console.error(e)
        this.error = e.message
      }
    },

    async save() {
      try {
        const payload = {
          name: this.name,
          phone: this.phone,
          email: this.email,
        }

        if (this.editMode) {
          const id = this.$route.params.id
          await await axios.put(`/contacts/${id}`, payload)
        } else {
          await await axios.post('/contacts', payload)
        }

        this.name = ''
        this.phone = ''
        this.email = ''

        this.$router.push('/')

      } catch(e) {
        console.error(e)
        this.error = e.message
      }
    }
  }

};
</script>
