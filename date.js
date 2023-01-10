exports.getDate = function (){

let today= new Date();

    let options= {
        weekday: "long",
        month: "long",
        day: "numeric"
    }

    return today.toLocaleDateString("en-us", options);

}    