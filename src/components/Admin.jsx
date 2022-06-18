const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
 
exports.addAdminRole = functions.https.onCall((data, context) => {
 // получить пользователя и добавить пользовательское требование администратора
 return admin.auth().getUserByEmail(data.email).then(user => {
 return admin.auth().setCustomUserClaims(user.uid, {
 admin: true
 })
 }).then(() => {
 return {
 message: `Успешно! ${data.email} вы назначены администратором.`
 }
 }).catch(err => {
 return err;
 });
});