document.addEventListener("turbolinks:load", function () {
  const submit = document.querySelector(".submit_test");
  if (!submit) {
    return false;
  }
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    const formData = new FormData(document.querySelector(".test_form"));
    const url = "/tests";
    const post_options = {
      method: "POST",
      body: formData,
      headers: {
        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content
      }
    };

    fetch(url, post_options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((item) => {
        const list = document.getElementById("list");
        const HTML = `
          <div>${item.test.name}</div>
        `;
        list.insertAdjacentHTML("beforeend", HTML);
        document.querySelector(".input_name").value = "";
      })
      .catch((error) => {
        console.error("Fetch error: ", error);
      });
  });
});
