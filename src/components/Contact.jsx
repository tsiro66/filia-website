import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-tl from-teal-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-light text-center text-gray-900 mb-12">
          <span className="text-teal-600 font-normal">Επικοινώνησε</span> μαζί μου
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Στοιχεία Επικοινωνίας
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Διεύθυνση</h4>
                    <p className="text-gray-600">
                      123 Οδός Ιατρικού Κέντρου
                      <br />
                      Πόλη Υγείας, ΤΚ 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Τηλέφωνο</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@drsmith.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-3">Ώρες Λειτουργίας</h4>
                <div className="space-y-1 text-gray-600">
                  <p>Δευτέρα - Παρασκευή: 8:00 π.μ. - 5:00 μ.μ.</p>
                  <p>Σάββατο: 9:00 π.μ. - 1:00 μ.μ.</p>
                  <p>Κυριακή: Κλειστά</p>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 p-8 border border-teal-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Κλείστε Ραντεβού
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Το όνομά σας"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-teal-600 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Το email σας"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-teal-600 focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Το τηλέφωνό σας"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-teal-600 focus:outline-none transition-colors"
                />
                <textarea
                  rows={4}
                  placeholder="Μήνυμα (προαιρετικό)"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-teal-600 focus:outline-none transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="relative overflow-hidden group w-full border border-teal-600 text-teal-600 sm:text-teal-600 bg-teal-600 sm:bg-transparent py-3 font-medium transition-colors duration-500"
                >
                  <span className="relative z-10 text-white sm:text-teal-600 transition-colors duration-300 group-hover:sm:text-white">Αίτηση Ραντεβού</span>
                  <span className="absolute inset-0 w-full sm:w-0 bg-teal-600 transition-all duration-500 ease-out group-hover:sm:w-full"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;