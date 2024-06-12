exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('news').del()
      .then(function () {
        // Inserts seed entries
        return knex('news').insert([
          {
            title: 'Відкриття нового лабораторного корпусу',
            summary: 'На факультеті комп\'ютерних наук відкрито новий лабораторний корпус для досліджень у галузі штучного інтелекту.',
            image: 'https://electronics.lnu.edu.ua/wp-content/uploads/DSC_0749-scaled.jpg'
          },
          {
            title: 'Конференція з питань кібербезпеки',
            summary: 'Факультет комп\'ютерних наук організовує міжнародну конференцію з питань кібербезпеки.',
            image: 'https://optim.tildacdn.one/tild3435-3736-4133-b336-616133636539/-/resize/606x/-/format/webp/photo_53326541885612.jpg'
          },
          {
            title: 'Семінар з технологій блокчейн',
            summary: 'Запрошуємо на семінар з технологій блокчейн, який відбудеться на факультеті комп\'ютерних наук.',
            image: 'https://istu.edu.ua/wp-content/uploads/2021/05/photo_2021-10-29_21-59-27-1170x658.jpg'
          },
          {
            title: 'День відкритих дверей на факультеті',
            summary: 'Факультет комп\'ютерних наук запрошує абітурієнтів на день відкритих дверей.',
            image: 'https://nupp.edu.ua/uploads/files/0/main/images/panorama-nupp.jpg'
          },
          {
            title: 'Воркшоп з програмування на Python',
            summary: 'Запрошуємо на воркшоп з програмування на Python для початківців та досвідчених розробників.',
            image: 'https://s.dou.ua/CACHE/images/img/announces/318362252_10167461389890038_4456027002429044323_n_jkxxPoP/45cb23d7033ca1293ad7b4fe62bf389a.jpg'
          },
          {
            title: 'Хакатон для студентів',
            summary: 'Факультет комп\'ютерних наук проводить хакатон для студентів з призовим фондом у 10000 гривень.',
            image: 'https://s.dou.ua/CACHE/images/img/announces/5_t7njeYn/fc047a22d7e3b5db9bba49a88221402c.jpg'
          },
          {
            title: 'Лекція від Google',
            summary: 'Представники Google прочитають лекцію про новітні технології в області штучного інтелекту.',
            image: 'https://cdn4.suspilne.media/images/7e79ade1b7c9927a.png'
          },
          {
            title: 'Курс з розробки мобільних додатків',
            summary: 'Новий курс з розробки мобільних додатків для платформ iOS та Android на факультеті комп\'ютерних наук.',
            image: 'https://dan-it.com.ua/wp-content/uploads/2020/09/2.jpg'
          },
          {
            title: 'Міжнародна конференція з Big Data',
            summary: 'Факультет організовує міжнародну конференцію з аналізу великих даних (Big Data).',
            image: 'https://lh5.googleusercontent.com/proxy/I2VeHZCKFJ1kLPlDVAs4Dagml0RfQPotbPKgJbCx2BTsz3YZoz4T2MkRFF6ccuQMJe5ilfy0HEzeMDcv5aUqUZMBoh6rk2nZoaBtVMAH1UrwCQ'
          },
          {
            title: 'Студентські наукові досягнення',
            summary: 'Студенти факультету комп\'ютерних наук виграли престижну наукову премію за розробку нових алгоритмів машинного навчання.',
            image: 'https://s3.eu-central-1.amazonaws.com/ucu.edu.ua/wp-content/uploads/2023/05/2022_09_13-Oriyentatsijna-sesiya-2022-035-scaled.jpg'
          },
          {
            title: 'Інтенсив з веб-розробки',
            summary: 'Факультет проводить інтенсивний курс з веб-розробки для всіх охочих.',
            image: 'https://nikos-ltv.lviv.ua/images/courses/1/mn_web-intensyvnyy-kurs-web-rozrobky-305.png'
          },
          {
            title: 'Партнерство з Microsoft',
            summary: 'Факультет комп\'ютерних наук уклав угоду про співпрацю з компанією Microsoft.',
            image: 'https://www.csc.knu.ua/filer/canonical/1501012402/208/'
          },
          {
            title: 'Лабораторія інноваційних технологій',
            summary: 'Відкрито нову лабораторію інноваційних технологій, де студенти зможуть працювати над стартапами.',
            image: 'https://lnu.edu.ua/wp-content/uploads/2023/06/2_20230620_121117_0001.png'
          },
          {
            title: 'Стипендії для талановитих студентів',
            summary: 'Факультет комп\'ютерних наук оголосив конкурс на отримання стипендій для талановитих студентів.',
            image: 'https://lpnu.ua/sites/default/files/styles/fotorama_1200x800/public/2023/12/1/news/25592/stypendia.jpg?itok=rRirHj0o'
          },
          {
            title: 'Майстер-клас з UX/UI дизайну',
            summary: 'Запрошуємо на майстер-клас з UX/UI дизайну від провідних фахівців галузі.',
            image: 'https://cdn.cases.media/image/original/course-ui-design-basics-cover.jpg'
          }
        ]);
      });
};
