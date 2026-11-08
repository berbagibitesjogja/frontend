import Link from 'next/link'
import Image from 'next/image'
import ArrowLeft from 'public/svg/arrow-left.svg'
import ArrowRight from 'public/svg/arrow-right.svg'
import { CircleCheck, ClipboardPen, Handshake, Package, Phone, ThermometerSun, Utensils } from 'lucide-react';
import Ajakan from '@/components/Ajakan';
import StoryRescueCard from '@/components/StoryRescueCard';

const ceritaKeberhasilan = [
  {
    image: "/makan.png",
    title: "Kolaborasi dengan Restoran Lokal",
    description: "Program kerjasama dengan 5 restoran di Malioboro berhasil menyelamatkan 500kg makanan dalam sebulan.",
    link: "/",
    flag: "Restoran",
    aos: 'fade-right',
    date: '20 Januari 2025'
  },
  {
    image: "/makan.png",
    title: "Bantuan untuk Panti Asuhan",
    description: "Distribusi makanan rutin ke 3 panti asuhan di Yogyakarta membantu 150 anak mendapatkan nutrisi lebih baik.",
    link: "/",
    flag: "Komunitas",
    aos: 'fade-up',
    date: '20 Januari 2025'
  },
  {
    image: "/makan.png",
    title: "Kemitraan Hotel Bintang 5",
    description: "Inisiatif dengan jaringan hotel menghasilkan penyelamatan 300kg makanan berkualitas per minggu.",
    link: "/",
    flag: "Hotel",
    aos: 'fade-left',
    date: '20 Januari 2025'
  },
]

