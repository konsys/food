import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
        },
        {
            userId: 3,
            username: 'ergerge',
            password: 'egegerger'
        }
    ];

    async findOne(username: string, password: string): Promise<User | undefined> {
        return Promise.resolve(this.users.find(user => user.username === username && user.password === password));
    }
}