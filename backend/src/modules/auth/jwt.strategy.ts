import { Injectable,UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    const secret = configService.get<string>('JWT_SECRET', 'f1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3');
    console.log('🔹 JWT_SECRET from ConfigService:', secret); // Log the secret
    if (!secret) {
        throw new Error('JWT_SECRET is not defined in the environment variables'); // 🚨 Throw error if undefined
    }  
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret as string, // ✅ Correct usage
    });
  }

  async validate(payload: any) {
    console.log('🔹 JWT Payload:', payload); // Log the payload
    if (!payload) {
      throw new UnauthorizedException('Invalid token'); // 🔥 Check if payload is null
    }
    return { userId: payload.userId, email: payload.email, role: payload.role };
  }
}
