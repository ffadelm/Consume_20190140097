<template>
  <div class="container mx-auto">
    <div class="mt-10">
      <form @submit.prevent="_updatePengirim" class="max-w-sm mx-auto">
        <div class="mb-2">
          <label for="nama" class="block text-sm font-medium text-gray-700"
            >Nama pengirim</label
          >
          <input
            v-model="form.nama"
            type="text"
            name="price"
            id="nama"
            class="
              border-2
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              py-2
              px-3
              sm:text-sm
              border-gray-300
              rounded-md
            "
            placeholder="Nama pengirim"
          />
        </div>
        <div class="mb-2">
          <label for="code" class="block text-sm font-medium text-gray-700"
            >Kode pengirim</label
          >
          <input
            v-model="form.kode"
            type="text"
            name="price"
            id="code"
            class="
              border-2
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              py-2
              px-3
              sm:text-sm
              border-gray-300
              rounded-md
            "
            placeholder="Kode pengirim"
          />
        </div>
        <div class="mt-2">
          <button
            type="submit"
            class="bg-gray-800 text-white block w-full py-2 rounded-md"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        nama: '',
        kode : ''
      }
    }
  },
  methods: {
    ...mapActions('pengirim', ['updatePengirim']),
    async _updatePengirim() {
      try {
        await this.updatePengirim(this.form)
        this.$router.replace({ name: 'pengirim'})
      } catch (e) {
        alert(e.message)
      }
    }
  },
  created() {
    this.form = this.$store.state.pengirim.pengirim
  }
};
</script>

<style>
</style>