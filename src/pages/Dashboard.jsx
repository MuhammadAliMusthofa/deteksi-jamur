import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <section id="scanner" className="pt-36 pb-16 bg-slate-100">
        <div className="container max-w-screen-xl mx-auto">
          <div className="w-full px-4">
            <div className="max-w-full mx-auto text-center mb-2">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Mushroom Detector
              </h4>
              <h2 className="font-bold text-saildark text-3xl mb-4">
                Mushroom Detector
              </h2>
            </div>
            <div className="max-w-full mx-auto text-center mb-2 group">
              <form action="">
                <div className="flex justify-center">
                  <input
                    type="text"
                    id="first_name"
                    className="h-10 bg-gray-50 border border-gray-300 text-saildark text-sm text-center rounded-lg focus:ring-saildark focus:border-saildark block w-full p-2.5 lg:w-1/2 "
                    placeholder="Masukkan Nama Jamur"
                    onFocus={() => (this.placeholder = '')}
                    onBlur={() => (this.placeholder = 'Masukkan Nama Jamur')}
                    required
                  />
                </div>
                <div className="flex items-center justify-center lg:w-full lg:h-64 mt-6 bg-sailsem rounded-lg">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full lg:w-[98%] lg:h-[90%] border-2 border-red-950 border-dashed rounded-lg cursor-pointer bg-sailmed dark:hover:bg-bray-800 hover:bg-sailsem"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-white">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-white">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Dashboard;
