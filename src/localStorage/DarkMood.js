

function DarkMood(Mood){
  localStorage.setItem("DarkMood", (Mood == 'light'? 'dark': 'light'));
}
export default DarkMood
