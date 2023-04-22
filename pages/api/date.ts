function handler(
  req: { method: string },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { date: string }): void; new (): any };
    };
  }
) {
  if (req.method !== "GET") return;
  let date = new Date();
  res.status(200).json({ date: date.toISOString() });
}
export default handler;
