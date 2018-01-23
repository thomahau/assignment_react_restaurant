import faker from 'faker';

const data = {
  welcome: {
    title: "Welcome to Joe's Diner",
    text: faker.lorem.paragraphs()
  },
  reservation: {
    title: 'Reservations',
    phone: faker.phone.phoneNumberFormat(),
    email: faker.internet.email(),
    formList: [
      {
        slot: '18:00',
        size: '1 person'
      },
      {
        slot: '18:30',
        size: '2 people'
      },
      {
        slot: '19:00',
        size: '3 people'
      },
      {
        slot: '19:30',
        size: '4 people'
      },
      {
        slot: '20:00',
        size: '5 people'
      },
      {
        slot: '20:30',
        size: '6 people'
      },
      {
        slot: '21:00',
        size: '7 people'
      },
      {
        slot: '21:30',
        size: '8 people'
      },
      {
        slot: '22:00',
        size: '9 people'
      }
    ]
  },
  menuItems: []
};

for (let i = 0; i < 8; i++) {
  data.menuItems.push({
    name: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    price: faker.commerce.price()
  });
}

export default data;
