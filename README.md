### Next.js App Dir 실습 예제

몇 가지 설정이 필요합니다.

### .env

```
DATABASE_URL="mongodb://admin:password@localhost:27017/db?authSource=admin"
```

### Docker - mongodb & prisma

```
docker-compose up -d --build
npx prisma db push
npx prisma generate
```

### FE 실행

```
yarn dev
```
