import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Don't Be Shy!</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon" />

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                <a
                  href="mailto:asadbekmmjnv@gmail.com"
                  target="_blank"
                  className="contact__button"
                  rel="noopener noreferrer"
                >
                  asadbekmmjnv@gmail.com
                </a>
              </span>
            </div>
            <div className="contact__card">
              <i className="bx bxl-telegram contact__card-icon" />

              <h3 className="contact__card-title">Telegram</h3>
              <span className="contact__card-data">
                <a
                  href="https://t.me/smktff17"
                  target="_blank"
                  className="contact__button"
                  rel="noopener noreferrer"
                >
                  +998-(97)-777-41-58
                </a>
              </span>
            </div>
            <div className="contact__card">
              <i className="uil uil-location-point contact__card-icon" />
              <h3 className="contact__card-title">Location</h3>
              <span className="contact__card-data">Uzbekistan, Tashkent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
