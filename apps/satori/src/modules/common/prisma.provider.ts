import { Injectable, Scope } from 'graphql-modules'
import { PrismaClient } from '@prisma/client'
 
@Injectable({
  scope: Scope.Singleton,
})
export class PrismaProvider extends PrismaClient{}


