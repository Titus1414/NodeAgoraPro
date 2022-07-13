const express = require("express");
const Agora = require("agora-access-token");

const app = express();
app.use(express.json());




app.get("/", (req, res) => res.send("Agora Auth Token Server"));


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
    // Remove by Requirment no need of uid, 
    res.send({ token });
  });


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Agora Auth Token Server listening at Port ${port}`));