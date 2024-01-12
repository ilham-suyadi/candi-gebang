/* eslint-disable @next/next/no-async-client-component */
"use client";

import Link from "next/link";
import { Blog } from "../../lib/api";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default async function DetailPage() {
  const queryParams = useSearchParams();
  const id: any = queryParams.get("id");
  //   const posts: Blog[] = await Blog();
  const posts = [
    {
      id: 1,
      title: "Candi Gebang: Jejak Peradaban Hindu Buddha di Sleman",
      thumbnailUrl: "/img/02.jpg",
      description:
        "Ini dia informasi seputar Candi Gebang mulai dari lokasi, fasilitas, daya tarik, dan yang lainnya.",
      content: "Candi Gebang merupakan salah satu candi peninggalan zaman Hindu-Budha yang berada di Dusun Gebang, Wedomartani, Ngemplak, Sleman, Yogyakarta. Candi ini ditemukan pada tahun 1936 oleh penduduk setempat, diawali dengan penemuan sebuah arca Ganesha. Dikutip dari laman kebudayaan.kemdikbud.go.id, candi ini merupakan candi yang bernafaskan agama Hindu. Hal ini karena ditemukan beberapa benda temuan hinduistis, seperti lingga, yoni, dan arca Ganesha.",
      author: "Muhamad Syaiful Anwar",
      date: "Desember 12, 2023",
      datetime: "2020-12-12",
    },
    {
      id: 2,
      title:
        "Berajarak Tak Jauh dari Malioboro, Ini 4 Candi Estetik untuk Foto di Jogja",
      thumbnailUrl: "/img/03.jpg",
      description:
        "Jelajahi keajaiban kota Jogja dengan mengunjungi beberapa candi estetik yang tersembunyi dekat Malioboro. Dalam perjalanan ini, Anda akan menemukan keindahan visual dan nilai sejarah di setiap sudut candi, menciptakan momen yang sempurna untuk diabadikan dalam foto-foto indah Anda.",
      content: "Selain candi Prambanan dan Borobudur yang kerap didatangi saat berkunjung ke Jogja, wisatawan juga perlu tahu ada beberapa candi lainnya yang cukup estetik untuk dikunjungi. Apabila kamu pencinta wisata sejarah, seperti candi, kamu perlu tahu candi-candi kecil yang memiliki pesonanya masing-masing. Kira-kira mana aja ya candi estetik untuk berfoto di Jogja, yuk simak deretannya berikut ini. Terletak di Kabupaten Sleman, candi tersebut bernama Candi Gebang. Candi Gebang adalah candi Hindu yang ditemukan penduduk setempat pada November 1936. Awalnya, warga menemukan patung Ganesha di lokasi tersebut. Setelahnya, penggalian dan pemugaran candi pun dilakukan dari kurun 1937-1939. Tidak seperti Prambanan dan Borobudur, Candi Gebang ini berukuran mungil dan dikelilingi hamparan rumput hijau yang bersih.",
      author: "Yusron Fathurohmat Fauzi",
      date: "Oktober 10, 2023",
      datetime: "2020-10-10",
    },
    {
      id: 3,
      title:
        "Pesona Candi Gebang, Situs Hindu Mungil di Sleman Bukti Peninggalan Dinasti Sanjaya",
      thumbnailUrl: "/img/04.jpg",
      description:
        "Jelajahi pesona Candi Gebang, sebuah situs Hindu yang memukau di Sleman, yang merupakan bukti sejarah gemilang Dinasti Sanjaya. Meskipun ukurannya yang kompak, Candi Gebang menawarkan keindahan luar biasa dengan arsitektur Hindu yang khas.",
      content: "Banyaknya candi yang terdapat di Sleman Yogyakarta membuat wilayah tersebut mendapat julukan 'Gudang Candi'. Selain Candi Prambanan yang megah dan terkenal sebagai salah satu ikon Yogyakarta, ada juga Candi Gebang yang bercorak Hindu. Candi ini sempat runtuh dan tertimbun material letusan Gunung Merapi tetapi kemudian dipugar hingga menjadi candi yang sekarang. Meski tidak sepopuler Candi Prambanan yang juga bercorak Hindu, candi ini memiliki pesona dan keindahannya tersendiri. Candi tersebut bahkan masih menyimpan misteri yang belum terpecahkan hingga sekarang. Candi Gebang ditemukan pertama kali oleh penduduk setempat yang sedang mencari batu saat itu.",
      author: "Ilham Suyadi",
      date: "Agustus 25, 2023",
      datetime: "2023-25-08",
    },
    {
      id: 4,
      title:
        "Menguak Misteri Empat Candi yang Terpendam Ratusan Tahun di Sleman, Yogyakarta",
      thumbnailUrl: "/img/05.jpg",
      description:
        "Yogyakarta, selain dikenal dengan keindahan alamnya yang menawan, juga menyimpan beragam keajaiban sejarah yang tersembunyi di dalamnya.",
      content: "Yogyakarta, selain dikenal dengan keindahan alamnya yang menawan, juga menyimpan beragam keajaiban sejarah yang tersembunyi di dalamnya. Salah satu misteri menarik yang telah terungkap adalah keberadaan empat candi kuno yang terpendam selama ratusan tahun di Sleman, Yogyakarta. Mari kita simak lebih lanjut tentang misteri dan keindahan candi-candi ini. Candi Gebang merupakan salah satu dari empat candi yang telah ditemukan di Sleman. Candi ini terletak di Dusun Ngeposari, Kalasan, Sleman. Keberadaan candi ini cukup mengejutkan karena sebelumnya tidak banyak yang mengetahui tentang eksistensinya. Candi ini memiliki arsitektur yang khas, dengan ornamen-ornamen relief yang memperlihatkan keindahan seni rupa pada masa lalu.",
      author: "Andrean Tri Saputra",
      date: "Maret 16, 2023",
      datetime: "2020-03-16",
    },
  ];

  const post = posts.filter((post) => post.id === parseInt(id));
  const data = post.length > 0 ? post[0] : {};

  return (
    <div className="bg-white py-4">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          {data.title}
        </h2>
        <p className="mt-2 text-sm leading-8 text-gray-600">
          {`${data.author}, ${data.date}`}
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 border-t border-gray-200 pt-5 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-1">
        <Image
          className="object-cover w-full rounded-t-lg h-50 w-auto shadow-md"
          src={data.thumbnailUrl}
          alt="01"
          width={500}
          height={200}
        />
      </div>
      <p className="mt-2 text-md leading-6 text-gray-600">
          {data.content}
        </p>
    </div>
  );
}
