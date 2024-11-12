const mongoose = require('mongoose');
const Priority = require('./models/Priority');
const Location = require('./models/Location');
const HelpRequest=require('./models/HelpRequest');
const Volunteer=require('./models/Volunteer');

const priorities = [
    { _id:1,priorityName: 'low' },
    {_id:2, priorityName: 'medium' },
    { _id:3,priorityName: 'high' },
    { _id:4,priorityName: 'critical' }
];

const locations = [
    {_id:1, name: 'City Center' },
    {_id:2, name: 'North District' },
    { _id:3,name: 'South District' },
    { _id:4,name: 'East District' },
    { _id:5,name: 'West District' }
];
const helpRequest=[
    {
        "_id": 3,
        "location_id": 1,
        "problemDescription": "Broken elevator",
        "contactPhoneNumber": "123-456-1256",
        "status": "waiting",
        "numberOfPeopleStuck": 1,
        "priority_id": 1,
        "volunteer_id": 1
    },
    {
        "_id": 4,
        "location_id": 2,
        "problemDescription": "Power outage",
        "contactPhoneNumber": "987-147-4589",
        "status": "processing",
        "numberOfPeopleStuck": 2,
        "priority_id": 2,
        "volunteer_id": 2
    }
];
const volunteers=[
    { "_id": 1, "firstName": "John", "lastName": "Doe", "phone": "1234567890", "internshipTypes": ["Marketing"] },
    { "_id": 2, "firstName": "Jane", "lastName": "Smith", "phone": "9876543210", "internshipTypes": ["Engineering"] },
    { "_id": 3, "firstName": "Alice", "lastName": "Johnson", "phone": "5551234567", "internshipTypes": ["Design"] },
    { "_id": 4, "firstName": "Bob", "lastName": "Brown", "phone": "7778889999", "internshipTypes": ["Finance"] },
    { "_id": 5, "firstName": "Emily", "lastName": "Davis", "phone": "4445556666", "internshipTypes": ["HR"] },
    { "_id": 6, "firstName": "Michael", "lastName": "Wilson", "phone": "2223334444", "internshipTypes": ["IT"] },
    { "_id": 7, "firstName": "Sarah", "lastName": "Martinez", "phone": "6667778888", "internshipTypes": ["Sales"] },
    { "_id": 8, "firstName": "David", "lastName": "Garcia", "phone": "9990001111", "internshipTypes": ["Operations"] },
    { "_id": 9, "firstName": "Olivia", "lastName": "Lopez", "phone": "3334445555", "internshipTypes": ["Research"] },
    { "_id": 10, "firstName": "James", "lastName": "Perez", "phone": "1112223333", "internshipTypes": ["Management"] },
    { "_id": 11, "firstName": "Sophia", "lastName": "Rodriguez", "phone": "8889990000", "internshipTypes": ["Consulting"] },
    { "_id": 12, "firstName": "William", "lastName": "Hernandez", "phone": "2221113333", "internshipTypes": ["Development"] },
    { "_id": 13, "firstName": "Ava", "lastName": "Gonzalez", "phone": "7778889999", "internshipTypes": ["Training"] },
    { "_id": 14, "firstName": "Ethan", "lastName": "Torres", "phone": "5556667777", "internshipTypes": ["Support"] },
    { "_id": 15, "firstName": "Mia", "lastName": "Flores", "phone": "9998887777", "internshipTypes": ["Quality Assurance"] }
];



const insertInitialData = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/volunteerCoordination', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });


        await Volunteer.insertMany(volunteers);


        console.log('Initial data inserted');
        process.exit();
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

insertInitialData();
