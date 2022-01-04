export default function handler(req: any, res: any) {
	console.log('Request: ', req);
	res.status(200).json({ status: 'ok' });
}
