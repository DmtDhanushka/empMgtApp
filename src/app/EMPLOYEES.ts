import {Employee} from './employee';

const EMPLOYEES: Employee[] = [
  {
    empId: 7,
    name: 'Patrick Almedha',
    email: 'pal@gmail.com',
    dob: '1999-03-12',
    owningSkills: [
      {
        skillId: 5,
        label: '.NETx     '
      }
    ]
  },
  {
    empId: 8,
    name: 'Sunil Gamage',
    email: 'suG@yahoo.com',
    dob: '1988-03-28',
    owningSkills: [
      {
        skillId: 7,
        label: 'Python    '
      },
      {
        skillId: 8,
        label: 'C++       '
      }
    ]
  },
  {
    empId: 2,
    name: 'Mahinda Raja',
    email: 'mr@gmail.com',
    dob: '1977-04-22',
    owningSkills: []
  },
  {
    empId: 11,
    name: 'Alex Noy',
    email: 'alex@gmail.com',
    dob: '2008-04-22',
    owningSkills: [
      {
        skillId: 7,
        label: 'Python    '
      },
      {
        skillId: 8,
        label: 'C++       '
      }
    ]
  },
  {
    empId: 6,
    name: 'John Doe Rothsten',
    email: 'jdR@gmail.com',
    dob: '1877-04-22',
    owningSkills: [
      {
        skillId: 6,
        label: 'Java      '
      },
      {
        skillId: 5,
        label: '.NETx     '
      }
    ]
  },
  {
    empId: 4,
    name: 'Bobby Singher',
    email: 'bbs@gmail.com',
    dob: '1967-04-22',
    owningSkills: [
      {
        skillId: 8,
        label: 'C++       '
      }
    ]
  }
];

export {EMPLOYEES};

