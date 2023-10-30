import songsData from './songsData.js';
import {reactive} from 'vue';
const all_songs = songsData;
const user = reactive({
    firstName: "name",
    lastName: "surname",
    studentCode: "CODE1234",
    loggedInAt: [],
    loggedInStatus: false
});
function logIn(){
    user.loggedInStatus = true;
    user.firstName = "Gustavs";
    user.lastName = "Cers";
    user.studentCode = "IT21024";
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timestamp = `${day}.${month}.${year} - ${hours}:${minutes}`;
    user.loggedInAt.push(timestamp);
};
function resetValues(){
    user.firstName = "name";
    user.lastName = "surname";
    user.studentCode = "CODE1234";
    user.loggedInAt = [];
    user.loggedInStatus = false;
};

export { all_songs, user, logIn, resetValues };