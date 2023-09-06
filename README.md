This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

# Proje Hakkında

## Backend
- Prisma, mongodb ve next13 backendi kullanılarak basit bir backend yazılmıştır ve anasayfadaki ilgili kartların datası database sorguları ile gelmektedir. Tüm komponentler server komponentidir ve next13 ile gelen komponent içinde sorgu atma olayı kullanılmıştır.
- NFT ile Creator ilişkilendirilmiştir
```
 model Nft {
  id          String  @id @default(auto()) @map("_id") @db.ObjectId
  title       String
  description String
  creator     Creator @relation(fields: [creatorId], references: [id])
  creatorId   String  @map("creatorId") @db.ObjectId
  price       Float
}

model Creator {
  id   String @id @default(auto()) @map("_id") @db.ObjectId
  name String
  nfts Nft[]
}     

```

### APIs

#### Yeni NFT oluştur

```
  POST REQUEST > http://localhost:3000/api/new-nft

  {
    "title":"The Big mac",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar sollicitudin dui. ",
    "creatorId": "64f76482a41912ccee22de20",
    "price": 1.5
  }

  RESPONSE > {
    "status": "success",
    "message": "NFT oluşturuldu",
    "data": {
        "nft": {
            "id": "64f787f7492408e4de14ee04",
            "title": "The Big mac",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar sollicitudin dui. ",
            "creatorId": "64f76482a41912ccee22de20",
            "price": 1.5
        }
    }
}

```
#### Yeni Creator oluştur

```
  POST REQUEST > http://localhost:3000/api/creator/new-creator

  {
    "name": "Roger Waters"
  }

  RESPONSE > {
    "status": "success",
    "message": "creator oluşturuldu",
    "data": {
        "creator": {
            "id": "64f76482a41912ccee22de20",
            "name": "Roger Waters"
        }
    }
}
```


## Styling

- Tailwindcss kullanıldı fakat bazı componentlerdeki elemanlar modulercss ile yazıldı.
- Case kısa olduğu için herhangi bir değişken vs tanımlamadım fakat tanımlanabilir. (bu hali ile biraz kod tekrarı var)

### Next12 veya React kullanılabilirdi ben son zamanlarda next13 yazdığım için bu versiyon ile yapmayı tercih ettim.
