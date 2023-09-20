
# MongoDB

## Pengertian
MongoDB adalah salah satu sistem basis data NoSQL yang paling populer yang digunakan untuk menyimpan dan mengelola data dalam format dokumen. MongoDB adalah database berorientasi dokumen yang dirancang untuk mengatasi kebutuhan aplikasi modern yang memerlukan fleksibilitas dan skalabilitas dalam penyimpanan data.

## Apa kegunaannya
1. Basis Data Dokumen: MongoDB menyimpan data dalam bentuk dokumen, yang biasanya dalam format BSON (Binary JSON). Setiap dokumen adalah unit data yang mandiri, dan dokumen-dokumen ini dikelompokkan ke dalam koleksi yang setara dengan tabel dalam basis data relasional.

2. Skema Fleksibel: MongoDB mengizinkan skema yang fleksibel, yang berarti setiap dokumen dalam koleksi dapat memiliki struktur yang berbeda. Ini memudahkan pengembang untuk beradaptasi dengan perubahan persyaratan aplikasi tanpa perlu mengubah skema basis data.

3. Kemampuan Skalabilitas Horizontal: MongoDB dirancang untuk skalabilitas horizontal, yang berarti Anda dapat dengan mudah menambahkan lebih banyak server untuk menangani volume data yang lebih besar. Ini sangat berguna dalam aplikasi yang membutuhkan pertumbuhan yang cepat atau dalam lingkungan berbasis cloud.

4. Query dan Indeks: MongoDB mendukung query yang kuat dan dapat membuat indeks untuk mengoptimalkan kueri. Ini memungkinkan pencarian data yang efisien bahkan dalam dataset besar.

5. Dukungan untuk Replika Set: MongoDB memungkinkan Anda untuk mengatur replika set, yang adalah kelompok server MongoDB yang menggandakan data untuk redundansi dan ketersediaan tinggi. Replika set juga berguna untuk pemulihan bencana dan failover otomatis.

6. Transaksi: MongoDB mendukung transaksi untuk mengelola operasi yang melibatkan beberapa dokumen dalam transaksi tunggal. Ini memungkinkan Anda untuk menjalankan operasi seperti transfer dana dengan integritas data yang dijaga.

7. Dukungan untuk Geospasial: MongoDB memiliki dukungan bawaan untuk data geospasial, yang memungkinkan Anda untuk menyimpan dan mengelola data berdasarkan lokasi geografis.

8. Kode Sumber Terbuka: MongoDB tersedia sebagai perangkat lunak sumber terbuka (open-source), yang berarti Anda dapat menggunakannya secara gratis dan mengakses kode sumbernya.

## Cara menggunaannya
beberapa langkah berikut
### instal package mongodb
- jalankan `npm i mongodb` atau `npm install mongodb`

### mambuat datababase mongodb di mongodb.com
- daftar dan buat db di `mongodb.com` (pilih yg gratis)
- dapatkan url `mongodb+srv://root:<password>@mydb.axpeswz.mongodb.net/?retryWrites=true&w=majority`
- uji coba url di **MongoDB Compass** (install aplikasi)
- jika error masalah TSL, silakan atur networking access dan tambahkan IP Anda

