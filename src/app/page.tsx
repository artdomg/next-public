export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center w-full">
      {/* Navigation */}
      <header className="w-full max-w-6xl mx-auto px-6 py-8 flex justify-between items-center z-10 relative">
        <div className="font-serif text-2xl font-semibold tracking-widest text-charcoal">
          J&amp;J
        </div>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-charcoal/80">
          <a href="#our-story" className="hover:text-gold transition-colors">Our Story</a>
          <a href="#details" className="hover:text-gold transition-colors">Details</a>
          <a href="#registry" className="hover:text-gold transition-colors">Registry</a>
        </nav>
        <a href="#rsvp" className="px-6 py-2 bg-charcoal text-sand text-sm uppercase tracking-widest hover:bg-gold transition-all duration-300">
          RSVP
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center pt-24 pb-48 px-6 text-center overflow-hidden">
        {/* Soft decorative blur circles */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10 animate-pulse" />
        <div className="absolute top-40 left-1/4 w-md h-112 bg-sand/80 shadow-[0_0_100px_rgba(212,175,55,0.1)] rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10" />

        <div className="mb-4 text-sm font-sans tracking-[0.3em] text-gold uppercase">
          Save the Date
        </div>
        <h1 className="font-serif text-7xl md:text-9xl mb-6 text-charcoal font-medium leading-tight">
          Jane &amp; John
        </h1>
        <p className="text-xl md:text-2xl font-serif italic text-charcoal/70 mb-12">
          Are getting married
        </p>
        <div className="flex flex-col md:flex-row items-center gap-6 font-sans tracking-widest uppercase text-sm border-y border-charcoal/10 py-6 px-12">
          <span>September 15, 2026</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-gold"></span>
          <span>Tuscany, Italy</span>
        </div>
      </section>

      {/* Story Section */}
      <section id="our-story" className="w-full bg-rose/30 py-32 px-6 flex flex-col items-center text-center">
        <div className="max-w-3xl border border-charcoal/10 bg-sand p-12 md:p-24 shadow-sm relative group hover:shadow-md transition-shadow duration-500">
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-gold/50 group-hover:scale-110 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-gold/50 group-hover:scale-110 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
          
          <h2 className="font-serif text-4xl mb-8 text-charcoal">Our Beautiful Journey</h2>
          <p className="font-sans leading-relaxed text-charcoal/80 mb-6 relative z-10">
            It all started with a chance encounter at a local coffee shop. Six years, countless adventures, and endless cups of coffee later, here we are—ready to embark on the most beautiful journey of our lives.
          </p>
          <p className="font-sans leading-relaxed text-charcoal/80 relative z-10">
            We cannot wait to celebrate our love surrounded by our favorite people in the world. Get ready for an evening of joyous tears, hearty laughs, and dancing under the stars.
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section id="details" className="w-full py-32 px-6 flex flex-col items-center">
        <h2 className="font-serif text-4xl mb-16 text-center text-charcoal">The Details</h2>
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl w-full">
          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="w-16 h-16 rounded-full bg-rose flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-500 shadow-sm">
              <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
            </div>
            <h3 className="font-serif text-2xl mb-2 group-hover:text-gold transition-colors duration-300">The Ceremony</h3>
            <p className="font-sans text-sm tracking-widest uppercase text-gold mb-4">3:00 PM</p>
            <p className="font-sans text-charcoal/80">
              Villa di Fiori<br/>
              Via delle Rose 14<br/>
              Florence, Italy
            </p>
          </div>
          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="w-16 h-16 rounded-full bg-rose flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-500 shadow-sm">
              <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" /></svg>
            </div>
            <h3 className="font-serif text-2xl mb-2 group-hover:text-gold transition-colors duration-300">The Reception</h3>
            <p className="font-sans text-sm tracking-widest uppercase text-gold mb-4">5:30 PM Onwards</p>
            <p className="font-sans text-charcoal/80">
              The Grand Terrace<br/>
              Dinner, Drinks &amp; Dancing<br/>
              Black Tie Optional
            </p>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="w-full bg-charcoal text-sand py-32 px-6 flex flex-col items-center text-center">
        <h2 className="font-serif text-5xl mb-6 text-rose">RSVP</h2>
        <p className="font-sans text-sand/80 mb-12 font-light tracking-wide">Kindly reply by August 1st, 2026</p>
        
        <form className="w-full max-w-lg flex flex-col gap-6 text-left group">
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="name" className="font-sans text-xs uppercase tracking-widest text-sand/60">Full Name(s)</label>
            <input type="text" id="name" className="bg-transparent border-b border-sand/30 py-2 focus:outline-none focus:border-gold transition-colors text-sand placeholder:text-sand/30" placeholder="Mr. &amp; Mrs. Smith" />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="attending" className="font-sans text-xs uppercase tracking-widest text-sand/60">Will you attend?</label>
            <select id="attending" className="bg-transparent border-b border-sand/30 py-2 focus:outline-none focus:border-gold transition-colors text-sand appearance-none">
              <option value="" className="text-charcoal bg-sand">Please select...</option>
              <option value="yes" className="text-charcoal bg-sand">Joyfully accept</option>
              <option value="no" className="text-charcoal bg-sand">Regretfully decline</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="dietary" className="font-sans text-xs uppercase tracking-widest text-sand/60">Dietary Requirements</label>
            <input type="text" id="dietary" className="bg-transparent border-b border-sand/30 py-2 focus:outline-none focus:border-gold transition-colors text-sand placeholder:text-sand/30" placeholder="E.g. Vegetarian, Gluten-free" />
          </div>
          
          <button type="button" className="mt-12 w-full bg-gold text-charcoal py-4 uppercase tracking-[0.2em] font-medium text-sm hover:bg-gold-light hover:scale-[1.02] transition-all duration-300">
            Send RSVP
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 flex flex-col items-center bg-zinc-950 text-sand/40">
        <div className="font-serif text-xl mb-4 text-sand/60 hover:text-gold transition-colors cursor-default">Jane &amp; John</div>
        <p className="text-xs uppercase tracking-widest">15 . 09 . 2026</p>
      </footer>
    </div>
  );
}
