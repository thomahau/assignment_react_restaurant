import faker from 'faker';

const data = {
  welcome: {
    title: "Welcome to Joe's Diner",
    text: faker.lorem.paragraphs()
  },
  reservation: {
    title: 'Reservations',
    phone: faker.phone.phoneNumberFormat(),
    email: faker.internet.email()
  }
};

export default data;
