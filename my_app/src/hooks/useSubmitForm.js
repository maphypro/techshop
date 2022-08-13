import axios from "axios";

function useSubmitForm (url, data) {

    return ( function () {
        axios.post(url, data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    } )
}

export default useSubmitForm