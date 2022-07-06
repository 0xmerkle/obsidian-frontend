import Ably from "ably/promises";

export default async function handler(req: any, res: any) {
    const client = new Ably.Realtime(process.env.NEXT_APP_ABLY_API_KEY as string);
    const tokenRequestData = await client.auth.createTokenRequest({ clientId: 'ably-nextjs-demo' });
    res.status(200).json(tokenRequestData);
};