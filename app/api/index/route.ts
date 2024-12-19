import { NextResponse } from 'next/server';

export async function GET() {

  const data = {"organization": "Student Cyber Games"};

  return NextResponse.json(data);
}