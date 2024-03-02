import { NextRequest } from "next/server"

export async function GET(){
    return new Response("We are now in Details folder.")
}

export async function POST(request: Request){
    const details = await request.json();
    const batch = details.batch;

    return new Response(`You sent me: ${batch}`)
}