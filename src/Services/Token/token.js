const tokenname="";
const gettoken=()=>{
    const token=(localStorage.getItem("tokens"));
    return token;
    //const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODc2MDAzMjcsImV4cCI6MTY4NzY1NDMyN30.K5BooXkUINJVLWcm3y8BuwddFe4BEpNMBFHTpK365BM'

}
const getuserdetails = () => {
    var token = gettoken();
    console.log(token)
    var userData;
    if (gettoken() != null) {
     
      userData = JSON.parse(window.atob(token.split(".")[1]));
      return userData;

    } else {
      return null;
    }
  };
const removetoken=()=>{
   return localStorage.removeItem("tokens");
}
export {gettoken,getuserdetails,removetoken};