# Automatic Git Push Rule

Setiap kali melakukan perubahan atau perbaikan pada kode/file portofolio (HTML, CSS, JS, aset, dll):
1. Pastikan perbaikan berhasil diuji dan tidak merusak tampilan/fungsi.
2. Lakukan `git add -A`.
3. Lakukan `git commit -m "<pesan commit deskriptif>"`.
4. Lakukan `git push origin main` agar repositori GitHub dan deployment live selalu sinkron dengan versi terbaru secara otomatis tanpa perlu diminta berulang kali.
