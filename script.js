document.addEventListener("DOMContentLoaded", function () {
    const joinNowButton = document.querySelector(".join-now");

    joinNowButton.addEventListener("click", function () {
        const isJoined = true;

        if (isJoined) {
            alert("You've joined already");
        } else {
            joinNowButton.textContent = "Join now (Already a Member)";
        }
    });
});