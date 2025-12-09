import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-obsidian relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-red-700"></div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase">О Королеве</h2>
          </div>
          
          <div className="space-y-6 text-gray-400 font-sans text-lg leading-relaxed text-justify">
            <p>
              <strong className="text-white">Дейнерис Бурерожденная</strong> из дома Таргариенов, первая своего имени, Неопалимая, Королева Миэрина, Королева Андалов, Ройнаров и Первых Людей, Кхалиси Великого Травяного Моря, Разрушительница Оков и Матерь Драконов.
            </p>
            <p>
              Её история началась в бурю на Драконьем Камне. Всю жизнь она бежала от убийц, скитаясь по Вольным Городам. Её продали как вещь кхалу Дрого, но она нашла в себе силы подчинить обстоятельства своей воле. Из робкой девочки она переродилась в лидера, способного поднять восстание против всего мира.
            </p>
            <p>
              Её путь к трону вымощен не только победами, но и пеплом. Она верила, что её судьба — сломать «колесо» тирании, которое давило богатых и бедных одинаково. «Я не обычная женщина. Мои мечты сбываются наяву», — говорила она. И её мечты стали реальностью для миллионов освобожденных рабов и кошмаром для рабовладельцев.
            </p>
            <p>
              Она — последняя надежда династии, кровь древней Валирии, живое воплощение огня. Но огонь может как согреть, так и испепелить.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 border-t border-gray-800 pt-8 mt-8">
            <div>
              <span className="block text-red-700 text-sm uppercase tracking-wider mb-2">Родовой Замок</span>
              <span className="text-white font-serif text-xl">Драконий Камень</span>
            </div>
            <div>
              <span className="block text-red-700 text-sm uppercase tracking-wider mb-2">Оружие</span>
              <span className="text-white font-serif text-xl">Пламя Драконов</span>
            </div>
          </div>
        </div>

        {/* Image / Visual */}
        <div className="order-1 md:order-2 relative group">
          <div className="absolute inset-0 bg-red-900/20 transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 border border-red-900/30"></div>
          <div className="relative overflow-hidden aspect-[3/4] border border-gray-800 shadow-2xl shadow-black">
            <img 
              src="images/koroleva.jpg" 
              alt="Daenerys Aesthetic" 
              className="w-full h-full object-cover filter sepia-[0.3] contrast-125 brightness-75 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
            
            {/* Quote on image */}
            <div className="absolute bottom-8 left-8 right-8 text-center">
              <p className="font-serif italic text-white/80 text-lg border-l-2 border-red-600 pl-4 text-left">
                "Змея, дракон... не имеет значения, что это, если оно лежит у тебя под ногами."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;