const Services = () => {
  const services = [
    {
      icon: (
        <svg
          className="w-12 h-12"
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
      ),
      title: "Προληπτική Φροντίδα",
      description: "Τακτικοί έλεγχοι και εξετάσεις για να παραμένετε υγιείς.",
      hoverText: "Ανακαλύψτε πώς οι προληπτικοί έλεγχοι μπορούν να διασφαλίσουν την ευεξία σας.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Διαχείριση Χρόνιων Παθήσεων",
      description: "Ολοκληρωμένη φροντίδα για διαβήτη, υπέρταση και άλλα.",
      hoverText: "Εξατομικευμένα πλάνα φροντίδας για να διαχειριστείτε την κατάστασή σας αποτελεσματικά.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Επείγοντα Περιστατικά",
      description: "Ραντεβού αυθημερόν για μη επείγουσες ιατρικές ανάγκες.",
      hoverText: "Άμεση φροντίδα για ξαφνικά προβλήματα υγείας που δεν απειλούν τη ζωή.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Οικογενειακή Ιατρική",
      description: "Ιατρική φροντίδα για ασθενείς όλων των ηλικιών.",
      hoverText: "Συνεχής και ολοκληρωμένη φροντίδα υγείας για εσάς και την οικογένειά σας.",
    },
  ];

  return (
    <section id="services" className="min-h-screen flex items-center py-20  bg-gradient-to-bl from-teal-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-light text-center text-gray-900 mb-16">
          Οι <span className="text-teal-600 font-normal">Υπηρεσίες</span> μας
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
  key={index}
  className="group relative bg-white p-8 border border-gray-200 overflow-hidden transition-colors duration-300 ease-in-out hover:bg-teal-600 h-80"
>
  {/* Default Content */}
  <div className="transition-opacity duration-300 flex flex-col justify-center items-center text-center group-hover:opacity-0 h-full">
    <div className="text-teal-600 mb-4">{service.icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4">
      {service.title}
    </h3>
    <p className="text-sm text-gray-700 mt-auto">{service.description}</p>
  </div>

  {/* Hover Content */}
  <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    <div className="mb-4">{service.icon}</div>
    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
    <p className="transform transition-transform duration-500 translate-y-20 group-hover:translate-y-0">{service.hoverText}</p>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;