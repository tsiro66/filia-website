import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-bl from-teal-50 to-white">
      <div className="container mx-auto py-20 px-6 md:p-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Φιλία Δημητριάδη<br />
              <span className="text-teal-600 font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Παιδοενδοκρινολόγος</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 font-light">
              Εξειδικευμένη ιατρική φροντίδα για παιδιά και εφήβους με ενδοκρινολογικές διαταραχές, με επίκεντρο τη συμπόνια και την εμπιστοσύνη.
            </p>
            <button className="relative overflow-hidden group border border-teal-600 text-white sm:text-teal-600 bg-teal-600 sm:bg-white px-6 sm:px-8 py-3 sm:py-4 font-medium transition-colors duration-500">
              <span className="relative z-10 transition-colors duration-300 group-hover:sm:text-white">Κλείστε Ραντεβού</span>
              <span className="absolute inset-0 w-full sm:w-0 bg-teal-600 transition-all duration-500 ease-out group-hover:sm:w-full"></span>
            </button>
          </div>
          <div className="relative">
            <div className="w-full h-64 sm:h-80 md:h-96 bg-teal-100 overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-teal-200 to-teal-300 flex items-center justify-center">
                <svg className="w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;