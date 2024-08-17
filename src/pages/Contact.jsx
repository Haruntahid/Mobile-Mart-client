function Contact() {
  return (
    <div className="container mx-auto mt-8 lg:mt-16">
      <p className="text-3xl lg:text-5xl text-center font-bold mb-6">
        Contact Us
      </p>
      <div className="flex items-center lg:flex-row flex-col  justify-center gap-8 lg:gap-20 mt-8">
        <img src="https://i.ibb.co/RhR7Vt9/user-interface.png" alt="" />
        <div className="text-center lg:text-left">
          <div>
            <p className="font-semibold text-2xl mb-6">Contact Information</p>
            <p>
              For user review, suggestions, and complaints: <br />
              <span className="text-blue-500">info@mobilemart.co</span>
            </p>
          </div>
          <div className="divider"></div>
          <div>
            <p>
              For Partnerships and advertisements:
              <br />
              <span className="text-blue-500">advertise@mobilemart.co</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
