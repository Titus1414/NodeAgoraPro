app.post("/rtctoken", (req, res) => {
    const appID = "b098e55ec18d4835a3951771570a5046";
    const appCertificate = "1ed54484129e4ca0a5b73e2344766dbf";
    const expirationTimeInSeconds = 3600;
    const uid = Math.floor(Math.random() * 100000);
    const role = req.body.isPublisher ? Agora.RtcRole.PUBLISHER : Agora.RtcRole.SUBSCRIBER;
    const channel = req.body.channel;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const expirationTimestamp = currentTimestamp + expirationTimeInSeconds;
  
    const token = Agora.RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channel, uid, role, expirationTimestamp);
    res.send({ uid, token });
  });