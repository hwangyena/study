import { NextResponse } from "next/server";

export async function GET(){
  const res = prisma?.posts.findMany();

  if(!res){
    return NextResponse.error();
  }

  return NextResponse.json(res);
}

export async function POST(request: Request){
  const body = await request.json();
  const {title, content, author} = body;

  if(!title || !content || !author){
    return NextResponse.error();
  }

  const post = await prisma?.posts.create({
    data: {title, content,author}
  })

  return NextResponse.json(post);
}