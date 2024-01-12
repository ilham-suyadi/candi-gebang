export default async function HargaTiketPage() {
    return(
        <div>
            <h1 className='text-4xl font-bold mb-5'>Harga Tiket Masuk Dan Jam Buka</h1>
            <p className="text-lg">Untuk berkunjung ke situs sejarah ini wisatawan akan dikenai tarif masuk. Harga tiketnya sangat murah meriah. Akan ada tambahan biaya juga untuk parkir kendaraan. Untuk wisatawan mancanegara ada harga khusus yang berlaku.</p>
            <div className="ml-24 mb-10">
                <p className="mt-10 text-lg font-bold">Wisatwan Local : <span className="ml-28 font-normal italic">Rp. 5.000,- </span></p>
                <p className="text-lg font-bold">Wisatwan Mancanegara : <span className="ml-10 font-normal italic">Rp. 10.000,- </span></p>
                <p className="mt-10 text-2xl  font-bold">Parkir</p>
                <p className="mt-2 text-lg font-bold">Mobil : <span className="ml-48 font-normal italic">Rp. 5.000,- </span></p>
                <p className="text-lg font-bold">Montor : <span className="ml-44 font-normal italic">Rp. 10.000,- </span></p>
            </div>
            <p className="text-lg">Wisatawan bisa berkunjung kapan saja kapan saja ke wisata candi ini : </p>
            <p className="font-bold text-lg">Buka Setiap Hari : <span className="italic font-normal">07.00 WIB - 17.00 WIB</span></p>
        </div>
    )
}
