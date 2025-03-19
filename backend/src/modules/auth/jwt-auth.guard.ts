import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  
  canActivate(context: ExecutionContext) {
    console.log("enter in the jwt-auth-gaurd.ts file");
    console.log("the context is",context);
    const request = context.switchToHttp().getRequest();
    console.log('🔹 Incoming Request Headers:', request.headers);
    console.log('🔹 Authorization Header:', request.headers.authorization);
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
    console.log("the user is",user);
    if (err || !user) {
      console.log("the err is",err);
      console.log("the user is",user);
      throw new UnauthorizedException('Invalid or missing token');
    }
    return user;
  }
}
