"use client";
import Link from "next/link";
import Image from "next/image";
import GambarMakanan from "public/makan.png";
import GambarDistribusi from "public/distribusi.jpg";
import GambarSosialisasi from "public/sosialisasi.jpg";
import IconTangan from "public/svg/hand-love.svg";
import IconDaun from "public/svg/leaf.svg";
import IconPetir from "public/svg/lightning.svg";
import IconRecycle from "public/svg/recycle.svg";
import IconPeople from "public/svg/people.svg";
import IconSendok from "public/svg/fork-spoon.svg";
import IconJabat from "public/svg/hand-shake.svg";
import IconGotong from "public/svg/work-together.svg";
import IconBuilding from "public/svg/building.svg";
import IconAir from "public/svg/water.svg";
import IconAjar from "public/svg/teach-class.svg";
import ProgramCard from "@/components/ProgramCard";
import {
  Apple,
  CheckCircle,
  Clock,
  ForkKnife,
  GraduationCap,
  HandPlatter,
  Handshake,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MapPinHouse,
  Music2,
  Phone,
} from "lucide-react";
import MitraCarousel from "@/components/MitraCarousel";
import CountUp from "react-countup";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const ourPrograms = [
  {
    image: GambarMakanan,
    icon: IconTangan,
    title: "Penyelamatan Makanan",
    description:
      "Mengumpulkan kelebihan makanan berkualitas dari restoran, hotel, dan toko untuk mencegah pemborosan. Program ini telah menyelamatkan lebih dari 1470 kg makanan.",
    link: "/penyelamatan",
    flag: "Flagship Program",
    aos: "fade-right",
  },
  {
    image: GambarDistribusi,
    icon: IconGotong,
    title: "Distribusi Makanan",
    description:
      "Menyalurkan makanan yang diselamatkan ke panti asuhan, lansia, dan komunitas yang membutuhkan. Telah membantu lebih dari 6940 penerima manfaat.",
    link: "/distribusi",
    flag: "High Impact",
    aos: "fade-up",
  },
  {
    image: GambarSosialisasi,
    icon: IconAjar,
    title: "Edukasi Masyarakat",
    description:
      "Menyelenggarakan lokakarya dan kampanye untuk meningkatkan kesadaran tentang masalah limbah makanan. 10+ workshop telah dilaksanakan.",
    link: "/edukasi",
    flag: "Community Program",
    aos: "fade-left",
  },
];

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <>
      <section className="relative -mx-2 md:-mx-32 h-screen md:h-max overflow-hidden">
        <Image
          src="/jumbotron-image.png"
          alt="Jumbotron"
          fill
          priority
          className="object-cover object-center md:object-right-top z-0 brightness-75"
        />
        <div className="absolute inset-0 bg-gray-700 mix-blend-soft-light z-0" />
        <div className="relative z-10 px-4 mx-auto max-w-screen-xl py-24 lg:py-42">
          <h1
            data-aos="fade-left"
            className="text-white font-bold text-4xl md:text-6xl w-full md:w-3/4"
          >
            Bersama Kurangi <span className="text-navy">Limbah Makanan</span> di
            Jogja
          </h1>
          <p
            data-aos="fade-right"
            className="text-white w-full md:w-1/2 mt-6 font-medium text-lg md:text-xl leading-6 md:leading-10"
          >
            Berbagi Bites Jogja menyelamatkan makanan berlebih dan
            mendistribusikannya kepada mereka yang membutuhkan untuk menciptakan
            Yogyakarta yang lebih berkelanjutan dan peduli.
          </p>
          <nav className="flex gap-x-4 mt-6">
            <Link
              data-aos="fade-up"
              href="/donasi"
              className="bg-navy text-sm md:text-md text-white font-medium px-2 md:px-6 py-2 rounded-md shadow-md"
            >
              Donasi Sekarang
            </Link>
            <Link
              data-aos="fade-left"
              href="/#program"
              className="bg-white text-sm md:text-md text-navy font-medium px-2 md:px-6 py-2 rounded-md shadow-md"
            >
              Pelajari Program Kami
            </Link>
          </nav>
        </div>
      </section>
      <section className="py-12 text-center overflow-x-hidden">
        <h1
          data-aos="fade-up"
          className="text-navy text-3xl md:text-4xl font-bold"
        >
          Dampak Usaha Kami
        </h1>
        <div className="bg-navy my-8 h-1 w-30 m-auto"></div>
        <p className="font-medium md:font-semibold text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-md md:text-lg">
          Setiap angka yang tercatat bukan sekadar statistik, melainkan cerminan
          nyata dari perubahan yang kita upayakan bersama. Di balik setiap
          angka, terdapat langkah konkret, kerja keras, dan komitmen kolektif
          untuk membangun sebuah kota yang lebih inklusif, berdaya, dan
          berkelanjutan untuk semua warganya.
        </p>
        <div>
          <div className="flex flex-col md:flex-row justify-between my-12 gap-y-12 md:gap-x-12 px-4 md:px-1">
            <div
              data-aos="fade-right"
              className="bg-navy-light rounded-md flex w-full flex-col gap-y-4 py-12 md:py-18"
            >
              <div className="bg-white m-auto w-max p-6 shadow-md rounded-full">
                <Apple className="text-navy fill-navy" />
              </div>

              <h2 className="font-bold text-navy text-4xl">
                <CountUp enableScrollSpy={true} end={2002} />+
              </h2>
              <p className="font-medium">Kg Makanan Diselamatkan</p>
              <div className="bg-slate-400 h-0.5 w-10 m-auto"></div>
              <p className="text-slate-500 text-sm">Sejak 2024</p>
            </div>
            <div
              data-aos-offset="200"
              data-aos="fade-down"
              className="bg-navy-light rounded-md flex w-full flex-col gap-y-4 py-12 md:py-18"
            >
              <div className="bg-white m-auto w-max p-6 shadow-md rounded-full">
                <ForkKnife className="fill-navy text-navy" />
              </div>
              <h2 className="font-bold text-navy text-4xl">
                <CountUp enableScrollSpy={true} end={9522} />+
              </h2>
              <p className="font-medium">Porsi Dibagikan</p>
              <div className="bg-slate-400 h-0.5 w-10 m-auto"></div>
              <p className="text-slate-500 text-sm">Dan Terus Bertambah</p>
            </div>
            <div
              data-aos-offset="400"
              data-aos="fade-left"
              className="bg-navy-light rounded-md flex w-full flex-col gap-y-4 py-12 md:py-18"
            >
              <div className="bg-white m-auto w-max p-6 shadow-md rounded-full">
                <Handshake className="text-navy" />
              </div>
              <h2 className="font-bold text-navy text-4xl">
                <CountUp enableScrollSpy={true} end={17} />+
              </h2>
              <p className="font-medium">Mitra Donatur</p>
              <div className="bg-slate-400 h-0.5 w-10 m-auto"></div>
              <p className="text-slate-500 text-sm">Bergabung Bersama Kami</p>
            </div>
          </div>
        </div>
      </section>
      <section className="-mx-2 md:-mx-32 py-12 px-6 text-center bg-slate-100">
        <h1 className="text-navy text-3xl md:text-4xl font-bold">
          Tentang Kami
        </h1>
        <div className="bg-navy my-8 h-1 w-30 m-auto"></div>
        <p className="font-medium md:font-semibold text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-md md:text-lg">
          Berbagi Bites Jogja adalah inisiatif nirlaba yang berfokus pada
          pengurangan limbah makanan melalui penyelamatan dan redistribusi
          makanan di seluruh Yogyakarta.
        </p>
        <div className="flex justify-between my-12 gap-x-6 gap-y-6 md:px-48 flex-col md:flex-row">
          <div
            data-aos="fade"
            className="bg-white shadow-xl rounded-md py-8 px-3 w-full md:w-1/5 flex flex-col gap-y-2"
          >
            <div className="bg-navy-light m-auto w-max p-6 shadow-md rounded-full">
              <Clock className="text-navy" />
            </div>
            <h2 className="font-semibold text-md">Sejak 2024</h2>
            <div className="text-slate-500">
              Atasi sampah makanan, bantu pangan Yogyakarta.
            </div>
          </div>
          <div
            data-aos="fade"
            data-aos-offset="100"
            className="bg-white shadow-xl rounded-md py-8 px-3 w-full md:w-1/5 flex flex-col gap-y-2"
          >
            <div className="bg-navy-light m-auto w-max p-6 shadow-md rounded-full">
              <svg
                width="30"
                height="24"
                viewBox="0 0 30 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2_10119)">
                  <path
                    d="M6.75 0C7.74456 0 8.69839 0.395088 9.40165 1.09835C10.1049 1.80161 10.5 2.75544 10.5 3.75C10.5 4.74456 10.1049 5.69839 9.40165 6.40165C8.69839 7.10491 7.74456 7.5 6.75 7.5C5.75544 7.5 4.80161 7.10491 4.09835 6.40165C3.39509 5.69839 3 4.74456 3 3.75C3 2.75544 3.39509 1.80161 4.09835 1.09835C4.80161 0.395088 5.75544 0 6.75 0ZM24 0C24.9946 0 25.9484 0.395088 26.6516 1.09835C27.3549 1.80161 27.75 2.75544 27.75 3.75C27.75 4.74456 27.3549 5.69839 26.6516 6.40165C25.9484 7.10491 24.9946 7.5 24 7.5C23.0054 7.5 22.0516 7.10491 21.3484 6.40165C20.6451 5.69839 20.25 4.74456 20.25 3.75C20.25 2.75544 20.6451 1.80161 21.3484 1.09835C22.0516 0.395088 23.0054 0 24 0ZM0 14.0016C0 11.2406 2.24062 9 5.00156 9H7.00312C7.74844 9 8.45625 9.16406 9.09375 9.45469C9.03281 9.79219 9.00469 10.1438 9.00469 10.5C9.00469 12.2906 9.79219 13.8984 11.0344 15C11.025 15 11.0156 15 11.0016 15H0.998437C0.45 15 0 14.55 0 14.0016ZM18.9984 15C18.9891 15 18.9797 15 18.9656 15C20.2125 13.8984 20.9953 12.2906 20.9953 10.5C20.9953 10.1438 20.9625 9.79688 20.9062 9.45469C21.5438 9.15938 22.2516 9 22.9969 9H24.9984C27.7594 9 30 11.2406 30 14.0016C30 14.5547 29.55 15 29.0016 15H18.9984ZM10.5 10.5C10.5 9.30653 10.9741 8.16193 11.818 7.31802C12.6619 6.47411 13.8065 6 15 6C16.1935 6 17.3381 6.47411 18.182 7.31802C19.0259 8.16193 19.5 9.30653 19.5 10.5C19.5 11.6935 19.0259 12.8381 18.182 13.682C17.3381 14.5259 16.1935 15 15 15C13.8065 15 12.6619 14.5259 11.818 13.682C10.9741 12.8381 10.5 11.6935 10.5 10.5ZM6 22.7484C6 19.2984 8.79844 16.5 12.2484 16.5H17.7516C21.2016 16.5 24 19.2984 24 22.7484C24 23.4375 23.4422 24 22.7484 24H7.25156C6.5625 24 6 23.4422 6 22.7484Z"
                    fill="#009CA6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_10119">
                    <path d="M0 0H30V24H0V0Z" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="font-semibold text-md">100+ Relawan</h2>
            <div className="text-slate-500">
              Tim dedikasi yang siap membantu
            </div>
          </div>
          <div
            data-aos="fade"
            data-aos-offset="200"
            className="bg-white shadow-xl rounded-md py-8 px-3 w-full md:w-1/5 flex flex-col gap-y-2"
          >
            <div className="bg-navy-light m-auto w-max p-6 shadow-md rounded-full">
              <Heart className="fill-navy text-navy" />
            </div>
            <h2 className="font-semibold text-md">10 Komunitas</h2>
            <div className="text-slate-500">Terlayani setiap minggunya</div>
          </div>
          <div
            data-aos="fade"
            data-aos-offset="300"
            className="bg-white shadow-xl rounded-md py-8 px-3 w-full md:w-1/5 flex flex-col gap-y-2"
          >
            <div className="bg-navy-light m-auto w-max p-6 shadow-md rounded-full">
              <MapPinHouse className="text-navy" />
            </div>
            <h2 className="font-semibold text-md">Wilayah Cakupan</h2>
            <div className="text-slate-500">
              Menjangkau Yogyakarta dan wilayah sekitarnya
            </div>
          </div>
        </div>
      </section>
      <section className="-mx-2 md:-mx-32 bg-slate-100 py-12 flex md:flex-row flex-col-reverse justify-between px-4 md:px-32">
        <Image
          src="/mission-image.jpg"
          width="550"
          height="550"
          className="rounded-md mt-6 md:mt-0 aspect-4/3 object-cover"
          alt="pembagian makanan"
        />
        <div className="w-full md:w-1/2">
          <h1 className="text-navy font-bold text-4xl">Misi Kami</h1>
          <p className="font-semibold text-slate-500 text-md md:text-lg mt-6">
            Kami bertujuan mengurangi limbah makanan sekaligus membantu
            mengatasi kerawanan pangan di Yogyakarta melalui jaringan relawan
            dan mitra yang berdedikasi.
          </p>
          <div className="flex flex-col gap-y-8 mt-12">
            <div
              data-aos="fade-left"
              className="bg-white shadow-md p-4 rounded-md flex gap-x-4"
            >
              <div className="bg-navy-light rounded-full p-3 w-max h-max">
                <HandPlatter className="text-navy" />
              </div>
              <div>
                <h1 className="font-bold text-slate-500 text-lg">
                  Redistribusi Pangan
                </h1>
                <p className="mt-4">
                  Mengumpulkan makanan berlebih dari restoran, katering, dan
                  acara untuk dibagikan kepada yang membutuhkan.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="bg-white shadow-md p-4 rounded-md flex gap-x-4"
            >
              <div className="bg-navy-light rounded-full p-3 w-max h-max">
                <GraduationCap className="text-navy" />
              </div>
              <div>
                <h1 className="font-bold text-slate-500 text-lg">
                  Edukasi Keberlanjutan
                </h1>
                <p className="mt-4">
                  Meningkatkan kesadaran tentang limbah makanan dan dampaknya
                  terhadap lingkungan melalui workshop dan kampanye.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="bg-white shadow-md p-4 rounded-md flex gap-x-4"
            >
              <div className="bg-navy-light rounded-full p-3 w-max h-max">
                <svg
                  width="25"
                  height="20"
                  viewBox="0 0 25 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M25 20H0V0H25V20Z" stroke="#E5E7EB" />
                  <path
                    d="M2.8125 3.4375C2.8125 2.85734 3.04297 2.30094 3.4532 1.8907C3.86344 1.48047 4.41984 1.25 5 1.25C5.58016 1.25 6.13656 1.48047 6.5468 1.8907C6.95703 2.30094 7.1875 2.85734 7.1875 3.4375C7.1875 4.01766 6.95703 4.57406 6.5468 4.9843C6.13656 5.39453 5.58016 5.625 5 5.625C4.41984 5.625 3.86344 5.39453 3.4532 4.9843C3.04297 4.57406 2.8125 4.01766 2.8125 3.4375ZM2.5 9.59766C2.10938 10.0352 1.875 10.6172 1.875 11.25C1.875 11.8828 2.10938 12.4648 2.5 12.9023V9.59766ZM8.14062 7.67188C6.98047 8.69922 6.25 10.2031 6.25 11.875C6.25 13.2148 6.71875 14.4453 7.5 15.4102V16.25C7.5 16.9414 6.94141 17.5 6.25 17.5H3.75C3.05859 17.5 2.5 16.9414 2.5 16.25V15.2031C1.02344 14.5 0 12.9961 0 11.25C0 8.83203 1.95703 6.875 4.375 6.875H5.625C6.5625 6.875 7.42969 7.16797 8.14062 7.66797V7.67188ZM17.5 16.25V15.4102C18.2812 14.4453 18.75 13.2148 18.75 11.875C18.75 10.2031 18.0195 8.69922 16.8594 7.66797C17.5703 7.16797 18.4375 6.875 19.375 6.875H20.625C23.043 6.875 25 8.83203 25 11.25C25 12.9961 23.9766 14.5 22.5 15.2031V16.25C22.5 16.9414 21.9414 17.5 21.25 17.5H18.75C18.0586 17.5 17.5 16.9414 17.5 16.25ZM17.8125 3.4375C17.8125 2.85734 18.043 2.30094 18.4532 1.8907C18.8634 1.48047 19.4198 1.25 20 1.25C20.5802 1.25 21.1366 1.48047 21.5468 1.8907C21.957 2.30094 22.1875 2.85734 22.1875 3.4375C22.1875 4.01766 21.957 4.57406 21.5468 4.9843C21.1366 5.39453 20.5802 5.625 20 5.625C19.4198 5.625 18.8634 5.39453 18.4532 4.9843C18.043 4.57406 17.8125 4.01766 17.8125 3.4375ZM22.5 9.59766V12.9062C22.8906 12.4648 23.125 11.8867 23.125 11.2539C23.125 10.6211 22.8906 10.0391 22.5 9.60156V9.59766ZM12.5 1.25C13.163 1.25 13.7989 1.51339 14.2678 1.98223C14.7366 2.45107 15 3.08696 15 3.75C15 4.41304 14.7366 5.04893 14.2678 5.51777C13.7989 5.98661 13.163 6.25 12.5 6.25C11.837 6.25 11.2011 5.98661 10.7322 5.51777C10.2634 5.04893 10 4.41304 10 3.75C10 3.08696 10.2634 2.45107 10.7322 1.98223C11.2011 1.51339 11.837 1.25 12.5 1.25ZM9.375 11.875C9.375 12.5078 9.60938 13.0859 10 13.5273V10.2227C9.60938 10.6641 9.375 11.2422 9.375 11.875ZM15 10.2227V13.5312C15.3906 13.0898 15.625 12.5117 15.625 11.8789C15.625 11.2461 15.3906 10.6641 15 10.2266V10.2227ZM17.5 11.875C17.5 13.6211 16.4766 15.125 15 15.8281V17.5C15 18.1914 14.4414 18.75 13.75 18.75H11.25C10.5586 18.75 10 18.1914 10 17.5V15.8281C8.52344 15.125 7.5 13.6211 7.5 11.875C7.5 9.45703 9.45703 7.5 11.875 7.5H13.125C15.543 7.5 17.5 9.45703 17.5 11.875Z"
                    fill="#009CA6"
                  />
                </svg>
              </div>
              <div>
                <h1 className="font-bold text-slate-500 text-lg">
                  Pemberdayaan Komunitas
                </h1>
                <p className="mt-4">
                  Membangun jaringan relawan dan mitra untuk menciptakan dampak
                  sosial yang berkelanjutan di Yogyakarta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-3">
        <h3
          id="program"
          className="bg-navy-light text-navy w-max text-center m-auto p-3 rounded-full text-md font-medium"
        >
          Program Unggulan
        </h3>
        <h2 className="text-navy font-bold text-3xl md:text-4xl text-center my-6">
          Program Kami
        </h2>
        <p className="font-medium md:font-semibold text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-md md:text-lg text-center">
          Kami bekerja dengan penuh dedikasi melalui berbagai program inovatif
          yang dirancang untuk mengurangi limbah makanan sekaligus memberdayakan
          komunitas di Yogyakarta. Setiap inisiatif yang kami jalankan berakar
          pada semangat kolaborasi, keberlanjutan, dan keadilan sosial.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12 my-12">
          {ourPrograms.map((e, i) => {
            return (
              <ProgramCard
                image={e.image}
                description={e.description}
                link={e.link}
                title={e.title}
                icon={e.icon}
                flag={e.flag}
                key={i}
                aos={e.aos}
              />
            );
          })}
        </div>
      </section>
      <section
        id="dampak"
        className="-mx-2 md:-mx-32 bg-navy-light px-3 py-12 md:px-32"
      >
        <h1 className="text-gray-400 font-bold text-4xl text-center my-6">
          Dampak Kami
        </h1>
        <p className="font-semibold text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-md md:text-lg text-center">
          Di Berbagi Bites Jogja, kami meyakini bahwa perubahan besar dimulai
          dari tindakan nyata yang konsisten. Melalui pendekatan kolaboratif dan
          program berbasis komunitas, kami telah membangun dampak yang
          berkelanjutan—mengurangi limbah makanan, memperkuat ketahanan pangan,
          dan mendorong adopsi praktik ramah lingkungan.
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-x-6 gap-y-6 my-12 md:px-0">
          <div
            data-aos="fade-right"
            className="bg-white shadow-xl rounded-xl p-4 md:p-6 flex flex-row gap-x-4 justify-between"
          >
            <div className="bg-navy-light rounded-full p-5 h-max hidden md:block">
              <Image width={40} src={IconDaun} alt="logo-icon" />
            </div>
            <div>
              <h2 className="font-bold text-gray-500 text-2xl">
                Dampak Lingkungan
              </h2>
              <p className="font-medium text-gray-400 my-6 text-lg">
                Dengan menyelamatkan makanan dari tempat pembuangan sampah, kami
                telah mencapai dampak positif yang signifikan:
              </p>
              <div className="flex flex-col gap-y-6">
                <div className="bg-navy-light p-4 md:p-6 rounded-xl flex flex-row justify-between gap-x-6 items-start">
                  <Image
                    width={40}
                    src={IconPetir}
                    alt="logo-icon"
                    className="mt-3 hidden md:block"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-navy">
                      Pengurangan emisi gas rumah kaca
                    </h4>
                    <p className="text-gray-400 text-lg">
                      yang dihasilkan dari pembusukan makanan, mendukung upaya
                      mitigasi perubahan iklim di tingkat lokal.
                    </p>
                  </div>
                </div>
                <div className="bg-navy-light p-4 md:p-6 rounded-xl flex flex-row justify-between gap-x-6 items-start">
                  <Image
                    width={40}
                    src={IconAir}
                    alt="logo-icon"
                    className="mt-3 hidden md:block"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-navy">
                      Penghematan jutaan liter air
                    </h4>
                    <p className="text-gray-400 text-lg">
                      yang secara normal dibutuhkan dalam proses produksi,
                      distribusi, dan penyimpanan pangan baru.
                    </p>
                  </div>
                </div>
                <div className="bg-navy-light p-4 md:p-6 rounded-xl flex flex-row justify-between gap-x-6 items-start">
                  <Image
                    width={40}
                    src={IconRecycle}
                    alt="logo-icon"
                    className="mt-3 hidden md:block"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-navy">
                      Penyelamatan ribuan kilogram makanan
                    </h4>
                    <p className="text-gray-400 text-lg">
                      dari berakhir di tempat pembuangan akhir, sehingga
                      mengurangi tekanan terhadap kapasitas TPA di Yogyakarta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="bg-white shadow-xl rounded-xl p-6 flex flex-row gap-x-4 justify-between"
          >
            <div className="bg-navy-light rounded-full p-5 h-max hidden md:block">
              <Image width={40} src={IconPeople} alt="logo-icon" />
            </div>
            <div>
              <h2 className="font-bold text-gray-500 text-2xl">
                Dampak Sosial
              </h2>
              <p className="font-medium text-gray-400 my-6 text-lg">
                Program kami telah memberikan manfaat nyata bagi masyarakat
                melalui berbagai inisiatif yang berdampak baik pada lingkungan
                sosial:
              </p>
              <div className="flex flex-col gap-y-6">
                <div className="bg-navy-light p-4 md:p-6 rounded-xl flex flex-row justify-between gap-x-6 items-start">
                  <Image
                    width={50}
                    src={IconSendok}
                    alt="logo-icon"
                    className="mt-3 hidden md:block"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-navy">
                      Memenuhi kebutuhan gizi ribuan individu
                    </h4>
                    <p className="text-gray-400 text-lg">
                      dari berbagai latar belakang, terutama anak-anak, lansia,
                      dan komunitas rentan yang terdampak ketidakpastian pangan.
                    </p>
                  </div>
                </div>
                <div className="bg-navy-light p-4 md:p-6 rounded-xl flex flex-row justify-between gap-x-6 items-start">
                  <Image
                    width={50}
                    src={IconBuilding}
                    alt="logo-icon"
                    className="mt-3 hidden md:block"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-navy">
                      Mendukung 10 institusi sosial
                    </h4>
                    <p className="text-gray-400 text-lg">
                      termasuk panti asuhan dan komunitas lansia, dengan
                      distribusi pangan yang berkelanjutan dan tepat sasaran.
                    </p>
                  </div>
                </div>
                <div className="bg-navy-light p-4 md:p-6 rounded-xl flex flex-row justify-between gap-x-6 items-start">
                  <Image
                    width={50}
                    src={IconJabat}
                    alt="logo-icon"
                    className="mt-3 hidden md:block"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-navy">
                      Meningkatkan kesadaran masyarakat
                    </h4>
                    <p className="text-gray-400 text-lg">
                      tentang pentingnya penyelamatan pangan dan keberlanjutan
                      melalui berbagai program edukasi, workshop, dan kampanye
                      publik.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='-mx-2 md:-mx-32 bg-navy-medium py-12 px-4 md:px-32'>
        <div className='bg-tosca-light rounded-4xl p-6 md:p-12 m-auto text-center text-white w-full md:w-1/2 my-12'>
          <h1 className='text-4xl font-bold'>Apa Kata Mereka</h1>
          <div className='bg-navy h-1 w-12 m-auto my-4'></div>
          <p>Dengarkan pengalaman dari berbagai pihak yang telah berkolaborasi dan merasakan dampak positif dari program Berbagi Bites Jogja.</p>
        </div>
        <div className='flex flex-col md:flex-row gap-x-12 gap-y-6 justify-between px-4 md:px-0'>
          {[0, 1, 2].map((e, i) => {
            return (
              <div key={i} className='bg-white rounded-xl p-6 md:p-12'>
                <Image src={IconAir} alt='icon' />
                <p className='my-6 md:my-12 text-gray-500'>&quot;Sebagai pemilik restoran, BBJ membantu kami mengelola kelebihan makanan dengan cara yang bermakna. Proses pengambilan yang teratur dan profesional membuat kami yakin makanan tersebut sampai ke tangan yang tepat.&quot;</p>
                <div className='flex flex-row gap-x-3'>
                  <Image src={IconAir} alt='icon-air' />
                  <div>
                    <h4 className='font-bold text-xl'>Ibu Sari</h4>
                    <h5 className='text-navy text-lg'>Siapa</h5>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section> */}
      <section
        id="gabung"
        className="-mx-2 md:-mx-32 bg-navy py-12 px-6 md:px-32"
      >
        <div className="bg-tosca-light rounded-4xl p-6 md:p-12">
          <h1 className="text-white font-bold text-4xl text-center">
            Bergabung Bersama Kami
          </h1>
          <p className="text-white text-center text-lg w-full md:w-1/2 m-auto mt-6">
            Pilih peran Anda dalam perjalanan ini - melalui donasi, aksi
            langsung sebagai relawan, atau kolaborasi sebagai mitra penyelamat
            pangan{" "}
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-x-12 gap-y-12 my-6">
            <div
              data-aos="fade-left"
              className="rounded-2xl bg-white w-full md:w-1/3 overflow-hidden"
            >
              <div className="bg-navy-light py-8">
                <Image
                  width={40}
                  src={IconTangan}
                  alt="icon-air"
                  className="m-auto"
                />
                <h4 className="text-center text-navy font-bold text-2xl mt-4">
                  Donasi
                </h4>
              </div>
              <div className="px-6 mt-3">
                <div className="flex flex-row justify-between">
                  <span>Rp 50.000</span>
                  <span>5 Keluarga</span>
                </div>
                <div
                  className="w-full bg-gray-400 mt-2"
                  style={{ height: "0.5px" }}
                ></div>
              </div>
              <div className="px-6 mt-3">
                <div className="flex flex-row justify-between font-bold">
                  <span>Rp 100.000</span>
                  <span>10 Keluarga</span>
                </div>
                <div
                  className="w-full bg-gray-400 mt-2"
                  style={{ height: "0.5px" }}
                ></div>
              </div>
              <div className="px-6 mt-3">
                <div className="flex flex-row justify-between">
                  <span>Rp 200.000</span>
                  <span>20 Keluarga</span>
                </div>
                <div
                  className="w-full bg-gray-400 mt-2"
                  style={{ height: "0.5px" }}
                ></div>
              </div>
              <div className="p-6">
                <Link
                  href={"/donasi"}
                  className="bg-navy rounded-md block py-2 text-center w-full text-white font-bold"
                >
                  Donasi Sekarang
                </Link>
              </div>
            </div>
            <div
              data-aos="fade"
              className="rounded-2xl bg-white w-full md:w-1/3 overflow-hidden"
            >
              <div className="bg-navy-light py-8">
                <Image src={IconGotong} alt="icon-air" className="m-auto" />
                <h4 className="text-center text-navy font-bold text-2xl mt-4">
                  Relawan
                </h4>
              </div>
              <div className="p-6">
                <div className="flex flex-col gap-y-2 pb-3">
                  <p>
                    <CheckCircle className="w-4 mr-2 inline" />
                    Pengambilan makanan
                  </p>
                  <p>
                    <CheckCircle className="w-4 mr-2 inline" />
                    Distribusi ke komunitas
                  </p>
                  <p>
                    <CheckCircle className="w-4 mr-2 inline" />
                    Kampanye edukasi
                  </p>
                  <p>
                    <CheckCircle className="w-4 mr-2 inline" />
                    Administrasi
                  </p>
                </div>
                <Link
                  href={"/gabung/relawan"}
                  className="bg-navy rounded-md block py-2 text-center w-full text-white font-bold"
                >
                  Daftar Relawan
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="rounded-2xl bg-white w-full md:w-1/3 overflow-hidden"
            >
              <div className="bg-navy-light py-8">
                <Image
                  width={40}
                  src={IconJabat}
                  alt="icon-air"
                  className="m-auto"
                />
                <h4 className="text-center text-navy font-bold text-2xl mt-4">
                  Mitra
                </h4>
              </div>
              <div className="p-6">
                <div className="flex flex-col gap-y-2 pb-3">
                  <p>
                    <CheckCircle className="w-4 mr-2 inline" />
                    Restoran
                  </p>
                  <p>
                    <CheckCircle className="w-4 mr-2 inline" />
                    Hotel
                  </p>
                  <p>
                    <CheckCircle className="w-4 mr-2 inline" />
                    Toko Makanan
                  </p>
                  <p>
                    <CheckCircle className="w-4 mr-2 inline" />
                    Pasar Tradisional
                  </p>
                </div>
                <Link
                  href={"/gabung/mitra"}
                  className="bg-navy rounded-md block py-2 text-center w-full text-white font-bold"
                >
                  Jadi Mitra
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="py-12">
        <h1 className="font-bold text-4xl text-center">Mitra Kami</h1>
        <p className="text-center my-6">
          Kami berkolaborasi dengan berbagai mitra untuk mencapai misi kami
        </p>
        <MitraCarousel />
      </section>
      <section
        id="kontak"
        className="-mx-2 md:-mx-32 bg-gray-100 py-12 md:py-24 px-4 md:px-32"
      >
        <div className="flex flex-col md:flex-row gap-x-12 justify-between">
          <div>
            <h1 className="font-bold text-4xl">Hubungi Kami</h1>
            <p className="my-6">
              Punya pertanyaan atau ingin terlibat? Hubungi kami melalui
              formulir ini atau melalui kontak di bawah.
            </p>
            <form action="" className="flex flex-col gap-y-3">
              <div className="flex flex-col gap-y-1">
                <label className="font-bold">Nama</label>
                <input
                  className="bg-white border border-gray-300 p-2"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <label className="font-bold">Email</label>
                <input
                  className="bg-white border border-gray-300 p-2"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <label className="font-bold">Pesan</label>
                <textarea
                  className="bg-white border border-gray-300 p-2"
                  name=""
                  id=""
                />
              </div>
              <button
                type="submit"
                className="bg-navy text-white rounded-md p-3 mt-6 w-max font-semibold"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          <div className="bg-white shadow-md rounded-md p-6 w-full md:w-1/2 mt-12 md:mt-0">
            <h1 className="font-bold text-2xl">Informasi Kontak</h1>
            <div className="flex flex-col gap-y-6 mt-6 md:mt-12">
              <div className="flex flex-row gap-x-3 items-center">
                <div className="bg-navy-light p-3 rounded-full">
                  <MapPin color="#009CA6" />
                </div>
                <span>
                  <h5 className="font-bold">Alamat</h5>
                  <Link href={"https://maps.app.goo.gl/SVBVQDueY8UdcXX79"}>
                    Pusat Studi Pancasila UGM
                    <br />
                    Jl. Podocarpus II D-22, Kampus UGM, Bulaksumur, Yogyakarta
                    55281
                  </Link>
                </span>
              </div>
              <div className="flex flex-row gap-x-3 items-center">
                <div className="bg-navy-light p-3 rounded-full">
                  <Phone color="#009CA6" />
                </div>
                <span>
                  <h5 className="font-bold">Telepon</h5>
                  <Link href={"https://wa.me/628986950700"}>
                    +62 898 695 0700
                  </Link>
                </span>
              </div>
              <div className="flex flex-row gap-x-3 items-center">
                <div className="bg-navy-light p-3 rounded-full">
                  <Mail color="#009CA6" />
                </div>
                <span>
                  <h5 className="font-bold">Email</h5>
                  <Link href={"mailto:berbagibitesjogja@gmail.com"}>
                    berbagibitesjogja@gmail.com
                  </Link>
                </span>
              </div>
            </div>
            <h2 className="font-bold text-xl mt-10 mb-2">Ikuti Kami</h2>
            <div className="flex gap-x-2 text-navy text-xs font-thin">
              <Link
                href="https://instagram.com/berbagibitesjogja"
                className="bg-navy-light rounded-full p-3"
              >
                <Instagram size="20" />
              </Link>
              <Link
                href="http://linkedin.com/company/berbagibitesjogja"
                className="bg-navy-light rounded-full p-3"
              >
                <Linkedin size="20" />
              </Link>
              <Link
                href="https://www.tiktok.com/@berbagibitesjogja"
                className="bg-navy-light rounded-full p-3"
              >
                <Music2 size="20" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="-mx-2 md:-mx-32 bg-navy-light py-12 px-6 md:px-32">
        <h1 className="text-center text-3xl font-bold">
          Berlangganan Newsletter Kami
        </h1>
        <p className="text-center text-gray-400 my-6">
          Dapatkan update terbaru tentang program dan kegiatan kami langsung ke
          inbox anda
        </p>
        <form action="" className="m-auto w-full md:w-max">
          <input
            className="bg-white rounded-md md:rounded-l-md p-3 w-full md:w-max"
            type="text"
            placeholder="Alamat email anda"
          />
          <button
            type="submit"
            className="bg-navy mt-6 md:mt-0 text-white p-3 rounded-md md:rounded-r-md w-full md:w-max"
          >
            Berlanggananan
          </button>
        </form>
      </section>
    </>
  );
}
