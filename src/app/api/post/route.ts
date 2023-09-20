import { NextResponse } from 'next/server';
import prisma from '@/libs/prisma';

export async function GET() {
  const res = await prisma?.posts.findMany({});

  if (!res) {
    return NextResponse.error();
  }

  return new Promise((resolve) => setTimeout(resolve, 3000)).then(() =>
    NextResponse.json(res)
  );
}

export async function POST(request: Request) {
  const body = await request.json();
  const { title, content, author } = body;

  if (!title || !content || !author) {
    return NextResponse.error();
  }

  const post = await prisma?.posts.create({
    data: { title, content, author },
  });

  return NextResponse.json(post);
}
