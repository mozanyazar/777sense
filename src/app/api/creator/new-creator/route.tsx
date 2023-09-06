import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const db = new PrismaClient()

export async function POST(req: NextRequest) {
   try {
      const body = await req.json()

      const creator = await db.creator.create({
         data: {
            ...body,
         },
      })

      return NextResponse.json({
         status: 'success',
         message: 'creator oluşturuldu',
         data: {
            creator,
         },
      })
   } catch (error) {
      return NextResponse.json({
         status: 'fail',
         message: 'beklenmedik hata',
      })
   }
}
