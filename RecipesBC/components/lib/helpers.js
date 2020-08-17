import * as firebase from "firebase/App";

class Helpers {
    static setReview(reviewId, review){
        let reviewPath = "/reviews/"+reviewId+"/review"
        return firebase.database().ref(reviewPath).set(review)
    }     
    static getReview(reviewId, callback){
        let reviewPath = "/reviews/"+reviewId+"/review"
        firebase.database().ref(reviewPath).on('value', (snapshot) => {
            let review = ''
            if(snapshot.val()){
                review = snapshot.val()
            }
            callback(review)
        })
    }     
}
module.exports = Helpers