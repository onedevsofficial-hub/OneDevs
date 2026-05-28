import admin from "firebase-admin"

import serviceAccount from "/etc/secrets/onedevsos-66dcd-firebase-adminsdk-fbsvc-2348ae4cdc.json" with { type: 'json'}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)

});

const db = admin.firestore(); // Para Firestore
export default db