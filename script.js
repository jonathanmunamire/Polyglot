const hamburger = document.querySelector('.hamburger');
const Menu = document.querySelector('.menu');


hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    Menu.classList.toggle('active');
});

document.querySelectorAll(".menu-item").forEach(n => n.
    addEventListener('click', () => {
        hamburger.classList.remove('active');
        Menu.classList.remove('active');
    }));

// Storing data in JS

const Teachers = [{
    teacherImage: 'IMG/download.png',
    teacherName: 'Sofia Ivanov',
    teacherDomain: 'Her, Russian Teacher',
    teacherAbout: 'Sofia Mikhailov Ivanov was born in Moscow, Russia. After Spending all her life there, She decided to take that step and learn languages! She is a teacher of Russian and available for services such as Online Tutoring',
}, {
    teacherImage: 'IMG/images (3).jpeg',
    teacherName: 'Paul Blanchet',
    teacherDomain: 'Him, French and English Teacher',
    teacherAbout: 'Paul Umukunda Blanchet was born in Mont-Pellier, France. Having a double-Nationality of France and Rwanda, He has mastery in English, French and Kinyarwanda and is available for Class Tutoring and Online Tutoring in French English and Kinyarwanda',
}, {
    teacherImage: 'IMG/images (2).png',
    teacherName: 'Javier Hernandez',
    teacherDomain: 'Him, Spanish Teacher',
    teacherAbout: 'Javier Hernandez was born in Sevilla, Spain. After spending years in USA, he was able to be fluent in English and obtain a language degree. He is available to teach Spanish to english learners Online and in class programs',
}, {
    teacherImage: 'IMG/download (1).png',
    teacherName: 'Xiu Huang',
    teacherDomain: 'Her, Chinese and Mandarin Teacher',
    teacherAbout: 'Xiu Huang was born in Beijing, China. She Spent her whole life with children in Orphanages all over the world and she does know how to teach children who need to learn more languages. She teaches Chinese and Mandarin to children and she is available for Children Program',
}, {
    teacherImage: 'IMG/images (4).jpeg',
    teacherName: 'Joao Cruz',
    teacherDomain: 'Him, Portuguese, Spanish and Spanish Teacher',
    teacherAbout: 'Joao dela Cruz is a Portuguese teacher. Born in Sao Paulo, Brazil and Spending most of his life in America, He has mastered languages such as English and Spanish and is available to teach in Weekly Home and Personal Programs',
}, {
    teacherImage: 'IMG/images.png',
    teacherName: 'Lena Schmidt',
    teacherDomain: 'Her, German and Japanese Teacher',
    teacherAbout: 'Lena Akira Schmidt, born from German and Japanese Parents, was born in Koln, Germany and has mastered both her mother languages! She has studied languages and is Certified in English. Available in Children and Personal Programs',
},
];

const card = document.querySelector('.teacher-cards');

Teachers.forEach((cards) => {
    const div = document.createElement('div');
    div.innerHTML += `
  <div class="card2">
  <img src="${cards.teacherImage}">
  <div>
      <h3>${cards.teacherName}</h3>
      <h5>${cards.teacherDomain}</h5>
      <p>${cards.teacherAbout}</p>
  </div>
  </div>
  `;
    card.append(div);
});