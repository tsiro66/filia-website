// About.jsx
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
            {/* Image Column */}
            <div className="h-96 w-full rounded-xl shadow-2xl">
              {/* ❗ Replace this src with a real photo of the doctor */}
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
                alt="Ιατρός Φίλια Δημητριάδη"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Content Column */}
            <div className="flex flex-col justify-center">
              <p className="text-gray-700 mb-6 text-lg">
                Η Ιατρός <strong>Φίλια Δημητριάδη</strong>, με πάνω από 20 χρόνια
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