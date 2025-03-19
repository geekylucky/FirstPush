const addbtn = document.querySelector("#addbtn");
const main = document.querySelector("#main");

const saveNotes = () => {
  const notes = document.querySelectorAll(".note textarea");
  const data = [];
  notes.forEach((note) => {
    data.push(note.value);
  });

  localStorage.setItem("notes", JSON.stringify(data));
};

const addnote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
        <div class="tool">
            <i class="save fa-solid fa-floppy-disk" style="color: #63E6BE;"></i>
            <i class="trash fa-solid fa-trash" style="color: #63E6BE;"></i>
        </div>
        <textarea>${text}</textarea>
    `;

  note.querySelector(".trash").addEventListener("click", function () {
    note.remove();
    saveNotes();
  });

  note.querySelector(".save").addEventListener("click", function () {
    saveNotes();
  });

  note.querySelector("textarea").addEventListener("input", saveNotes);

  main.appendChild(note);
};

const loadNotes = () => {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  savedNotes.forEach((note) => {
    addnote(note);
  });
};

addbtn.addEventListener("click", function () {
  addnote();
});

loadNotes();
