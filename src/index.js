// // 1. IMPORT the MoEngage Web SDK
// import moengage from "@moengage/web-sdk";

// // 2. INITIALIZE the SDK
// // >>> REPLACE 'XXXXXXXXXXXXXXXX' with your actual MoEngage App ID <<<
// const MOENGAGE_APP_ID = 'ILHCGEFZ04ELWYTI71A01OW2'; 

// moengage.initialize({
//     app_id: MOENGAGE_APP_ID,
//     cluster: 'DC_3',
//      sw_path: "public/serviceworker.js",
//      enableSPA: true
// });
// 	Moengage.call_web_push();
// const loginButton=document.getElementById("loginButton")
// loginButton.addEventListener("click",()=>{
//     const email=document.getElementById("email").value;
//     	Moengage.identifyUser(email); 
// })
// index.js (or similar)

// 1. IMPORT the MoEngage Web SDK
// The imported instance is named 'moengage' (lowercase)
import moengage from "@moengage/web-sdk";

// 2. INITIALIZE the SDK
const MOENGAGE_APP_ID = 'ILHCGEFZ04ELWYTI71A01OW2'; 

moengage.initialize({
    app_id: MOENGAGE_APP_ID,
    cluster: 'DC_3',
    // Specify the path where your bundler/server puts the SW file
    sw_path: "/serviceworker.js", 
    enableSPA: true
});

// 3. Initiate Web Push prompt
// MUST use the imported instance: moengage (lowercase)
moengage.call_web_push(); 

// 4. Handle Login/Identify
const loginButton = document.getElementById("loginButton");

if (loginButton) {
    loginButton.addEventListener("click", () => {
        const email = document.getElementById("email").value;
        
        // Use the imported instance (moengage) and the correct identification method.
        // moengage.identifyUser(ID) is often aliased or deprecated.
        // The most common way to identify by email is moengage.add_email():
        moengage.add_email(email); 
        
        // Alternatively, use moengage.setUniqueId(ID) for the main user ID:
        // moengage.setUniqueId(email); 

        console.log(`MoEngage: Identifying user with email: ${email}`);
    });
}