// checkbox
const check = document.getElementById('check');
const isCheck = () => {
    if (check.checked) {
        alert("You've checked this");
    } else {
        return false;
    }
}
check.onclick = isCheck;

