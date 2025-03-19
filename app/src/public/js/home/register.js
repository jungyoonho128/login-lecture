"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  psword = document.querySelector("#password"),
  confirmPsword = document.querySelector("#confirm-psword"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
  if (!id.value) return alert("아이디를 입력해주세요");
  if (psword.value !== confirmPsword.value)
    return alert("비밀번호가 일치하지 않습니다");

  const req = {
    id: id.value,
    name: name.value,
    password: psword.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json()) // <- ✅ 수정 필요
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("회원가입중 에러발생"), err);
    });
}
