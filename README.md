# What I learned so far

- setState() ternyata berjalan secara asynchronous, jadi tak bisa di cek/debug dengan console.log(this.state), karena akan selesai dijalankan lebih dulu sebelum setState()

- Kita bisa mengirim state-nya parent component ke child component sebagai props sehingga bisa dimodifikasi di child component

```js
constructor(props) {
  super(props)

  this.state = {
    contents: [
      'the content here'
    ]
  }
}

render() {
  return (
    <ListRoom list={this.state.contents} />
  )
}
```

(juga berlaku untuk method, sehingga method-nya parent component bisa dijalankan/execute oleh child component)

```js
applyFilter() {
  // isi method applyFilter()
}

render() {
  return (
    <ListRoom applyFilter={this.applyFilter} />
  )
}
```

- Tapi mengirim state ke child component menjadi sangat sulit ketika component tree sudah sangat besar dan complex. Terjadi "Prop drilling", dan state dari root component harus di kirim ke sangat banyak child component, ini memakan waktu lama dan sangat rentan error. Sebagai gantinya, lebih baik menggunakan `useContext` untuk keperluan seperti itu.

- Entah kenapa, fitur "hot reloading" kadang tidak berfungsi, jadi repot harus refresh manual halamannya setiap melakukan perubahan. Tapi, dengan menggunakan `npm run start -FAST_REFRESH=true`, fitur hot reloadingnya kembali berfungsi.