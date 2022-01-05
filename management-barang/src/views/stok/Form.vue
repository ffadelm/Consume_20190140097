<template>
  <div class="container mx-auto">
    <div class="mt-10">
      <form @submit.prevent="_kirimStok" class="max-w-sm mx-auto">
        <div class="mb-2">
          <label for="barang" class="block text-sm font-medium text-gray-700"
            >Barang</label
          >
          <select
            v-model="form.barangId"
            id="barang"
            name="barang"
            autocomplete="country-name"
            class="
              mt-1
              block
              w-full
              py-2
              px-3
              border-2 border-gray-300
              bg-white
              rounded-md
              shadow-sm
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
              sm:text-sm
            "
          >
            <option
              v-for="(barang) in barangs"
              :key="barang.id"
              :value="barang.id"
            >
              {{ barang.nama }}
            </option>
          </select>
        </div>
        <div class="mb-2">
          <label for="shipper" class="block text-sm font-medium text-gray-700"
            >Pengirim</label
          >
          <select
            v-model="form.shipperId"
            id="shipper"
            name="shipper"
            autocomplete="country-name"
            class="
              mt-1
              block
              w-full
              py-2
              px-3
              border-2 border-gray-300
              bg-white
              rounded-md
              shadow-sm
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
              sm:text-sm
            "
          >
            <option
              v-for="(pengirim) in pengirims"
              :key="pengirim.id"
              :value="pengirim.id"
            >
              {{ pengirim.kode + "-" + pengirim.nama }}
            </option>
          </select>
        </div>
        <div class="mb-2">
          <label for="jumlah" class="block text-sm font-medium text-gray-700"
            >Jumlah</label
          >
          <input
            v-model="form.stok"
            type="number"
            name="jumlah"
            id="jumlah"
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
            placeholder="Jumlah"
          />
        </div>
        <div class="mt-2">
          <button class="bg-gray-800 text-white block w-full py-2 rounded-md">
            Simpan
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Form",
  data() {
    return {
      form: {
        tipe: "IN",
        shipperId: "",
        barangId: "",
        stok: 0,
      },
    };
  },
  computed: {
    //mengampil dari store
    ...mapState("barang", ["barangs"]),
    ...mapState("pengirim", ["pengirims"]),
  },
  methods: {
    //mengambil data dari mapState
    ...mapActions("barang", ["getAllBarang"]),
    ...mapActions("pengirim", ["getAllPengirim"]),
    ...mapActions("stok", ["kirimStok"]),
    async _kirimStok() {
      try {
        await this.kirimStok(this.form)
        alert('Stok barang berhasil di ubah')
        this.$router.replace({ name: 'home' })
      } catch (e) {
        alert(e.message)
      }
    }
  },
  created() {
    //menangkap parameter
    this.form.tipe = this.$route.params.tipe;
    //menerima dari mapActions
    this.getAllBarang();
    this.getAllPengirim();
  },
};
</script>

<style>
</style>