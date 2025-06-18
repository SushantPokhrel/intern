export const useTheme = ()=>{
 const theme = JSON.parse(localStorage.getItem("theme")) 
 if(!theme) {
    
    localStorage.setItem("theme","dark")
 }
 return theme;
}