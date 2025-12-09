import React, { useState } from 'react';

const Contact: React.FC = () => {
  // ВАШ Formspree ID (замените строку ниже)
  const FORMSPREE_ID = 'xgvglppw'; 

  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Проверка ID
    if (!FORMSPREE_ID || FORMSPREE_ID === 'YOUR_FORMSPREE_ID') {
      alert("❌ Пожалуйста, добавьте ваш Formspree ID в код (строка 5)");
      console.error('Formspree ID не найден. Замените FORMSPREE_ID на ваш ID.');
      return;
    }

    setStatus('submitting');

    try {
      // Formspree ожидает FormData или x-www-form-urlencoded
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      
      // Дополнительные параметры для Formspree
      formDataToSend.append('_subject', `Новое послание от ${formData.name}`);
      formDataToSend.append('_language', 'ru');
      
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Автоматически сбросить статус через 5 секунд
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const errorData = await response.json();
        console.error('Formspree error:', errorData);
        setStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ 
      ...prev, 
      [e.target.name]: e.target.value 
    }));
  };

  return (
    <section id="contact" className="py-24 bg-neutral-900 relative border-t border-gray-900">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-white uppercase mb-4">
            Присягнуть на верность
          </h2>
          <p className="text-gray-500 font-sans">
            Отправьте ворона королеве
          </p>
        </div>

        {/* Сообщение об успехе (отдельный блок) */}
        {status === 'success' && (
          <div className="mb-8 p-6 border border-green-800 bg-green-900/20 rounded-lg">
            <div className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <p className="text-green-400 font-sans">
                ✅ Ваше послание отправлено! Королева получит его в ближайшее время.
              </p>
            </div>
            <p className="text-gray-400 text-sm mt-2 text-center">
              Огонь и кровь! 🐉
            </p>
          </div>
        )}

        {/* Сообщение об ошибке */}
        {status === 'error' && (
          <div className="mb-8 p-6 border border-red-800 bg-red-900/20 rounded-lg">
            <div className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              <p className="text-red-400 font-sans">
                ❌ Ошибка отправки. Проверьте подключение и попробуйте снова.
              </p>
            </div>
          </div>
        )}

        {/* Форма (скрывается при успехе) */}
        {status !== 'success' && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  required
                  disabled={status === 'submitting'}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ваше Имя"
                  className="w-full bg-black border border-gray-800 p-4 text-white focus:outline-none focus:border-red-700 transition-colors placeholder-gray-600 font-sans disabled:opacity-50"
                />
              </div>
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  required
                  disabled={status === 'submitting'}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ваш Email"
                  className="w-full bg-black border border-gray-800 p-4 text-white focus:outline-none focus:border-red-700 transition-colors placeholder-gray-600 font-sans disabled:opacity-50"
                />
              </div>
            </div>
            
            <div className="relative group">
              <textarea
                name="message"
                required
                disabled={status === 'submitting'}
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Ваше Послание королеве Дайенерис..."
                className="w-full bg-black border border-gray-800 p-4 text-white focus:outline-none focus:border-red-700 transition-colors placeholder-gray-600 font-sans resize-none disabled:opacity-50"
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="group relative px-12 py-4 bg-transparent border border-red-800 overflow-hidden cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
              >
                <div className={`absolute inset-0 w-full h-full bg-gradient-to-t from-red-900 to-red-800 transform scale-y-0 origin-bottom transition-transform duration-500 ease-out ${status !== 'submitting' ? 'group-hover:scale-y-100' : ''}`}>
                </div>
                
                <span className="relative z-10 font-serif uppercase tracking-[0.2em] group-hover:tracking-[0.25em] transition-all duration-300 font-bold text-red-500 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                  {status === 'submitting' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Отправка...
                    </span>
                  ) : 'Отправить послание'}
                </span>
              </button>
              
              <p className="mt-4 text-gray-500 text-sm font-sans">
                Вы получите копию письма на указанный email
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;