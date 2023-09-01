document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('sentiment-form');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const text = document.getElementById('text').value;

    fetch('/sentiment/analyze_sentiment/?text=' + encodeURIComponent(text))
      .then((response) => response.json())
      .then((data) => {
        resultDiv.innerHTML = 'Sentiment: ' + data.sentiment;
      });
  });
});
