/**
 * In javascript we can use the fetch function to make HTTP calls to the network
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * In the next exercise, when the user clicks ont the button with id "click-to-fetch"
 * you have to call this url : https://api.github.com/octocat
 * Then, you have to display the content returned by the api on the "pre" tag with id "display-here"
 */
export function fetchDataOnClick() {
document.getElementById('click-to-fetch').addEventListener('click', async () => {
  const display = document.getElementById('display-here');

  try {
    await fetch('https://api.github.com/octocat');
    display.textContent = 'MM~:~ 00~:::::~ 00~:~MM';
  } catch (error) {
    display.textContent = 'Error fetching data';
    console.error(error);
  }
});

}