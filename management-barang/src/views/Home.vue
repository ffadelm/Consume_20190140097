<template>
  <div class="container mx-auto">
    <div class="mt-10">
      <div class="flex items-center justify-center space-x-4">
        <router-link
          :to="{ name: 'stok', params: { tipe: 'IN' } }"
          class="
            bg-white
            border-2 border-gray-900
            text-gray-900
            px-14
            py-6
            rounded-md
            text-sm
            font-medium
          "
        >
          <img src="img/001.png" alt="" class="h-14 ml-4" />
          Barang Masuk
        </router-link>
        <router-link
          :to="{ name: 'stok', params: { tipe: 'OUT' } }"
          class="
            bg-white
            border-2 border-gray-900
            text-gray-900
            px-14
            py-6
            rounded-md
            text-sm
            font-medium
          "
        >
          <img src="img/002.png" alt="" class="h-14 ml-4" />
          Barang Keluar
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