export default function Page() {
  return (
    <>
      <section className='bg-sky-100 -mx-2 md:-mx-32 py-6 text-center '>
        <div className="ml-8 md:ml-32">
          <div className='flex flex-row gap-x-2'>
            <p className='text-gray-500'>Beranda </p>
            <p className=''>{' > '}</p>
            <p className='text-gray-500'> Program</p>
          </div>
          <Link href={'./'} className='flex flex-row text-navy'><Image width={15} src={ArrowLeft} alt='icon-air' className='mt-2 mr-2' />Kembali ke Beranda</Link>
        </div>

        <div className='py-12 text-center px-3'>
          <h1 className='text-3xl md:text-4xl font-bold'>Program Penyelamatan Makanan</h1>
          <p className='mt-8 font-medium text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-sm md:text-lg'>Menyelamatkan makanan berlebih dari pembuangan dan mengubahnya menjadi berkah bagi sesama adalah langkah awal menuju ketahanan pangan nasional</p>
          <div className='bg-navy my-8 h-1 w-30 m-auto'></div>
        </div>
      </section>
      <section className='-mx-2 md:-mx-32 py-12 text-center'>
        <div className='py-12 text-center px-3'>
          <h1 className='text-3xl md:text-4xl font-bold'>Proses penyelamatan</h1>
          <p className='mt-8 font-medium text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-sm md:text-lg'>Setiap langkah dalam proses penyelamatan makanan dirancang untuk memastikan kualitas dan keamanan</p>
          <div className='bg-navy my-8 h-1 w-30 m-auto'></div>


          <div className='flex justify-between my-6 gap-x-6 gap-y-3 px-6 md:px-48 flex-col md:flex-row'>
            <div className='text-left items-start relative bg-white shadow-xl rounded-md py-8 px-3 w-full md:w-1/4 flex flex-col gap-y-2'>
              <div className='bg-navy ml-2 p-3 shadow-md rounded-full'>
                <Phone className='text-white' />
              </div>
              <h2 className='ml-2 font-semibold text-md'>1. Identifikasi</h2>
              <div className='ml-2 text-slate-500'>Menerima informasi dari mitra tentang makanan berlebih yang perlu diselamatkan</div>
            </div>
            <Image
              width={25}
              src={ArrowRight}
              alt="arrow-right"
              className='md:mt-12 mt-2 rotate-90 md:rotate-0 m-auto'
            />

            <div className='text-left relative bg-white shadow-xl rounded-md py-8 px-3 w-full md:w-1/4 flex flex-col gap-y-2'>
              <div className='ml-2 bg-navy m-auto p-3 shadow-md rounded-full'>
                <ClipboardPen className='text-white' />
              </div>
              <h2 className='ml-2 font-semibold text-md'>2. Evaluasi</h2>
              <div className='ml-2 text-slate-500'>Tim ahli mengevaluasi kelayakan dan keamanan makanan untuk dikonsumsi.</div>
            </div>
            <Image
              width={25}
              src={ArrowRight}
              alt="arrow-right"
              className='md:mt-12 mt-2 rotate-90 md:rotate-0 m-auto'
            />

            <div className='text-left relative bg-white shadow-xl rounded-md py-8 px-3 w-full md:w-1/4 flex flex-col gap-y-2'>
              <div className='ml-2 bg-navy m-auto p-3 shadow-md rounded-full'>
                <ThermometerSun className='text-white' />
              </div>
              <h2 className='ml-2 font-semibold text-md'>3. Pengambilan</h2>
              <div className='ml-2 text-slate-500'>Pengambilan makanan dengan kendaraan berpendingin khusus untuk menjaga kualitas.</div>
            </div>
            <Image
              width={25}
              src={ArrowRight}
              alt="arrow-right"
              className='md:mt-12 mt-2 rotate-90 md:rotate-0 m-auto'
            />

            <div className='text-left bg-white shadow-xl rounded-md py-8 px-3 w-full md:w-1/4 flex flex-col gap-y-2'>
              <div className='ml-2 bg-navy m-auto p-3 shadow-md rounded-full'>
                <Package className='text-white' />
              </div>

              <h2 className='ml-2 font-semibold text-md'>4. Penyimpanan</h2>
              <div className='ml-2 text-slate-500'>Penyimpanan dengan suhu terkontrol sebelum didistribusikan ke penerima manfaat.</div>
            </div>

          </div>
        </div>
      </section>

      <section className='-mx-2 md:-mx-32 py-12 bg-navy-light'>
        <div className='text-center px-3'>
          <h1 className='text-3xl md:text-4xl font-bold'>Statistik Penyelamatan</h1>
          <p className='mt-8 font-medium text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-sm md:text-lg'>Data pencapaian program penyelamatan makanan tahun 2025</p>
          <div className='bg-navy my-8 h-1 w-30 m-auto'></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-32">
          {/* Left Chart: Makanan Terselamatkan per Kategori */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Makanan Terselamatkan per Kategori</h2>
            <div className="flex items-end content-end h-40 w-full">
              <div className='h-full bg-navy w-[40%] justify-center items-center flex'>40%</div>
              <div className='h-full bg-tosca w-[35%] justify-center items-center flex'>35%</div>
              <div className='h-full bg-navy-light w-[25%] justify-center items-center flex'>25%</div>
            </div>
            <div className="flex items-end content-end w-full mt-3">
              <div className='w-[40%] justify-center items-center flex text-sm'>Siap Saji</div>
              <div className='w-[35%] justify-center items-center flex text-sm'>Bahan Mentah</div>
              <div className='w-[25%] justify-center items-center flex text-sm'>Kemasan</div>
            </div>
          </div>

          {/* Right Chart: Tingkat Keberhasilan Penyelamatan */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Tingkat Keberhasilan Penyelamatan</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold mb-3">Restoran</p>
                <div className="bg-navy-light h-2 rounded-full">
                  <div className="bg-navy h-2 rounded-full w-[95%]"></div>
                </div>
                <p className="text-sm text-right mt-1">95%</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-3">Hotel</p>
                <div className="bg-navy-light h-2 rounded-full">
                  <div className="bg-navy h-2 rounded-full w-[88%]"></div>
                </div>
                <p className="text-sm text-right mt-1">88%</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-3">Katering</p>
                <div className="bg-navy-light h-2 rounded-full">
                  <div className="bg-navy h-2 rounded-full w-[92%]"></div>
                </div>
                <p className="text-sm text-right mt-1">92%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-6 md:px-32">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className='flex gap-x-3'>
              <div className='bg-navy-light p-4 rounded-full w-max'>
                <Utensils className='text-tosca' />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy">15.4 Ton</h3>
                <p className="text-sm font-semibold text-slate-500">Makanan Terselamatkan</p>
              </div>
            </div>
            <div className="bg-navy-light h-2 rounded-full mt-4">
              <div className="bg-navy h-2 rounded-full w-[80%]"></div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className='flex gap-x-3'>
              <div className='bg-navy-light p-4 rounded-full w-max'>
                <Handshake className='text-tosca' />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy">48</h3>
                <p className="text-sm font-semibold text-slate-500">Mitra Aktif</p>
              </div>
            </div>
            <div className="bg-navy-light h-2 rounded-full mt-4">
              <div className="bg-navy h-2 rounded-full w-[70%]"></div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-12'>
        <div className='text-center px-3'>
          <h1 className='text-3xl md:text-4xl font-bold'>Cerita Keberhasilan</h1>
          <p className='mt-8 font-medium text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-sm md:text-lg'>Kisah-kisah inspiratif dari program penyelamatan makanan kami</p>
          <div className='bg-navy my-8 h-1 w-30 m-auto'></div>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-x-12 gap-y-12 px-6'>
          {ceritaKeberhasilan.map((e, i) => {
            return (
              <StoryRescueCard
                image={e.image}
                description={e.description}
                link={e.link}
                title={e.title}
                flag={e.flag}
                aos={e.aos}
                date={e.date}
                key={i}
              />
            )
          })}

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-32 py-12">
          {/* Left Card: Testimoni Mitra */}
          <div className="bg-teal-50 shadow-md rounded-lg p-6 flex flex-col gap-4">
            <span className="bg-navy text-white text-xs font-semibold px-3 py-1 rounded-full w-max">
              Featured
            </span>
            <h2 className="text-lg font-bold">Testimoni Mitra</h2>
            <p className="text-slate-600 text-sm">
              &quot;Program ini sangat membantu kami dalam mengelola surplus makanan dengan lebih efektif dan berkelanjutan.&quot;
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Image
                width={50}
                height={50}
                src="/sosialisasi.jpg"
                alt="Budi Santoso"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-sm">Budi Santoso</p>
                <p className="text-xs text-slate-500">Manager Operasional, Grand Hotel</p>
              </div>
            </div>
          </div>

          {/* Right Card: Dampak Sosial */}
          <div className="bg-tosca text-white shadow-md rounded-lg p-6 flex flex-col justify-between">
            <div>
              <div className="text-2xl mb-4">❝</div>
              <h2 className="text-lg font-bold mb-4">Dampak Sosial</h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CircleCheck />
                  <p className="text-sm">Membantu 1000+ keluarga prasejahtera</p>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck />
                  <p className="text-sm">Mengurangi 30% limbah makanan</p>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck />
                  <p className="text-sm">Memberdayakan 200+ relawan aktif</p>
                </li>
              </ul>
            </div>
            <button className="bg-white text-teal-900 font-semibold py-2 px-4 rounded-full mt-6 w-max">
              Bergabung Sebagai Relawan →
            </button>
          </div>
        </div>
      </section>

      <Ajakan />
    </>
  );
}
