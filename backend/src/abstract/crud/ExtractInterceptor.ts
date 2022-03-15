import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { instanceToInstance } from 'class-transformer';

@Injectable()
export class ExtractInterceptor<T> implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

        return next.handle().pipe(map(data => {
            console.log(234234234, data);
            return instanceToInstance<T>(data)
        }));
    }
}