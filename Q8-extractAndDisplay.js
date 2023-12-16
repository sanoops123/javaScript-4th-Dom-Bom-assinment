

function displayEvent(){
   
   const protocol ="page URL's protocol is "  + window.location.protocol  ; 
   const host = "host name is " + window.location.hostname ;
   const searchParams = new URLSearchParams(window.location.search);

   console.log(protocol  ,host, searchParams);
}
