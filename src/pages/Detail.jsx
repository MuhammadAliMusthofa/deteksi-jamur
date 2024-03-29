import React from "react";

function Detail() {
  return (
    <div>
      <section id="about" className="pt-36 pb-32 bg-slate-100">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 mb-10 lg:w-1/3">
              <img
                src="src/assets/img/edible/Champignon.jpg"
                alt="Jamur Hasil"
                className="rounded-lg"
              />
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-full mx-auto text-start mb-16">
                <h4 className="font-semibold text-lg text-primary mb-2">
                  Jamur Ditemukan
                </h4>
                <h2 className="font-bold text-saildark text-3xl mb-4">
                  Champignon
                </h2>
                <p className="font-medium text-md text-secondary mb-4">
                  Edible
                </p>
                <p className="font-medium text-md text-saildark">
                  <span className="font-bold">Nama Latin : </span>Agaricus
                  bisporus
                </p>
                <p className="font-medium text-md text-saildark">
                  <span className="font-bold">Champignon,</span>
                  juga dikenal sebagai jamur putih, adalah salah satu jamur yang
                  paling umum dikonsumsi di seluruh dunia. Mereka memiliki
                  tudung putih hingga coklat muda dan biasanya tumbuh di atas
                  tanah.
                </p>
                <p className="font-medium text-md text-saildark">
                  <span className="font-bold">Nutrisi :</span>
                  <li>
                    <span className="font-bold text-saildark">Kalori :</span>
                    Rendah
                  </li>
                  <li>
                    <span className="font-bold text-saildark">Protein :</span>
                    Tinggi
                  </li>
                  <li>
                    <span className="font-bold text-saildark">Vitamin :</span>
                    B, D
                  </li>
                  <li className="mb-4">
                    <span className="font-bold text-saildark">Mineral :</span>
                    selenium, zat besi, zink
                  </li>
                </p>
                <a
                  href="index.html"
                  className="h-full rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300"
                >
                  Scan Jamur Lagi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Detail;
