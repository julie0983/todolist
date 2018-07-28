import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const todos=[
            { id:1, matter: 'Things to do', done: 'DONE!!'},
            { id:2, matter: 'Edit the lists', done: 'DONE!!'},
            { id:3, matter: 'Hello', done: 'DONE!!'}
            
        ];
        return {todos};
        
    }
}