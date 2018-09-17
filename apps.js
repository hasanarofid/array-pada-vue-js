new Vue({
  el: "#app",
  data: {
    kendaraan: ["mobil", "motor", 3]
  }
});

new Vue({
  el: "#app2",
  data: {
    kendaraannya: ["mobil", "motor", 3]
  }
});

new Vue({
  el: "#app3",
  data: {
    isi: "",
    kendaraannya2: ["mobil", "motor", 3]
  },
  methods: {
    tambah: function() {
      this.kendaraannya2.push(this.isi);
      this.isi = "";
    },
    hapus(index) {
      this.kendaraannya2.splice(index, 1);
    }
  }
});

new Vue({
  el: "#app5",
  data: {
    cararray: "",
    kendaraannya3: [
      { jenis: "mobil", merk: "BMW", warna: "hitam" },
      { jenis: "motor", merk: "yamaha", warna: "merah" },
      { jenis: "sepeda", merk: "phoenix", warna: "biru" }
    ]
  },
  computed: {
    filterkendaraan: function() {
      return this.kendaraannya3.filter(kd4 => {
        return kd4.jenis.match(this.cararray);
      });
    }
  }
});
