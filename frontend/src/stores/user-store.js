import { defineStore } from "pinia";
import axios from "axios";
import { v4 as uuidv4 } from  'uuid';
import { collection, doc, setDoc, query, where, onSnapshot, deleteDoc, getDoc } from "firebase/firestore";
import moment from 'moment';

import { db } from "../firebase-init";

axios.defaults.baseURL = "http://localhost:5001/";

export const useUserStore = defineStore("user", {
  state: () => ({
    sub: "",
    email: "",
    picture: "",
    firstName: "",
    lastName: "",
    emails: [],
  }),

  actions: {
   // get email from email address
    getEmailByEmailAddress() {
      const q = query(
        collection(db, "emails"),
        where("toEmail", "==", this.email)
      );

      onSnapshot(q, (querySnapshot) => {

        const resultArray = [];

        querySnapshot.forEach((doc) => {
          resultArray.push({
            id: doc.id,
            firstName: doc.data().firstName,
            lastName: doc.data().lastName,
            fromEmail: doc.data().fromEmail,
            toEmail: doc.data().toEmail,
            subject: doc.data().subject,
            picture: doc.data().picture,
            body: doc.data().body,
            hasViewed: doc.data().hasViewed,
            createdAt: doc.data().createdAt,
          });
        });

        this.emails = resultArray;

      }, (error) => {
        console.log(error);
      });
    },

    // send email to email address
    async sendEmail(data) {
      try {
           await setDoc(doc(db, "emails/" + uuidv4()), {
             firstName: this.firstName,
             lastName: this.lastName,
             fromEmail: this.email,
             toEmail: data.toEmail,
             subject: data.subject,
             picture: this.picture,
             body: data.body,
             hasViewed: false,
             createdAt: moment().format('LLL')
           });
      } catch (error) {
        console.log(error);
      }
    },

    // get email by ID
    async getEmailById(id) {
      const docRef = doc(db, "emails", id);
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return {
          id: id,
          firstName: docSnap.data().firstName,
          lastName: docSnap.data().lastName,
          fromEmail: docSnap.data().fromEmail,
          toEmail: docSnap.data().toEmail,
          subject: docSnap.data().subject,
          picture: docSnap.data().picture,
          body: docSnap.data().body,
          hasViewed: docSnap.data().hasViewed,
          createdAt: docSnap.data().createdAt,
        };
      } else {
        console.log('No such document!')
      }
    },

    // delete a email
    async deleteEmail(id) {
      try {
        await deleteDoc(doc(db, "emails", id))
      } catch (error) {
        console.log(error);
      }
    },

    // get user information form data
    async getUserDetailsFromGoogle(data) {
      let res = await axios.post("api/google-login", {
        token: data.credential,
      });

      this.sub = res.data.sub;
      this.picture = res.data.picture;
      this.email = res.data.email;
      this.firstName = res.data.given_name;
      this.lastName = res.data.family_name;
    },

    clearUser() {
      this.sub = null;
      this.picture = null;
      this.email = null;
      this.firstName = null;
      this.lastName = null;
    },
  },
  persist: true,
});
