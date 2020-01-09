import { Pictures } from './Pictures';

export class User {

    constructor(
        _id: string = '',
        email: string, 
        name: string,
        password: string,
        role: string,
        gender: 'male' | 'female',
        birth: Date,
        description: string,
        pictures: Array<Pictures>
    ) {
        this._id = _id,
        this.email = email;
        this.name = name;
        this.password = password;
        this.role = role;
        this.gender = gender;
        this.birth = birth;
        this.description = description;
        this.pictures = pictures;
    };

    // Dev constructor
    /*constructor(
        email: string, 
        name: string,
        description: string,
        pictures: Array<Pictures>
    ) {
        this.email = email;
        this.name = name;
        this.description = description;
        this.pictures = pictures
    };*/

    _id: string,
    email: string;
    name: string;
    password: string;
    role: string;
    gender: 'male' | 'female';
    birth: Date;
    description: string;
    pictures: Array<Pictures>;
};
