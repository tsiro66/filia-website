import React, { useState } from 'react';

const Services2 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const servicesOriginalStyle = [
    {
      title: 'ΔΙΑΤΑΡΑΧΕΣ ΑΝΑΠΤΥΞΗΣ',
      subtitle: 'Αξιολόγηση και θεραπεία καθυστέρησης ανάπτυξης και ύψους',
      hoverTitle: 'ΑΝΑΠΤΥΞΗ',
      icon: '📏',
      color: 'teal'
    },
    {
      title: 'ΔΙΑΒΗΤΗΣ ΤΥΠΟΥ 1',
      subtitle: 'Ολοκληρωμένη διαχείριση και υποστήριξη για νεανικό διαβήτη',
      hoverTitle: 'ΔΙΑΒΗΤΗΣ',
      icon: '💉',
      color: 'blue'
    },
    {
      title: 'ΠΑΧΥΣΑΡΚΙΑ',
      subtitle: 'Εξατομικευμένα προγράμματα διαχείρισης βάρους για παιδιά',
      hoverTitle: 'ΔΙΑΤΡΟΦΗ',
      icon: '⚖️',
      color: 'purple'
    }
  ];

  const servicesNewStyle = [
    {
      subtitle: 'Διάγνωση και διαχείριση θυρεοειδικών παθήσεων',
      title: 'ΘΥΡΕΟΕΙΔΗΣ',
      letter: 'Θ',
      color: 'orange'
    },
    {
      subtitle: 'Υποστήριξη σε θέματα εφηβείας και ορμονών',
      title: 'ΕΦΗΒΕΙΑ',
      letter: 'Ε',
      color: 'teal'
    },
    {
      subtitle: 'Διερεύνηση και θεραπεία επινεφριδιακών διαταραχών',
      title: 'ΕΠΙΝΕΦΡΙΔΙΑ',
      letter: 'Π',
      color: 'blue'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-l from-teal-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Original Style Services */}
        <div className="space-y-8 sm:space-y-12 mb-16">
          {servicesOriginalStyle.map((service, index) => (
            <div
              key={`original-${index}`}
              className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(`original-${index}`)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-8 sm:p-12 lg:p-16">
                {/* Default State */}
                <div className={`transition-all duration-500 transform ${hoveredIndex === `original-${index}` ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <div className="w-full h-px bg-gray-900 mb-4"></div>
                  <p className="text-base sm:text-lg text-gray-600 font-light">
                    {service.subtitle}
                  </p>
                </div>

                {/* Hover State */}
                <div className={`absolute inset-0 p-8 sm:p-12 lg:p-16 transition-all duration-500 transform ${hoveredIndex === `original-${index}` ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="flex items-center justify-between h-full">
                    <div className="flex items-center space-x-6">
                      <span className="text-2xl sm:text-3xl">{service.icon}</span>
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900">
                        {service.hoverTitle}
                      </h2>
                    </div>
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Colored accent circle */}
              <div className={`absolute -right-8 -top-8 w-24 h-24 sm:w-32 sm:h-32 rounded-full transition-all duration-500 ${
                hoveredIndex === `original-${index}` ? 'scale-150 opacity-20' : 'scale-100 opacity-10'
              } ${
                service.color === 'teal' ? 'bg-teal-500' :
                service.color === 'blue' ? 'bg-blue-500' :
                'bg-purple-500'
              }`}></div>
            </div>
          ))}
        </div>

        {/* New Style Services */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="space-y-0">
            {servicesNewStyle.map((service, index) => (
              <div
                key={`new-${index}`}
                className="group relative border-b-2 border-gray-300 last:border-b-0 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredIndex(`new-${index}`)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="py-8 lg:py-10 px-8 sm:px-12 lg:px-16 flex items-center justify-between">
                  {/* Left content */}
                  <div className="flex-1 pr-8">
                    {/* Subtitle */}
                    <p className={`text-sm sm:text-base mb-2 transition-colors duration-500 ${
                      hoveredIndex === `new-${index}` ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {service.subtitle}
                    </p>
                    
                    {/* Title with arrow */}
                    <div className="flex items-center">
                      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 transition-all duration-500 ${
                        hoveredIndex === `new-${index}` ? 'translate-x-0' : ''
                      }`}>
                        {/* Arrow */}
                        <span className={`inline-block transition-all duration-500 ${
                          hoveredIndex === `new-${index}` ? 'w-12 opacity-100' : 'w-0 opacity-0'
                        }`}>
                          <svg className="w-8 h-8 inline mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {/* Circle with letter */}
                  <div className="relative flex-shrink-0">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
                      {/* Background circle */}
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle
                          cx="50%"
                          cy="50%"
                          r="48%"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="2"
                        />
                        {/* Colored progress arc */}
                        <circle
                          cx="50%"
                          cy="50%"
                          r="48%"
                          fill="none"
                          stroke={
                            service.color === 'orange' ? '#f97316' :
                            service.color === 'teal' ? '#14b8a6' :
                            '#3b82f6'
                          }
                          strokeWidth="2"
                          strokeDasharray={`${hoveredIndex === `new-${index}` ? 340 : 85} 340`}
                          strokeLinecap="round"
                          className="transition-all duration-700 ease-out"
                        />
                      </svg>
                      {/* Letter */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`text-2xl sm:text-3xl lg:text-4xl font-light transition-colors duration-500 ${
                          service.color === 'orange' ? 'text-orange-500' :
                          service.color === 'teal' ? 'text-teal-500' :
                          'text-blue-500'
                        }`}>
                          {service.letter}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;