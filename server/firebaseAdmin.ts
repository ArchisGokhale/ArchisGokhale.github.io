import admin from "firebase-admin";

// Initialize Firebase Admin SDK
// In production, you'll use a service account key file
// For now, we'll use the REST API approach through the client SDK

// Export Firestore reference
export async function getFirestoreDb() {
  // Check if already initialized
  if (admin.apps.length === 0) {
    // Initialize with a service account (you'll need to create this in Firebase console)
    try {
      admin.initializeApp({
        projectId: process.env.VITE_FIREBASE_PROJECT_ID,
      });
    } catch (error) {
      console.warn("Firebase Admin already initialized or error:", error);
    }
  }

  return admin.firestore();
}

export async function saveContactSubmission(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: Date;
}) {
  try {
    const db = await getFirestoreDb();
    
    const docRef = await db.collection("contact_submissions").add({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      timestamp: admin.firestore.Timestamp.fromDate(data.timestamp),
      read: false,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    console.log("Form submission saved to Firestore:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error saving to Firestore:", error);
    throw error;
  }
}
