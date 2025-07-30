import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-l from-teal-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-light text-center text-gray-900 mb-16">
            Σχετικά με την{" "}
            <span className="text-teal-600 font-normal">
              Φιλία Δημητριάδη
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Image Column - Updated to match Hero style */}
            <div className="relative">
              <div className="w-full h-96 bg-teal-100 overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-teal-200 to-teal-300 flex items-center justify-center">
                  <svg className="w-40 h-40 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="flex flex-col justify-center">
              <p className="text-gray-700 mb-6 text-lg">
                Η Ιατρός <strong>Φιλία Δημητριάδη</strong>, με πάνω από 20 χρόνια
                εμπειρίας, παρέχει εξατομικευμένη και ασθενοκεντρική
                φροντίδα σε άτομα και οικογένειες της κοινότητάς μας.
              </p>
              <p className="text-gray-600 mb-8 font-light">
                Απόφοιτος της Ιατρικής Σχολής του Harvard με ειδίκευση στο
                Νοσοκομείο Johns Hopkins, φέρνει τεχνογνωσία παγκόσμιας κλάσης
                στην περιοχή σας.
              </p>

              <div className="space-y-4">
                {/* Badge 1 */}
                <div className="bg-teal-50/70 p-4 rounded-lg flex items-center">
                  <svg
                    className="w-7 h-7 text-teal-600 mr-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Πιστοποιημένη Ιατρός
                    </h4>
                    <p className="text-gray-700 font-light text-sm">
                      Από την Αμερικανική Ακαδημία Οικογενειακής Ιατρικής
                    </p>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="bg-teal-50/70 p-4 rounded-lg flex items-center">
                  <svg
                    className="w-7 h-7 text-teal-600 mr-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      20+ Έτη Εμπειρίας
                    </h4>
                    <p className="text-gray-700 font-light text-sm">
                      Στην υπηρεσία της κοινότητας από το 2004
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;