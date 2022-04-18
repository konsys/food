import { Injectable } from '@nestjs/common';
import { uuid } from 'src/common/random';
import { User } from 'src/entities/user.entity';



@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            email: 'john',
            password: 'changeme',
            name: 'Ivan',
            registrationCode: '',
            roles: [],
            uuid: uuid()
        },
        {
            email: 'maria',
            password: 'changeme',
            name: 'Ivan',
            registrationCode: '',
            roles: [],
            uuid: uuid()
        },
        {
            email: 'ergerge',
            password: 'egegerger',
            name: 'Ivan',
            registrationCode: '',
            roles: [],
            uuid: uuid()
        }
    ];

    async findOne(email: string, password: string): Promise<User | undefined> {
        return Promise.resolve(this.users.find(user => user.email === email && user.password === password));
    }
}