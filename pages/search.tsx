import Layout from "@/src/apps/Layouts/Layout";

const Search = () => {
  return (
    <Layout screenLoader={false}>
      <div
        className="card rounded-md bg-white dark:bg-slate-800 lg:h-full mt-5 shadow-base"
        data-v-cda99232=""
      >
        <div className="surface-card p-5 shadow-2 border-round-lg flex-auto">
          <div className="font-medium text-3xl text-900 mb-3 mb-4">Inicio</div>
     
          <div className="card-body flex flex-col " >
            {/**/}
            {/**/}
            <div className="card-text h-full" data-v-cda99232="">
              <div className="grid xl:grid-cols-4 lg:grid-cols-2 col-span-1 gap-3 ">
                <div className="bg-yellow-200 rounded-md p-4 bg-opacity-[0.15]  relative z-[1]">
                  <div className="overlay absolute left-0 top-0 w-full h-full z-[-1]">
                   
                  </div>
                  <span className="block mb-6 text-sm text-slate-900  font-medium">
                    Sales
                  </span>
                  <span className="block mb- text-2xl text-slate-900  font-medium mb-6">
                   Nombre del reporte
                  </span>
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <div className="flex-none text-xl text-primary-500">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          width="1em"
                          height="1em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                          className="iconify iconify--heroicons"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1 text-sm">
                      <span className="block mb-[2px] text-primary-500">
                        25.67%{" "}
                      </span>
                      <span className="block mb-1 text-slate-600 ">
                        From last week
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-200 rounded-md p-4 bg-opacity-[0.15]  relative z-[1]">
                  <div className="overlay absolute left-0 top-0 w-full h-full z-[-1]">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      draggable="false"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="block mb-6 text-sm text-slate-900  font-medium">
                    Revenue{" "}
                  </span>
                  <span className="block mb- text-2xl text-slate-900  font-medium mb-6">
                    $86,954
                  </span>
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <div className="flex-none text-xl text-primary-500">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          width="1em"
                          height="1em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                          className="iconify iconify--heroicons"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1 text-sm">
                      <span className="block mb-[2px] text-primary-500">
                        8.67%
                      </span>
                      <span className="block mb-1 text-slate-600 ">
                        From last week
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-indigo-200 rounded-md p-4 bg-opacity-[0.15]  relative z-[1]">
                  <div className="overlay absolute left-0 top-0 w-full h-full z-[-1]">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      draggable="false"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="block mb-6 text-sm text-slate-900  font-medium">
                    Conversion
                  </span>
                  <span className="block mb- text-2xl text-slate-900  font-medium mb-6">
                    15%
                  </span>
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <div className="flex-none text-xl text-danger-500">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          width="1em"
                          height="1em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                          className="iconify iconify--heroicons"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1 text-sm">
                      <span className="block mb-[2px] text-danger-500">
                        1.67%
                      </span>
                      <span className="block mb-1 text-slate-600 ">
                        From last week
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-200 rounded-md p-4 bg-opacity-[0.15]  relative z-[1]">
                  <div className="overlay absolute left-0 top-0 w-full h-full z-[-1]">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      draggable="false"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="block mb-6 text-sm text-slate-900  font-medium">
                    Leads
                  </span>
                  <span className="block mb- text-2xl text-slate-900  font-medium mb-6">
                    654
                  </span>
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <div className="flex-none text-xl text-primary-500">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          width="1em"
                          height="1em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                          className="iconify iconify--heroicons"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1 text-sm">
                      <span className="block mb-[2px] text-primary-500">
                        11.67%
                      </span>
                      <span className="block mb-1 text-slate-600 ">
                        From last week
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
