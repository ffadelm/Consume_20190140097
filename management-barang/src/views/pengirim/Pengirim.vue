<template>
  <div class="container mx-auto">
    <div class="mt-10">
      <div class="max-w-3xl mx-auto">
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
            >
              <div
                class="
                  shadow
                  overflow-hidden
                  border-b border-gray-200
                  sm:rounded-lg
                "
              >
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-200">
                    <tr>
                      <th
                        scope="col"
                        class="
                          px-6
                          py-3
                          text-left text-xs
                          font-medium
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                      >
                        Nama
                      </th>
                      <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr
                      v-for="(pengirim, index) in pengirims"
                      :key="pengirim.id"
                    >
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">
                          {{ pengirim.nama }}
                        </div>
                        <div class="text-sm text-gray-500">
                          {{ pengirim.kode }}
                        </div>
                      </td>
                      <td
                        class="
                          px-6
                          py-4
                          whitespace-nowrap
                          text-right text-sm
                          font-medium
                        "
                      >
                        <a
                          href="#"
                          @click.prevent="_riwayatPengiriman(pengirim.id)"
                          class="text-indigo-600 hover:text-indigo-900"
                          >Pengiriman</a
                        >
                        |
                        <a
                          href="#"
                          @click.prevent="_editPengirim(index)"
                          class="text-indigo-600 hover:text-indigo-900"
                          >Edit</a
                        >
                        |
                        <a
                          href="#"
                          @click.prevent="_hapusPengirim(pengirim.id)"
                          class="text-indigo-600 hover:text-indigo-900"
                          >Hapus</a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-2">
      <div class="max-w-3xl mx-auto">
        <router-link
          :to="{ name: 'tambahPengirim' }"
          class="
            shadow
            bg-blue-500
            border
            block
            border-gray-300
            text-white
            py-2
            text-center
            rounded-md
            text-sm
            font-medium
          "
        >
          Tambah pengirim
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      shippers: [],
      shipper: {
        id: "",
        nama: "",
        kode: "",
        pengiriman: [],
      },
    };
  },
  computed: {
    ...mapState("pengirim", ["pengirims"]),
  },
  methods: {
    ...mapActions("pengirim", ["getAllPengirim", "hapusPengirim"]),
    async _getAllPengirim() {
      try {
        await this.getAllPengirim();
      } catch (error) {
        alert(error);
      }
    },

    _riwayatPengiriman(id){
      //push agar bisa balik ke halaman sebelumnya
      this.$router.push({name: 'riwayat', params: {id: id}})
    },

    _editPengirim(index) {
      this.$store.state.pengirim.pengirim = this.pengirims[index];
      this.$router.push({ name: "updatePengirim" });
    },

    async _hapusPengirim(id) {
      if (!confirm("Apakah anda yakin akan menghapus pengirim ini?"))
        return false;

      try {
        await this.hapusPengirim(id);
        this._getAllPengirim();
      } catch (error) {
        alert(error.message);
      }
    },
  },
  created() {
    this._getAllPengirim();
  },
};
</script>

<style>
</style>