function handler(
  req: any,
  res: {
    status: (arg0: number) => {
      json: { (arg0: { text: string }): any; new (): any };
    };
  }
) {
  if (req.method === "POST") {
    return res.status(200).json({ text: "POST Done" });
  }
  if (req.method === "GET") {
    return res.status(200).json({ text: "GET Done" });
  }
}

export default handler;
