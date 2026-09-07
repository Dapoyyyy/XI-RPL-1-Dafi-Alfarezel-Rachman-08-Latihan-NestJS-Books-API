
# 1.Buka aplikasi Postman, lalu buat Collection baru dengan nama "Latihan NestJS - Books API".

# 2.Buat request baru: GET  http://localhost:3000/books — klik Send, pastikan muncul data buku "Laskar Pelangi" (status 200 OK).

<img width="1600" height="899" alt="image" src="https://github.com/user-attachments/assets/fd4da339-7279-4338-9637-c349020094c1" />

# 3.Buat request baru: POST  http://localhost:3000/books — pada tab Body, pilih raw dan format JSON, lalu isi data berikut, kemudian klik Send:

<img width="1600" height="899" alt="image" src="https://github.com/user-attachments/assets/343fc226-0d74-4e95-9013-ba5c271f0927" />

# 4.Ulangi request GET /books — pastikan data buku baru sudah muncul di dalam daftar.

<img width="1906" height="1078" alt="image" src="https://github.com/user-attachments/assets/5ea66dcc-4f0c-45d7-b050-4af6796beb67" />


# 5.Buat request baru: GET  http://localhost:3000/books/2 — pastikan menampilkan detail buku dengan id = 2.

<img width="1600" height="899" alt="image" src="https://github.com/user-attachments/assets/da55e23f-c6cc-4c9f-9847-537116cd7586" />

# 6.Buat request baru: PUT  http://localhost:3000/books/2 — pada Body (raw JSON), isi { "tahun": 1981 }, lalu Send. Pastikan hanya field tahun yang berubah.

<img width="1917" height="1072" alt="image" src="https://github.com/user-attachments/assets/3c601eeb-fcad-41af-8785-7c02247af2f7" />

# 7.Buat request baru: DELETE  http://localhost:3000/books/2 — klik Send, pastikan muncul pesan berhasil dihapus.

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/fdd65702-96b0-4a0a-9a85-30c46b25fe6a" />

# 8.Verifikasi dengan GET /books sekali lagi — pastikan buku dengan id = 2 sudah tidak ada.

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/fb329f78-559c-472e-94cc-7a848c274adc" />

# 9.(Opsional) Coba akses GET /books/99 — perhatikan response error 404 Not Found sesuai exception yang ditulis pada Service.

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/d5e3849c-32f9-40f1-acb1-fec296dfeb74" />





