<template>
  <div>
    <h1 class="mb-4">Contact List</h1>

    <div class="row" v-if="!loaded">
      <div class="col-12 col-sm-4" v-for="(value, index) in Array.from(Array(6).keys())" :key="index">
        <div class="ph-item">
          <div class="ph-col-12">
              <div class="ph-picture"></div>
              <div class="ph-row">
                  <div class="ph-col-4"></div>
                  <div class="ph-col-8 empty"></div>
                  <div class="ph-col-6"></div>
              </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row" v-if="loaded">
      <div class="card-deck">
        <div class="col-12 col-sm-12 col-md-12 col-lg-4" v-for="contact in contacts" :key="contact.id">
          <div class="card w-100 mb-4">
            <div class="card-header text-light bg-danger clearfix">
              <div class="float-left lead">{{ contact.name }}</div>
              <div class="float-right">
                <router-link :to="'/contact/' + contact.id" class="btn btn-light btn-sm">Edit</router-link>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">Phone: {{ contact.phone }}</p>
              <p class="card-text">Email: {{ contact.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      contacts: [],
      loaded: false,
    };
  },

  async mounted() {
    try {
      const response = await axios.get("/contacts")
      this.contacts = response.data;
      this.loaded = true
    } catch(e) {
      console.error(e)
    }
  }
}
</script>
