const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

// Hide comments by default
commentWrapper.style.display = 'none';

showHideBtn.onclick = function () {
  const isHidden = commentWrapper.style.display === 'none';

  if (isHidden) {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
    showHideBtn.setAttribute('aria-expanded', 'true');
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
    showHideBtn.setAttribute('aria-expanded', 'false');
  }
};

// Make Show/Hide Button Keyboard Accessible
showHideBtn.setAttribute('tabindex', '0');
showHideBtn.setAttribute('role', 'button');

showHideBtn.addEventListener('keydown', function (event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    showHideBtn.click();
  }
});


const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

// Prevent page refresh on submit
form.onsubmit = function (e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const nameValue = nameField.value.trim();
  const commentValue = commentField.value.trim();

  if (!nameValue || !commentValue) {
    alert('Please fill in both your name and comment.');
    return;
  }

  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);
  list.appendChild(listItem);

  nameField.value = '';
  commentField.value = '';
}
