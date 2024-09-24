export async function GET() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    return new Response(JSON.stringify({ number: randomNumber }), {
      headers: { 'Content-Type': 'application/json' }
    });
}
