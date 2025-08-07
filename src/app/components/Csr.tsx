"use client";

export default function Csr() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-gray-800 mb-6">
          <span className="bg-[#e6f0ef] text-[#c28b2c] px-2 mr-2">CSR</span>
          <span className="text-black">Corporate Social Responsibility</span>
        </h2>

        <p className="text-gray-700 leading-relaxed text-base font-open-sans md:text-justify mb-4">
          At the heart of our CSR philosophy lies the idea of giving back and
          contributing to society. We firmly believe that responsible business
          practices can create a ripple effect, fostering sustainable
          development and benefiting all stakeholders involved.
        </p>

        <p className="text-gray-700 leading-relaxed text-base font-open-sans md:text-justify mb-4">
          We are dedicated to supporting the communities in which we operate. By
          actively engaging with local organizations, charities, and educational
          institutions, we strive to create opportunities and empower
          individuals to lead better lives.
        </p>

        <p className="text-gray-700 leading-relaxed text-base font-open-sans md:text-justify mb-4">
          Recognizing the importance of preserving the environment, we are
          committed to reducing our ecological footprint. Through sustainable
          practices, responsible waste management, and energy-efficient
          initiatives, we aim to protect our planet for future generations.
        </p>

        <p className="text-gray-700 leading-relaxed text-base font-open-sans md:text-justify mb-8">
          Our employees are at the core of our success, and their well-being is
          paramount to us. We promote a safe and inclusive workplace that
          fosters professional growth, work-life balance, and a sense of
          belonging.
        </p>

        {/* Optional visual highlight section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="border p-4 rounded-lg bg-[#e6f0ef] text-[#c28b2c] font-semibold">
            Community Empowerment
          </div>
          <div className="border p-4 rounded-lg bg-[#e6f0ef] text-[#c28b2c] font-semibold">
            Environmental Stewardship
          </div>
          <div className="border p-4 rounded-lg bg-[#e6f0ef] text-[#c28b2c] font-semibold">
            Employee Well-being
          </div>
          <div className="border p-4 rounded-lg bg-[#e6f0ef] text-[#c28b2c] font-semibold">
            Ethical Practices
          </div>
        </div>
      </div>
    </section>
  );
}
