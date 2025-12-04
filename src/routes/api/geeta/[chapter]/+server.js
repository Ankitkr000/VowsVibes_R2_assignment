export async function GET({ params }) {
    const { chapter } = params;

    const url = `https://sanskrit.ie/api/geeta.php?q=${chapter}`;

    const response = await fetch(url);

    const data = await response.json();

    return new Response(JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    });
}
