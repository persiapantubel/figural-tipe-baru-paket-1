import type { BoxData } from '../components/Box';

export interface Soal {
  id: number;
  kunci: string;
  pembahasan: string[];
  boxes: BoxData[];
  options: {
    label: string;
    center: { t: string; f: boolean; dots?: number; inT?: string; inF?: boolean };
    tl: { t: string; f: boolean };
    tr: { t: string; f: boolean };
    bl: { t: string; f: boolean };
    br: { t: string; f: boolean };
  }[];
}

export const soalData: Soal[] = [
  {
    id: 1,
    kunci: 'D',
    pembahasan: [
      "1. Bangun Tengah: Jumlah sisi bertambah satu setiap kotak berurutan (Segi-3, Segi-4, Segi-5, Segi-6). Pada kotak 5 berubah menjadi Segi-7.",
      "2. Warna Bangun Tengah: Berganti warna secara bergantian setiap kotak (Putih, Hitam, Putih, Hitam). Pada kotak 5 berubah menjadi Putih.",
      "3. Rotasi Elemen Sudut: Seluruh elemen di keempat sudut berputar searah jarum jam sebanyak satu posisi (90 derajat) setiap berpindah kotak.",
      "4. Warna Elemen Sudut: Elemen apa pun yang masuk menempati posisi Kiri Atas akan selalu mengalami pembalikan warna (Hitam menjadi Putih, atau Putih menjadi Hitam). Posisi lainnya mempertahankan warna yang dibawa.",
      "5. Hasil Akhir Kotak 5: Dari kotak 4, Segitiga Hitam berputar ke Kiri Atas dan warnanya terbalik menjadi Segitiga Putih. Lingkaran Hitam berputar ke Kanan Atas. Persegi Putih berputar ke Kanan Bawah. Bintang Hitam berputar ke Kiri Bawah."
    ],
boxes: [
      { tl: { t: 'trapesium', f: false }, tr: { t: 'elips', f: true }, bl: { t: 'tambah', f: true, dots: 1 }, br: { t: 'jajargenjang', f: false, rot: 'horizontal' } },
      { tl: { t: 'elips', f: false }, tr: { t: 'jajargenjang', f: true, rot: 'vertikal' }, bl: { t: 'trapesium', f: true }, br: { t: 'tambah', f: false, dots: 2 } },
      { tl: { t: 'jajargenjang', f: false, rot: 'horizontal' }, tr: { t: 'tambah', f: true, dots: 3 }, bl: { t: 'elips', f: true }, br: { t: 'trapesium', f: false } },
      { tl: { t: 'tambah', f: false, dots: 4 }, tr: { t: 'trapesium', f: true }, bl: { t: 'jajargenjang', f: true, rot: 'vertikal' }, br: { t: 'elips', f: false } },
    ],
    options: [
      { label: 'A', tl: { t: 'trapesium', f: false }, tr: { t: 'elips', f: false }, bl: { t: 'tambah', f: true, dots: 5 }, br: { t: 'jajargenjang', f: false, rot: 'vertikal' } },
      { label: 'B', tl: { t: 'elips', f: true }, tr: { t: 'trapesium', f: false }, bl: { t: 'jajargenjang', f: true, rot: 'horizontal' }, br: { t: 'tambah', f: false, dots: 5 } },
      { label: 'C', tl: { t: 'trapesium', f: false }, tr: { t: 'elips', f: true }, bl: { t: 'tambah', f: true, dots: 5 }, br: { t: 'jajargenjang', f: false, rot: 'horizontal' } },
      { label: 'D', tl: { t: 'trapesium', f: false }, tr: { t: 'elips', f: true }, bl: { t: 'tambah', f: true, dots: 4 }, br: { t: 'jajargenjang', f: false, rot: 'horizontal' } },
      { label: 'E', tl: { t: 'tambah', f: false, dots: 5 }, tr: { t: 'trapesium', f: true }, bl: { t: 'elips', f: true }, br: { t: 'jajargenjang', f: false, rot: 'vertikal' } },
    ]
  },
  {
    id: 2,
    kunci: 'B',
    pembahasan: [
      "1. Bangun Tengah (Luar): Jumlah sisi berkurang satu setiap kotak berurutan (Segi-8, Segi-7, Segi-6, Segi-5). Pada kotak 5 berubah menjadi Segi-4.",
      "2. Bangun Tengah (Dalam): Jumlah titik bertambah satu setiap kotak (1, 2, 3, 4). Pada kotak 5 berubah menjadi 5 titik.",
      "3. Pergeseran Elemen Sudut: Posisi keempat elemen sudut bergeser berlawanan arah jarum jam dengan lompatan yang bertambah. Kotak 1 ke 2 bergeser 1 posisi. Kotak 2 ke 3 bergeser 2 posisi. Kotak 3 ke 4 bergeser 3 posisi. Kotak 4 ke 5 bergeser 4 posisi (kembali ke tempat semula seperti di Kotak 4).",
      "4. Warna Elemen Sudut: Berlaku aturan statis ruang. Elemen apa pun yang sedang berada di posisi Kanan Bawah otomatis diarsir Hitam, sedangkan elemen di tiga posisi lainnya otomatis menjadi Putih.",
      "5. Hasil Akhir Kotak 5: Karena pergeseran sejauh empat posisi, tata letak bangun kembali sama persis dengan kotak 4. Warnanya mengikuti aturan statis ruang tersebut."
    ],
boxes: [
      { tl: { t: 'hati' }, tr: { t: 'panah', rot: '0 derajat' }, bl: { t: 'bulan', hadap: 'kiri' }, br: { t: 'bunga', kelopak: 8 } },
      { tl: { t: 'bunga', kelopak: 7 }, tr: { t: 'panah', rot: '45 derajat' }, bl: { t: 'bulan', hadap: 'kanan' }, br: { t: 'hati' } },
      { tl: { t: 'bunga', kelopak: 6 }, tr: { t: 'bulan', hadap: 'kiri' }, bl: { t: 'panah', rot: '90 derajat' }, br: { t: 'hati' } },
      { tl: { t: 'hati' }, tr: { t: 'bulan', hadap: 'kanan' }, bl: { t: 'panah', rot: '135 derajat' }, br: { t: 'bunga', kelopak: 5 } },
    ],
    options: [
      { label: 'A', tl: { t: 'hati' }, tr: { t: 'bulan', hadap: 'kiri' }, bl: { t: 'panah', rot: '180 derajat' }, br: { t: 'bunga', kelopak: 4 } },
      { label: 'B', tl: { t: 'bunga', kelopak: 4 }, tr: { t: 'panah', rot: '180 derajat' }, bl: { t: 'bulan', hadap: 'kanan' }, br: { t: 'hati' } },
      { label: 'C', tl: { t: 'hati' }, tr: { t: 'panah', rot: '135 derajat' }, bl: { t: 'bulan', hadap: 'kiri' }, br: { t: 'bunga', kelopak: 4 } },
      { label: 'D', tl: { t: 'hati' }, tr: { t: 'panah', rot: '180 derajat' }, bl: { t: 'bulan', hadap: 'kanan' }, br: { t: 'bunga', kelopak: 4 } },
      { label: 'E', tl: { t: 'hati' }, tr: { t: 'panah', rot: '180 derajat' }, bl: { t: 'bulan', hadap: 'kiri' }, br: { t: 'bunga', kelopak: 4 } },
    ]
  },
  {
    id: 3,
    kunci: 'E',
    pembahasan: [
      "1. Bangun Tengah Luar: Bangun terluar berwarna hitam terus berkurang satu sisi setiap kotak (Segi-7, Segi-6, Segi-5, Segi-4). Pada kotak 5 berubah menjadi Segi-3 Hitam.",
      "2. Bangun Tengah Dalam: Bangun bagian dalam berwarna putih terus bertambah satu sisi setiap kotak (Segi-3, Segi-4, Segi-5, Segi-6). Pada kotak 5 berubah menjadi Segi-7 Putih.",
      "3. Pertukaran Posisi Sudut: Elemen diagonal Kiri Atas bertukar tempat dengan Kanan Bawah SELALU pada setiap perpindahan kotak. Elemen diagonal Kanan Atas bertukar dengan Kiri Bawah SECARA BERGANTIAN (tukar, diam, tukar, diam). Untuk menuju kotak 5, posisi Kanan Atas dan Kiri Bawah diam/tidak saling bertukar.",
      "4. Perubahan Bentuk Sudut: Seluruh elemen mengalami evolusi bentuk ke tahap selanjutnya setiap berpindah kotak mengikuti siklus pasti: Lingkaran menjadi Persegi, Persegi menjadi Segitiga, Segitiga menjadi Bintang, Bintang menjadi Belah Ketupat, dan Belah Ketupat kembali menjadi Lingkaran.",
      "5. Hasil Akhir Kotak 5: Terapkan pertukaran posisi dari kotak 4 lalu ubah masing-masing bentuknya 1 tahap sesuai siklus di atas."
    ],
boxes: [
      { tl: { t: 'silinder', f: false, pos: 'tegak' }, tr: { t: 'kerucut', f: false }, bl: { t: 'kubus', f: true, titik: 2 }, br: { t: 'piramida', f: false } },
      { tl: { t: 'piramida', f: false }, tr: { t: 'silinder', f: false, pos: 'mendatar' }, bl: { t: 'kerucut', f: true }, br: { t: 'kubus', f: false, titik: 4 } },
      { tl: { t: 'kubus', f: false, titik: 6 }, tr: { t: 'piramida', f: false }, bl: { t: 'silinder', f: true, pos: 'tegak' }, br: { t: 'kerucut', f: false } },
      { tl: { t: 'kerucut', f: false }, tr: { t: 'kubus', f: false, titik: 8 }, bl: { t: 'piramida', f: true }, br: { t: 'silinder', f: false, pos: 'mendatar' } },
    ],
    options: [
      { label: 'A', tl: { t: 'silinder', f: false, pos: 'mendatar' }, tr: { t: 'kerucut', f: true }, bl: { t: 'kubus', f: false, titik: 10 }, br: { t: 'piramida', f: false } },
      { label: 'B', tl: { t: 'silinder', f: false, pos: 'tegak' }, tr: { t: 'kerucut', f: false }, bl: { t: 'kubus', f: true, titik: 10 }, br: { t: 'piramida', f: false } },
      { label: 'C', tl: { t: 'silinder', f: false, pos: 'tegak' }, tr: { t: 'kerucut', f: false }, bl: { t: 'kubus', f: true, titik: 8 }, br: { t: 'piramida', f: false } },
      { label: 'D', tl: { t: 'piramida', f: false }, tr: { t: 'silinder', f: false, pos: 'tegak' }, bl: { t: 'kerucut', f: true }, br: { t: 'kubus', f: false, titik: 10 } },
      { label: 'E', tl: { t: 'silinder', f: true, pos: 'tegak' }, tr: { t: 'kerucut', f: false }, bl: { t: 'kubus', f: false, titik: 10 }, br: { t: 'piramida', f: false } },
    ]
  },
  {
];

export default soalData;
